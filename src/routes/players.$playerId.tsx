import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PlayerCareerStats } from "@/components/lpl/PlayerCareerStats";
import { ScrollReveal } from "@/components/lpl/ScrollReveal";
import { getTeam, getTeamName } from "@/data/lpl";
import { getPlayer, getRoleLabel, getLatestCareer } from "@/data/players";

export const Route = createFileRoute("/players/$playerId")({
  head: ({ params }) => {
    const player = getPlayer(params.playerId);
    return {
      meta: [{ title: player ? `${player.name} — Career | LPL` : "Player — LPL" }],
    };
  },
  component: PlayerProfilePage,
});

function PlayerProfilePage() {
  const { playerId } = Route.useParams();
  const player = getPlayer(playerId);
  const latest = player ? getLatestCareer(player) : undefined;
  const team = latest ? getTeam(latest.teamId) : undefined;

  if (!player) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="display text-4xl">Player not found</h1>
        <Link to="/players" className="mt-6 inline-block text-primary hover:underline">
          ← All Players
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/30 py-12 md:py-16">
        <div className="hero-sky absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 md:px-6">
          <Link
            to="/players"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Players
          </Link>
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-5">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-2xl font-display text-3xl font-bold text-primary-foreground shadow-lg"
                style={{ backgroundColor: team?.color }}
              >
                {player.name.charAt(0)}
              </div>
              <div>
                <h1 className="display text-5xl tracking-wide text-foreground md:text-6xl">
                  {player.name}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  {latest ? getTeamName(latest.teamId) : "—"} · {getRoleLabel(player.role)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Career across {player.careers.length} season
                  {player.careers.length !== 1 ? "s" : ""} — previous seasons listed first
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 md:px-6">
        <ScrollReveal direction="up">
          <h2 className="display mb-6 text-2xl text-foreground">Full Career</h2>
          <PlayerCareerStats player={player} />
        </ScrollReveal>
      </section>
    </>
  );
}
