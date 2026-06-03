import { createFileRoute, Link } from "@tanstack/react-router";
import { FullScorecard, ScorecardBackLink } from "@/components/lpl/FullScorecard";
import { getTeamName } from "@/data/lpl";
import { findMatchResult, getSeason } from "@/data/seasons";
import { getScorecard } from "@/data/scorecards";
import { formatDate } from "@/data/lpl";

export const Route = createFileRoute("/results/$matchId")({
  head: ({ params }) => {
    const found = findMatchResult(params.matchId);
    const match = found?.match;
    const title = match
      ? `${getTeamName(match.teamA)} vs ${getTeamName(match.teamB)} — Full Scorecard`
      : "Match Scorecard";
    return {
      meta: [
        { title: `${title} | LPL` },
        {
          name: "description",
          content: "Full batting and bowling scorecard — Losmonpur Premier League",
        },
      ],
    };
  },
  component: MatchScorecardPage,
});

function MatchScorecardPage() {
  const { matchId } = Route.useParams();
  const { season: seasonId } = Route.useSearch({ from: "/results" });
  const found = findMatchResult(matchId);
  const match = found?.match;
  const scorecard = getScorecard(matchId);
  const season = found ? getSeason(found.seasonId) : undefined;

  if (!match) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
        <h1 className="display text-4xl text-foreground">Match not found</h1>
        <p className="mt-2 text-muted-foreground">This scorecard does not exist.</p>
        <Link to="/results" search={{ season: seasonId }} className="mt-6 inline-block text-primary hover:underline">
          ← Back to Results
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-10">
      <ScorecardBackLink />
      {season && (
        <p className="mb-2 text-sm text-muted-foreground">
          Season {season.number} ({season.year})
        </p>
      )}
      <h1 className="display mb-6 text-3xl tracking-wide text-foreground md:text-4xl">
        Full Scorecard
      </h1>

      {scorecard ? (
        <FullScorecard match={match} scorecard={scorecard} />
      ) : (
        <div className="glass-card rounded-2xl p-6">
          <p className="text-lg font-semibold text-foreground">
            {getTeamName(match.teamA)} vs {getTeamName(match.teamB)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {formatDate(match.date)} · {match.venue} · {match.round}
          </p>
          {match.scoreA && match.scoreB && (
            <p className="display mt-4 text-2xl">
              {match.scoreA} — {match.scoreB}
            </p>
          )}
          {match.result && (
            <p className="mt-4 rounded-lg bg-accent/10 px-4 py-3 text-accent-foreground">{match.result}</p>
          )}
          {match.playerOfMatch && (
            <p className="mt-3 text-sm text-muted-foreground">⭐ {match.playerOfMatch}</p>
          )}
          <p className="mt-6 text-sm text-muted-foreground">
            Detailed ball-by-ball scorecard is available for Season 6 league matches. Older seasons show
            summary only.
          </p>
          <Link
            to="/results"
            search={{ season: found?.seasonId ?? seasonId }}
            className="mt-6 inline-block text-primary hover:underline"
          >
            ← Back to Results
          </Link>
        </div>
      )}
    </section>
  );
}
