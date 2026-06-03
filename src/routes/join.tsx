import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Loader2,
  Shield,
  Users,
} from "lucide-react";
import { LplLayout } from "@/components/lpl/LplLayout";
import { PageHero } from "@/components/lpl/PageHero";
import { ScrollReveal } from "@/components/lpl/ScrollReveal";
import { BKashCheckout } from "@/components/lpl/BKashCheckout";
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
import {
  CURRENT_SEASON,
  REGISTRATION_FEE,
  announcement,
  tournamentRules,
} from "@/data/lpl";
import {
  createBkashPayment,
  executeBkashPayment,
  fetchBkashToken,
  generateBkashCheckoutHtml,
} from "@/lib/bkash";

const schema = z.object({
  name: z.string().min(2, "নাম কমপক্ষে ২ অক্ষর হতে হবে"),
  phone: z.string().min(11, "সঠিক ফোন নম্বর দিন (01XXXXXXXXX)"),
  ward: z.string().min(1, "ওয়ার্ড নির্বাচন করুন"),
  team: z.string().optional(),
  role: z.string().min(2, "ভূমিকা লিখুন (যেমন: Player, Fan)"),
  agreed: z.boolean().refine((v) => v === true, {
    message: "নিয়মাবলী মেনে নিতে হবে",
  }),
});

