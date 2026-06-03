export type BattingRow = {
  name: string;
  dismissal: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
};

export type BowlingRow = {
  name: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
};

export type FallOfWicket = {
  score: string;
  player: string;
  over: string;
};

export type InningsScorecard = {
  teamId: string;
  total: string;
  overs: string;
  runRate: number;
  extras: { total: number; wd: number; nb: number; lb: number; b: number };
  batting: BattingRow[];
  bowling: BowlingRow[];
  fallOfWickets: FallOfWicket[];
  didNotBat?: string[];
};

export type MatchScorecard = {
  matchId: string;
  tossWinnerId: string;
  elected: "bat" | "bowl";
  innings: [InningsScorecard, InningsScorecard];
};

export const scorecards: Record<string, MatchScorecard> = {
  r1: {
    matchId: "r1",
    tossWinnerId: "w4",
    elected: "bat",
    innings: [
      {
        teamId: "w4",
        total: "142/6",
        overs: "14.0",
        runRate: 10.14,
        extras: { total: 8, wd: 5, nb: 2, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "32-1", player: "Tamim", over: "3.2" },
          { score: "58-2", player: "Rahim", over: "6.1" },
          { score: "89-3", player: "Sohan", over: "9.0" },
          { score: "112-4", player: "Milon", over: "11.3" },
          { score: "128-5", player: "Rakib", over: "12.4" },
          { score: "138-6", player: "Shamim", over: "13.5" },
        ],
        batting: [
          { name: "Tamim Ahmed", dismissal: "c Hasan b Rafiq", runs: 18, balls: 14, fours: 2, sixes: 1, strikeRate: 128.6 },
          { name: "Rakib Hasan", dismissal: "not out", runs: 67, balls: 32, fours: 5, sixes: 4, strikeRate: 209.4 },
          { name: "Rahim Uddin", dismissal: "b Rafiq", runs: 22, balls: 18, fours: 3, sixes: 0, strikeRate: 122.2 },
          { name: "Sohan Ali", dismissal: "run out (Hasan)", runs: 15, balls: 12, fours: 1, sixes: 1, strikeRate: 125.0 },
          { name: "Milon Das", dismissal: "c Karim b Shamim (w2)", runs: 8, balls: 10, fours: 0, sixes: 0, strikeRate: 80.0 },
          { name: "Shamim Uddin", dismissal: "b Karim", runs: 4, balls: 6, fours: 0, sixes: 0, strikeRate: 66.7 },
          { name: "Biplob Roy", dismissal: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0.0 },
        ],
        didNotBat: ["Nayeem", "Fahim"],
        bowling: [
          { name: "Rafiq Islam", overs: "3.0", maidens: 0, runs: 28, wickets: 2, economy: 9.33 },
          { name: "Karim Hossain", overs: "3.0", maidens: 0, runs: 32, wickets: 1, economy: 10.67 },
          { name: "Shamim (w2)", overs: "3.0", maidens: 0, runs: 35, wickets: 1, economy: 11.67 },
          { name: "Hasan Mahmud", overs: "3.0", maidens: 0, runs: 30, wickets: 0, economy: 10.0 },
          { name: "Imran Ali", overs: "2.0", maidens: 0, runs: 17, wickets: 0, economy: 8.5 },
        ],
      },
      {
        teamId: "w2",
        total: "138/8",
        overs: "14.0",
        runRate: 9.86,
        extras: { total: 6, wd: 4, nb: 1, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "24-1", player: "Hasan", over: "2.4" },
          { score: "51-2", player: "Karim", over: "5.2" },
          { score: "78-3", player: "Imran", over: "8.0" },
          { score: "95-4", player: "Rafiq", over: "10.1" },
          { score: "112-5", player: "Sajib", over: "11.5" },
          { score: "122-6", player: "Noman", over: "12.3" },
          { score: "130-7", player: "Raju", over: "13.2" },
          { score: "136-8", player: "Shamim", over: "13.6" },
        ],
        batting: [
          { name: "Hasan Mahmud", dismissal: "b Shamim Uddin", runs: 14, balls: 11, fours: 2, sixes: 0, strikeRate: 127.3 },
          { name: "Karim Hossain", dismissal: "c Rakib b Shamim", runs: 28, balls: 22, fours: 3, sixes: 1, strikeRate: 127.3 },
          { name: "Imran Ali", dismissal: "c Milon b Nayeem", runs: 32, balls: 24, fours: 2, sixes: 2, strikeRate: 133.3 },
          { name: "Rafiq Islam", dismissal: "b Shamim", runs: 12, balls: 14, fours: 1, sixes: 0, strikeRate: 85.7 },
          { name: "Sajib Khan", dismissal: "c Tamim b Rakib", runs: 18, balls: 12, fours: 2, sixes: 0, strikeRate: 150.0 },
          { name: "Noman Ahmed", dismissal: "run out (Rakib)", runs: 8, balls: 7, fours: 0, sixes: 0, strikeRate: 114.3 },
          { name: "Raju Islam", dismissal: "b Nayeem", runs: 6, balls: 5, fours: 0, sixes: 0, strikeRate: 120.0 },
          { name: "Shamim (w2)", dismissal: "b Rakib", runs: 4, balls: 3, fours: 0, sixes: 0, strikeRate: 133.3 },
          { name: "Fahim", dismissal: "not out", runs: 10, balls: 8, fours: 1, sixes: 0, strikeRate: 125.0 },
        ],
        didNotBat: ["Biplob"],
        bowling: [
          { name: "Shamim Uddin", overs: "3.0", maidens: 0, runs: 22, wickets: 2, economy: 7.33 },
          { name: "Nayeem Khan", overs: "3.0", maidens: 0, runs: 28, wickets: 2, economy: 9.33 },
          { name: "Rakib Hasan", overs: "3.0", maidens: 0, runs: 35, wickets: 2, economy: 11.67 },
          { name: "Biplob Roy", overs: "3.0", maidens: 0, runs: 32, wickets: 0, economy: 10.67 },
          { name: "Tamim Ahmed", overs: "2.0", maidens: 0, runs: 21, wickets: 0, economy: 10.5 },
        ],
      },
    ],
  },
  r2: {
    matchId: "r2",
    tossWinnerId: "w1",
    elected: "bat",
    innings: [
      {
        teamId: "w1",
        total: "156/4",
        overs: "14.0",
        runRate: 11.14,
        extras: { total: 10, wd: 6, nb: 3, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "45-1", player: "Arif", over: "4.2" },
          { score: "88-2", player: "Kamal", over: "8.0" },
          { score: "120-3", player: "Raju", over: "11.1" },
          { score: "148-4", player: "Sajib", over: "13.4" },
        ],
        batting: [
          { name: "Arif Hossain", dismissal: "b Prince", runs: 28, balls: 20, fours: 4, sixes: 1, strikeRate: 140.0 },
          { name: "Sajib Ahmed", dismissal: "not out", runs: 58, balls: 28, fours: 6, sixes: 2, strikeRate: 207.1 },
          { name: "Kamal Uddin", dismissal: "c Rony b Prince", runs: 35, balls: 24, fours: 3, sixes: 2, strikeRate: 145.8 },
          { name: "Raju Das", dismissal: "b Shamim (w3)", runs: 18, balls: 14, fours: 2, sixes: 0, strikeRate: 128.6 },
          { name: "Biplob Das", dismissal: "not out", runs: 7, balls: 5, fours: 0, sixes: 1, strikeRate: 140.0 },
        ],
        didNotBat: ["Noman", "Fahim", "Tareq"],
        bowling: [
          { name: "Prince Ahmed", overs: "3.0", maidens: 0, runs: 38, wickets: 2, economy: 12.67 },
          { name: "Shamim (w3)", overs: "3.0", maidens: 0, runs: 42, wickets: 1, economy: 14.0 },
          { name: "Rony Islam", overs: "3.0", maidens: 0, runs: 35, wickets: 0, economy: 11.67 },
          { name: "Milon Roy", overs: "3.0", maidens: 0, runs: 40, wickets: 0, economy: 13.33 },
          { name: "Tareq Ali", overs: "2.0", maidens: 0, runs: 41, wickets: 0, economy: 20.5 },
        ],
      },
      {
        teamId: "w3",
        total: "149/7",
        overs: "14.0",
        runRate: 10.64,
        extras: { total: 7, wd: 5, nb: 1, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "28-1", player: "Prince", over: "3.0" },
          { score: "62-2", player: "Rony", over: "6.4" },
          { score: "89-3", player: "Shamim", over: "9.2" },
          { score: "108-4", player: "Milon", over: "11.0" },
          { score: "125-5", player: "Kamal", over: "12.3" },
          { score: "138-6", player: "Tareq", over: "13.2" },
          { score: "145-7", player: "Arif", over: "13.5" },
        ],
        batting: [
          { name: "Prince Ahmed", dismissal: "b Biplob", runs: 22, balls: 16, fours: 3, sixes: 0, strikeRate: 137.5 },
          { name: "Rony Islam", dismissal: "c Arif b Biplob", runs: 38, balls: 26, fours: 4, sixes: 1, strikeRate: 146.2 },
          { name: "Shamim (w3)", dismissal: "c Sajib b Noman", runs: 24, balls: 18, fours: 2, sixes: 1, strikeRate: 133.3 },
          { name: "Milon Roy", dismissal: "b Biplob", runs: 15, balls: 12, fours: 1, sixes: 0, strikeRate: 125.0 },
          { name: "Kamal (w3)", dismissal: "run out (Sajib)", runs: 18, balls: 14, fours: 2, sixes: 0, strikeRate: 128.6 },
          { name: "Tareq Ali", dismissal: "b Noman", runs: 12, balls: 10, fours: 0, sixes: 1, strikeRate: 120.0 },
          { name: "Arif (w3)", dismissal: "b Biplob", runs: 8, balls: 6, fours: 1, sixes: 0, strikeRate: 133.3 },
          { name: "Fahim", dismissal: "not out", runs: 5, balls: 4, fours: 0, sixes: 0, strikeRate: 125.0 },
        ],
        didNotBat: ["Nayeem"],
        bowling: [
          { name: "Biplob Das", overs: "3.0", maidens: 0, runs: 28, wickets: 3, economy: 9.33 },
          { name: "Noman Ahmed", overs: "3.0", maidens: 0, runs: 32, wickets: 2, economy: 10.67 },
          { name: "Arif Hossain", overs: "3.0", maidens: 0, runs: 38, wickets: 0, economy: 12.67 },
          { name: "Kamal Uddin", overs: "3.0", maidens: 0, runs: 35, wickets: 0, economy: 11.67 },
          { name: "Sajib Ahmed", overs: "2.0", maidens: 0, runs: 16, wickets: 0, economy: 8.0 },
        ],
      },
    ],
  },
  r3: {
    matchId: "r3",
    tossWinnerId: "w6",
    elected: "bat",
    innings: [
      {
        teamId: "w6",
        total: "131/8",
        overs: "14.0",
        runRate: 9.36,
        extras: { total: 5, wd: 3, nb: 1, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "22-1", player: "Karim", over: "2.5" },
          { score: "48-2", player: "Rafiq", over: "5.4" },
          { score: "72-3", player: "Imran", over: "8.2" },
          { score: "95-4", player: "Sohan", over: "10.0" },
          { score: "108-5", player: "Milon", over: "11.4" },
          { score: "118-6", player: "Nayeem", over: "12.5" },
          { score: "125-7", player: "Biplob", over: "13.3" },
          { score: "129-8", player: "Tareq", over: "13.6" },
        ],
        batting: [
          { name: "Karim Ali", dismissal: "b Nayeem", runs: 12, balls: 14, fours: 1, sixes: 0, strikeRate: 85.7 },
          { name: "Rafiq Hossain", dismissal: "c Imran b Nayeem", runs: 28, balls: 22, fours: 3, sixes: 1, strikeRate: 127.3 },
          { name: "Imran (w6)", dismissal: "b Shamim (w8)", runs: 22, balls: 18, fours: 2, sixes: 0, strikeRate: 122.2 },
          { name: "Sohan Roy", dismissal: "c Nayeem b Shamim", runs: 18, balls: 16, fours: 1, sixes: 1, strikeRate: 112.5 },
          { name: "Milon Das", dismissal: "b Nayeem", runs: 14, balls: 12, fours: 1, sixes: 0, strikeRate: 116.7 },
          { name: "Nayeem (w6)", dismissal: "run out (Imran)", runs: 8, balls: 8, fours: 0, sixes: 0, strikeRate: 100.0 },
          { name: "Biplob Ali", dismissal: "b Shamim", runs: 6, balls: 5, fours: 0, sixes: 0, strikeRate: 120.0 },
          { name: "Tareq Khan", dismissal: "b Nayeem", runs: 4, balls: 3, fours: 0, sixes: 0, strikeRate: 133.3 },
          { name: "Fahim", dismissal: "not out", runs: 14, balls: 10, fours: 1, sixes: 0, strikeRate: 140.0 },
        ],
        didNotBat: ["Raju"],
        bowling: [
          { name: "Nayeem Khan", overs: "3.0", maidens: 1, runs: 18, wickets: 3, economy: 6.0 },
          { name: "Shamim (w8)", overs: "3.0", maidens: 0, runs: 28, wickets: 2, economy: 9.33 },
          { name: "Imran Ali", overs: "3.0", maidens: 0, runs: 32, wickets: 0, economy: 10.67 },
          { name: "Raju Islam", overs: "3.0", maidens: 0, runs: 35, wickets: 0, economy: 11.67 },
          { name: "Hasan", overs: "2.0", maidens: 0, runs: 18, wickets: 0, economy: 9.0 },
        ],
      },
      {
        teamId: "w8",
        total: "132/5",
        overs: "13.2",
        runRate: 9.9,
        extras: { total: 4, wd: 3, nb: 0, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "35-1", player: "Hasan", over: "4.0" },
          { score: "68-2", player: "Imran", over: "7.2" },
          { score: "95-3", player: "Raju", over: "10.0" },
          { score: "112-4", player: "Shamim", over: "11.5" },
          { score: "125-5", player: "Nayeem", over: "12.4" },
        ],
        batting: [
          { name: "Hasan Mahmud", dismissal: "b Karim", runs: 22, balls: 18, fours: 3, sixes: 0, strikeRate: 122.2 },
          { name: "Imran Ali", dismissal: "c Karim b Rafiq", runs: 35, balls: 24, fours: 4, sixes: 1, strikeRate: 145.8 },
          { name: "Raju Islam", dismissal: "b Karim", runs: 28, balls: 22, fours: 2, sixes: 1, strikeRate: 127.3 },
          { name: "Shamim (w8)", dismissal: "c Milon b Karim", runs: 12, balls: 10, fours: 1, sixes: 0, strikeRate: 120.0 },
          { name: "Nayeem Khan", dismissal: "not out", runs: 18, balls: 12, fours: 2, sixes: 0, strikeRate: 150.0 },
          { name: "Fahim", dismissal: "not out", runs: 13, balls: 8, fours: 1, sixes: 0, strikeRate: 162.5 },
        ],
        didNotBat: ["Biplob", "Tareq", "Arif"],
        bowling: [
          { name: "Karim Ali", overs: "3.0", maidens: 0, runs: 25, wickets: 2, economy: 8.33 },
          { name: "Rafiq Hossain", overs: "3.0", maidens: 0, runs: 28, wickets: 1, economy: 9.33 },
          { name: "Imran (w6)", overs: "2.2", maidens: 0, runs: 32, wickets: 0, economy: 13.71 },
          { name: "Sohan Roy", overs: "3.0", maidens: 0, runs: 30, wickets: 0, economy: 10.0 },
          { name: "Milon Das", overs: "2.0", maidens: 0, runs: 17, wickets: 0, economy: 8.5 },
        ],
      },
    ],
  },
  r4: {
    matchId: "r4",
    tossWinnerId: "w5",
    elected: "bat",
    innings: [
      {
        teamId: "w5",
        total: "165/3",
        overs: "14.0",
        runRate: 11.79,
        extras: { total: 9, wd: 5, nb: 3, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "52-1", player: "Sajib", over: "5.0" },
          { score: "98-2", player: "Rony", over: "9.2" },
          { score: "142-3", player: "Kamal", over: "12.4" },
        ],
        batting: [
          { name: "Sajib Khan", dismissal: "b Tareq", runs: 32, balls: 22, fours: 4, sixes: 1, strikeRate: 145.5 },
          { name: "Imran Hossain", dismissal: "not out", runs: 72, balls: 30, fours: 5, sixes: 5, strikeRate: 240.0 },
          { name: "Rony Ahmed", dismissal: "c Fahim b Shamim (w9)", runs: 38, balls: 28, fours: 4, sixes: 1, strikeRate: 135.7 },
          { name: "Kamal Ali", dismissal: "run out (Nayeem)", runs: 14, balls: 12, fours: 1, sixes: 0, strikeRate: 116.7 },
          { name: "Prince Roy", dismissal: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0.0 },
        ],
        didNotBat: ["Noman", "Biplob", "Fahim"],
        bowling: [
          { name: "Tareq Ali", overs: "3.0", maidens: 0, runs: 38, wickets: 1, economy: 12.67 },
          { name: "Shamim (w9)", overs: "3.0", maidens: 0, runs: 42, wickets: 1, economy: 14.0 },
          { name: "Nayeem Khan", overs: "3.0", maidens: 0, runs: 45, wickets: 0, economy: 15.0 },
          { name: "Raju Islam", overs: "3.0", maidens: 0, runs: 40, wickets: 0, economy: 13.33 },
          { name: "Fahim", overs: "2.0", maidens: 0, runs: 0, wickets: 0, economy: 0.0 },
        ],
      },
      {
        teamId: "w9",
        total: "120/10",
        overs: "12.4",
        runRate: 9.47,
        extras: { total: 8, wd: 6, nb: 1, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "18-1", player: "Tareq", over: "2.2" },
          { score: "35-2", player: "Shamim", over: "4.5" },
          { score: "52-3", player: "Nayeem", over: "6.4" },
          { score: "68-4", player: "Raju", over: "8.0" },
          { score: "82-5", player: "Fahim", over: "9.2" },
          { score: "95-6", player: "Arif", over: "10.4" },
          { score: "105-7", player: "Kamal", over: "11.2" },
          { score: "112-8", player: "Milon", over: "12.0" },
          { score: "116-9", player: "Rony", over: "12.3" },
          { score: "120-10", player: "Prince", over: "12.4" },
        ],
        batting: [
          { name: "Tareq Ali", dismissal: "b Imran", runs: 8, balls: 10, fours: 1, sixes: 0, strikeRate: 80.0 },
          { name: "Shamim (w9)", dismissal: "c Sajib b Imran", runs: 14, balls: 12, fours: 2, sixes: 0, strikeRate: 116.7 },
          { name: "Nayeem Khan", dismissal: "b Rony", runs: 18, balls: 16, fours: 2, sixes: 0, strikeRate: 112.5 },
          { name: "Raju Islam", dismissal: "c Kamal b Imran", runs: 22, balls: 18, fours: 3, sixes: 0, strikeRate: 122.2 },
          { name: "Fahim Ahmed", dismissal: "b Sajib", runs: 12, balls: 14, fours: 0, sixes: 0, strikeRate: 85.7 },
          { name: "Arif Hossain", dismissal: "b Imran", runs: 15, balls: 12, fours: 1, sixes: 1, strikeRate: 125.0 },
          { name: "Kamal (w9)", dismissal: "c Prince b Rony", runs: 8, balls: 10, fours: 0, sixes: 0, strikeRate: 80.0 },
          { name: "Milon Roy", dismissal: "run out (Imran)", runs: 6, balls: 8, fours: 0, sixes: 0, strikeRate: 75.0 },
          { name: "Rony (w9)", dismissal: "b Sajib", runs: 4, balls: 5, fours: 0, sixes: 0, strikeRate: 80.0 },
          { name: "Prince Ahmed", dismissal: "b Imran", runs: 5, balls: 4, fours: 1, sixes: 0, strikeRate: 125.0 },
          { name: "Biplob", dismissal: "not out", runs: 5, balls: 6, fours: 0, sixes: 0, strikeRate: 83.3 },
        ],
        bowling: [
          { name: "Imran Hossain", overs: "3.0", maidens: 0, runs: 22, wickets: 3, economy: 7.33 },
          { name: "Sajib Khan", overs: "3.0", maidens: 0, runs: 28, wickets: 2, economy: 9.33 },
          { name: "Rony Ahmed", overs: "2.4", maidens: 0, runs: 32, wickets: 2, economy: 12.0 },
          { name: "Kamal Ali", overs: "2.0", maidens: 0, runs: 18, wickets: 0, economy: 9.0 },
          { name: "Prince Roy", overs: "2.0", maidens: 0, runs: 20, wickets: 0, economy: 10.0 },
        ],
      },
    ],
  },
  r5: {
    matchId: "r5",
    tossWinnerId: "w7",
    elected: "bat",
    innings: [
      {
        teamId: "w7",
        total: "118/10",
        overs: "13.2",
        runRate: 8.85,
        extras: { total: 6, wd: 4, nb: 1, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "15-1", player: "Arif", over: "1.5" },
          { score: "32-2", player: "Kamal", over: "4.0" },
          { score: "48-3", player: "Rony", over: "6.2" },
          { score: "62-4", player: "Shamim", over: "8.0" },
          { score: "78-5", player: "Milon", over: "9.4" },
          { score: "92-6", player: "Tareq", over: "11.0" },
          { score: "102-7", player: "Fahim", over: "12.0" },
          { score: "108-8", player: "Nayeem", over: "12.4" },
          { score: "114-9", player: "Raju", over: "13.0" },
          { score: "118-10", player: "Prince", over: "13.2" },
        ],
        batting: [
          { name: "Arif Hossain", dismissal: "b Rafiq", runs: 8, balls: 10, fours: 1, sixes: 0, strikeRate: 80.0 },
          { name: "Kamal Uddin", dismissal: "c Hasan b Rafiq", runs: 14, balls: 16, fours: 2, sixes: 0, strikeRate: 87.5 },
          { name: "Rony Islam", dismissal: "b Karim", runs: 18, balls: 14, fours: 2, sixes: 0, strikeRate: 128.6 },
          { name: "Shamim (w7)", dismissal: "c Karim b Rafiq", runs: 12, balls: 14, fours: 1, sixes: 0, strikeRate: 85.7 },
          { name: "Milon Roy", dismissal: "b Hasan", runs: 16, balls: 18, fours: 1, sixes: 1, strikeRate: 88.9 },
          { name: "Tareq Ali", dismissal: "b Karim", runs: 10, balls: 12, fours: 0, sixes: 0, strikeRate: 83.3 },
          { name: "Fahim Ahmed", dismissal: "c Sajib b Hasan", runs: 8, balls: 10, fours: 0, sixes: 0, strikeRate: 80.0 },
          { name: "Nayeem Khan", dismissal: "b Rafiq", runs: 12, balls: 14, fours: 1, sixes: 0, strikeRate: 85.7 },
          { name: "Raju Das", dismissal: "run out (Karim)", runs: 6, balls: 8, fours: 0, sixes: 0, strikeRate: 75.0 },
          { name: "Prince Ahmed", dismissal: "b Karim", runs: 4, balls: 6, fours: 0, sixes: 0, strikeRate: 66.7 },
          { name: "Biplob", dismissal: "not out", runs: 4, balls: 4, fours: 0, sixes: 0, strikeRate: 100.0 },
        ],
        bowling: [
          { name: "Rafiq Islam", overs: "3.0", maidens: 0, runs: 22, wickets: 3, economy: 7.33 },
          { name: "Karim Hossain", overs: "3.0", maidens: 0, runs: 28, wickets: 2, economy: 9.33 },
          { name: "Hasan Mahmud", overs: "3.0", maidens: 0, runs: 32, wickets: 2, economy: 10.67 },
          { name: "Imran Ali", overs: "2.2", maidens: 0, runs: 26, wickets: 0, economy: 11.14 },
          { name: "Shamim (w2)", overs: "2.0", maidens: 0, runs: 10, wickets: 0, economy: 5.0 },
        ],
      },
      {
        teamId: "w2",
        total: "119/4",
        overs: "12.4",
        runRate: 9.39,
        extras: { total: 5, wd: 4, nb: 0, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "28-1", player: "Karim", over: "3.2" },
          { score: "55-2", player: "Imran", over: "6.0" },
          { score: "82-3", player: "Rafiq", over: "9.4" },
          { score: "105-4", player: "Sajib", over: "11.2" },
        ],
        batting: [
          { name: "Karim Hossain", dismissal: "b Shamim (w7)", runs: 18, balls: 16, fours: 2, sixes: 0, strikeRate: 112.5 },
          { name: "Hasan Mahmud", dismissal: "not out", runs: 45, balls: 22, fours: 4, sixes: 2, strikeRate: 204.5 },
          { name: "Imran Ali", dismissal: "c Arif b Rony", runs: 22, balls: 18, fours: 3, sixes: 0, strikeRate: 122.2 },
          { name: "Rafiq Islam", dismissal: "b Kamal", runs: 18, balls: 14, fours: 2, sixes: 0, strikeRate: 128.6 },
          { name: "Sajib Khan", dismissal: "c Milon b Shamim", runs: 11, balls: 10, fours: 1, sixes: 0, strikeRate: 110.0 },
          { name: "Noman Ahmed", dismissal: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0.0 },
        ],
        didNotBat: ["Raju", "Biplob", "Fahim"],
        bowling: [
          { name: "Shamim (w7)", overs: "3.0", maidens: 0, runs: 28, wickets: 1, economy: 9.33 },
          { name: "Rony Islam", overs: "3.0", maidens: 0, runs: 32, wickets: 1, economy: 10.67 },
          { name: "Kamal Uddin", overs: "2.4", maidens: 0, runs: 35, wickets: 1, economy: 13.13 },
          { name: "Arif Hossain", overs: "2.0", maidens: 0, runs: 14, wickets: 0, economy: 7.0 },
          { name: "Milon Roy", overs: "2.0", maidens: 0, runs: 10, wickets: 0, economy: 5.0 },
        ],
      },
    ],
  },
  r6: {
    matchId: "r6",
    tossWinnerId: "w3",
    elected: "bat",
    innings: [
      {
        teamId: "w3",
        total: "140/6",
        overs: "14.0",
        runRate: 10.0,
        extras: { total: 7, wd: 5, nb: 1, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "38-1", player: "Prince", over: "4.2" },
          { score: "65-2", player: "Rony", over: "7.0" },
          { score: "88-3", player: "Shamim", over: "9.4" },
          { score: "108-4", player: "Milon", over: "11.2" },
          { score: "125-5", player: "Kamal", over: "12.5" },
          { score: "135-6", player: "Tareq", over: "13.4" },
        ],
        batting: [
          { name: "Prince Ahmed", dismissal: "b Shamim Uddin", runs: 22, balls: 18, fours: 3, sixes: 0, strikeRate: 122.2 },
          { name: "Rony Islam", dismissal: "c Rakib b Shamim", runs: 35, balls: 26, fours: 4, sixes: 1, strikeRate: 134.6 },
          { name: "Shamim (w3)", dismissal: "b Nayeem", runs: 18, balls: 16, fours: 2, sixes: 0, strikeRate: 112.5 },
          { name: "Milon Roy", dismissal: "c Tamim b Rakib", runs: 22, balls: 18, fours: 2, sixes: 1, strikeRate: 122.2 },
          { name: "Kamal (w3)", dismissal: "run out (Rakib)", runs: 14, balls: 12, fours: 1, sixes: 0, strikeRate: 116.7 },
          { name: "Tareq Ali", dismissal: "b Shamim", runs: 8, balls: 10, fours: 0, sixes: 0, strikeRate: 80.0 },
          { name: "Arif Hossain", dismissal: "not out", runs: 14, balls: 10, fours: 1, sixes: 0, strikeRate: 140.0 },
        ],
        didNotBat: ["Fahim", "Nayeem", "Raju"],
        bowling: [
          { name: "Shamim Uddin", overs: "3.0", maidens: 0, runs: 28, wickets: 2, economy: 9.33 },
          { name: "Nayeem Khan", overs: "3.0", maidens: 0, runs: 32, wickets: 1, economy: 10.67 },
          { name: "Rakib Hasan", overs: "3.0", maidens: 0, runs: 35, wickets: 1, economy: 11.67 },
          { name: "Biplob Roy", overs: "3.0", maidens: 0, runs: 30, wickets: 0, economy: 10.0 },
          { name: "Tamim Ahmed", overs: "2.0", maidens: 0, runs: 15, wickets: 0, economy: 7.5 },
        ],
      },
      {
        teamId: "w4",
        total: "141/5",
        overs: "13.4",
        runRate: 10.56,
        extras: { total: 5, wd: 4, nb: 0, lb: 1, b: 0 },
        fallOfWickets: [
          { score: "32-1", player: "Tamim", over: "3.4" },
          { score: "68-2", player: "Rahim", over: "7.0" },
          { score: "95-3", player: "Sohan", over: "10.2" },
          { score: "118-4", player: "Milon", over: "12.0" },
          { score: "132-5", player: "Shamim", over: "13.2" },
        ],
        batting: [
          { name: "Tamim Ahmed", dismissal: "b Prince", runs: 18, balls: 14, fours: 2, sixes: 1, strikeRate: 128.6 },
          { name: "Rakib Hasan", dismissal: "not out", runs: 52, balls: 26, fours: 4, sixes: 3, strikeRate: 200.0 },
          { name: "Rahim Uddin", dismissal: "c Prince b Rony", runs: 28, balls: 22, fours: 3, sixes: 0, strikeRate: 127.3 },
          { name: "Sohan Ali", dismissal: "b Shamim (w3)", runs: 15, balls: 14, fours: 1, sixes: 0, strikeRate: 107.1 },
          { name: "Milon Das", dismissal: "c Rony b Prince", runs: 12, balls: 10, fours: 1, sixes: 0, strikeRate: 120.0 },
          { name: "Shamim Uddin", dismissal: "b Rony", runs: 6, balls: 5, fours: 0, sixes: 0, strikeRate: 120.0 },
          { name: "Biplob Roy", dismissal: "not out", runs: 5, balls: 4, fours: 0, sixes: 0, strikeRate: 125.0 },
        ],
        didNotBat: ["Nayeem", "Fahim"],
        bowling: [
          { name: "Prince Ahmed", overs: "3.0", maidens: 0, runs: 32, wickets: 2, economy: 10.67 },
          { name: "Rony Islam", overs: "3.0", maidens: 0, runs: 38, wickets: 1, economy: 12.67 },
          { name: "Shamim (w3)", overs: "2.4", maidens: 0, runs: 35, wickets: 1, economy: 13.13 },
          { name: "Milon Roy", overs: "3.0", maidens: 0, runs: 28, wickets: 0, economy: 9.33 },
          { name: "Kamal (w3)", overs: "2.0", maidens: 0, runs: 8, wickets: 0, economy: 4.0 },
        ],
      },
    ],
  },
};

export function getScorecard(matchId: string): MatchScorecard | undefined {
  return scorecards[matchId];
}
