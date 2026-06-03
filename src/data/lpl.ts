export type Team = {
  id: string;
  name: string;
  ward: number;
  shortName: string;
  color: string;
};

export type MatchStatus = "upcoming" | "live" | "completed";

export type Match = {
  id: string;
  teamA: string;
  teamB: string;
  date: string;
  time: string;
  venue: string;
  overs: number;
  status: MatchStatus;
  result?: string;
  scoreA?: string;
  scoreB?: string;
  playerOfMatch?: string;
  round: string;
};

export type Standing = {
  teamId: string;
  played: number;
  won: number;
  lost: number;
  nrr: number;
  points: number;
};

export type PlayerStat = {
  rank: number;
  name: string;
  teamId: string;
  value: string;
  detail: string;
};

export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail?: string;
  category: "highlights" | "final" | "interview" | "best-moments";
  duration: string;
};

export const REGISTRATION_FEE = 5000;

export const CURRENT_SEASON = {
  number: 7,
  year: 2026,
  overs: 14,
  teams: 9,
  startDate: "2026-03-15",
  finalDate: "2026-04-20",
  registrationOpen: true,
  registrationFee: REGISTRATION_FEE,
};

export const tournamentRules = [
  {
    title: "টুর্নামেন্ট ফরম্যাট",
    body: "লসমনপুর প্রিমিয়ার লিগ সিজন ৭ — ৯টি ওয়ার্ডের দল, প্রতিটি ম্যাচ ১৪ ওভার। লিগ স্টেজের পর সেরা ৪ দল সেমি-ফাইনাল ও গ্র্যান্ড ফাইনালে অংশ নেবে।",
  },
  {
    title: "যোগ্যতা ও নিবন্ধন",
    body: "প্রতিটি ওয়ার্ড থেকে একাধিক খেলোয়াড় নিবন্ধন করতে পারবেন। নিবন্ধন ফি ৳৫,০০০ (অপরিবর্তনীয়)। ফর্ম জমা দিয়ে bKash-এ পেমেন্ট সম্পন্ন করলেই নিবন্ধন কার্যকর হবে।",
  },
  {
    title: "খেলার নিয়ম",
    body: "ICC T20 নিয়মের ভিত্তিতে খেলা হবে। প্রতি দল সর্বোচ্চ ১২ জন খেলোয়াড় নিয়ে মাঠে নামতে পারবে। ম্যাচের সময়সূচি কমিটির সিদ্ধান্ত চূড়ান্ত।",
  },
  {
    title: "মাঠ ও সরঞ্জাম",
    body: "ম্যাচ Losmonpur Central Ground ও নির্ধারিত ওয়ার্ড গ্রাউন্ডে অনুষ্ঠিত হবে। বল ও স্টাম্প আয়োজক প্রদান করবে; ব্যাটিং গিয়ার খেলোয়াড়ের নিজস্ব।",
  },
  {
    title: "আচরণ বিধি",
    body: "খেলোয়াড়, দর্শক ও অফিসিয়ালদের মধ্যে মারামারি, অশালীন ভাষা বা আয়োজকবিরোধী আচরণ নিষিদ্ধ। লঙ্ঘন করলে দল বহিষ্কার হতে পারে।",
  },
  {
    title: "পুরস্কার",
    body: "বিজয়ী দল ট্রফি, মেডেল ও নগদ পুরস্কার পাবে। সিজনের সেরা ব্যাটসম্যান, বোলার ও ফিল্ডার পৃথক পুরস্কৃত হবেন।",
  },
];

export const teams: Team[] = [
  { id: "w1", name: "Ward 1 Warriors", ward: 1, shortName: "W1", color: "#3b82f6" },
  { id: "w2", name: "Ward 2 Strikers", ward: 2, shortName: "W2", color: "#ef4444" },
  { id: "w3", name: "Ward 3 Royals", ward: 3, shortName: "W3", color: "#a855f7" },
  { id: "w4", name: "Ward 4 Tigers", ward: 4, shortName: "W4", color: "#f59e0b" },
  { id: "w5", name: "Ward 5 Eagles", ward: 5, shortName: "W5", color: "#06b6d4" },
  { id: "w6", name: "Ward 6 Lions", ward: 6, shortName: "W6", color: "#eab308" },
  { id: "w7", name: "Ward 7 Phoenix", ward: 7, shortName: "W7", color: "#f97316" },
  { id: "w8", name: "Ward 8 Hurricanes", ward: 8, shortName: "W8", color: "#14b8a6" },
  { id: "w9", name: "Ward 9 Thunder", ward: 9, shortName: "W9", color: "#6366f1" },
];

