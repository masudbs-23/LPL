import { getTeam, getTeamName } from "./lpl";
import { getSeason, getSeasonsForPicker } from "./seasons";

export type PlayerRole = "batsman" | "bowler" | "all-rounder";

export type BattingCareer = {
  matches: number;
  innings: number;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  notOuts: number;
  highScore: string;
};

export type BowlingCareer = {
  matches: number;
  innings: number;
  overs: number;
  balls: number;
  runs: number;
  wickets: number;
  maidens: number;
  best: string;
};

export type PlayerSeasonCareer = {
  seasonId: string;
  teamId: string;
  batting?: BattingCareer;
  bowling?: BowlingCareer;
};

export type Player = {
  id: string;
  name: string;
  role: PlayerRole;
  /** Optional photo path or URL — falls back to generated portrait */
  image?: string;
  careers: PlayerSeasonCareer[];
};

/** Portrait for cards and profile (replace `image` on player when you have real photos) */
export function getPlayerPhotoUrl(player: Player, teamColor?: string): string {
  if (player.image) return player.image;
  const bg = (teamColor ?? "#1a5f2a").replace("#", "");
  return `https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(player.name)}&backgroundColor=${bg}&fontSize=42&size=400`;
}

const b = (
  m: number,
  inn: number,
  runs: number,
  balls: number,
  f4: number,
  s6: number,
  no: number,
  hs: string,
): BattingCareer => ({
  matches: m,
  innings: inn,
  runs,
  balls,
  fours: f4,
  sixes: s6,
  notOuts: no,
  highScore: hs,
});

const bw = (
  m: number,
  inn: number,
  balls: number,
  runs: number,
  wkts: number,
  maid: number,
  best: string,
): BowlingCareer => ({
  matches: m,
  innings: inn,
  overs: Math.floor(balls / 6),
  balls,
  runs,
  wickets: wkts,
  maidens: maid,
  best,
});

export const players: Player[] = [
  {
    id: "rakib-hasan",
    name: "Rakib Hasan",
    role: "batsman",
    careers: [
      { seasonId: "s6", teamId: "w4", batting: b(8, 8, 412, 231, 28, 22, 3, "67*") },
      { seasonId: "s5", teamId: "w4", batting: b(7, 7, 298, 175, 20, 14, 2, "58") },
      { seasonId: "s7", teamId: "w4", batting: b(0, 0, 0, 0, 0, 0, 0, "—") },
    ],
  },
  {
    id: "shamim-uddin",
    name: "Shamim Uddin",
    role: "bowler",
    careers: [
      {
        seasonId: "s6",
        teamId: "w4",
        bowling: bw(8, 8, 168, 162, 14, 1, "3/18"),
        batting: b(8, 5, 48, 42, 3, 1, 2, "18"),
      },
      { seasonId: "s5", teamId: "w4", bowling: bw(7, 7, 154, 148, 11, 0, "2/20") },
    ],
  },
  {
    id: "imran-hossain",
    name: "Imran Hossain",
    role: "batsman",
    careers: [
      { seasonId: "s6", teamId: "w5", batting: b(7, 7, 378, 229, 32, 18, 2, "72*") },
      { seasonId: "s5", teamId: "w5", batting: b(6, 6, 245, 150, 18, 10, 1, "52") },
    ],
  },
  {
    id: "sajib-ahmed",
    name: "Sajib Ahmed",
    role: "all-rounder",
    careers: [
      {
        seasonId: "s6",
        teamId: "w1",
        batting: b(8, 8, 345, 227, 30, 12, 2, "58"),
        bowling: bw(8, 4, 48, 56, 2, 0, "2/14"),
      },
    ],
  },
  {
    id: "hasan-mahmud",
    name: "Hasan Mahmud",
    role: "all-rounder",
    careers: [
      {
        seasonId: "s6",
        teamId: "w2",
        batting: b(8, 8, 312, 211, 26, 10, 2, "45*"),
        bowling: bw(8, 6, 72, 98, 4, 0, "2/22"),
      },
      { seasonId: "s5", teamId: "w2", batting: b(7, 7, 356, 210, 24, 12, 1, "62") },
    ],
  },
  {
    id: "nayeem-khan",
    name: "Nayeem Khan",
    role: "all-rounder",
    careers: [
      {
        seasonId: "s6",
        teamId: "w8",
        batting: b(8, 7, 298, 192, 24, 14, 1, "52"),
        bowling: bw(8, 8, 156, 148, 12, 2, "3/18"),
      },
    ],
  },
  {
    id: "rafiq-islam",
    name: "Rafiq Islam",
    role: "bowler",
    careers: [{ seasonId: "s6", teamId: "w2", bowling: bw(8, 8, 162, 174, 11, 0, "3/22") }],
  },
  {
    id: "karim-ali",
    name: "Karim Ali",
    role: "bowler",
    careers: [{ seasonId: "s6", teamId: "w6", bowling: bw(7, 7, 144, 134, 10, 1, "2/25") }],
  },
  {
    id: "biplob-das",
    name: "Biplob Das",
    role: "bowler",
    careers: [
      { seasonId: "s6", teamId: "w1", bowling: bw(8, 7, 132, 128, 9, 0, "3/28") },
      { seasonId: "s4", teamId: "w1", bowling: bw(6, 6, 120, 115, 10, 1, "3/15") },
    ],
  },
  {
    id: "tamim-ahmed",
    name: "Tamim Ahmed",
    role: "batsman",
    careers: [{ seasonId: "s6", teamId: "w4", batting: b(8, 8, 186, 134, 18, 8, 1, "38") }],
  },
  {
    id: "rony-islam",
    name: "Rony Islam",
    role: "batsman",
    careers: [
      { seasonId: "s6", teamId: "w3", batting: b(7, 7, 245, 168, 22, 9, 0, "45") },
      { seasonId: "s5", teamId: "w3", batting: b(7, 7, 298, 180, 26, 11, 1, "55") },
    ],
  },
  {
    id: "prince-ahmed",
    name: "Prince Ahmed",
    role: "all-rounder",
    careers: [
      {
        seasonId: "s6",
        teamId: "w3",
        batting: b(7, 7, 198, 142, 16, 6, 1, "42"),
        bowling: bw(7, 5, 60, 72, 5, 0, "2/32"),
      },
      { seasonId: "s4", teamId: "w3", batting: b(6, 6, 320, 190, 28, 15, 2, "68") },
    ],
  },
  {
    id: "fahim-ahmed",
    name: "Fahim Ahmed",
    role: "batsman",
    careers: [{ seasonId: "s6", teamId: "w7", batting: b(6, 5, 124, 98, 10, 4, 2, "32") }],
  },
  {
    id: "milon-das",
    name: "Milon Das",
    role: "all-rounder",
    careers: [
      {
        seasonId: "s6",
        teamId: "w4",
        batting: b(8, 7, 156, 118, 12, 5, 2, "28"),
        bowling: bw(8, 3, 36, 42, 2, 0, "1/18"),
      },
    ],
  },
  {
    id: "raju-islam",
    name: "Raju Islam",
    role: "batsman",
    careers: [{ seasonId: "s6", teamId: "w8", batting: b(7, 7, 212, 156, 18, 8, 1, "48") }],
  },
];

