/**
 * Parse English Q&A from sudheerj/reactjs-interview-questions README.md
 * Format: "N. ### Question title" (or ####) ... answer ... "[⬆ Back to Top]"
 */

const QUESTION_RE = /^\s*(\d+)\.\s+#{3,4}\s+(.+)$/gm;
const BACK_TO_TOP = /\[⬆\s*Back to Top\]/i;

/** README body numbering is off vs this site's 1–319 list in the Hooks section. */
function applyRenumber(map) {
  const at307 = map.get(307);
  if (at307 && /custom\s+react\s+hooks/i.test(at307.q)) {
    map.set(308, at307);
    map.delete(307);
  }
  if (map.has(306)) {
    map.set(307, map.get(306));
    map.delete(306);
  }
}

/** Strip common markdown to plain text; preserve fenced code blocks. */
export function markdownToPlain(md) {
  let text = md.trim();
  if (!text) return "";

  text = text.replace(BACK_TO_TOP, "");
  text = text.replace(/^\s*See deep-dive answer\s*$/gim, "");
  text = text.replace(/\r\n/g, "\n");

  text = text.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    let l = lang || "javascript";
    if (l === "js" || l === "jsx" || l === "jsx harmony") l = "javascript";
    return `\n\`\`\`${l}\n${code.trimEnd()}\n\`\`\``;
  });

  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  text = text.replace(/\*\*([^*]+)\*\*/g, "$1");
  text = text.replace(/\*([^*]+)\*/g, "$1");
  text = text.replace(/__([^_]+)__/g, "$1");
  text = text.replace(/<\/?Note>/gi, "");
  text = text.replace(/^!\w+.*$/gm, "");
  text = text.replace(/^See Class\s*$/gim, "");
  text = text.replace(/^#{1,6}\s+/gm, "");
  text = text.replace(/\n\*\*\s*$/g, "");
  text = text.replace(/\*\*\s*$/g, "");
  text = text.replace(/\n\*\s*$/g, "");
  text = text.replace(/\n{3,}/g, "\n\n");
  return text.trim();
}

function pickBest(items) {
  return items.reduce((a, b) => ((b.a?.length ?? 0) > (a.a?.length ?? 0) ? b : a));
}

function resolveDuplicates(num, items, map) {
  if (num === 317 && items.length >= 2) {
    const cleanup = items.find((i) => /cleanup/i.test(i.q));
    const useEvent = items.find((i) => /useEvent/i.test(i.q));
    if (cleanup) map.set(317, cleanup);
    if (useEvent) map.set(318, useEvent);
    return;
  }
  map.set(num, pickBest(items));
}

/**
 * @param {string} md Full README markdown (Core React through Miscellaneous, not Old Q&A)
 * @returns {Map<number, { q: string, a: string }>}
 */
function parseSection(md, { numberOffset = 0, applyHooksRenumber = false } = {}) {
  const groups = new Map();
  const starts = [];
  let m;
  const re = new RegExp(QUESTION_RE.source, QUESTION_RE.flags);
  while ((m = re.exec(md)) !== null) {
    starts.push({
      num: parseInt(m[1], 10),
      title: m[2].trim(),
      headerEnd: m.index + m[0].length,
      index: m.index,
    });
  }

  for (let i = 0; i < starts.length; i++) {
    const cur = starts[i];
    const next = starts[i + 1];
    const sliceEnd = next ? next.index : md.length;
    let body = md.slice(cur.headerEnd, sliceEnd);
    const backIdx = body.search(BACK_TO_TOP);
    if (backIdx >= 0) body = body.slice(0, backIdx);
    const item = { q: cur.title, a: markdownToPlain(body) };
    if (!groups.has(cur.num)) groups.set(cur.num, []);
    groups.get(cur.num).push(item);
  }

  const map = new Map();
  for (const [num, items] of groups) {
    if (items.length === 1) {
      const item = items[0];
      if (num === 318 && /best practices/i.test(item.q)) {
        map.set(319, item);
        continue;
      }
      const prev = map.get(num);
      if (!prev || item.a.length > prev.a.length) map.set(num, item);
    } else {
      resolveDuplicates(num, items, map);
    }
  }

  if (applyHooksRenumber) applyRenumber(map);

  if (numberOffset) {
    const shifted = new Map();
    for (const [num, item] of map) {
      shifted.set(num + numberOffset, item);
    }
    return shifted;
  }
  return map;
}

/** Main 1–319 React interview (Hooks renumber fixes applied). */
export function parseSudheerEnglish(md) {
  return parseSection(md, { applyHooksRenumber: true });
}

/** Old Q&A section (89 items); pass slice starting at `## Old Q&A`. */
export function parseSudheerOldEnglish(md) {
  return parseSection(md, { numberOffset: 319 });
}