export const announcement = {
  title: "Season 7 Registration Open!",
  message:
    "লসমনপুর প্রিমিয়ার লিগ সিজন ৭ — নিবন্ধন ফি ৳৫,০০০। ৯টি ওয়ার্ড, ১৪ ওভারের রোমাঞ্চকর ক্রিকেট — এখনই নিবন্ধন করুন!",
  cta: "Join Season 7",
  deadline: "2026-03-10",
};

export const tickerItems = [
  "🔴 LIVE — Ward 4 Tigers 142/6 (14) beat Ward 2 Strikers 138/8 (14) by 4 runs",
  "⭐ Player of the Match: Rakib Hasan — 67* (32)",
  "📅 Season 7 final qualifier — Friday 7:30 AM at Losmonpur Ground",
  "🏆 Top wicket-taker: Shamim — 14 wickets",
  "🎯 Most sixes: Imran — 18 sixes in Season 6",
  "📢 Season 7 registration closes March 10 — register now!",
];

export const schedule: Match[] = [
  {
    id: "m1",
    teamA: "w1",
    teamB: "w2",
    date: "2026-03-15",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "League — Match 1",
  },
  {
    id: "m2",
    teamA: "w3",
    teamB: "w4",
    date: "2026-03-15",
    time: "10:30 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "League — Match 2",
  },
  {
    id: "m3",
    teamA: "w5",
    teamB: "w6",
    date: "2026-03-16",
    time: "7:00 AM",
    venue: "Ward 5 Field",
    overs: 14,
    status: "upcoming",
    round: "League — Match 3",
  },
  {
    id: "m4",
    teamA: "w7",
    teamB: "w8",
    date: "2026-03-16",
    time: "10:30 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "League — Match 4",
  },
  {
    id: "m5",
    teamA: "w9",
    teamB: "w1",
    date: "2026-03-17",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "League — Match 5",
  },
  {
    id: "m6",
    teamA: "w2",
    teamB: "w3",
    date: "2026-03-18",
    time: "7:00 AM",
    venue: "Ward 2 Ground",
    overs: 14,
    status: "upcoming",
    round: "League — Match 6",
  },
  {
    id: "m7",
    teamA: "w4",
    teamB: "w5",
    date: "2026-03-19",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "League — Match 7",
  },
  {
    id: "m8",
    teamA: "w6",
    teamB: "w7",
    date: "2026-03-20",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "League — Match 8",
  },
  {
    id: "m9",
    teamA: "w1",
    teamB: "w4",
    date: "2026-04-05",
    time: "7:30 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "Semi Final 1",
  },
  {
    id: "m10",
    teamA: "w2",
    teamB: "w6",
    date: "2026-04-05",
    time: "11:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "Semi Final 2",
  },
  {
    id: "m11",
    teamA: "w4",
    teamB: "w6",
    date: "2026-04-20",
    time: "7:30 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "upcoming",
    round: "Grand Final",
  },
];

export const results: Match[] = [
  {
    id: "r1",
    teamA: "w4",
    teamB: "w2",
    date: "2026-03-01",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "completed",
    scoreA: "142/6",
    scoreB: "138/8",
    result: "Ward 4 Tigers won by 4 runs",
    playerOfMatch: "Rakib Hasan — 67* (32)",
    round: "Qualifier Final",
  },
  {
    id: "r2",
    teamA: "w1",
    teamB: "w3",
    date: "2026-02-28",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "completed",
    scoreA: "156/4",
    scoreB: "149/7",
    result: "Ward 1 Warriors won by 7 runs",
    playerOfMatch: "Sajib — 58 (28)",
    round: "Qualifier Semi",
  },
  {
    id: "r3",
    teamA: "w6",
    teamB: "w8",
    date: "2026-02-27",
    time: "7:00 AM",
    venue: "Ward 6 Ground",
    overs: 14,
    status: "completed",
    scoreA: "131/8",
    scoreB: "132/5",
    result: "Ward 8 Hurricanes won by 5 wickets",
    playerOfMatch: "Nayeem — 3/18",
    round: "Qualifier Semi",
  },
  {
    id: "r4",
    teamA: "w5",
    teamB: "w9",
    date: "2026-02-26",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "completed",
    scoreA: "165/3",
    scoreB: "120/10",
    result: "Ward 5 Eagles won by 45 runs",
    playerOfMatch: "Imran — 72* (30)",
    round: "Qualifier",
  },
  {
    id: "r5",
    teamA: "w7",
    teamB: "w2",
    date: "2026-02-25",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "completed",
    scoreA: "118/10",
    scoreB: "119/4",
    result: "Ward 2 Strikers won by 6 wickets",
    playerOfMatch: "Hasan — 45* (22)",
    round: "Qualifier",
  },
  {
    id: "r6",
    teamA: "w3",
    teamB: "w4",
    date: "2026-02-24",
    time: "7:00 AM",
    venue: "Losmonpur Central Ground",
    overs: 14,
    status: "completed",
    scoreA: "140/6",
    scoreB: "141/5",
    result: "Ward 4 Tigers won by 5 wickets",
    playerOfMatch: "Rakib Hasan — 52 (26)",
    round: "Qualifier",
  },
];

