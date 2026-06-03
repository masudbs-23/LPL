import type { QA } from "./types";
import { formatAnswer as A, bilingualQ } from "./formatAnswer";

export const nodejsInterviewExtra: QA[] = [
  bilingualQ(
    "পারফরম্যান্স: Event loop blocking এড়ানো",
    "Performance: Avoid blocking the event loop",
    A({
      what: {
        bn: "সিঙ্ক CPU-heavy কাজ (বড় JSON parse, crypto loop) main thread ব্লক করে।",
        en: "Sync CPU-heavy work (huge JSON parse, crypto loops) blocks the main thread.",
      },
      why: {
        bn: "সব request দাঁড়িয়ে যায় — latency spike।",
        en: "All requests stall — latency spikes.",
      },
      purpose: {
        bn: "worker_threads, queue, বা আলাদা সার্ভিস।",
        en: "Use worker_threads, queues, or separate services.",
      },
      example: {
        bn: "ইমেজ রিসাইজ → worker; API থ্রেড ফ্রি।",
        en: "Image resize in worker; API thread stays free.",
      },
    }),
  ),
  bilingualQ(
    "পারফরম্যান্স: Cluster module",
    "Performance: Node.js cluster module",
    A({
      what: {
        bn: "এক মেশিনে একাধিক worker process — CPU কোর ব্যবহার।",
        en: "Multiple worker processes per machine — use CPU cores.",
      },
      why: {
        bn: "Node single-threaded — cluster দিয়ে throughput বাড়ে।",
        en: "Node is single-threaded — cluster increases throughput.",
      },
      purpose: {
        bn: "স্টেটলেস HTTP API-তে common।",
        en: "Common for stateless HTTP APIs.",
      },
      example: {
        bn: "cluster.fork() — ৪ কোর = ৪ worker; PM2ও একই ধারণা।",
        en: "cluster.fork() — 4 cores = 4 workers; PM2 similar.",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: Memory leak ডিবাগ",
    "Technical: Debugging memory leaks in Node",
    A({
      what: {
        bn: "heap snapshot, --inspect, clinic.js, growing RSS।",
        en: "heap snapshot, --inspect, clinic.js, growing RSS.",
      },
      why: {
        bn: "গ্লোবাল/ক্লোজারে রেফারেন্স ধরে রাখলে GC মুছে না।",
        en: "Globals/closures keep references — GC cannot free.",
      },
      purpose: {
        bn: "লং-রানিং প্রোডাকশন সার্ভার।",
        en: "Long-running production servers.",
      },
      example: {
        bn: "ইভেন্ট লিসেনার remove না করা — leak; weakMap/once ব্যবহার।",
        en: "Listeners not removed — leak; use once/cleanup.",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: Rate limiting ও backpressure",
    "Technical: Rate limiting and backpressure",
    A({
      what: {
        bn: "Rate limit = request ক্যাপ; backpressure = producer দ্রুত হলে consumer ধীর করুন।",
        en: "Rate limit caps requests; backpressure slows producers when consumers lag.",
      },
      why: {
        bn: "OOM ও cascade failure এড়ায়।",
        en: "Prevents OOM and cascade failures.",
      },
      purpose: {
        bn: "API gateway + stream.pipe() highWaterMark।",
        en: "API gateway + stream.pipe() highWaterMark.",
      },
      example: {
        bn: "Redis token bucket + Express middleware express-rate-limit",
        en: "Redis token bucket + express-rate-limit middleware",
      },
    }),
  ),
  bilingualQ(
    "টেকনিক্যাল: Graceful shutdown",
    "Technical: Graceful shutdown in Node",
    A({
      what: {
        bn: "SIGTERM-এ নতুন request না নিয়ে চলমান শেষ করে exit।",
        en: "On SIGTERM stop accepting new work, finish in-flight, then exit.",
      },
      why: {
        bn: "Kubernetes deploy-এ connection কাটা এড়ায়।",
        en: "Avoids dropped connections during K8s deploys.",
      },
      purpose: {
        bn: "zero-downtime deploy।",
        en: "Zero-downtime deploys.",
      },
      example: {
        bn: "server.close() + DB disconnect + timeout fallback",
        en: "server.close() + DB disconnect + timeout fallback",
      },
    }),
  ),
];
