/**
 * Converts react.ts / react-interview-extra.ts answers to formatAnswer() structure.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.join(__dirname, "..", "src", "data");

function parseQAsFromTs(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const pairs = [];
  const re =
    /\{\s*q:\s*"((?:\\.|[^"\\])*)"\s*,\s*a:\s*"((?:\\.|[^"\\])*)"\s*\}/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    pairs.push({
      q: JSON.parse(`"${m[1]}"`),
      a: JSON.parse(`"${m[2]}"`),
    });
  }
  return pairs;
}

function truncate(s, max = 380) {
  const t = s.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const last = cut.lastIndexOf("।");
  return (last > 80 ? cut.slice(0, last + 1) : cut + "…").trim();
}

function contextualMeta(question) {
  const q = question;
  const rules = [
    [/ইতিহাস|history/i, "React-এর বিবর্তন বোঝা ভার্সন ও ফিচার পরিবর্তন ট্র্যাক করতে সাহায্য করে।", "ইন্টারভিউতে টাইমলাইন জানা থাকলে উত্তর সংক্ষিপ্ত ও নির্ভরযোগ্য হয়।"],
    [/পার্থক্য|vs|তুলনা/i, "সঠিক টুল/প্যাটার্ন বেছে নিতে দুটো ধারণার ভূমিকা আলাদা করতে হয়।", "ভুল বোঝাবুঝি এড়িয়ে আর্কিটেকচার সিদ্ধান্ত নেওয়া যায়।"],
    [/সুবিধা|লাভ/i, "কেন React বেছে নেওয়া হয় তা ব্যাখ্যা করতে।", "প্রজেক্টে trade-off যাচাই করতে সাহায্য করে।"],
    [/সীমাবদ্ধতা|অসুবিধা|ত্রুটি/i, "রিয়েলিস্টিক প্রত্যাশা রাখতে ও বিকল্প জানতে।", "অতিরিক্ত লাইব্রেরি/প্যাটার্ন কখন লাগবে তা বোঝায়।"],
    [/কিভাবে|how/i, "হাতে-কলমে ইমপ্লিমেন্ট করার ধাপ জানতে।", "প্রডাকশনে একই প্যাটার্ন অনুসরণ করা যায়।"],
    [/কখন|when/i, "অপ্রয়োজনীয় complexity এড়াতে।", "সঠিক সময়ে সঠিক API ব্যবহার করা যায়।"],
    [/কেন|why/i, "মূল কারণ বোঝা ডিবাগ ও ডিজাইনে কাজে লাগে।", "ইন্টারভিউতে গভীর উত্তর দেওয়া যায়।"],
    [/উদাহরণ|example/i, "কোড দেখে ধারণা স্থির হয়।", "নিজের প্রজেক্টে অনুসরণ করা সহজ।"],
    [/হুক|hook/i, "ফাংশনাল কম্পোনেন্টে state/side-effect ম্যানেজ করতে।", "ক্লাস লাইফসাইকেল ছাড়াই আধুনিক React লেখা যায়।"],
    [/redux|flux|স্টেট ম্যানেজ/i, "গ্লোবাল স্টেট এক জায়গায় রাখতে।", "বড় অ্যাপে ডাটা ফ্লো প্রেডিক্টেবল রাখে।"],
    [/router|রাউট/i, "SPA-তে পেজ নেভিগেশন URL-এর সাথে মিলিয়ে।", "বুকমার্ক, ব্যাক বাটন ও SEO-friendly রাউটিং।"],
    [/টেস্ট|jest|testing/i, "রিগ্রেশন ধরা ও রিফ্যাক্টরে আত্মবিশ্বাস।", "CI-তে অটোমেটেড কোয়ালিটি গেট।"],
    [/performance|পারফরম্যান্স|memo|virtual/i, "অপ্রয়োজনীয় রি-রেন্ডার কমিয়ে UX ভালো রাখতে।", "বড় লিস্ট/অ্যাপে স্কেল করা যায়।"],
    [/ssr|hydration|সার্ভার/i, "প্রথম পেইন্ট দ্রুত ও SEO উন্নত করতে।", "Next.js ইত্যাদি ফুল-স্ট্যাক React স্ট্যাকে।"],
    [/lifecycle|লাইফসাইকেল/i, "ক্লাস কম্পোনেন্ট ও লিগ্যাসি কোড বোঝতে।", "Hooks-এর equivalent ম্যাপ করতে পারা।"],
    [/prop|props|state/i, "ডাটা ফ্লো ও UI আপডেটের মূল মডেল।", "বাগ-মুক্ত কম্পোনেন্ট ডিজাইন।"],
  ];
  for (const [re, why, purpose] of rules) {
    if (re.test(q)) return { why, purpose };
  }
  return {
    why: "ইন্টারভিউ ও দৈনন্দিন React ডেভেলপমেন্টে প্রায়শই জিজ্ঞাসা হয়।",
    purpose: "সঠিকভাবে ব্যবহার করলে কোড পরিষ্কার ও বাগ কম থাকে।",
  };
}

function inferExample(question) {
  const q = question;
  const snippets = [
    [/usestate|স্টেট/i, `const [n, setN] = useState(0);\nsetN(v => v + 1);`],
    [/useeffect/i, `useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);`],
    [/usecontext|কনটেক্সট|context/i, `const Ctx = createContext(null);\nconst v = useContext(Ctx);`],
    [/usereducer/i, `const [s, d] = useReducer(reducer, init);\nd({ type: 'ADD' });`],
    [/useref|ref/i, `const ref = useRef(null);\nuseEffect(() => ref.current?.focus(), []);`],
    [/usememo/i, `const x = useMemo(() => heavy(a), [a]);`],
    [/usecallback/i, `const fn = useCallback(() => act(id), [id]);`],
    [/memo|মেমো/i, `export default memo(Row);`],
    [/lazy|স্প্লিট/i, `const P = lazy(() => import('./Page'));\n<Suspense fallback={null}><P /></Suspense>`],
    [/router|রাউট/i, `const nav = useNavigate();\n<Route path="/u/:id" element={<User />} />`],
    [/redux|রিডিউস|rtk|toolkit/i, `const n = useSelector(s => s.count);\ndispatch(increment());`],
    [/jsx/i, `return <main className="app">{children}</main>;`],
    [/key|লিস্ট/i, `items.map(i => <li key={i.id}>{i.name}</li>)`],
    [/controlled|আনকন্ট্রোল/i, `<input value={v} onChange={e => setV(e.target.value)} />`],
    [/portal/i, `createPortal(node, document.body);`],
    [/error boundary|এরর বাউন্ডারি/i, `<ErrorBoundary fallback={<p>Error</p>}><App /></ErrorBoundary>`],
    [/tanstack|react query/i, `useQuery({ queryKey: ['u'], queryFn: fetchUsers })`],
    [/zustand/i, `const count = useStore(s => s.count);`],
    [/hook form/i, `const { register, handleSubmit } = useForm();`],
    [/virtual|window/i, `import { FixedSizeList } from 'react-window';`],
    [/testing library|rtl/i, `render(<Btn />);\nawait userEvent.click(screen.getByRole('button'));`],
    [/vite|cra/i, `npm create vite@latest my-app -- --template react`],
  ];
  for (const [re, code] of snippets) {
    if (re.test(q)) return "```javascript\n" + code + "\n```";
  }
  return "```javascript\nfunction App() {\n  return <h1>Hello</h1>;\n}\n```";
}

function isTimelineLine(c) {
  return /^(\d{4}|২০[০-৯]{2})[:\s]/.test(c.trim());
}
function isLabelValueLine(c) {
  const t = c.trim();
  return /^[^?।]{2,50}\s*:\s/.test(t) && t.length < 350;
}

function convertAnswer(rawAnswer, question) {
  let text = rawAnswer.trim();
  let memorize;

  const mem = text.match(/(?:💡\s*)?মুখস্থ[:\s]+(.+)$/is);
  if (mem) {
    memorize = mem[1].trim().replace(/\n+/g, " ");
    text = text.slice(0, mem.index).trim();
  }

  const codeBlocks = [];
  text = text.replace(/```(?:javascript|js)?\n?([\s\S]*?)```/g, (_, code) => {
    codeBlocks.push("```javascript\n" + code.trim() + "\n```");
    return "\n";
  });

  const chunks = text
    .split(/\n\n+/)
    .map((c) => c.replace(/\n/g, " ").trim())
    .filter(Boolean);

  const meta = contextualMeta(question);
  let what, why, purpose;

  const mostlyList =
    chunks.length >= 2 &&
    chunks.every((c) => isTimelineLine(c) || isLabelValueLine(c) || /^[•*-]\s/.test(c));

  if (mostlyList) {
    what = chunks.join("\n");
    why = meta.why;
    purpose = meta.purpose;
  } else if (chunks.length >= 3) {
    what = chunks[0];
    why = chunks[1];
    purpose = chunks.slice(2).join(" ");
  } else if (chunks.length === 2) {
    what = chunks[0];
    why = chunks[1];
    purpose = meta.purpose;
  } else if (chunks.length === 1) {
    what = chunks[0];
    why = meta.why;
    purpose = meta.purpose;
  } else {
    what = "React-সম্পর্কিত গুরুত্বপূর্ণ ধারণা।";
    why = meta.why;
    purpose = meta.purpose;
  }

  let example = codeBlocks[0];
  if (!example) {
    const codeish = chunks.find((p) =>
      /^(const |function |import |export |class |return <|<[A-Za-z]|React\.)/.test(p),
    );
    if (codeish) {
      example = "```javascript\n" + codeish.replace(/^javascript\s*/i, "") + "\n```";
    } else {
      example = inferExample(question);
    }
  }

  if (memorize) memorize = memorize.replace(/^💡\s*/, "");

  return {
    what: truncate(what),
    why: truncate(why),
    purpose: truncate(purpose),
    example: example.trim(),
    memorize: memorize ? truncate(memorize, 130) : undefined,
  };
}

