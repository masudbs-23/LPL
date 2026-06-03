import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { enrichAnswer } from "./react-enrich-examples.mjs";
import { parseSudheerEnglish, parseSudheerOldEnglish } from "./parse-sudheer-en.mjs";
import { oldQaBn } from "./old-qa-bn-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(__dirname, "react-319-source.txt");
const enSourcePath = path.join(__dirname, "sudheer-react-en.md");
const enSourceUrl =
  "https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/master/README.md";
const outPath = path.join(__dirname, "..", "src", "data", "react.ts");

const BENGALI_DIGITS = "০১২৩৪৫৬৭৮৯";

function bnToInt(bn) {
  return parseInt(
    bn
      .split("")
      .map((c) => BENGALI_DIGITS.indexOf(c))
      .join(""),
    10,
  );
}

function toBengaliNumber(n) {
  return String(n)
    .split("")
    .map((d) => BENGALI_DIGITS[parseInt(d, 10)])
    .join("");
}

function escapeTsString(s) {
  return JSON.stringify(s);
}

function formatAnswer(raw) {
  let text = raw.trim();
  if (!text) return "";

  // jsx / javascript code fences
  text = text.replace(
    /(?:^|\n)(jsx|javascript|js)\n([\s\S]*?)(?=\n\n|\n[০-৯]|\n[A-Za-z\u0980-\u09FF]|$)/gi,
    (_, lang, code) => `\n\`\`\`${lang === "jsx" ? "javascript" : lang}\n${code.trimEnd()}\n\`\`\``,
  );

  // Tab-separated tables (2+ columns)
  const lines = text.split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.includes("\t") && !line.startsWith("```")) {
      const tableRows = [];
      while (i < lines.length && lines[i].includes("\t")) {
        tableRows.push(lines[i].split("\t").map((c) => c.trim()));
        i++;
      }
      if (tableRows.length >= 2) {
        out.push(tableRows.map((r) => "| " + r.join(" | ") + " |").join("\n"));
        continue;
      }
      out.push(line);
      i++;
      continue;
    }
    out.push(line);
    i++;
  }
  text = out.join("\n").trim();

  return text;
}

function isSectionHeader(t) {
  if (/^([০-৯]+)\.\s/.test(t)) return false;
  return (
    /থেকে [০-৯]+/.test(t) ||
    /\(Core React\)|\(React Router\)|\(React Testing\)|\(Hooks\)/i.test(t) ||
    /^(কোর রিয়্যাক্ট|রিয়্যাক্ট রাউটার|রিয়্যাক্ট ইন্টারন্যাশনালাইজেশন|রিয়্যাক্ট টেস্টিং|রিয়্যাক্স রিডাক্স|রিয়্যাক্ট নেটিভ|রিয়্যাক্ট সাপোর্টেড|বিবিধ|হুকস) /i.test(
      t,
    )
  );
}

/** Fix transcript typos: ১১১৯ → 119, ৩৩১৯ → 319 */
function normalizeQuestionNum(bn) {
  let num = bnToInt(bn);
  if (num <= 319) return num;
  const digits = bn.split("").map((c) => BENGALI_DIGITS.indexOf(c));
  if (digits.length === 4 && digits[0] === digits[1]) {
    return parseInt(digits.slice(1).join(""), 10);
  }
  if (digits.length === 4) {
    return parseInt(digits.slice(1).join(""), 10);
  }
  return Math.min(num, 319);
}

function parseSection(text) {
  const lines = text.split("\n");
  const map = new Map();
  let currentNum = null;
  let currentQ = "";
  let answerParts = [];

  const flush = () => {
    if (currentNum == null || !currentQ) return;
    const a = formatAnswer(answerParts.join("\n"));
    const prev = map.get(currentNum);
    if (!prev || a.length > (prev.a?.length ?? 0)) {
      map.set(currentNum, { q: currentQ, a });
    }
    answerParts = [];
  };

  for (const raw of lines) {
    const t = raw.trim();
    if (!t) {
      if (currentNum != null) answerParts.push("");
      continue;
    }
    if (isSectionHeader(t)) continue;
    if (
      t.startsWith("please all") ||
      t.startsWith("and add all") ||
      t.startsWith("আপনার অনুরোধ") ||
      t.startsWith("react er question")
    ) {
      continue;
    }

    const m = t.match(/^([০-৯]+)\.\s*(.+)$/);
    if (m) {
      const num = normalizeQuestionNum(m[1]);
      flush();
      currentNum = num;
      currentQ = m[2].trim();
      continue;
    }

    if (currentNum != null) answerParts.push(raw);
  }
  flush();
  return map;
}

