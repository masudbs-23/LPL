import { writeFileSync } from "fs";

const qa = (q, qEn, a) =>
  `  { q: ${JSON.stringify(q)}, qEn: ${JSON.stringify(qEn)}, a: ${JSON.stringify(a)} },`;

const mongo = [
  ["১. MongoDB কী?", "1. What is MongoDB?", `MongoDB হলো document-based NoSQL database।

Data JSON-like document আকারে store হয়।

Example:
\`\`\`json
{
  "name": "Rahim",
  "age": 22
}
\`\`\``],
  ["২. Collection কী?", "2. What is a collection?", `SQL এর table এর মতো।

MongoDB তে table কে collection বলে।`],
  ["৩. Document কী?", "3. What is a document?", `SQL এর row এর মতো।

একটা single JSON object।`],
  ["৪. BSON কী?", "4. What is BSON?", `Binary JSON।

MongoDB internally BSON use করে।`],
  ["৫. MongoDB schema-less কেন বলে?", "5. Why is MongoDB called schema-less?", `কারণ fixed column structure লাগে না।

এক document এ:
\`\`\`json
{ "name": "Rahim" }
\`\`\`

অন্য document এ:
\`\`\`json
{ "name": "Karim", "email": "test@gmail.com" }
\`\`\`

এটা allowed।`],
  ["৬. _id কী?", "6. What is _id?", `প্রতিটা document এর unique id।

Automatically generate হয়।`],
  ["৭. ObjectId কী?", "7. What is ObjectId?", `MongoDB এর special unique ID type।

Example:
\`\`\`
ObjectId("507f1f77bcf86cd799439011")
\`\`\``],
  ["৮. find() কী?", "8. What is find()?", `Data fetch করতে।

\`\`\`javascript
db.users.find()
\`\`\``],
  ["৯. findOne() কী?", "9. What is findOne()?", `একটা document return করে।

\`\`\`javascript
db.users.findOne({ email: "test@gmail.com" })
\`\`\``],
  ["১০. insertOne() কী?", "10. What is insertOne()?", `একটা document insert।

\`\`\`javascript
db.users.insertOne({ name: "Rahim" })
\`\`\``],
  ["১১. insertMany() কী?", "11. What is insertMany()?", `Multiple document insert।`],
  ["১২. updateOne() কী?", "12. What is updateOne()?", `\`\`\`javascript
db.users.updateOne(
  { name: "Rahim" },
  { $set: { age: 25 } }
)
\`\`\``],
  ["১৩. deleteOne() কী?", "13. What is deleteOne()?", `একটা document delete।`],
  ["১৪. deleteMany() কী?", "14. What is deleteMany()?", `Multiple document delete।`],
  ["১৫. Projection কী?", "15. What is projection?", `Specific field show করা।

\`\`\`javascript
db.users.find({}, { name: 1 })
\`\`\``],
  ["১৬. $set কী?", "16. What is $set?", `Value update করে।`],
  ["১৭. $inc কী?", "17. What is $inc?", `Increment করে।

\`\`\`javascript
{ $inc: { balance: 100 } }
\`\`\``],
  ["১৮. $push কী?", "18. What is $push?", `Array তে data add।

\`\`\`javascript
{ $push: { skills: "Node.js" } }
\`\`\``],
  ["১৯. $pull কী?", "19. What is $pull?", `Array থেকে remove।`],
  ["২০. $in কী?", "20. What is $in?", `Multiple value match।

\`\`\`javascript
db.users.find({ role: { $in: ["admin", "user"] } })
\`\`\``],
  ["২১. Aggregation Framework কী?", "21. What is the aggregation framework?", `MongoDB এর powerful data processing system।

SQL এর GROUP BY এর মতো।`],
  ["২২. $match কী?", "22. What is $match?", `Filter করে।

\`\`\`javascript
{ $match: { age: { $gt: 18 } } }
\`\`\``],
  ["২৩. $group কী?", "23. What is $group?", `Group data।

\`\`\`javascript
{
  $group: {
    _id: "$department",
    total: { $sum: 1 }
  }
}
\`\`\``],
  ["২৪. $lookup কী?", "24. What is $lookup?", `MongoDB join।

\`\`\`javascript
{
  $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "orders"
  }
}
\`\`\`

💡 Senior interview এ খুব common।`],
  ["২৫. Aggregation vs find()", "25. Aggregation vs find()", `find() — Simple query

aggregation — Complex processing`],
  ["২৬. Index কী MongoDB তে?", "26. What is an index in MongoDB?", `Fast query করার জন্য।

\`\`\`javascript
db.users.createIndex({ email: 1 })
\`\`\``],
  ["২৭. Compound Index কী?", "27. What is a compound index?", `Multiple field এর index।

\`\`\`javascript
{ name: 1, email: 1 }
\`\`\``],
  ["২৮. Text Index কী?", "28. What is a text index?", `Search functionality।`],
  ["২৯. Why indexes improve performance?", "29. Why do indexes improve performance?", `Full collection scan avoid করে।`],
  ["৩০. Why too many indexes bad?", "30. Why are too many indexes bad?", `Write operation slow হয়।`],
  ["৩১. Embedding vs Referencing", "31. Embedding vs referencing", `Embedding — Nested data
\`\`\`json
{ "name": "Rahim", "orders": [] }
\`\`\`

Referencing — Separate collection relation`],
  ["৩২. কখন embedding use করবেন?", "32. When to use embedding?", `Small related data হলে।`],
  ["৩৩. কখন referencing use করবেন?", "33. When to use referencing?", `Large scalable relation হলে।`],
  ["৩৪. Denormalization কেন useful MongoDB তে?", "34. Why is denormalization useful in MongoDB?", `Read performance বাড়ায়।`],
  ["৩৫. Replica Set কী?", "35. What is a replica set?", `Multiple MongoDB server copy।

Purpose:
• High availability
• Backup`],
  ["৩৬. Primary & Secondary Node কী?", "36. Primary vs secondary node", `Primary — Write operation

Secondary — Read replica`],
  ["৩৭. Sharding কী?", "37. What is sharding?", `Large data multiple server এ ভাগ করা।`],
  ["৩৮. Shard Key কী?", "38. What is a shard key?", `Data distribution key।`],
  ["৩৯. Slow query optimize করবেন কীভাবে?", "39. How to optimize slow MongoDB queries?", `Index
Projection
Aggregation optimize
Limit data
Avoid large documents`],
  ["৪০. explain() কী?", "40. What is explain()?", `Query execution plan।

\`\`\`javascript
db.users.find().explain("executionStats")
\`\`\``],
  ["৪১. Collection scan কী?", "41. What is a collection scan?", `পুরো collection scan করা।

Slow।`],
  ["৪২. Covered Query কী?", "42. What is a covered query?", `সব field index থেকে পেয়ে গেলে — table fetch skip।`],
  ["৪৩. Pagination MongoDB তে কীভাবে?", "43. Pagination in MongoDB", `\`\`\`javascript
db.users.find().limit(10).skip(0)
\`\`\``],
  ["৪৪. Large skip কেন bad?", "44. Why is large skip bad?", `Performance slow হয়ে যায়।`],
  ["৪৫. Better pagination কী?", "45. Better pagination", `Cursor-based pagination।

\`\`\`javascript
find({ _id: { $gt: lastId } }).limit(10)
\`\`\``],
  ["৪৬. Authentication কীভাবে করেন?", "46. MongoDB authentication", `Username/password
Role-based access`],
  ["৪৭. SQL Injection MongoDB তে possible?", "47. NoSQL injection in MongoDB?", `NoSQL injection possible।

Input sanitize দরকার।`],
  ["৪৮. Why validate request body?", "48. Why validate request body?", `Invalid/malicious data prevent করতে।`],
  ["৪৯. Mongoose কী?", "49. What is Mongoose?", `MongoDB ODM library।

Node.js এ use হয়।

💡 Node.js developer interview এ খুব important`],
  ["৫০. Schema in Mongoose কী?", "50. Mongoose schema", `\`\`\`javascript
const UserSchema = new mongoose.Schema({
  name: String
})
\`\`\``],
  ["৫১. Model কী?", "51. What is a Mongoose model?", `Schema এর based collection handler।`],
  ["৫২. populate() কী?", "52. What is populate()?", `MongoDB relation fetch।

\`\`\`javascript
User.find().populate("orders")
\`\`\``],
  ["৫৩. lean() কেন use করেন?", "53. Why use lean()?", `Performance improve — plain JS object দেয়।`],
  ["৫৪. Middleware/Hook কী?", "54. Mongoose middleware/hooks", `Before/after operation logic।

Example: password hash`],
  ["৫৫. pre(\"save\") hook কী?", "55. What is pre('save') hook?", `Save এর আগে execute।`],
  ["৫৬. MongoDB vs PostgreSQL", "56. MongoDB vs PostgreSQL", `| MongoDB | PostgreSQL |
| Flexible schema | Structured schema |
| Fast development | Strong relational support |
| Nested document | Complex JOIN powerful |`],
  ["৫৭. MongoDB কখন bad choice?", "57. When is MongoDB a bad choice?", `Heavy JOIN
Complex transaction
Strong relational system`],
  ["৫৮. ACID transaction MongoDB support করে?", "58. Does MongoDB support ACID transactions?", `হ্যাঁ — newer versions এ multi-document transaction support আছে।`],
  ["৫৯. CAP theorem MongoDB কোথায় পড়ে?", "59. CAP theorem and MongoDB", `Generally CP oriented`],
  ["৬০. Why MongoDB popular in startups?", "60. Why MongoDB is popular in startups", `Fast iteration & flexible schema।`],
  ["৬১. 10 million user data handle করবেন কীভাবে?", "61. Handling 10 million users", `Sharding
Replica set
Proper indexing
Cache
Queue
Pagination`],
  ["৬২. MongoDB memory issue হলে কী করবেন?", "62. MongoDB memory issues", `Index optimize
Projection
Archive old data
Avoid huge document`],
  ["৬৩. Why avoid huge documents?", "63. Why avoid huge documents?", `MongoDB document size limit আছে।

Performance issue হয়।`],
  ["৬৪. MongoDB transaction use case?", "64. MongoDB transaction use cases", `Payment/order system।`],
  ["৬৫. Eventual consistency কী?", "65. What is eventual consistency?", `সব replica instantly sync নাও হতে পারে।`],
];

