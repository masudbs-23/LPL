import { createFileRoute } from "@tanstack/react-router";
import { LplLayout } from "@/components/lpl/LplLayout";
import { PageHero } from "@/components/lpl/PageHero";
import { CURRENT_SEASON, getTeamName, standings } from "@/data/lpl";

export const Route = createFileRoute("/standings")({
  head: () => ({
    meta: [
      { title: "Standings — LPL Losmonpur Premier League" },
      { name: "description", content: "Points table and team standings for LPL Season 7." },
    ],
  }),
  component: StandingsPage,
});

function StandingsPage() {
  return (
    <LplLayout>
      <PageHero
        title="Points Table"
        subtitle={`Season ${CURRENT_SEASON.number} league standings — top 4 qualify for semi-finals`}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div
          className="overflow-x-auto rounded-xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-4">Pos</th>
                <th className="px-5 py-4">Team</th>
                <th className="px-5 py-4 text-center">Played</th>
                <th className="px-5 py-4 text-center">Won</th>
                <th className="px-5 py-4 text-center">Lost</th>
                <th className="px-5 py-4 text-center">NRR</th>
                <th className="px-5 py-4 text-center">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((s, i) => (
                <tr
                  key={s.teamId}
                  className={`border-b border-border/50 transition-colors hover:bg-muted/20 ${
                    i < 4 ? "bg-accent/5" : ""
                  }`}
                >
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                        i === 0
                          ? "bg-primary text-primary-foreground"
                          : i < 4
                            ? "bg-accent/30 text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-semibold">{getTeamName(s.teamId)}</td>
                  <td className="px-5 py-4 text-center">{s.played}</td>
                  <td className="px-5 py-4 text-center font-medium text-live">{s.won}</td>
                  <td className="px-5 py-4 text-center">{s.lost}</td>
                  <td className="px-5 py-4 text-center">
                    <span className={s.nrr >= 0 ? "text-live" : "text-destructive"}>
                      {s.nrr > 0 ? "+" : ""}
                      {s.nrr.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <span className="display text-xl text-primary">{s.points}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Top 4 teams qualify for semi-finals. NRR = Net Run Rate.
        </p>
      </section>
    </LplLayout>
  );
}
