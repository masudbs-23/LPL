import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CURRENT_SEASON, teams } from "@/data/lpl";

const schema = z.object({
  name: z.string().min(2, "নাম কমপক্ষে ২ অক্ষর হতে হবে"),
  phone: z.string().min(11, "সঠিক ফোন নম্বর দিন"),
  ward: z.string().min(1, "ওয়ার্ড নির্বাচন করুন"),
  team: z.string().optional(),
  role: z.string().min(1, "ভূমিকা নির্বাচন করুন"),
});

type FormData = z.infer<typeof schema>;

type RegistrationDialogProps = {
  trigger: ReactNode;
};

export function RegistrationDialog({ trigger }: RegistrationDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Registration:", data);
    setSubmitted(true);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md border-border bg-card">
        {submitted ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-live" />
            <h3 className="display mt-4 text-2xl text-foreground">নিবন্ধন সফল!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Season {CURRENT_SEASON.number}-এ আপনার তথ্য জমা হয়েছে। শীঘ্রই আমরা যোগাযোগ করব।
            </p>
            <Button className="mt-6 rounded-full" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="display text-2xl tracking-wide">
                Join Season {CURRENT_SEASON.number}
              </DialogTitle>
              <DialogDescription>
                Losmonpur Premier League — {CURRENT_SEASON.overs} overs · {CURRENT_SEASON.teams} wards
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="আপনার নাম" {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="01XXXXXXXXX" {...register("phone")} />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Ward</Label>
                <Select onValueChange={(v) => setValue("ward", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="ওয়ার্ড নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 9 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        Ward {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.ward && (
                  <p className="text-xs text-destructive">{errors.ward.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Preferred Team (Optional)</Label>
                <Select onValueChange={(v) => setValue("team", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="দল নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select onValueChange={(v) => setValue("role", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Player / Fan / Volunteer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="player">Player</SelectItem>
                    <SelectItem value="fan">Fan / Supporter</SelectItem>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-xs text-destructive">{errors.role.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
