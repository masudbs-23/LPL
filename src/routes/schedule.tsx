import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import { LplLayout } from "@/components/lpl/LplLayout";
import { PageHero } from "@/components/lpl/PageHero";
import { MatchCard } from "@/components/lpl/MatchCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CURRENT_SEASON, schedule, teams } from "@/data/lpl";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — LPL Losmonpur Premier League" },
      { name: "description", content: "Full match schedule for LPL Season 7 with team filter." },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const [teamFilter, setTeamFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (teamFilter === "all") return schedule;
    return schedule.filter((m) => m.teamA === teamFilter || m.teamB === teamFilter);
  }, [teamFilter]);

  return (
    <LplLayout>
      <PageHero
        title="Match Schedule"
        subtitle={`Season ${CURRENT_SEASON.number} — ${CURRENT_SEASON.overs} overs · ${filtered.length} matches`}
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

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">No matches found for this team.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        )}
      </section>
    </LplLayout>
  );
}
