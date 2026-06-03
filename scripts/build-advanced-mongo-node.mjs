import { writeFileSync } from "fs";

const qa = (q, qEn, a) =>
  `  { q: ${JSON.stringify(q)}, qEn: ${JSON.stringify(qEn)}, a: ${JSON.stringify(a)} },`;

const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
function bnNum(n) {
  return String(n)
    .split("")
    .map((d) => bn[+d])
    .join("");
}

const mongoAdvanced = [
  [
    "writeConcern",
    `Data write কতটা safely save হবে সেটা control করে।

\`\`\`javascript
{ writeConcern: { w: "majority" } }
\`\`\`

মানে majority replica তে save হওয়ার পরে success দিবে।

Interview Follow-up — Why important?
Critical data consistency — Payment system, Banking`,
  ],
  [
    "readConcern",
    `Read করার সময় কত consistent data লাগবে।

Types: local | majority | linearizable`,
  ],
  [
    "readPreference",
    `Data কোন replica থেকে read হবে।

Example: primary, secondary, nearest

Use case: Heavy read traffic distribute করা`,
  ],
  [
    "MongoDB transaction internally",
    `WiredTiger engine snapshot isolation use করে।

Transaction চলাকালে consistent snapshot maintain হয়।

💡 Senior tip: "MongoDB transactions are heavier than relational DB joins — use carefully."`,
  ],
  [
    "MongoDB transaction expensive কেন?",
    `Multiple document lock
Snapshot maintain
Replica synchronization

→ Performance impact`,
  ],
  [
    "Document growth problem",
    `Document বড় হলে relocation হতে পারে।

Result: Fragmentation, Performance issue`,
  ],
  [
    "Working Set",
    `Frequently accessed data + indexes যা RAM এ থাকে।

Important: Working set RAM এ fit না করলে performance drop`,
  ],
  [
    "WiredTiger",
    `MongoDB default storage engine।

Features: Compression, Document-level locking, Better concurrency`,
  ],
  [
    "MongoDB locking level",
    `Old: Collection lock
New: Document-level lock`,
  ],
  [
    "TTL Index",
    `Automatic expiration।

\`\`\`javascript
db.tokens.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)
\`\`\`

১ ঘণ্টা পরে auto delete`,
  ],
  [
    "Aggregation pipeline optimization",
    `Early $match
Reduce document size
Avoid unnecessary $lookup
Proper index
Use projection`,
  ],
  ["$facet", `Single aggregation এ multiple pipeline run`],
  ["$unwind", `Array break করে multiple document বানায়`],
  ["$graphLookup", `Recursive relation query — tree/hierarchy data`],
  [
    "Aggregation memory limit",
    `Default ~100MB — need allowDiskUse: true for large pipelines`,
  ],
  [
    "Sharding challenges",
    `Uneven distribution
Hot shard
Complex query
Resharding difficulty`,
  ],
  ["Hot shard", `সব traffic এক shard এ গেলে — bottleneck`],
  [
    "Good shard key characteristics",
    `High cardinality
Even distribution
Frequently queried`,
  ],
  ["Chunk migration", `Shard এর মধ্যে data move — balancer`],
  [
    "Monotonically increasing shard key bad",
    `সব write এক shard এ যায়।

Example: auto increment id`,
  ],
  [
    "MongoDB slow suddenly — কী check?",
    `Index usage
RAM usage
Disk I/O
Replication lag
Slow query log
Large aggregation`,
  ],
  ["Replication lag", `Secondary primary থেকে পিছিয়ে থাকা`],
  ["Oplog", `Operation log — replication এর জন্য`],
  [
    "MongoDB backup strategy",
    `mongodump
Snapshot backup
Point-in-time recovery`,
  ],
  [
    "Why avoid unbounded arrays?",
    `Document huge হয়ে যায় — performance issue`,
  ],
];

