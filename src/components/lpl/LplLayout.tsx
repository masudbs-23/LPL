import { LplHeader } from "./LplHeader";
import { LiveTicker } from "./LiveTicker";

type LplLayoutProps = {
  children: React.ReactNode;
  showTicker?: boolean;
};

export function LplLayout({ children, showTicker = true }: LplLayoutProps) {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-page)" }}>
      <LplHeader />
      {showTicker && <LiveTicker />}
      {children}
      <footer className="relative mt-8 border-t border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-10 text-sm text-muted-foreground md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
              L
            </div>
            <span>© {new Date().getFullYear()} Losmonpur Premier League</span>
          </div>
          <div className="text-xs uppercase tracking-wider">
            14 Overs · 9 Wards · One Trophy 🏆
          </div>
        </div>
      </footer>
    </div>
  );
}
