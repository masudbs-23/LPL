import { ScrollReveal } from "./ScrollReveal";

type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/30 py-14 md:py-20">
      <div className="hero-sky absolute inset-0 opacity-60" aria-hidden />
      <div className="hero-aurora absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
            LPL · Season 7
          </span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1 className="display text-5xl tracking-wide text-foreground md:text-7xl">{title}</h1>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal delay={160}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
