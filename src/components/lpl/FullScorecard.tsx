import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Trophy } from "lucide-react";
import type { Match } from "@/data/lpl";
import { getTeam, getTeamName, formatDate } from "@/data/lpl";
import type { InningsScorecard, MatchScorecard } from "@/data/scorecards";
import type { BattingRow, BowlingRow } from "@/data/scorecards";

type FullScorecardProps = {
  match: Match;
  scorecard: MatchScorecard;
};

export function FullScorecard({ match, scorecard }: FullScorecardProps) {
  const [activeInnings, setActiveInnings] = useState<0 | 1>(0);
  const innings = scorecard.innings[activeInnings];
  const otherInnings = scorecard.innings[activeInnings === 0 ? 1 : 0];

  const teamA = getTeam(match.teamA);
  const teamB = getTeam(match.teamB);

  return (
    <div className="space-y-6">
      {/* Match header — Cricbuzz style */}
      <div
        className="overflow-hidden rounded-xl border border-border bg-card"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="border-b border-border bg-muted/20 px-4 py-2 text-center text-xs text-muted-foreground">
          {match.round} · {formatDate(match.date)} · {match.time} · {match.venue}
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 p-5 md:p-6">
          <TeamScoreHeader
            name={getTeamName(match.teamA)}
            color={teamA?.color}
            score={match.scoreA}
            align="left"
          />
          <div className="text-center">
            <span className="display text-lg text-muted-foreground">VS</span>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
              {match.overs} Overs
            </p>
          </div>
          <TeamScoreHeader
            name={getTeamName(match.teamB)}
            color={teamB?.color}
            score={match.scoreB}
            align="right"
          />
        </div>

        {match.result && (
          <div className="flex items-center justify-center gap-2 border-t border-border bg-accent/10 px-4 py-3 text-sm font-medium text-accent-foreground">
            <Trophy className="h-4 w-4 text-primary" />
            {match.result}
          </div>
        )}

        <div className="border-t border-border px-4 py-2 text-center text-xs text-muted-foreground">
          {getTeamName(scorecard.tossWinnerId)} won the toss and elected to{" "}
          {scorecard.elected === "bat" ? "bat" : "bowl"} first
          {match.playerOfMatch && (
            <span className="mt-1 block text-primary">
              ⭐ Player of the Match: {match.playerOfMatch}
            </span>
          )}
        </div>
      </div>

      {/* Innings tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {scorecard.innings.map((inn, idx) => (
          <button
            key={inn.teamId}
            type="button"
            onClick={() => setActiveInnings(idx as 0 | 1)}
            className={`shrink-0 rounded-lg border px-4 py-2.5 text-left transition-all ${
              activeInnings === idx
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40"
            }`}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Innings {idx + 1}
            </div>
            <div className="display text-lg leading-tight">
              {getTeamName(inn.teamId)} — {inn.total}
            </div>
            <div className="text-xs text-muted-foreground">
              ({inn.overs} ov) · RR {inn.runRate.toFixed(2)}
            </div>
          </button>
        ))}
      </div>

      <InningsPanel innings={innings} oppositionTeamId={otherInnings.teamId} />
    </div>
  );
}

function TeamScoreHeader({
  name,
  color,
  score,
  align,
}: {
  name: string;
  color?: string;
  score?: string;
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <div className={`flex items-center gap-2 ${align === "right" ? "justify-end" : ""}`}>
        <div
          className="h-3 w-3 shrink-0 rounded-full"
          style={{ backgroundColor: color ?? "var(--muted)" }}
        />
        <span className="text-sm font-semibold">{name}</span>
      </div>
      {score && <div className="display mt-1 text-3xl md:text-4xl text-foreground">{score}</div>}
    </div>
  );
}

function InningsPanel({
  innings,
  oppositionTeamId,
}: {
  innings: InningsScorecard;
  oppositionTeamId: string;
}) {
  const { extras } = innings;

  return (
    <div className="space-y-4">
      {/* Innings summary bar */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="display text-2xl text-foreground">
            {getTeamName(innings.teamId)} — {innings.total}
          </h2>
          <span className="text-sm text-muted-foreground">
            {innings.overs} overs · Run Rate {innings.runRate.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Batting */}
      <ScorecardSection title="BATTING">
        <BattingTable rows={innings.batting} />
        <div className="border-t border-border/60 px-4 py-2.5 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Extras</span> {extras.total}
          <span className="ml-2 text-xs">
            (b {extras.b}, lb {extras.lb}, w {extras.wd}, nb {extras.nb})
          </span>
        </div>
        <div className="border-t border-border bg-muted/10 px-4 py-2.5">
          <span className="font-semibold text-foreground">Total </span>
          <span className="display text-xl text-primary">
            {innings.total}
          </span>
          <span className="ml-2 text-sm text-muted-foreground">
            ({innings.overs} Ov, RR: {innings.runRate.toFixed(2)})
          </span>
        </div>
        {innings.didNotBat && innings.didNotBat.length > 0 && (
          <div className="border-t border-border/60 px-4 py-2 text-xs text-muted-foreground">
            <span className="font-medium">Did not bat: </span>
            {innings.didNotBat.join(", ")}
          </div>
        )}
      </ScorecardSection>

      {/* Fall of wickets */}
      {innings.fallOfWickets.length > 0 && (
        <ScorecardSection title="FALL OF WICKETS">
          <div className="flex flex-wrap gap-2 px-4 py-3">
            {innings.fallOfWickets.map((fow, i) => (
              <span
                key={i}
                className="rounded-md bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground"
              >
                <span className="font-semibold text-foreground">{fow.score}</span> {fow.player}{" "}
                <span className="text-primary">({fow.over})</span>
              </span>
            ))}
          </div>
        </ScorecardSection>
      )}

      {/* Bowling */}
      <ScorecardSection title={`BOWLING — ${getTeamName(oppositionTeamId)}`}>
        <BowlingTable rows={innings.bowling} />
      </ScorecardSection>
    </div>
  );
}

function ScorecardSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-card"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="border-b border-border bg-muted/25 px-4 py-2">
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function BattingTable({ rows }: { rows: BattingRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-sm">
        <thead>
          <tr className="border-b border-border text-left text-[10px] uppercase tracking-wider text-muted-foreground">
            <th className="px-4 py-2.5 font-semibold">Batsman</th>
            <th className="w-10 px-2 py-2.5 text-center font-semibold">R</th>
            <th className="w-10 px-2 py-2.5 text-center font-semibold">B</th>
            <th className="w-8 px-2 py-2.5 text-center font-semibold">4s</th>
            <th className="w-8 px-2 py-2.5 text-center font-semibold">6s</th>
            <th className="w-14 px-2 py-2.5 text-center font-semibold">SR</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-border/40 ${
                row.dismissal === "not out" ? "bg-primary/5" : ""
              }`}
            >
              <td className="px-4 py-3">
                <div className="font-semibold text-foreground">{row.name}</div>
                <div className="text-xs text-muted-foreground">
                  {row.dismissal === "not out" ? (
                    <span className="font-medium text-primary">not out</span>
                  ) : (
                    row.dismissal
                  )}
                </div>
              </td>
              <td className="px-2 py-3 text-center font-bold text-foreground">{row.runs}</td>
              <td className="px-2 py-3 text-center text-muted-foreground">{row.balls}</td>
              <td className="px-2 py-3 text-center text-muted-foreground">{row.fours}</td>
              <td className="px-2 py-3 text-center text-muted-foreground">{row.sixes}</td>
              <td className="px-2 py-3 text-center text-muted-foreground">
                {row.strikeRate.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BowlingTable({ rows }: { rows: BowlingRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] text-sm">
        <thead>
          <tr className="border-b border-border text-left text-[10px] uppercase tracking-wider text-muted-foreground">
            <th className="px-4 py-2.5 font-semibold">Bowler</th>
            <th className="w-10 px-2 py-2.5 text-center font-semibold">O</th>
            <th className="w-8 px-2 py-2.5 text-center font-semibold">M</th>
            <th className="w-10 px-2 py-2.5 text-center font-semibold">R</th>
            <th className="w-8 px-2 py-2.5 text-center font-semibold">W</th>
            <th className="w-14 px-2 py-2.5 text-center font-semibold">Econ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/40">
              <td className="px-4 py-3 font-semibold text-foreground">{row.name}</td>
              <td className="px-2 py-3 text-center text-muted-foreground">{row.overs}</td>
              <td className="px-2 py-3 text-center text-muted-foreground">{row.maidens}</td>
              <td className="px-2 py-3 text-center text-muted-foreground">{row.runs}</td>
              <td className="px-2 py-3 text-center font-bold text-foreground">
                {row.wickets > 0 ? row.wickets : "-"}
              </td>
              <td className="px-2 py-3 text-center text-muted-foreground">
                {row.economy.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ScorecardBackLink() {
  return (
    <Link
      to="/results"
      className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      <ArrowLeft className="h-4 w-4" />
      All Results
    </Link>
  );
}