function toQEn(num, questionBn) {
  const n = String(num);
  const en = questionBn
    .replace(/রিয়্যাক্ট/gi, "React")
    .replace(/রিঅ্যাক্ট/gi, "React");
  return `${n}. ${en}`;
}

function loadEnglishMap() {
  let md = "";
  if (fs.existsSync(enSourcePath)) {
    md = fs.readFileSync(enSourcePath, "utf8");
  } else {
    console.warn(`Missing ${enSourcePath}; run: curl -o scripts/sudheer-react-en.md ${enSourceUrl}`);
    return new Map();
  }
  const start = md.indexOf("## Core React");
  const end = md.indexOf("## Old Q&A");
  const oldStart = md.indexOf("## Old Q&A");
  const disclaimer = md.indexOf("## Disclaimer");
  const mainSlice = start >= 0 ? md.slice(start, end > start ? end : undefined) : md;
  const map = parseSudheerEnglish(mainSlice);
  if (oldStart >= 0) {
    const oldSlice = md.slice(oldStart, disclaimer > oldStart ? disclaimer : undefined);
    const oldMap = parseSudheerOldEnglish(oldSlice);
    for (const [n, item] of oldMap) map.set(n, item);
    console.log(`Parsed ${map.size} English Q&As (${oldMap.size} Old Q&A)`);
  } else {
    console.log(`Parsed ${map.size} English Q&As from sudheer README`);
  }
  return map;
}

const MAIN_COUNT = 319;
const OLD_COUNT = 89;
const TOTAL = MAIN_COUNT + OLD_COUNT;

function buildEntry(n, item, englishMap) {
  const en = englishMap.get(n);
  const qBn = `${toBengaliNumber(n)}. ${item.q}`;
  const qEn = en?.q ? `${n}. ${en.q}` : toQEn(n, item.q);
  const a =
    n > MAIN_COUNT ? item.a : enrichAnswer(n, item.q, item.a);
  const aEn = en?.a ? formatAnswer(en.a) : "";
  const parts = [
    `q: ${escapeTsString(qBn)}`,
    `qEn: ${escapeTsString(qEn)}`,
    `a: ${escapeTsString(a)}`,
  ];
  if (aEn && aEn !== a) {
    parts.push(`aEn: ${escapeTsString(aEn)}`);
  }
  return `  { ${parts.join(", ")} }`;
}

function generateTs(merged, englishMap) {
  const entries = [];
  for (let n = 1; n <= MAIN_COUNT; n++) {
    const item = merged.get(n);
    if (!item) {
      console.warn(`Missing question ${n}`);
      continue;
    }
    entries.push(buildEntry(n, item, englishMap));
  }

  for (let i = 0; i < OLD_COUNT; i++) {
    const n = MAIN_COUNT + 1 + i;
    const bn = oldQaBn[i];
    if (!bn) {
      console.warn(`Missing Old Q&A Bengali #${i + 1}`);
      continue;
    }
    const en = englishMap.get(n);
    const item = { q: bn.q, a: bn.a };
    entries.push(buildEntry(n, item, englishMap));
  }

  return `import type { QA } from "./types";

/** React.js interview — ${TOTAL} প্রশ্ন (৩১৯ মূল + ৮৯ পুরনো/ক্লাস) · বাংলা + ইংরেজি */
export const reactQAs: QA[] = [
${entries.join(",\n")},
];
`;
}

function main() {
  const full = fs.readFileSync(sourcePath, "utf8");
  const coreIdx = full.indexOf("কোর রিয়্যাক্ট");
  const detailed = full.slice(0, coreIdx > 0 ? coreIdx : full.length);
  const comprehensive = coreIdx > 0 ? full.slice(coreIdx) : "";

  const detailedMap = parseSection(detailed);
  const fullMap = parseSection(comprehensive);

  const merged = new Map();
  for (let n = 1; n <= MAIN_COUNT; n++) {
    const d = detailedMap.get(n);
    const f = fullMap.get(n);
    if (d && f) {
      merged.set(n, {
        q: d.q.length > 3 ? d.q : f.q,
        a: (d.a?.length ?? 0) >= (f.a?.length ?? 0) ? d.a : f.a,
      });
    } else if (d) {
      merged.set(n, d);
    } else if (f) {
      merged.set(n, f);
    }
  }

  const englishMap = loadEnglishMap();
  fs.writeFileSync(outPath, generateTs(merged, englishMap), "utf8");
  console.log(`Wrote ${TOTAL} QAs (${MAIN_COUNT} main + ${OLD_COUNT} old) to ${outPath}`);
}

main();
