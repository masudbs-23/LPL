import { Link } from "@tanstack/react-router";
import { Calendar, ChevronRight, MapPin, Trophy } from "lucide-react";
import { getTeam, getTeamName, formatDate, type Match } from "@/data/lpl";

type MatchCardProps = {
  match: Match;
  showResult?: boolean;
  linkToScorecard?: boolean;
};

export function MatchCard({ match, showResult = false, linkToScorecard = false }: MatchCardProps) {
  const teamA = getTeam(match.teamA);
  const teamB = getTeam(match.teamB);
  const isClickable = linkToScorecard && match.status === "completed";

  const content = (
    <>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {match.round}
        </span>
        {match.status === "live" && (
          <span className="flex items-center gap-1.5 rounded-full bg-live/20 px-2.5 py-0.5 text-[10px] font-bold uppercase text-live">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-live" />
            Live
          </span>
        )}
        {match.status === "upcoming" && (
          <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-bold uppercase text-primary">
            Upcoming
          </span>
        )}
        {match.status === "completed" && (
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
            Completed
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <TeamBlock name={getTeamName(match.teamA)} color={teamA?.color} score={match.scoreA} />
        <span className="display shrink-0 text-2xl text-muted-foreground">VS</span>
        <TeamBlock name={getTeamName(match.teamB)} color={teamB?.color} score={match.scoreB} align="right" />
      </div>

      {showResult && match.result && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2 text-sm text-accent-foreground">
          <Trophy className="h-4 w-4 shrink-0 text-primary" />
          <span>{match.result}</span>
        </div>
      )}

      {match.playerOfMatch && (
        <p className="mt-2 text-xs text-muted-foreground">
          ⭐ Player of the Match: {match.playerOfMatch}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(match.date)} · {match.time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {match.venue}
          </span>
          <span>{match.overs} Overs</span>
        </div>
        {isClickable && (
          <span className="flex items-center gap-1 text-xs font-semibold text-primary">
            Full Scorecard
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </>
  );

  const className = `card-glow rounded-2xl border border-border/60 bg-card/80 p-5 backdrop-blur-sm ${
    isClickable ? "group cursor-pointer hover:border-primary/50" : ""
  }`;

  if (isClickable) {
    return (
      <Link
        to="/results/$matchId"
        params={{ matchId: match.id }}
        className={className}
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={className} style={{ boxShadow: "var(--shadow-card)" }}>
      {content}
    </div>
  );
}

function TeamBlock({
  name,
  color,
  score,
  align = "left",
}: {
  name: string;
  color?: string;
  score?: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`flex-1 ${align === "right" ? "text-right" : ""}`}>
      <div className={`flex items-center gap-2 ${align === "right" ? "justify-end" : ""}`}>
        <div
          className="h-3 w-3 shrink-0 rounded-full"
          style={{ backgroundColor: color ?? "var(--muted)" }}
        />
        <span className="text-sm font-semibold leading-tight">{name}</span>
      </div>
      {score && (
        <div className="display mt-1 text-2xl text-foreground">{score}</div>
      )}
    </div>
  );
}