function emitEntry({ q, parts }) {
  const lines = [`  {`, `    q: ${JSON.stringify(q)},`, `    a: A({`];
  for (const key of ["what", "why", "purpose", "example"]) {
    lines.push(`      ${key}: ${JSON.stringify(parts[key])},`);
  }
  if (parts.memorize) {
    lines.push(`      memorize: ${JSON.stringify(parts.memorize)},`);
  }
  lines.push(`    }),`, `  }`);
  return lines.join("\n");
}

function generateFile(exportName, pairs) {
  const entries = pairs.map((p) =>
    emitEntry({ q: p.q, parts: convertAnswer(p.a, p.q) }),
  );
  return `import type { QA } from "./types";
import { formatAnswer as A } from "./formatAnswer";

export const ${exportName}: QA[] = [
${entries.join(",\n")},
];
`;
}

// Re-parse from backup: read original content if we need - use git or stored originals
// For re-run: parse current files won't work well. Load from git.
import { execSync } from "child_process";

function loadOriginalPairs(file) {
  try {
    const rel = path.relative(path.join(__dirname, ".."), file).replace(/\\/g, "/");
    const old = execSync(`git show HEAD:${rel}`, {
      cwd: path.join(__dirname, ".."),
      encoding: "utf8",
    });
    return parseQAsFromTsContent(old);
  } catch {
    return parseQAsFromTs(file);
  }
}