const node = [
  ["১. Node.js কী?", "1. What is Node.js?", `JavaScript runtime।

Built on Google V8 engine।

💡 Senior interview MUST know`],
  ["২. Node.js single-threaded কেন?", "2. Why is Node.js single-threaded?", `Event loop architecture use করে।`],
  ["৩. Event Loop কী?", "3. What is the event loop?", `Async operation handle system।

Node.js এর core concept।

💡 Senior interview এ MUST`],
  ["৪. Blocking vs Non-blocking", "4. Blocking vs non-blocking", `Blocking — এক কাজ শেষ না হলে অন্য কাজ wait

Non-blocking — Multiple task simultaneously manage`],
  ["৫. Callback কী?", "5. What is a callback?", `Function inside function — async complete হলে call।`],
  ["৬. Callback Hell কী?", "6. What is callback hell?", `Nested callback complexity — Promise/async fix করে।`],
  ["৭. Promise কী?", "7. What is a Promise?", `Async operation handling — pending/fulfilled/rejected`],
  ["৮. async/await কী?", "8. What is async/await?", `Promise cleaner syntax।`],
  ["৯. process.nextTick() কী?", "9. What is process.nextTick()?", `Current operation এর পরে immediately execute।`],
  ["১০. setImmediate() কী?", "10. What is setImmediate()?", `Next event loop cycle এ run।`],
  ["১১. Middleware কী?", "11. What is middleware?", `Request/response এর মাঝখানের function।`],
  ["১২. Express middleware types", "12. Express middleware types", `Application middleware
Error middleware
Third-party middleware`],
  ["১৩. Error handling middleware কী?", "13. Error handling middleware", `\`\`\`javascript
(err, req, res, next) => { ... }
\`\`\``],
  ["১৪. JWT কী?", "14. What is JWT?", `Authentication token — JSON Web Token`],
  ["১৫. Access token vs Refresh token", "15. Access vs refresh token", `Access Token — Short-lived

Refresh Token — New access token generate`],
  ["১৬. Microservice কী?", "16. What are microservices?", `Application ছোট service এ ভাগ করা।`],
  ["১৭. Monolith vs Microservice", "17. Monolith vs microservices", `Monolith — Single app

Microservice — Independent services`],
  ["১৮. Rate limiting কী?", "18. What is rate limiting?", `API abuse prevent।`],
  ["১৯. Caching কী?", "19. What is caching?", `Frequently used data temporary save।

Example: Redis`],
  ["২০. Queue system কেন use হয়?", "20. Why use a message queue?", `Heavy background task।

Example: email, notification`],
  ["২১. WebSocket কী?", "21. What is WebSocket?", `Real-time communication।`],
  ["২২. REST API vs GraphQL", "22. REST vs GraphQL", `REST — Multiple endpoint

GraphQL — Single endpoint flexible query`],
  ["২৩. Horizontal vs Vertical Scaling", "23. Horizontal vs vertical scaling", `Vertical — Server powerful করা

Horizontal — More server add`],
  ["২৪. Cluster module কী?", "24. What is the cluster module?", `Multi-core CPU utilize।`],
  ["২৫. PM2 কী?", "25. What is PM2?", `Node.js process manager — restart, logs, cluster mode`],
  ["২৬. High traffic API handle করবেন কীভাবে?", "26. Handling high traffic APIs", `Load balancer
Redis cache
DB indexing
Queue
Horizontal scaling`],
  ["২৭. Why Redis use করেন?", "27. Why use Redis?", `Fast in-memory cache।`],
  ["২৮. Message Queue examples", "28. Message queue examples", `RabbitMQ
Apache Kafka`],
  ["২৯. Why use Docker?", "29. Why use Docker?", `Environment consistency।`],
  ["৩০. CI/CD কী?", "30. What is CI/CD?", `Automatic build & deployment।`],
  ["৩১. How do you optimize Node.js API?", "31. How to optimize a Node.js API", `Caching
Pagination
DB indexing
Async processing
Compression
Load balancing`],
  ["৩২. How do you secure API?", "32. How to secure an API", `JWT
Rate limiting
Helmet
Validation
HTTPS`],
  ["৩৩. Why Node.js good for real-time apps?", "33. Why Node.js for real-time apps", `Event-driven architecture।`],
  ["৩৪. Node.js limitations কী?", "34. Node.js limitations", `CPU intensive task এ weak — worker_threads / separate service`],
  ["৩৫. Event-driven architecture কী?", "35. What is event-driven architecture?", `Event trigger based execution system।`],
];

writeFileSync(
  "src/data/nosql.ts",
  `import type { QA } from "./types";

/** Basic → Senior MongoDB interview (১–৬৫) — আপনার দেওয়া ফরম্যাট */
export const nosqlQAs: QA[] = [\n${mongo.map(([q, e, a]) => qa(q, e, a)).join("\n")}\n];\n`,
);

writeFileSync(
  "src/data/nodejs.ts",
  `import type { QA } from "./types";

/** Senior Node.js interview (৬৬–১০০ → টপিকে ১–৩৫) — আপনার দেওয়া ফরম্যাট */
export const nodejsQAs: QA[] = [\n${node.map(([q, e, a]) => qa(q, e, a)).join("\n")}\n];\n`,
);

console.log("MongoDB:", mongo.length, "| Node.js:", node.length);
