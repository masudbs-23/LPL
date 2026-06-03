import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  linkTo?: string;
  linkLabel?: string;
  accent?: string;
};

export function SectionHeader({
  title,
  subtitle,
  linkTo,
  linkLabel = "View all",
  accent,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="mb-2 flex items-center gap-3">
          <span
            className="h-px w-10 bg-gradient-to-r from-primary to-transparent"
            aria-hidden
          />
          {accent && (
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {accent}
            </span>
          )}
        </div>
        <h2 className="display text-4xl tracking-wide text-foreground md:text-5xl">{title}</h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-base text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="group flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:border-primary/60 hover:bg-primary/20"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </ScrollReveal>
  );
}
