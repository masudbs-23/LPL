export const STRUCTURED_PREFIX = "__STRUCTURED_ANSWER_V1__";

export type LocaleText = string | { bn: string; en?: string };

export interface AnswerParts {
  what: LocaleText;
  why: LocaleText;
  purpose: LocaleText;
  example: LocaleText;
  memorize?: LocaleText;
}

const LABELS = {
  what: { bn: "কী?", en: "What?" },
  why: { bn: "কেন?", en: "Why?" },
  purpose: { bn: "উদ্দেশ্য", en: "Purpose" },
  example: { bn: "উদাহরণ", en: "Example" },
  memorize: { bn: "💡 মুখস্থ", en: "💡 Remember" },
} as const;

function resolveText(t: LocaleText): { bn: string; en: string } {
  if (typeof t === "string") return { bn: t, en: t };
  return { bn: t.bn, en: t.en ?? t.bn };
}

/** Builds a structured answer string (parsed by AnswerRenderer with locale). */
export function formatAnswer(parts: AnswerParts): string {
  const keys = ["what", "why", "purpose", "example"] as const;
  const sections = keys.map((key) => {
    const text = resolveText(parts[key]);
    return { key, label: LABELS[key], bn: text.bn, en: text.en };
  });
  if (parts.memorize) {
    const text = resolveText(parts.memorize);
    sections.push({ key: "memorize", label: LABELS.memorize, bn: text.bn, en: text.en });
  }
  return STRUCTURED_PREFIX + JSON.stringify({ sections });
}

export function isStructuredAnswer(text: string): boolean {
  return text.startsWith(STRUCTURED_PREFIX);
}

export function renderStructuredAnswer(text: string, locale: "bn" | "en"): string {
  if (!isStructuredAnswer(text)) return text;
  try {
    const { sections } = JSON.parse(text.slice(STRUCTURED_PREFIX.length)) as {
      sections: Array<{
        label: { bn: string; en: string };
        bn: string;
        en: string;
      }>;
    };
    return sections
      .map((s) => {
        const label = locale === "bn" ? s.label.bn : s.label.en;
        const body = locale === "bn" ? s.bn : s.en;
        return `${label}\n${body}`;
      })
      .join("\n\n");
  } catch {
    return text;
  }
}

/** Bilingual question helper for new Q&A entries. */
export function bilingualQ(qBn: string, qEn: string, a: string): { q: string; qEn: string; a: string } {
  return { q: qBn, qEn, a };
}
