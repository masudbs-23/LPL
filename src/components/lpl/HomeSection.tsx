import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HomeSectionProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "grass" | "mesh";
  id?: string;
};

export function HomeSection({
  children,
  className,
  variant = "default",
  id,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 md:py-20",
        variant === "default" && "section-base",
        variant === "elevated" && "section-elevated",
        variant === "grass" && "section-grass",
        variant === "mesh" && "section-mesh",
        className,
      )}
    >
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  );
}