const nodeAdvanced = [
  [
    "Event loop phases",
    `Very important senior question।

Phases:
1. Timers
2. Pending callbacks
3. Idle/prepare
4. Poll
5. Check
6. Close callbacks`,
  ],
  [
    "Microtask queue vs Callback queue",
    `Microtask (higher priority): Promise.then, process.nextTick

Callback queue (lower): setTimeout, setImmediate`,
  ],
  [
    "process.nextTick dangerous কেন?",
    `Too much use → event loop starvation`,
  ],
  [
    "Node.js internally async handle",
    `Event loop + libuv + Thread pool`,
  ],
  [
    "libuv কী?",
    `Node.js async I/O library — File system, Network, Thread pool`,
  ],
  [
    "Thread pool size",
    `Default: 4 — change UV_THREADPOOL_SIZE=8`,
  ],
  [
    "CPU intensive task problem",
    `Single thread block হয়ে যায় — সব request stall`,
  ],
  [
    "CPU intensive solution",
    `Worker threads | Queue | Microservice`,
  ],
  ["Worker Threads", `Separate thread এ JS run — same process`],
  [
    "Cluster vs Worker Threads",
    `Cluster — Multiple process
Worker Threads — Same process, multiple threads`,
  ],
  [
    "Memory leak detect",
    `Heap snapshot | Chrome DevTools | Monitoring`,
  ],
  [
    "Common memory leak causes",
    `Global variable | Unremoved listener | Large cache | Closure`,
  ],
  ["Streams কেন important?", `Large file memory efficiently process`],
  [
    "Types of stream",
    `Readable | Writable | Duplex | Transform`,
  ],
  [
    "Backpressure",
    `Consumer slower than producer — Streams এ critical`,
  ],
  ["Helmet", `Security middleware — HTTP headers harden`],
  ["CSRF", `Fake authenticated request attack`],
  ["CORS", `Cross-origin access control`],
  [
    "Rate limiting implement",
    `IP tracking | Redis | Middleware (express-rate-limit)`,
  ],
  ["Why bcrypt?", `Password hashing — slow by design, salt`],
  ["API Gateway", `Single entry point for microservices`],
  [
    "Circuit breaker pattern",
    `Failing service temporarily stop calling — resilience`,
  ],
  [
    "Idempotency",
    `Same request multiple times → same result

Payment API তে critical`,
  ],
  [
    "Saga pattern",
    `Distributed transaction handling — microservices`,
  ],
  [
    "CQRS",
    `Separate Read model and Write model`,
  ],
  [
    "Redis persistence",
    `RDB (snapshot) | AOF (append-only file)`,
  ],
  ["Cache invalidation", `Stale cache remove/update`],
  [
    "Cache stampede",
    `Multiple request একসাথে DB hit — lock/single-flight fix`,
  ],
  ["BullMQ", `Background job queue — retry, delay, workers`],
  ["Queue retry strategy", `Temporary failure handle — exponential backoff`],
  ["Docker layer caching", `Build speed improve — order Dockerfile layers`],
  [
    "Multi-stage Docker build",
    `Small optimized production image`,
  ],
  [
    "Reverse proxy",
    `Client → proxy → backend — Example: Nginx`,
  ],
  ["Load balancer", `Traffic distribute multiple server এ`],
  ["Sticky session", `Same user same server — session affinity`],
  [
    "API suddenly 10x traffic",
    `Auto scaling | Redis cache | Queue | CDN | Read replica | Load balancer`,
  ],
  [
    "Database connection exhaustion",
    `Connection pooling | Query optimization | Leak check`,
  ],
  [
    "Why API latency increase",
    `Slow DB | Network | Large payload | Blocking code`,
  ],
  [
    "High memory debug",
    `Heap snapshot | GC analysis | Monitor memory trend`,
  ],
  [
    "Graceful shutdown",
    `Server close এর আগে pending request complete — SIGTERM handler`,
  ],
  ["PM2 cluster mode", `Multiple Node.js process — utilize cores`],
  ["Kubernetes কেন?", `Container orchestration — scale, deploy, health`],
  [
    "Health check endpoint",
    `/health — server healthy কিনা monitor`,
  ],
  [
    "Webhook vs Polling",
    `Webhook — Event push
Polling — Repeated request`,
  ],
  ["Long polling", `Server delayed response technique`],
  [
    "Payment API design",
    `Transaction | Idempotency | Retry | Queue | Audit log`,
  ],
  [
    "Chat application architecture",
    `WebSocket | Redis pub/sub | Scaling | Presence tracking`,
  ],
  [
    "Notification system design",
    `Queue | Retry | Worker | Push service (FCM/APNs)`,
  ],
  [
    "File upload scalable system",
    `S3 | CDN | Multipart upload | Queue processing`,
  ],
  [
    "URL shortener design",
    `Unique ID | Cache | DB indexing | Analytics`,
  ],
];

function buildFile(path, exportName, comment, items, startNum, prefix) {
  const rows = items.map((item, i) => {
    const n = startNum + i;
    const title = item[0];
    const body = item[1];
    const qBn = `${bnNum(n)}. [Advanced] ${prefix}${title}`;
    const qEn = `${n}. [Advanced] ${title}`;
    return qa(qBn, qEn, body);
  });
  writeFileSync(
    path,
    `import type { QA } from "./types";

/** ${comment} */
export const ${exportName}: QA[] = [
${rows.join("\n")}
];
`,
  );
  return items.length;
}

const m = buildFile(
  "src/data/nosql-advanced.ts",
  "nosqlAdvancedQAs",
  "Advanced MongoDB — production & deep level (৬৬–৯০)",
  mongoAdvanced.map(([t, a]) => [t, a]),
  66,
  "",
);

const n = buildFile(
  "src/data/nodejs-advanced.ts",
  "nodejsAdvancedQAs",
  "Advanced Node.js — senior / system design (৩৬–৮৫)",
  nodeAdvanced.map(([t, a]) => [t, a]),
  36,
  "",
);

console.log("Advanced MongoDB:", m, "| Advanced Node.js:", n);
