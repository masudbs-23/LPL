import type { QA } from "./types";
import { formatAnswer as A, bilingualQ } from "./formatAnswer";

export const sqlInterviewExtra: QA[] = [
  bilingualQ(
    "পারফরম্যান্স: Slow query কীভাবে ডিবাগ করবেন?",
    "Performance: How do you debug a slow SQL query?",
    A({
      what: {
        bn: "EXPLAIN/ANALYZE, execution plan, missing index, full table scan চেক।",
        en: "EXPLAIN/ANALYZE, execution plan, missing indexes, full table scans.",
      },
      why: {
        bn: "প্ল্যান দেখলে বোঝা যায় DB কোথায় সময় নিচ্ছে।",
        en: "The plan shows where the DB spends time.",
      },
      purpose: {
        bn: "৫+ বছরের রোলে DB টিউনিং প্রায়ই দরকার।",
        en: "Senior roles often need DB tuning.",
      },
      example: {
        bn: "```sql\nEXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 1;\n-- Seq Scan → index on user_id যোগ\n```",
        en: "```sql\nEXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 1;\n-- Seq Scan → add index on user_id\n```",
      },
      memorize: {
        bn: "Index column যেটা WHERE/JOIN-এ আছে",
        en: "Index columns used in WHERE/JOIN",
      },
    }),
  ),
  bilingualQ(
    "পারফরম্যান্স: Covering index কী?",
    "Performance: What is a covering index?",
    A({
      what: {
        bn: "ইনডেক্সে query-র সব কলাম থাকলে table-এ যেতে হয় না।",
        en: "Index includes all columns the query needs — no table lookup.",
      },
      why: {
        bn: "কম I/O, দ্রুত SELECT।",
        en: "Less I/O, faster SELECT.",
      },
      purpose: {
        bn: "হাই-ট্রাফিক রিপোর্ট অপটিমাইজ।",
        en: "Optimize high-traffic reports.",
      },
      example: {
        bn: "INDEX (user_id, created_at, amount) — শুধু ইনডেক্স থেকে aggregate।",
        en: "INDEX (user_id, created_at, amount) — aggregate from index only.",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: N+1 query সমস্যা SQL-এ",
    "Technical: N+1 query problem in SQL context",
    A({
      what: {
        bn: "১টি parent query + N বার child query — ORM-এ সাধারণ।",
        en: "One parent query + N child queries — common with ORMs.",
      },
      why: {
        bn: "লেটেন্সি ও DB লোড বাড়ে।",
        en: "Increases latency and DB load.",
      },
      purpose: {
        bn: "JOIN বা batch IN (...) দিয়ে ঠিক করুন।",
        en: "Fix with JOIN or batch IN (...).",
      },
      example: {
        bn: "users লোড → প্রতি user-এ orders; সমাধান: এক JOIN বা ২টি query।",
        en: "Load users → orders per user; fix: one JOIN or two queries.",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: Deadlock কী? কীভাবে এড়াবেন?",
    "Technical: What is a deadlock? How to avoid it?",
    A({
      what: {
        bn: "দুই ট্রানজেকশন একে অপরের লকের জন্য অপেক্ষা — cycle।",
        en: "Two transactions wait on each other's locks — a cycle.",
      },
      why: {
        bn: "DB একটিকে kill করে; রিট্রাই লাগতে পারে।",
        en: "DB kills one; retries may be needed.",
      },
      purpose: {
        bn: "একই অর্ডারে লক নিন, ছোট ট্রানজেকশন।",
        en: "Lock in same order, keep transactions short.",
      },
      example: {
        bn: "A: lock users→orders; B: orders→users — deadlock। সবাই users আগে।",
        en: "A: users→orders; B: orders→users — deadlock. Always users first.",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: Partitioning কখন?",
    "Technical: When to use table partitioning?",
    A({
      what: {
        bn: "বড় টেবিল ভাগ — range/list/hash (যেমন মাস অনুযায়ী)।",
        en: "Split huge tables — range/list/hash (e.g. by month).",
      },
      why: {
        bn: "পুরনো ডেটা আলাদা, query শুধু relevant partition স্ক্যান।",
        en: "Isolate old data; queries scan only relevant partitions.",
      },
      purpose: {
        bn: "লগ/ইভেন্ট টেবিলে ৫+ বছরের স্কেল।",
        en: "Scale logs/events over 5+ years.",
      },
      example: {
        bn: "orders_2024, orders_2025 — WHERE date range → এক partition।",
        en: "orders_2024, orders_2025 — date range hits one partition.",
      },
    }),
  ),
];
