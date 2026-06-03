import type { QA } from "./types";

/** Common 5+ years / behavioral — সব টপিকে যোগ হয় */
export const experienceCommonQAs: QA[] = [
  {
    q: "অভিজ্ঞতা: ৫+ বছর ক্যারিয়ার এক মিনিটে",
    qEn: "Experience: 5+ year career in one minute",
    a: "রোল, stack, বড় impact (latency, revenue, users) — ৩–৪ bullet chronological।\n\nExample:\n\"৫ বছর MERN — payment service, latency ৪০% কম, ৬ জন mentor।\"\n\n💡 Interview: confidence + clarity",
  },
  {
    q: "কঠিন production bug সমাধান",
    qEn: "Hard production bug you fixed",
    a: "Symptom → logs/metrics → hypothesis → root cause → fix → postmortem\n\nExample: Redis TTL ভুল → cache stampede → rate limit + jitter",
  },
  {
    q: "ডেডলাইন মিস হলে কী করবেন?",
    qEn: "Missing a deadline",
    a: "আগে stakeholder জানান\nScope কাটা / priority\nনতুন timeline + risk লিখিত\n\n💡 Senior = proactive communication",
  },
  {
    q: "জুনিয়র মেন্টরিং",
    qEn: "Mentoring juniors",
    a: "Code review, pairing, ছোট task, weekly 1:1\n\nImpact: onboarding time কম, team quality বাড়ে",
  },
  {
    q: "Technical trade-off",
    qEn: "Technical trade-offs",
    a: "Business goal, scale, team skill, maintenance cost\n\nExample: Mongo vs Postgres — reporting জটিল হলে SQL",
  },
];
