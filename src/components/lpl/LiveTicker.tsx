import { tickerItems } from "@/data/lpl";

export function LiveTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-b border-grass/30 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20">
      <div className="mx-auto flex max-w-7xl items-center">
        <div className="flex shrink-0 items-center gap-2 border-r border-border/40 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-live">Live</span>
        </div>
        <div className="relative flex-1 overflow-hidden py-2">
          <div className="ticker-track flex whitespace-nowrap">
            {items.map((item, i) => (
              <span
                key={i}
                className="mx-8 inline-flex items-center text-sm text-foreground/90"
              >
                {item}
                <span className="mx-8 text-muted-foreground">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