export function getPlayer(id: string): Player | undefined {
  return players.find((p) => p.id === id);
}

/** Previous seasons first, then current */
export function getPlayerCareersSorted(player: Player): PlayerSeasonCareer[] {
  const order = getSeasonsForPicker().map((s) => s.id);
  return [...player.careers]
    .filter((c) => c.batting?.innings || c.bowling?.innings)
    .sort((a, b) => order.indexOf(a.seasonId) - order.indexOf(b.seasonId));
}

export function getLatestCareer(player: Player): PlayerSeasonCareer | undefined {
  const sorted = getPlayerCareersSorted(player);
  return sorted.find((c) => c.seasonId === "s6") ?? sorted[0];
}

export function getBattingAverage(b: BattingCareer): number {
  const outs = b.innings - b.notOuts;
  if (outs === 0) return b.runs;
  return Math.round((b.runs / outs) * 10) / 10;
}

export function getStrikeRate(b: BattingCareer): number {
  if (b.balls === 0) return 0;
  return Math.round((b.runs / b.balls) * 1000) / 10;
}

export function getEconomy(bw: BowlingCareer): number {
  if (bw.balls === 0) return 0;
  return Math.round((bw.runs / bw.balls) * 6 * 10) / 10;
}

export function getBowlingAverage(bw: BowlingCareer): number {
  if (bw.wickets === 0) return 0;
  return Math.round((bw.runs / bw.wickets) * 10) / 10;
}

export function formatOvers(balls: number): string {
  const o = Math.floor(balls / 6);
  const r = balls % 6;
  return r > 0 ? `${o}.${r}` : `${o}`;
}

export function getRoleLabel(role: PlayerRole): string {
  if (role === "all-rounder") return "All-Rounder";
  return role.charAt(0).toUpperCase() + role.slice(1);
}

export function searchPlayers(query: string, roleFilter?: PlayerRole | "all"): Player[] {
  const q = query.trim().toLowerCase();
  return players.filter((p) => {
    if (roleFilter && roleFilter !== "all" && p.role !== roleFilter) return false;
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.role.includes(q) ||
      p.careers.some((c) => getTeamName(c.teamId).toLowerCase().includes(q))
    );
  });
}

export function getCareerSeasonLabel(seasonId: string): string {
  const s = getSeason(seasonId);
  return s ? `Season ${s.number} (${s.year})` : seasonId;
}
