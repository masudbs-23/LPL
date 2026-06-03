import type { QA } from "./types";
import { formatAnswer as A, bilingualQ } from "./formatAnswer";

export const nosqlInterviewExtra: QA[] = [
  bilingualQ(
    "পারফরম্যান্স: MongoDB slow query কীভাবে খুঁজবেন?",
    "Performance: How do you find slow MongoDB queries?",
    A({
      what: {
        bn: "profiler, explain(), index usage, COLLSCAN এড়ান।",
        en: "profiler, explain(), index usage, avoid COLLSCAN.",
      },
      why: {
        bn: "COLLSCAN = পুরো কালেকশন স্ক্যান — বড় ডেটায় ধীর।",
        en: "COLLSCAN = full collection scan — slow at scale.",
      },
      purpose: {
        bn: "ইন্টারভিউতে পারফরম্যান্স টিউনিং প্রশ্ন আসে।",
        en: "Performance tuning is common in interviews.",
      },
      example: {
        bn: "db.orders.find({status:'paid'}).explain('executionStats')",
        en: "db.orders.find({status:'paid'}).explain('executionStats')",
      },
    }),
  ),
  bilingualQ(
    "পারফরম্যান্স: Working set ও RAM",
    "Performance: Working set and RAM",
    A({
      what: {
        bn: "সচরাচর ব্যবহৃত ডেটা RAM-এ থাকা উচিত (working set)।",
        en: "Frequently accessed data should fit in RAM (working set).",
      },
      why: {
        bn: "RAM-এর বাইরে গেলে disk I/O — লেটেন্সি বাড়ে।",
        en: "Beyond RAM → disk I/O and higher latency.",
      },
      purpose: {
        bn: "ইনস্ট্যান্স সাইজ ও ইনডেক্স প্ল্যান।",
        en: "Size instances and plan indexes.",
      },
      example: {
        bn: "১০০GB ডেটা, ১৬GB RAM — হট ডেটা ইনডেক্স + আর্কাইভ পুরনো।",
        en: "100GB data, 16GB RAM — index hot data + archive old.",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: Replica set election",
    "Technical: MongoDB replica set election",
    A({
      what: {
        bn: "Primary নেইলে secondary ভোট দিয়ে নতুন primary।",
        en: "If primary fails, secondaries elect a new primary.",
      },
      why: {
        bn: "হাই অ্যাভেইলেবিলিটি।",
        en: "High availability.",
      },
      purpose: {
        bn: "প্রোডাকশনে ৩+ নোড (odd)।",
        en: "Use 3+ nodes (odd) in production.",
      },
      example: {
        bn: "Primary down → ~১০–৩০s election — write brief outage।",
        en: "Primary down → ~10–30s election — brief write outage.",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: Schema design — embed vs reference",
    "Technical: Embed vs reference in MongoDB",
    A({
      what: {
        bn: "Embed = nested doc; Reference = ObjectId লিংক।",
        en: "Embed = nested doc; Reference = ObjectId link.",
      },
      why: {
        bn: "পড়া প্যাটার্ন ও আপডেট ফ্রিকোয়েন্সি ঠিক করে।",
        en: "Depends on read patterns and update frequency.",
      },
      purpose: {
        bn: "১ query-তে সব লাগলে embed; শেয়ারড এনটিটি reference।",
        en: "Embed for one-query reads; reference for shared entities.",
      },
      example: {
        bn: "Order-এ line items embed; User আলাদা collection।",
        en: "Embed line items in order; User in separate collection.",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: Transaction multi-document",
    "Technical: Multi-document transactions in MongoDB",
    A({
      what: {
        bn: "Replica set-এ ACID ট্রানজেকশন (৪.০+)।",
        en: "ACID transactions on replica sets (4.0+).",
      },
      why: {
        bn: "একাধিক কালেকশনে consistent আপডেট।",
        en: "Consistent updates across collections.",
      },
      purpose: {
        bn: "পেমেন্ট + ইনভেন্টরি একসাথে।",
        en: "Payment + inventory together.",
      },
      example: {
        bn: "session.startTransaction() → commit/abort",
        en: "session.startTransaction() → commit/abort",
      },
    }),
  ),
];
