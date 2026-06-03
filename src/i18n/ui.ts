import type { Locale } from "@/contexts/LocaleContext";

export const ui = {
  bn: {
    tagline: "বাংলায় তৈরি · উদাহরণ ও কোডসহ",
    heroTitle1: "ইন্টারভিউ",
    heroTitle2: "প্রস্তুতি",
    heroTitle3: "এবার মাতৃভাষায়।",
    heroDesc:
      "SQL, NoSQL (MongoDB), Node.js এবং React.js — সব গুরুত্বপূর্ণ ইন্টারভিউ প্রশ্নের সরল ব্যাখ্যা, উদাহরণ এবং মুখস্থ করার টেকনিকসহ — এক জায়গায়।",
    start: "শুরু করুন",
    questions: "প্রশ্ন",
    footer: "বাংলায় শিখুন",
    thanks: "ধন্যবাদ পড়ার জন্য 🙏",
    allTopics: "← সব টপিক",
    searchPlaceholder: "প্রশ্ন খুঁজুন... (যেমন: JOIN, Promise, Stream)",
    showing: "প্রশ্ন দেখানো হচ্ছে",
    notFound: "কোনো প্রশ্ন পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।",
    topicNotFound: "টপিক পাওয়া যায়নি",
    goHome: "← হোমে ফিরুন",
    subtitle: "বাংলায় ইন্টারভিউ প্রস্তুতি",
    langBn: "বাংলা",
    langEn: "English",
  },
  en: {
    tagline: "Bilingual · Examples & code included",
    heroTitle1: "Interview",
    heroTitle2: "prep",
    heroTitle3: "in your language.",
    heroDesc:
      "SQL, NoSQL (MongoDB), Node.js, and React.js — important interview Q&A with simple explanations, examples, and memory tips — all in one place.",
    start: "Get started",
    questions: "questions",
    footer: "Learn in Bangla & English",
    thanks: "Thanks for reading 🙏",
    allTopics: "← All topics",
    searchPlaceholder: "Search questions... (e.g. JOIN, Promise, memo)",
    showing: "questions shown",
    notFound: "No questions found. Try another keyword.",
    topicNotFound: "Topic not found",
    goHome: "← Back home",
    subtitle: "Interview prep · BN / EN",
    langBn: "বাংলা",
    langEn: "English",
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}

export function displayQuestion(q: string, qEn: string | undefined, locale: Locale): string {
  if (locale === "en" && qEn) return qEn;
  return q;
}

export function displayAnswer(a: string, aEn: string | undefined, locale: Locale): string {
  const bn = a;
  const en = aEn ?? a;

  // Show both languages with the selected locale first.
  if (locale === "bn") {
    if (!aEn) return bn;
    return `${bn}\n\n---\n\nEnglish\n${en}`;
  }

  // locale === "en"
  if (!a) return en;
  return `${en}\n\n---\n\nবাংলা\n${bn}`;
}