type FormData = z.infer<typeof schema>;

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: `Join Season ${CURRENT_SEASON.number} — LPL Registration` },
      {
        name: "description",
        content: `Register for LPL Season ${CURRENT_SEASON.number}. Registration fee ৳${REGISTRATION_FEE} via bKash.`,
      },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  const [bkashReady, setBkashReady] = useState(false);
  const [initError, setInitError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [paymentID, setPaymentID] = useState<string | null>(null);
  const [checkoutHtml, setCheckoutHtml] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [bkashVisible, setBkashVisible] = useState(false);
  const [isOpeningBkash, setIsOpeningBkash] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [pendingForm, setPendingForm] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { agreed: false },
  });

  const agreed = watch("agreed");

  useEffect(() => {
    fetchBkashToken()
      .then(() => setBkashReady(true))
      .catch(() => setInitError("bKash payment system লোড হয়নি। পেজ রিফ্রেশ করুন।"));
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!bkashReady) {
      setStatusMessage("Payment system ready নয়। কিছুক্ষণ পর আবার চেষ্টা করুন।");
      return;
    }

    try {
      setStatusMessage("");
      setIsOpeningBkash(true);
      setBkashVisible(false);
      setPendingForm(data);

      const id = await createBkashPayment(REGISTRATION_FEE);
      setPaymentID(id);
      setCheckoutHtml(generateBkashCheckoutHtml(REGISTRATION_FEE, id));
      setShowPayment(true);
      // Loader stays until iframe fires onLoad (onReady)
    } catch {
      setStatusMessage("Payment তৈরি করা যায়নি। আবার চেষ্টা করুন।");
      setPendingForm(null);
      setIsOpeningBkash(false);
    }
  };

  const handlePaymentSuccess = async () => {
    if (!paymentID) return;
    try {
      setIsVerifying(true);
      setShowPayment(false);
      setBkashVisible(false);
      setIsOpeningBkash(false);
      const ok = await executeBkashPayment(paymentID);
      if (ok) {
        console.log("Registration + payment:", pendingForm, paymentID);
        setRegistrationComplete(true);
        setStatusMessage("");
      } else {
        setStatusMessage("Payment verify হয়নি। সাপোর্টে যোগাযোগ করুন।");
      }
    } catch {
      setStatusMessage("Payment verify হয়নি। সাপোর্টে যোগাযোগ করুন।");
    } finally {
      setIsVerifying(false);
    }
  };

  const closePayment = () => {
    setShowPayment(false);
    setBkashVisible(false);
    setIsOpeningBkash(false);
    setStatusMessage("Payment বাতিল করা হয়েছে।");
  };

  const handleBkashError = (msg: string) => {
    setShowPayment(false);
    setBkashVisible(false);
    setIsOpeningBkash(false);
    setStatusMessage(msg);
  };

  const handleBkashReady = () => {
    setIsOpeningBkash(false);
    setBkashVisible(true);
  };

  if (registrationComplete) {
    return (
      <LplLayout showTicker={false}>
        <div className="mx-auto max-w-lg px-4 py-24 text-center md:px-6">
          <CheckCircle2 className="mx-auto h-20 w-20 text-live" />
          <h1 className="display mt-6 text-4xl text-foreground">নিবন্ধন সফল!</h1>
          <p className="mt-4 text-muted-foreground">
            Season {CURRENT_SEASON.number}-এ আপনার নিবন্ধন ও ৳{REGISTRATION_FEE.toLocaleString("en-BD")}{" "}
            bKash payment সম্পন্ন হয়েছে। শীঘ্রই আমরা যোগাযোগ করব।
          </p>
          <Button className="mt-8 rounded-full" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </LplLayout>
    );
  }

  return (
    <LplLayout showTicker={false}>
      <PageHero
        title={`Join Season ${CURRENT_SEASON.number}`}
        subtitle={`নিবন্ধন ফি ৳${REGISTRATION_FEE.toLocaleString("en-BD")} — bKash-এ পেমেন্ট করতে হবে`}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
        <ScrollReveal direction="scale">
        <div className="glass-card mb-10 flex flex-wrap items-center gap-4 rounded-2xl border-primary/30 p-6">
          <CircleDollarSign className="h-10 w-10 shrink-0 text-primary" />
          <div>
            <p className="display text-2xl text-primary">
              Registration Fee: ৳{REGISTRATION_FEE.toLocaleString("en-BD")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              ফর্ম submit করলে সরাসরি bKash checkout খুলবে।
            </p>
          </div>
          {!bkashReady && !initError && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              bKash connecting...
            </div>
          )}
          {initError && <p className="text-sm text-destructive">{initError}</p>}
        </div>
        </ScrollReveal>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="display text-2xl text-foreground">টুর্নামেন্ট নিয়মাবলী</h2>
          </div>
          <div className="space-y-4">
            {tournamentRules.map((rule, i) => (
              <ScrollReveal key={i} delay={i * 80} direction="up">
              <div className="glass-card rounded-2xl p-5">
                <h3 className="flex items-center gap-2 font-semibold text-foreground">
                  <Shield className="h-4 w-4 text-primary" />
                  {rule.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{rule.body}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            নিবন্ধন শেষ: {announcement.deadline} · {CURRENT_SEASON.overs} overs ·{" "}
            {CURRENT_SEASON.teams} wards
          </p>
        </section>

        <ScrollReveal direction="up">
        <section className="glass-card rounded-2xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="display text-2xl text-foreground">নিবন্ধন ফর্ম</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="আপনার পূর্ণ নাম" {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">bKash / Phone Number *</Label>
                <Input id="phone" placeholder="01XXXXXXXXX" {...register("phone")} />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Ward *</Label>
                <Select onValueChange={(v) => setValue("ward", v, { shouldValidate: true })}>
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
                <Label htmlFor="team">আপনার দলের নাম (Optional)</Label>
                <Input
                  id="team"
                  placeholder="দলের নাম লিখুন — যেমন: Ward 4 Tigers"
                  {...register("team")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Input
                  id="role"
                  placeholder="ভূমিকা লিখুন — যেমন: Player, Batsman, Fan"
                  {...register("role")}
                />
                {errors.role && (
                  <p className="text-xs text-destructive">{errors.role.message}</p>
                )}
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-muted/20 p-4">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-border accent-primary"
                {...register("agreed")}
              />
              <span className="text-sm text-muted-foreground">
                আমি উপরের টুর্নামেন্ট নিয়মাবলী পড়েছি এবং মেনে নিয়েছি। নিবন্ধন ফি{" "}
                <strong className="text-primary">৳{REGISTRATION_FEE.toLocaleString("en-BD")}</strong>{" "}
                bKash-এ পরিশোধ করতে সম্মত।
              </span>
            </label>
            {errors.agreed && (
              <p className="text-xs text-destructive">{errors.agreed.message}</p>
            )}

            {statusMessage && (
              <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {statusMessage}
              </p>
            )}

            <Button
              type="submit"
              disabled={!bkashReady || isOpeningBkash || isVerifying || !agreed}
              className="w-full rounded-full bg-primary py-6 text-base font-semibold"
            >
              {isOpeningBkash ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  bKash খোলা হচ্ছে...
                </>
              ) : isVerifying ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Payment verify হচ্ছে...
                </>
              ) : (
                `Submit & Pay ৳${REGISTRATION_FEE.toLocaleString("en-BD")} via bKash`
              )}
            </Button>
          </form>
        </section>
        </ScrollReveal>
      </div>

      {showPayment && checkoutHtml && (
        <BKashCheckout
          html={checkoutHtml}
          visible={bkashVisible}
          onReady={handleBkashReady}
          onClose={closePayment}
          onSuccess={handlePaymentSuccess}
          onError={handleBkashError}
        />
      )}
    </LplLayout>
  );
}