export const standings: Standing[] = [
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

export const battingStats: PlayerStat[] = [
  { rank: 1, name: "Rakib Hasan", teamId: "w4", value: "412", detail: "Avg 68.6 · SR 178" },
  { rank: 2, name: "Imran Hossain", teamId: "w5", value: "378", detail: "Avg 54.0 · SR 165" },
  { rank: 3, name: "Sajib Ahmed", teamId: "w1", value: "345", detail: "Avg 49.2 · SR 152" },
  { rank: 4, name: "Hasan Mahmud", teamId: "w2", value: "312", detail: "Avg 44.5 · SR 148" },
  { rank: 5, name: "Nayeem Khan", teamId: "w8", value: "298", detail: "Avg 42.5 · SR 155" },
];

export const bowlingStats: PlayerStat[] = [
  { rank: 1, name: "Shamim Uddin", teamId: "w4", value: "14", detail: "Eco 5.8 · Avg 8.2" },
  { rank: 2, name: "Nayeem Khan", teamId: "w8", value: "12", detail: "Eco 6.1 · Avg 9.5" },
  { rank: 3, name: "Rafiq Islam", teamId: "w2", value: "11", detail: "Eco 6.4 · Avg 10.1" },
  { rank: 4, name: "Karim Ali", teamId: "w6", value: "10", detail: "Eco 6.8 · Avg 11.2" },
  { rank: 5, name: "Biplob Das", teamId: "w1", value: "9", detail: "Eco 7.0 · Avg 12.4" },
];

export const videos: Video[] = [
  {
    id: "v1",
    youtubeId: "NgC9W8s20mY",
    title: "LPL Season 6 Grand Final Highlights",
    description: "Ward 4 Tigers vs Ward 2 Strikers — full match highlights from the epic final.",
    category: "final",
    duration: "12:34",
  },
  {
    id: "v2",
    youtubeId: "8A2t_TajN14",
    title: "Best Sixes — LPL Season 6",
    description: "Top 20 sixes from Season 6 — village cricket at its finest!",
    category: "best-moments",
    duration: "8:45",
  },
  {
    id: "v3",
    youtubeId: "3JXHfeC_Lfg",
    title: "Rakib Hasan — Player of the Tournament",
    description: "Interview with Season 6 Player of the Tournament Rakib Hasan.",
    category: "interview",
    duration: "5:20",
  },
  {
    id: "v4",
    youtubeId: "au6c6LQQZIM",
    title: "LPL Season 6 Opening Ceremony",
    description: "Season 6 kick-off at Losmonpur Central Ground — all 9 wards represented.",
    category: "highlights",
    duration: "6:15",
  },
  {
    id: "v5",
    youtubeId: "I9D2G2Yc0hQ",
    title: "Best Catches — LPL All Time",
    description: "Spectacular catches from 6 seasons of Losmonpur Premier League.",
    category: "best-moments",
    duration: "7:30",
  },
  {
    id: "v6",
    youtubeId: "j4S8H8w6GJo",
    title: "Ward 6 Lions vs Ward 8 Hurricanes — Full Match",
    description: "Complete replay of the thrilling semi-final clash.",
    category: "highlights",
    duration: "18:22",
  },
];

export function getTeam(id: string): Team | undefined {
  return teams.find((t) => t.id === id);
}

export function getTeamName(id: string): string {
  return getTeam(id)?.name ?? id;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getResultById(matchId: string): Match | undefined {
  return results.find((m) => m.id === matchId);
}
