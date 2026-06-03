import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import { PageHero } from "@/components/lpl/PageHero";
import { MatchCard } from "@/components/lpl/MatchCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CURRENT_SEASON, results, teams } from "@/data/lpl";

export const Route = createFileRoute("/results/")({
  head: () => ({
    meta: [
      { title: "Match Results — LPL Losmonpur Premier League" },
      { name: "description", content: "All match results from Losmonpur Premier League." },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  const [teamFilter, setTeamFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (teamFilter === "all") return results;
    return results.filter((m) => m.teamA === teamFilter || m.teamB === teamFilter);
  }, [teamFilter]);

  return (
    <>
      <PageHero
        title="Match Results"
        subtitle={`Season ${CURRENT_SEASON.number} — ${filtered.length} completed matches`}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
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
          {teamFilter !== "all" && (
            <button
              type="button"
              onClick={() => setTeamFilter("all")}
              className="text-sm text-primary hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        <p className="mb-4 text-sm text-muted-foreground">
          Tap any match to view full scorecard — batting, bowling, fall of wickets (Cricbuzz style).
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <MatchCard key={m.id} match={m} showResult linkToScorecard />
          ))}
        </div>
      </section>
    </>
  );
}
