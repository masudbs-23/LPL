import type { Topic } from "./types";
import { sqlQAs } from "./sql";
import { nosqlQAs } from "./nosql";
import { nosqlAdvancedQAs } from "./nosql-advanced";
import { nodejsQAs } from "./nodejs";
import { nodejsAdvancedQAs } from "./nodejs-advanced";
import { reactQAs } from "./react";
import { reactInterviewExtra } from "./react-interview-extra";
import { experienceCommonQAs } from "./experience-common";
import { interviewOneLiners } from "./interview-one-liners";
import { javascriptInterviewPrepQAs } from "./javascript-interview-prep";
import { javascriptInterviewExtraQAs } from "./javascript-interview-extra";
import { typescriptInterviewPrepQAs } from "./typescript-interview-prep";

export const topics: Record<string, Topic> = {
  "one-liners": {
    slug: "one-liners",
    title: "Interview One-liners",
    titleBn: "ইন্টারভিউতে এক লাইনে",
    description: "One-liner উত্তর — দ্রুত রিভিশন/মুখস্থ করার জন্য (BN/EN)।",
    color: "react",
    icon: "🧠",
    qas: interviewOneLiners,
  },
  javascript: {
    slug: "javascript",
    title: "JavaScript Interview Preparation",
    titleBn: "জাভাস্ক্রিপ্ট (ইন্টারভিউ প্রিপ)",
    description: "Core JS one-liners — execution, scope, async, OOP, performance, browser concepts (BN/EN)।",
    color: "node",
    icon: "🟨",
    qas: [...javascriptInterviewPrepQAs, ...javascriptInterviewExtraQAs],
  },
  typescript: {
    slug: "typescript",
    title: "TypeScript Interview Preparation",
    titleBn: "টাইপস্ক্রিপ্ট (ইন্টারভিউ প্রিপ)",
    description: "৪০ one-liner — types, generics, utility types, strict mode, React+TS (BN/EN)।",
    color: "node",
    icon: "🔷",
    qas: typescriptInterviewPrepQAs,
  },
  sql: {
    slug: "sql",
    title: "SQL",
    titleBn: "এসকিউএল",
    description: "১০০+ প্রশ্ন — JOIN, Index, ACID, PostgreSQL, performance, Node+SQL।",
    color: "sql",
    icon: "🗄️",
    qas: [...sqlQAs, ...experienceCommonQAs],
  },
  nosql: {
    slug: "nosql",
    title: "NoSQL / MongoDB",
    titleBn: "নো-এসকিউএল",
    description: "৯০ প্রশ্ন — Basic + Advanced: writeConcern, sharding, aggregation, production।",
    color: "nosql",
    icon: "🍃",
    qas: [...nosqlQAs, ...nosqlAdvancedQAs, ...experienceCommonQAs],
  },
  nodejs: {
    slug: "nodejs",
    title: "Node.js",
    titleBn: "নোড.জেএস",
    description: "৮৫ প্রশ্ন — Senior + Advanced: Event Loop, libuv, Redis, K8s, system design।",
    color: "node",
    icon: "⚙️",
    qas: [...nodejsQAs, ...nodejsAdvancedQAs, ...experienceCommonQAs],
  },
  react: {
    slug: "react",
    title: "React.js",
    titleBn: "রিঅ্যাক্ট",
    description: "৪০৮+ প্রশ্ন (৩১৯ মূল + ৮৯ ক্লাস/পুরনো) — Hooks, Redux, performance, BN/EN।",
    color: "react",
    icon: "⚛️",
    qas: [...reactQAs, ...reactInterviewExtra, ...experienceCommonQAs],
  },
};

export const topicList = Object.values(topics);
