import type { Match, Standing, PlayerStat } from "./lpl";

export type SeasonInfo = {
  id: string;
  number: number;
  year: number;
  status: "completed" | "current";
  champion?: string;
  runnerUp?: string;
  overs: number;
};

export type SeasonData = {
  schedule: Match[];
  results: Match[];
  standings: Standing[];
  battingStats: PlayerStat[];
  bowlingStats: PlayerStat[];
};

/** Default: last completed season (previous seasons shown first in picker) */
export const DEFAULT_SEASON_ID = "s6";

export const seasonsList: SeasonInfo[] = [
  { id: "s6", number: 6, year: 2025, status: "completed", champion: "Ward 4 Tigers", runnerUp: "Ward 2 Strikers", overs: 14 },
  { id: "s5", number: 5, year: 2024, status: "completed", champion: "Ward 2 Strikers", runnerUp: "Ward 1 Warriors", overs: 14 },
  { id: "s4", number: 4, year: 2023, status: "completed", champion: "Ward 6 Lions", overs: 14 },
  { id: "s7", number: 7, year: 2026, status: "current", overs: 14 },
];

/** Completed seasons first (newest → oldest), then current season */
export function getSeasonsForPicker(): SeasonInfo[] {
  const completed = seasonsList
    .filter((s) => s.status === "completed")
    .sort((a, b) => b.number - a.number);
  const current = seasonsList.filter((s) => s.status === "current");
  return [...completed, ...current];
}

export function getSeason(id: string): SeasonInfo | undefined {
  return seasonsList.find((s) => s.id === id);
}

const s6Results: Match[] = [
  { id: "r1", teamA: "w4", teamB: "w2", date: "2025-03-01", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "completed", scoreA: "142/6", scoreB: "138/8", result: "Ward 4 Tigers won by 4 runs", playerOfMatch: "Rakib Hasan — 67* (32)", round: "Grand Final" },
  { id: "r2", teamA: "w1", teamB: "w3", date: "2025-02-28", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "completed", scoreA: "156/4", scoreB: "149/7", result: "Ward 1 Warriors won by 7 runs", playerOfMatch: "Sajib — 58 (28)", round: "Semi Final" },
  { id: "r3", teamA: "w6", teamB: "w8", date: "2025-02-27", time: "7:00 AM", venue: "Ward 6 Ground", overs: 14, status: "completed", scoreA: "131/8", scoreB: "132/5", result: "Ward 8 Hurricanes won by 5 wickets", playerOfMatch: "Nayeem — 3/18", round: "Semi Final" },
  { id: "r4", teamA: "w5", teamB: "w9", date: "2025-02-26", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "completed", scoreA: "165/3", scoreB: "120/10", result: "Ward 5 Eagles won by 45 runs", playerOfMatch: "Imran — 72* (30)", round: "League" },
  { id: "r5", teamA: "w7", teamB: "w2", date: "2025-02-25", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "completed", scoreA: "118/10", scoreB: "119/4", result: "Ward 2 Strikers won by 6 wickets", playerOfMatch: "Hasan — 45* (22)", round: "League" },
  { id: "r6", teamA: "w3", teamB: "w4", date: "2025-02-24", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "completed", scoreA: "140/6", scoreB: "141/5", result: "Ward 4 Tigers won by 5 wickets", playerOfMatch: "Rakib Hasan — 52 (26)", round: "League" },
];

const s6Standings: Standing[] = [
  { teamId: "w4", played: 8, won: 7, lost: 1, nrr: 1.42, points: 14 },
  { teamId: "w2", played: 8, won: 6, lost: 2, nrr: 0.98, points: 12 },
  { teamId: "w6", played: 8, won: 6, lost: 2, nrr: 0.85, points: 12 },
  { teamId: "w1", played: 8, won: 5, lost: 3, nrr: 0.62, points: 10 },
  { teamId: "w5", played: 8, won: 4, lost: 4, nrr: 0.21, points: 8 },
  { teamId: "w8", played: 8, won: 4, lost: 4, nrr: -0.15, points: 8 },
  { teamId: "w3", played: 8, won: 3, lost: 5, nrr: -0.48, points: 6 },
  { teamId: "w7", played: 8, won: 2, lost: 6, nrr: -0.92, points: 4 },
  { teamId: "w9", played: 8, won: 1, lost: 7, nrr: -1.53, points: 2 },
];

const s7Schedule: Match[] = [
  { id: "m1", teamA: "w1", teamB: "w2", date: "2026-03-15", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "upcoming", round: "League — Match 1" },
  { id: "m2", teamA: "w3", teamB: "w4", date: "2026-03-15", time: "10:30 AM", venue: "Losmonpur Central Ground", overs: 14, status: "upcoming", round: "League — Match 2" },
  { id: "m3", teamA: "w5", teamB: "w6", date: "2026-03-16", time: "7:00 AM", venue: "Ward 5 Field", overs: 14, status: "upcoming", round: "League — Match 3" },
  { id: "m4", teamA: "w7", teamB: "w8", date: "2026-03-16", time: "10:30 AM", venue: "Losmonpur Central Ground", overs: 14, status: "upcoming", round: "League — Match 4" },
  { id: "m9", teamA: "w1", teamB: "w4", date: "2026-04-05", time: "7:30 AM", venue: "Losmonpur Central Ground", overs: 14, status: "upcoming", round: "Semi Final 1" },
  { id: "m11", teamA: "w4", teamB: "w6", date: "2026-04-20", time: "7:30 AM", venue: "Losmonpur Central Ground", overs: 14, status: "upcoming", round: "Grand Final" },
];

