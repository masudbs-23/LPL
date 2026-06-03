import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import { PageHero } from "@/components/lpl/PageHero";
import { MatchCard } from "@/components/lpl/MatchCard";
import { SeasonSelector } from "@/components/lpl/SeasonSelector";
import { ScrollReveal } from "@/components/lpl/ScrollReveal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { teams } from "@/data/lpl";
import { getSeason, getSeasonData } from "@/data/seasons";

export const Route = createFileRoute("/results/")({
  component: ResultsPage,
  head: ({ search }) => {
    const season = getSeason(search.season);
    return {
      meta: [
        {
          title: season
            ? `Results — Season ${season.number} | LPL`
            : "Match Results — LPL",
        },
        { name: "description", content: "Match results by season — Losmonpur Premier League." },
      ],
    };
  },
});

function ResultsPage() {
  const { season: seasonId } = Route.useSearch({ from: "/results" });
  const [teamFilter, setTeamFilter] = useState<string>("all");
  const season = getSeason(seasonId);
  const { results } = getSeasonData(seasonId);

  const filtered = useMemo(() => {
    if (teamFilter === "all") return results;
    return results.filter((m) => m.teamA === teamFilter || m.teamB === teamFilter);
  }, [results, teamFilter]);

  return (
    <>
      <PageHero
        title="Match Results"
        subtitle={
          season
            ? `Season ${season.number} (${season.year}) — ${filtered.length} completed matches`
            : "Completed matches"
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <ScrollReveal>
          <SeasonSelector seasonId={seasonId} className="mb-8" />
        </ScrollReveal>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Filter by team:
          </div>
          <Select value={teamFilter} onValueChange={setTeamFilter}>
            <SelectTrigger className="w-64 bg-card">
              <SelectValue placeholder="All Teams" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teams</SelectItem>
              {teams.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            No completed matches for this season yet.
          </p>
        ) : (
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              Tap any match for full scorecard — batting, bowling, fall of wickets (where available).
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m) => (
                <MatchCard key={m.id} match={m} showResult linkToScorecard />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
