import { createFileRoute, Link } from "@tanstack/react-router";
import { FullScorecard, ScorecardBackLink } from "@/components/lpl/FullScorecard";
import { results, getTeamName } from "@/data/lpl";
import { getScorecard } from "@/data/scorecards";

export const Route = createFileRoute("/results/$matchId")({
  head: ({ params }) => {
    const match = results.find((m) => m.id === params.matchId);
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
  const match = results.find((m) => m.id === matchId);
  const scorecard = getScorecard(matchId);

  if (!match || !scorecard) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
        <h1 className="display text-4xl text-foreground">Match not found</h1>
        <p className="mt-2 text-muted-foreground">This scorecard does not exist.</p>
        <Link to="/results" className="mt-6 inline-block text-primary hover:underline">
          ← Back to Results
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-10">
      <ScorecardBackLink />
      <h1 className="display mb-6 text-3xl tracking-wide text-foreground md:text-4xl">
        Full Scorecard
      </h1>
      <FullScorecard match={match} scorecard={scorecard} />
    </section>
  );
}
