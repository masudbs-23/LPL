import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CURRENT_SEASON } from "@/data/lpl";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/results", label: "Results" },
  { to: "/standings", label: "Standings" },
  { to: "/stats", label: "Stats" },
  { to: "/videos", label: "Videos" },
] as const;

export function LplHeader() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-0" aria-hidden />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isSticky
            ? "border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
          <Link to="/" className="group flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-display text-xl font-bold text-primary-foreground shadow-md transition-transform group-hover:scale-105">
              L
            </div>
            <div className="leading-tight">
              <div className="display text-lg tracking-wider text-foreground">LPL</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Losmonpur Premier League
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-accent/20 hover:text-foreground"
                activeProps={{
                  className:
                    "rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-accent/30 text-primary",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="hidden rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-md hover:bg-primary/90 sm:inline-flex"
              asChild
            >
              <Link to="/join">Join Season {CURRENT_SEASON.number}</Link>
            </Button>
            <button
              type="button"
              className="rounded-md p-2 text-muted-foreground hover:bg-accent/20 hover:text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="border-t border-border/60 bg-background/95 px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:bg-accent/20 hover:text-foreground"
                  activeProps={{
                    className:
                      "rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wider bg-accent/30 text-primary",
                  }}
                >
                  {label}
                </Link>
              ))}
              <Button className="mt-2 w-full rounded-full bg-primary font-semibold" asChild>
                <Link to="/join" onClick={() => setMobileOpen(false)}>
                  Join Season {CURRENT_SEASON.number}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
