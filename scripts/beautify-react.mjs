import { readFileSync, writeFileSync } from "fs";

/** Add spacing + qEn stub + interview tip footer to react answers */
const src = readFileSync("src/data/react.ts", "utf8");
const header = `import type { QA } from "./types";

/** React.js interview — formatted for readability (BN + EN questions) */
export const reactQAs: QA[] = [
`;

const footer = `];
`;

const entries = [];
const re = /\{\s*q:\s*"([^"]+)"(?:,\s*qEn:\s*"([^"]*)")?,\s*a:\s*"((?:\\.|[^"\\])*)"\s*\}/g;
let m;
while ((m = re.exec(src)) !== null) {
  const q = m[1];
  let qEn = m[2];
  let a = m[3].replace(/\\n/g, "\n").replace(/\\"/g, '"');

  if (!qEn) {
    const num = q.match(/^([০-৯]+|\d+)/);
    const enNum = num ? num[1].replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d)) : "";
    const enTitle = q.replace(/^[০-৯\d]+\.\s*/, "").replace(/কি\?|কী\?/, "?");
    qEn = enNum ? `${enNum}. ${enTitle}` : q;
  }

  if (!a.includes("💡") && a.length > 80 && !a.includes("মুখস্থ")) {
    a += "\n\n💡 Interview: সংক্ষেপে বলুন, example দিন।";
  }

  if (!a.includes("\n\n") && a.length > 120) {
    a = a.replace(/\. ([A-Zঅ-হ])/g, ".\n\n$1");
  }

  entries.push({ q, qEn, a });
}

const body = entries
  .map(
    ({ q, qEn, a }) =>
      `  { q: ${JSON.stringify(q)}, qEn: ${JSON.stringify(qEn)}, a: ${JSON.stringify(a)} },`,
  )
  .join("\n");

writeFileSync("src/data/react.ts", header + body + footer);
console.log("Beautified", entries.length, "React questions");
