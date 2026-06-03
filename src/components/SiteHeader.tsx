import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { t } from "@/i18n/ui";

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const labels = t(locale);

  // When the header starts sticking to the top, enable background + blur.
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // sentinel is out of view => header is sticky
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-0" aria-hidden />
      <header
        className={`sticky top-0 z-40  transition-colors ${
          isSticky ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"
        }`}
        style={{
          backgroundImage: isSticky ? "var(--gradient-hero)" : "none",
        }}
      >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold display">
            Q
          </div>
          <div className="leading-tight">
            <div className="display text-base font-semibold">Interview Prep</div>
            <div className="text-xs text-muted-foreground">{labels.subtitle}</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {(
            [
              ["sql", "SQL"],
              ["nosql", "NoSQL"],
              ["nodejs", "Node.js"],
              ["react", "React"],
            ] as const
          ).map(([slug, label]) => (
            <Link
              key={slug}
              to="/topic/$slug"
              params={{ slug }}
              className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeProps={{ className: "px-3 py-1.5 rounded-md bg-accent text-foreground" }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div
          className="flex shrink-0 rounded-lg border border-border p-0.5 text-xs font-medium"
          role="group"
          aria-label="Language"
        >
          <button
            type="button"
            onClick={() => setLocale("bn")}
            className={`rounded-md px-2.5 py-1 transition-colors ${
              locale === "bn"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {labels.langBn}
          </button>
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`rounded-md px-2.5 py-1 transition-colors ${
              locale === "en"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {labels.langEn}
          </button>
        </div>
      </div>
      </header>
    </>
  );
}
