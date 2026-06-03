import { createFileRoute } from "@tanstack/react-router";
import { LplLayout } from "@/components/lpl/LplLayout";
import { PageHero } from "@/components/lpl/PageHero";
import {
  CURRENT_SEASON,
  battingStats,
  bowlingStats,
  getTeamName,
} from "@/data/lpl";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Player Stats — LPL Losmonpur Premier League" },
      { name: "description", content: "Top batting and bowling statistics for LPL Season 7." },
    ],
  }),
  component: StatsPage,
});

function StatsPage() {
  return (
    <LplLayout>
      <PageHero
        title="Player Statistics"
        subtitle={`Season ${CURRENT_SEASON.number} — top performers with bat and ball`}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <StatsTable
            title="Top Run Scorers"
            icon="🏏"
            headers={["#", "Player", "Team", "Runs", "Details"]}
            rows={battingStats.map((s) => [
              s.rank,
              s.name,
              getTeamName(s.teamId),
              s.value,
              s.detail,
            ])}
          />
          <StatsTable
            title="Top Wicket Takers"
            icon="🎯"
            headers={["#", "Player", "Team", "Wkts", "Details"]}
            rows={bowlingStats.map((s) => [
              s.rank,
              s.name,
              getTeamName(s.teamId),
              s.value,
              s.detail,
            ])}
          />
        </div>
      </section>
    </LplLayout>
  );
}

function StatsTable({
  title,
  icon,
  headers,
  rows,
}: {
  title: string;
  icon: string;
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-card"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="border-b border-border bg-muted/20 px-5 py-4">
        <h2 className="display flex items-center gap-2 text-2xl text-foreground">
          <span>{icon}</span> {title}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
              {headers.map((h) => (
                <th key={h} className="px-5 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-border/50 transition-colors hover:bg-muted/20"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-5 py-3.5 ${
                      j === 0
                        ? "font-bold text-primary"
                        : j === 3
                          ? "display text-lg font-bold text-foreground"
                          : j === 1
                            ? "font-semibold"
                            : "text-muted-foreground"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