const s5Results: Match[] = [
  { id: "s5-r1", teamA: "w2", teamB: "w1", date: "2024-03-10", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "completed", scoreA: "148/5", scoreB: "145/7", result: "Ward 2 Strikers won by 3 runs", playerOfMatch: "Hasan — 62 (30)", round: "Final" },
  { id: "s5-r2", teamA: "w4", teamB: "w6", date: "2024-03-08", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "completed", scoreA: "132/8", scoreB: "135/4", result: "Ward 6 Lions won by 6 wickets", round: "Semi Final" },
];

const seasonDataMap: Record<string, SeasonData> = {
  s6: {
    schedule: s6Results.map((m) => ({ ...m, status: "completed" as const })),
    results: s6Results,
    standings: s6Standings,
    battingStats: [
      { rank: 1, name: "Rakib Hasan", teamId: "w4", value: "412", detail: "Avg 68.6 · SR 178" },
      { rank: 2, name: "Imran Hossain", teamId: "w5", value: "378", detail: "Avg 54.0 · SR 165" },
      { rank: 3, name: "Sajib Ahmed", teamId: "w1", value: "345", detail: "Avg 49.2 · SR 152" },
      { rank: 4, name: "Hasan Mahmud", teamId: "w2", value: "312", detail: "Avg 44.5 · SR 148" },
      { rank: 5, name: "Nayeem Khan", teamId: "w8", value: "298", detail: "Avg 42.5 · SR 155" },
    ],
    bowlingStats: [
      { rank: 1, name: "Shamim Uddin", teamId: "w4", value: "14", detail: "Eco 5.8 · Avg 8.2" },
      { rank: 2, name: "Nayeem Khan", teamId: "w8", value: "12", detail: "Eco 6.1 · Avg 9.5" },
      { rank: 3, name: "Rafiq Islam", teamId: "w2", value: "11", detail: "Eco 6.4 · Avg 10.1" },
    ],
  },
  s7: {
    schedule: s7Schedule,
    results: [],
    standings: s6Standings.map((s) => ({ ...s, played: 0, won: 0, lost: 0, points: 0, nrr: 0 })),
    battingStats: [],
    bowlingStats: [],
  },
  s5: {
    schedule: s5Results,
    results: s5Results,
    standings: [
      { teamId: "w2", played: 7, won: 6, lost: 1, nrr: 1.1, points: 12 },
      { teamId: "w1", played: 7, won: 5, lost: 2, nrr: 0.8, points: 10 },
      { teamId: "w6", played: 7, won: 4, lost: 3, nrr: 0.4, points: 8 },
      { teamId: "w4", played: 7, won: 4, lost: 3, nrr: 0.2, points: 8 },
    ],
    battingStats: [
      { rank: 1, name: "Hasan Mahmud", teamId: "w2", value: "356", detail: "Avg 59.3 · SR 160" },
      { rank: 2, name: "Rony Islam", teamId: "w3", value: "298", detail: "Avg 49.6 · SR 155" },
    ],
    bowlingStats: [
      { rank: 1, name: "Karim Ali", teamId: "w6", value: "11", detail: "Eco 6.2 · Avg 9.8" },
    ],
  },
  s4: {
    schedule: [],
    results: [
      { id: "s4-r1", teamA: "w6", teamB: "w3", date: "2023-03-12", time: "7:00 AM", venue: "Losmonpur Central Ground", overs: 14, status: "completed", scoreA: "155/4", scoreB: "140/8", result: "Ward 6 Lions won by 15 runs", round: "Final" },
    ],
    standings: [
      { teamId: "w6", played: 6, won: 5, lost: 1, nrr: 1.2, points: 10 },
      { teamId: "w3", played: 6, won: 4, lost: 2, nrr: 0.5, points: 8 },
    ],
    battingStats: [{ rank: 1, name: "Prince Ahmed", teamId: "w3", value: "320", detail: "Avg 53.3" }],
    bowlingStats: [{ rank: 1, name: "Biplob Das", teamId: "w1", value: "10", detail: "Eco 6.5" }],
  },
};

export function getSeasonData(seasonId: string): SeasonData {
  return seasonDataMap[seasonId] ?? seasonDataMap.s7;
}

export function findMatchResult(matchId: string): { match: Match; seasonId: string } | undefined {
  for (const season of getSeasonsForPicker()) {
    const match = getSeasonData(season.id).results.find((m) => m.id === matchId);
    if (match) return { match, seasonId: season.id };
  }
  return undefined;
}
