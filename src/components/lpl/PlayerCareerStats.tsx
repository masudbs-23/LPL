import type { Player } from "@/data/players";
import {
  getBattingAverage,
  getBowlingAverage,
  getCareerSeasonLabel,
  getEconomy,
  getPlayerCareersSorted,
  getStrikeRate,
  formatOvers,
} from "@/data/players";
import { getTeamName } from "@/data/lpl";
import { getSeason } from "@/data/seasons";

type PlayerCareerStatsProps = {
  player: Player;
};

function BattingTable({ batting, seasonId }: { batting: NonNullable<Player["careers"][0]["batting"]>; seasonId: string }) {
  const season = getSeason(seasonId);
  if (!batting.innings || (batting.runs === 0 && seasonId === "s7")) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-sm">
        <thead>
          <tr className="border-b border-border/50 text-left text-[10px] uppercase tracking-wider text-muted-foreground">
            <th className="px-4 py-3">Mat</th>
            <th className="px-4 py-3">Inn</th>
            <th className="px-4 py-3">Runs</th>
            <th className="px-4 py-3">Balls</th>
            <th className="px-4 py-3">4s</th>
            <th className="px-4 py-3">6s</th>
            <th className="px-4 py-3">HS</th>
            <th className="px-4 py-3">Avg</th>
            <th className="px-4 py-3">SR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-4 font-medium">{batting.matches}</td>
            <td className="px-4 py-4">{batting.innings}</td>
            <td className="px-4 py-4 font-bold text-foreground">{batting.runs}</td>
            <td className="px-4 py-4 text-muted-foreground">{batting.balls}</td>
            <td className="px-4 py-4">{batting.fours}</td>
            <td className="px-4 py-4">{batting.sixes}</td>
            <td className="px-4 py-4 text-primary">{batting.highScore}</td>
            <td className="px-4 py-4 font-semibold">{getBattingAverage(batting)}</td>
            <td className="px-4 py-4 font-semibold text-live">{getStrikeRate(batting)}</td>
          </tr>
        </tbody>
      </table>
      {season?.status === "current" && batting.runs === 0 && (
        <p className="px-4 py-2 text-xs text-muted-foreground">Season not started yet.</p>
      )}
    </div>
  );
}

function BowlingTable({ bowling, seasonId }: { bowling: NonNullable<Player["careers"][0]["bowling"]>; seasonId: string }) {
  if (!bowling.innings) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-sm">
        <thead>
          <tr className="border-b border-border/50 text-left text-[10px] uppercase tracking-wider text-muted-foreground">
            <th className="px-4 py-3">Mat</th>
            <th className="px-4 py-3">Inn</th>
            <th className="px-4 py-3">Overs</th>
            <th className="px-4 py-3">Runs</th>
            <th className="px-4 py-3">Wkts</th>
            <th className="px-4 py-3">Maid</th>
            <th className="px-4 py-3">Best</th>
            <th className="px-4 py-3">Econ</th>
            <th className="px-4 py-3">Avg</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-4 font-medium">{bowling.matches}</td>
            <td className="px-4 py-4">{bowling.innings}</td>
            <td className="px-4 py-4">{formatOvers(bowling.balls)}</td>
            <td className="px-4 py-4 text-muted-foreground">{bowling.runs}</td>
            <td className="px-4 py-4 font-bold text-foreground">{bowling.wickets}</td>
            <td className="px-4 py-4">{bowling.maidens}</td>
            <td className="px-4 py-4 text-primary">{bowling.best}</td>
            <td className="px-4 py-4 font-semibold">{getEconomy(bowling)}</td>
            <td className="px-4 py-4 font-semibold text-live">
              {bowling.wickets > 0 ? getBowlingAverage(bowling) : "—"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PlayerCareerStats({ player }: PlayerCareerStatsProps) {
  const careers = getPlayerCareersSorted(player);

  if (careers.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border py-12 text-center text-muted-foreground">
        No career data recorded yet.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {careers.map((career) => (
        <div key={career.seasonId} className="glass-card overflow-hidden rounded-2xl">
          <div className="border-b border-border/60 bg-muted/20 px-5 py-4">
            <h3 className="display text-xl text-foreground">{getCareerSeasonLabel(career.seasonId)}</h3>
            <p className="text-sm text-muted-foreground">{getTeamName(career.teamId)}</p>
          </div>

          {career.batting && (career.batting.innings > 0 || career.batting.runs > 0) && (
            <div className="border-b border-border/40">
              <div className="bg-primary/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">
                Batting
              </div>
              <BattingTable batting={career.batting} seasonId={career.seasonId} />
            </div>
          )}

          {career.bowling && career.bowling.innings > 0 && (
            <div>
              <div className="bg-accent/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-accent-foreground">
                Bowling
              </div>
              <BowlingTable bowling={career.bowling} seasonId={career.seasonId} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
