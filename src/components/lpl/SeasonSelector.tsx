import { useNavigate } from "@tanstack/react-router";
import { History, Sparkles } from "lucide-react";
import { getSeason, getSeasonsForPicker, type SeasonInfo } from "@/data/seasons";
import { cn } from "@/lib/utils";

type SeasonSelectorProps = {
  seasonId: string;
  className?: string;
};

export function SeasonSelector({ seasonId, className }: SeasonSelectorProps) {
  const navigate = useNavigate();
  const seasons = getSeasonsForPicker();
  const active = getSeason(seasonId);

  const pick = (id: string) => {
    navigate({ search: (prev) => ({ ...prev, season: id }) });
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        <History className="h-4 w-4 text-primary" />
        Season archive — previous seasons first
      </div>
      <div className="flex flex-wrap gap-2">
        {seasons.map((s) => (
          <SeasonChip key={s.id} season={s} isActive={s.id === seasonId} onClick={() => pick(s.id)} />
        ))}
      </div>
      {active && (
        <p className="text-sm text-muted-foreground">
          {active.status === "completed" ? (
            <>
              Season {active.number} ({active.year}) — Champion:{" "}
              <span className="font-semibold text-primary">{active.champion}</span>
              {active.runnerUp && (
                <>
                  {" "}
                  · Runner-up: <span className="text-foreground">{active.runnerUp}</span>
                </>
              )}
            </>
          ) : (
            <>
              <Sparkles className="mr-1 inline h-3.5 w-3.5 text-primary" />
              Season {active.number} ({active.year}) — current season · registration open
            </>
          )}
        </p>
      )}
    </div>
  );
}

function SeasonChip({
  season,
  isActive,
  onClick,
}: {
  season: SeasonInfo;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
        isActive
          ? "border-primary bg-primary text-primary-foreground shadow-md"
          : season.status === "completed"
            ? "border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            : "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20",
      )}
    >
      S{season.number} · {season.year}
      {season.status === "current" && (
        <span className="ml-1.5 text-[10px] uppercase opacity-80">Live</span>
      )}
    </button>
  );
}
