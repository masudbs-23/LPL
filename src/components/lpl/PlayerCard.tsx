import { Link } from "@tanstack/react-router";
import { getTeam, getTeamName } from "@/data/lpl";
import type { Player } from "@/data/players";
import { getLatestCareer, getPlayerPhotoUrl } from "@/data/players";

type PlayerCardProps = {
  player: Player;
};

const CARD_HEIGHT = "h-[220px]";

export function PlayerCard({ player }: PlayerCardProps) {
  const career = getLatestCareer(player);
  const team = career ? getTeam(career.teamId) : undefined;
  const teamName = career ? getTeamName(career.teamId) : "—";
  const photoUrl = getPlayerPhotoUrl(player, team?.color);

  return (
    <Link
      to="/players/$playerId"
      params={{ playerId: player.id }}
      className={`card-glow group flex ${CARD_HEIGHT} w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/80 transition-all hover:border-primary/40`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-muted">
        <img
          src={photoUrl}
          alt={player.name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-0.5 px-3 py-2.5 text-center">
        <h3 className="line-clamp-2 w-full text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {player.name}
        </h3>
        <p className="line-clamp-1 w-full text-xs text-muted-foreground">{teamName}</p>
      </div>
    </Link>
  );
}