function parseQAsFromTsContent(content) {
  const pairs = [];
  const re =
    /\{\s*q:\s*"((?:\\.|[^"\\])*)"\s*,\s*a:\s*"((?:\\.|[^"\\])*)"\s*\}/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    pairs.push({
      q: JSON.parse(`"${m[1]}"`),
      a: JSON.parse(`"${m[2]}"`),
    });
  }
  return pairs;
}

// Original answers from git (pre-conversion) or fallback current A()-wrapped won't parse - use git
const reactPath = path.join(DATA, "react.ts");
const extraPath = path.join(DATA, "react-interview-extra.ts");

let reactPairs = loadOriginalPairs(reactPath);
let extraPairs = loadOriginalPairs(extraPath);

if (reactPairs.length < 400) {
  // git HEAD may not have file; read backup from agent - use inline restore
  const backup = fs.readFileSync(reactPath, "utf8");
  // If already A({ format, try to extract from git stash
  console.warn("Using current react.ts parse - originals may be degraded");
  reactPairs = parseQAsFromTsContent(
    fs.readFileSync(path.join(__dirname, "react-original-backup.json"), "utf8").catch?.() ||
      backup,
  );
}

// Save originals before first run if missing
const backupPath = path.join(__dirname, "react-qa-backup.json");
if (!fs.existsSync(backupPath)) {
  try {
    const rel = "src/data/react.ts";
    const old = execSync(`git show HEAD:${rel}`, {
      cwd: path.join(__dirname, ".."),
      encoding: "utf8",
    });
    const pairs = parseQAsFromTsContent(old);
    fs.writeFileSync(backupPath, JSON.stringify(pairs, null, 0));
    const extraOld = execSync(`git show HEAD:src/data/react-interview-extra.ts`, {
      cwd: path.join(__dirname, ".."),
      encoding: "utf8",
    });
    fs.writeFileSync(
      path.join(__dirname, "react-extra-backup.json"),
      JSON.stringify(parseQAsFromTsContent(extraOld), null, 0),
    );
  } catch (e) {
    console.warn("Could not backup from git:", e.message);
  }
}

if (fs.existsSync(backupPath)) {
  reactPairs = JSON.parse(fs.readFileSync(backupPath, "utf8"));
}
const extraBackup = path.join(__dirname, "react-extra-backup.json");
if (fs.existsSync(extraBackup)) {
  extraPairs = JSON.parse(fs.readFileSync(extraBackup, "utf8"));
}

fs.writeFileSync(reactPath, generateFile("reactQAs", reactPairs), "utf8");

console.log(`Updated react.ts: ${reactPairs.length} questions`);
console.log(`Extra file: hand-written separately`);
