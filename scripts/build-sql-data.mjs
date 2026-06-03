import { writeFileSync } from "fs";

const qa = (q, qEn, a) =>
  `  { q: ${JSON.stringify(q)}, qEn: ${JSON.stringify(qEn)}, a: ${JSON.stringify(a)} },`;

const items = [
  [
    "১. Database কী?",
    "1. What is a database?",
    `Database হলো data store করার organized জায়গা।

Example:
একটা স্কুলের student info, teacher info, result — সব data database এ রাখা হয়।

💡 মুখস্থ: Database = organized data storage`,
  ],
  [
    "২. Table কী?",
    "2. What is a table?",
    `Table হলো database এর ভিতরের structure যেখানে data row & column আকারে থাকে।

Example:
| id | name  | age |
| 1  | Rahim | 22  |

• Row = একেকটা record
• Column = field`,
  ],
  [
    "৩. Row এবং Column কী?",
    "3. What are rows and columns?",
    `Row
একটা সম্পূর্ণ record।

Column
একটা specific field।

Example: id=1, name=Rahim → এক Row; id, name → Column`,
  ],
  [
    "৪. Primary Key কী?",
    "4. What is a primary key?",
    `Primary Key এমন column যেটা unique value রাখে।

Features:
• Duplicate হবে না
• NULL হবে না

\`\`\`sql
id INT PRIMARY KEY
\`\`\`

💡 মুখস্থ: Primary key = unique row identifier`,
  ],
  [
    "৫. Foreign Key কী?",
    "5. What is a foreign key?",
    `এক table এর relation অন্য table এর সাথে connect করতে Foreign Key ব্যবহার হয়।

users: id=1, name=Rahim
orders: id=1, user_id=1  ← user_id = Foreign Key`,
  ],
  [
    "৬. SQL এ SELECT কী?",
    "6. What is SELECT in SQL?",
    `Data দেখানোর জন্য SELECT ব্যবহার হয়।

\`\`\`sql
SELECT * FROM users;
\`\`\`

মানে: users table এর সব data দেখাও।`,
  ],
  [
    "৭. WHERE কেন ব্যবহার হয়?",
    "7. Why use WHERE?",
    `Condition দিয়ে data filter করার জন্য।

\`\`\`sql
SELECT * FROM users WHERE age > 18;
\`\`\`

১৮ এর বেশি বয়স যাদের তাদের দেখাবে।`,
  ],
  [
    "৮. INSERT কী?",
    "8. What is INSERT?",
    `নতুন data insert করতে।

\`\`\`sql
INSERT INTO users(name, age) VALUES('Rahim', 22);
\`\`\``,
  ],
  [
    "৯. UPDATE কী?",
    "9. What is UPDATE?",
    `পুরাতন data update করতে।

\`\`\`sql
UPDATE users SET age = 25 WHERE id = 1;
\`\`\``,
  ],
  [
    "১০. DELETE কী?",
    "10. What is DELETE?",
    `Data delete করতে।

\`\`\`sql
DELETE FROM users WHERE id = 1;
\`\`\``,
  ],
  [
    "১১. JOIN কী?",
    "11. What is JOIN?",
    `Multiple table এর data combine করতে JOIN ব্যবহার হয়।

💡 Interview এ সবচেয়ে important topic।`,
  ],
  [
    "১২. INNER JOIN কী?",
    "12. What is INNER JOIN?",
    `দুই table এ matching data থাকলে return করবে।

\`\`\`sql
SELECT users.name, orders.id
FROM users
INNER JOIN orders ON users.id = orders.user_id;
\`\`\``,
  ],
  [
    "১৩. LEFT JOIN কী?",
    "13. What is LEFT JOIN?",
    `Left table এর সব data দিবে। Right এ match না থাকলেও left এর data থাকবে।

\`\`\`sql
SELECT * FROM users
LEFT JOIN orders ON users.id = orders.user_id;
\`\`\``,
  ],
  [
    "১৪. RIGHT JOIN কী?",
    "14. What is RIGHT JOIN?",
    `Right table এর সব data দিবে — mirror of LEFT JOIN।`,
  ],
  [
    "১৫. FULL JOIN কী?",
    "15. What is FULL JOIN?",
    `দুই table এর সব data দিবে — match থাকুক বা না থাকুক।`,
  ],
  [
    "১৬. GROUP BY কী?",
    "16. What is GROUP BY?",
    `Same data group করতে।

\`\`\`sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department;
\`\`\``,
  ],
  [
    "১৭. COUNT() কী?",
    "17. What is COUNT()?",
    `Total row count করে।

\`\`\`sql
SELECT COUNT(*) FROM users;
\`\`\``,
  ],
  [
    "১৮. AVG() কী?",
    "18. What is AVG()?",
    `Average বের করে।

\`\`\`sql
SELECT AVG(age) FROM users;
\`\`\``,
  ],
  [
    "১৯. SUM() কী?",
    "19. What is SUM()?",
    `Total যোগফল।

\`\`\`sql
SELECT SUM(salary) FROM employees;
\`\`\``,
  ],
  [
    "২০. MAX() এবং MIN() কী?",
    "20. What are MAX() and MIN()?",
    `সবচেয়ে বড়/ছোট value বের করে।

\`\`\`sql
SELECT MAX(salary), MIN(salary) FROM employees;
\`\`\``,
  ],
  [
    "২১. Index কী?",
    "21. What is an index?",
    `Database query fast করার technique।

Example: বইয়ের index page যেমন দ্রুত chapter খুঁজতে help করে, SQL index ও দ্রুত data খুঁজে দেয়।

💡 Interview এ খুব common।`,
  ],
  [
    "২২. Clustered Index কী?",
    "22. What is a clustered index?",
    `Data physically sorted থাকে। এক table এ সাধারণত একটাই clustered index থাকে।`,
  ],
  [
    "২৩. Non-Clustered Index কী?",
    "23. What is a non-clustered index?",
    `Data আলাদা structure এ থাকে — pointer দিয়ে row খুঁজে।`,
  ],
  [
    "২৪. Normalization কী?",
    "24. What is normalization?",
    `Database duplicate data কমানোর process।`,
  ],
  [
    "২৫. 1NF কী?",
    "25. What is 1NF?",
    `Single atomic value থাকতে হবে।

Wrong: phones = "017,018"
Correct: আলাদা row/column`,
  ],
  [
    "২৬. 2NF কী?",
    "26. What is 2NF?",
    `Partial dependency remove করতে হয়।`,
  ],
  [
    "২৭. 3NF কী?",
    "27. What is 3NF?",
    `Transitive dependency remove করতে হয়।`,
  ],
  [
    "২৮. Denormalization কী?",
    "28. What is denormalization?",
    `Performance বাড়ানোর জন্য intentionally duplicate data রাখা।`,
  ],
  [
    "২৯. ACID Property কী?",
    "29. What is ACID?",
    `Database transaction এর rules — data safe রাখে।`,
  ],
  [
    "৩০. ACID এর Full Meaning",
    "30. ACID full form",
    `A = Atomicity (সব বা কিছু না)
C = Consistency (rule মেনে)
I = Isolation (parallel safe)
D = Durability (commit পরে থাকে)`,
  ],
  [
    "৩১. Transaction কী?",
    "31. What is a transaction?",
    `একাধিক query কে single unit হিসেবে execute করা।

Example — Bank transfer:
• Sender balance কমবে
• Receiver balance বাড়বে
দুটোই successful হতে হবে।`,
  ],
  [
    "৩২. COMMIT কী?",
    "32. What is COMMIT?",
    `Permanent save করে।

\`\`\`sql
COMMIT;
\`\`\``,
  ],
  [
    "৩৩. ROLLBACK কী?",
    "33. What is ROLLBACK?",
    `Error হলে previous state এ ফেরত যায়।

\`\`\`sql
ROLLBACK;
\`\`\``,
  ],
  [
    "৩৪. HAVING এবং WHERE এর difference",
    "34. HAVING vs WHERE",
    `WHERE — Grouping এর আগে filter করে।
HAVING — GROUP BY এর পরে filter করে।

\`\`\`sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
\`\`\``,
  ],
  [
    "৩৫. UNION কী?",
    "35. What is UNION?",
    `দুই query result combine করে — duplicate remove করে।

\`\`\`sql
SELECT name FROM students
UNION
SELECT name FROM teachers;
\`\`\``,
  ],
  [
    "৩৬. UNION ALL কী?",
    "36. What is UNION ALL?",
    `Duplicate remove করে না — সব row রাখে।`,
  ],
  [
    "৩৭. VARCHAR vs CHAR",
    "37. VARCHAR vs CHAR",
    `CHAR — Fixed length
VARCHAR — Variable length

💡 Interview এ খুব common।`,
  ],
  [
    "৩৮. DELETE vs TRUNCATE vs DROP",
    "38. DELETE vs TRUNCATE vs DROP",
    `| Command | কাজ |
| DELETE | data delete (WHERE possible) |
| TRUNCATE | সব data delete fast |
| DROP | পুরো table delete |`,
  ],
  [
    "৩৯. Stored Procedure কী?",
    "39. What is a stored procedure?",
    `Pre-written SQL query/function — বারবার use করা যায়।`,
  ],
  [
    "৪০. View কী?",
    "40. What is a view?",
    `Virtual table — real data store হয় না, query এর উপর ভিত্তি করে।`,
  ],
  [
    "৪১. কেন Index use করলে query fast হয়?",
    "41. Why do indexes speed up queries?",
    `কারণ পুরো table scan না করে shortcut দিয়ে data খুঁজে পায়।`,
  ],
  [
    "৪২. কেন বেশি Index খারাপ?",
    "42. Why are too many indexes bad?",
    `Insert/update slow হয়ে যায় — কারণ index ও update করতে হয়।`,
  ],
  [
    "৪৩. NULL কী?",
    "43. What is NULL?",
    `Unknown বা empty value — zero বা blank string নয়।`,
  ],
  [
    "৪৪. UNIQUE Constraint কী?",
    "44. What is UNIQUE constraint?",
    `Duplicate value allow করবে না।`,
  ],
  [
    "৪৫. Candidate Key কী?",
    "45. What is a candidate key?",
    `যে key unique হতে পারে — primary key বেছে নেওয়ার আগে।`,
  ],
  [
    "৪৬. Composite Key কী?",
    "46. What is a composite key?",
    `একাধিক column মিলিয়ে key।

\`\`\`sql
PRIMARY KEY(student_id, course_id)
\`\`\``,
  ],
  [
    "৪৭. Subquery কী?",
    "47. What is a subquery?",
    `এক query এর ভিতরে আরেক query।

\`\`\`sql
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
\`\`\``,
  ],
  [
    "৪৮. Correlated Subquery কী?",
    "48. What is a correlated subquery?",
    `Inner query outer query এর উপর depend করে।`,
  ],
  [
    "৪৯. CTE (Common Table Expression) কী?",
    "49. What is a CTE?",
    `Temporary result set।

\`\`\`sql
WITH temp AS (SELECT * FROM users)
SELECT * FROM temp;
\`\`\``,
  ],
  [
    "৫০. Pagination কীভাবে করবেন?",
    "50. How to paginate?",
    `\`\`\`sql
SELECT * FROM users LIMIT 10 OFFSET 0;
\`\`\`

বড় offset slow — cursor pagination ভালো (প্রশ্ন ৭৮–৭৯)।`,
  ],
  [
    "৫১. Index scan আর Full table scan কী?",
    "51. Index scan vs full table scan",
    `Full Table Scan
• পুরো table scan করে data খোঁজে
• Slow হয় বড় table এ

Index Scan
• Index ব্যবহার করে দ্রুত data খোঁজে
• Fast`,
  ],
  [
    "৫২. EXPLAIN keyword কী?",
    "52. What is EXPLAIN?",
    `Query execution plan দেখায়।

\`\`\`sql
EXPLAIN SELECT * FROM users WHERE email = 'test@gmail.com';
\`\`\`

Interview: "How do you optimize slow query?"
→ EXPLAIN, Index, Proper JOIN, Avoid SELECT *`,
  ],
  [
    "৫৩. Why SELECT * is bad?",
    "53. Why is SELECT * bad?",
    `কারণ:
• Unnecessary column load হয়
• Performance কমে
• Network response বড় হয়

Better:
\`\`\`sql
SELECT id, name FROM users;
\`\`\``,
  ],
  [
    "৫৪. N+1 Query Problem কী?",
    "54. What is the N+1 query problem?",
    `Backend interview এ খুব common।

Example:
প্রথমে users query, তারপর প্রতিটা user এর জন্য আলাদা orders query।
১০০ user = ১০১ query।

Solution: JOIN, Eager loading`,
  ],
  [
    "৫৫. Database Sharding কী?",
    "55. What is database sharding?",
    `Database কে multiple server এ ভাগ করা — large scale system এ।

Example: Asia users → Server A, Europe → Server B`,
  ],
  [
    "৫৬. Replication কী?",
    "56. What is replication?",
    `এক database এর copy অন্য server এ রাখা।

Purpose: Backup, Read performance, High availability`,
  ],
  [
    "৫৭. SQL Injection কী?",
    "57. What is SQL injection?",
    `Dangerous security vulnerability।

\`\`\`sql
SELECT * FROM users WHERE email = '' OR 1=1;
\`\`\`

সব data expose হতে পারে।

Solution: Prepared statement, Parameterized query`,
  ],
  [
    "৫৮. Prepared Statement কী?",
    "58. What is a prepared statement?",
    `Safe query execution — Node.js interview এ common।

\`\`\`sql
SELECT * FROM users WHERE email = ?;
\`\`\``,
  ],
  [
    "৫৯. Cascade Delete কী?",
    "59. What is cascade delete?",
    `Parent delete হলে child automatically delete হবে।

ON DELETE CASCADE`,
  ],
  [
    "৬০. Self Join কী?",
    "60. What is a self join?",
    `একই table নিজের সাথে join — Example: Employee & Manager relation।`,
  ],
  [
    "৬১. Window Function কী?",
    "61. What are window functions?",
    `Advanced PostgreSQL/MySQL interview এ আসে।

\`\`\`sql
SELECT name, salary,
RANK() OVER (ORDER BY salary DESC)
FROM employees;
\`\`\``,
  ],
  [
    "৬২. ROW_NUMBER() vs RANK()",
    "62. ROW_NUMBER vs RANK",
    `ROW_NUMBER — Always unique serial
RANK — Same rank possible (ties)`,
  ],
  [
    "৬৩. Deadlock কী?",
    "63. What is a deadlock?",
    `দুই transaction একে অপরের resource এর জন্য অপেক্ষা করলে — database stuck হয়ে যায়।`,
  ],
  [
    "৬৪. Locking কী?",
    "64. What is locking?",
    `এক transaction data use করার সময় অন্যকে block করা।`,
  ],
  [
    "৬৫. Optimistic vs Pessimistic Locking",
    "65. Optimistic vs pessimistic locking",
    `Optimistic — Conflict হবে না assume করে
Pessimistic — আগেই lock করে রাখে`,
  ],
  [
    "৬৬. Database Migration কী?",
    "66. What is a database migration?",
    `Schema change manage করা — new column, table modify। Backend interview এ খুব common।`,
  ],
  [
    "৬৭. Schema কী?",
    "67. What is a schema?",
    `Database structure — tables, columns, relation সব মিলিয়ে schema।`,
  ],
  [
    "৬৮. Trigger কী?",
    "68. What is a trigger?",
    `Automatic action — Example: নতুন order create হলে auto log save।`,
  ],
  [
    "৬৯. Constraint কী কী?",
    "69. Common constraints",
    `PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT`,
  ],
  [
    "৭০. CHECK Constraint কী?",
    "70. What is CHECK constraint?",
    `Specific condition enforce করে।

\`\`\`sql
age INT CHECK(age >= 18)
\`\`\``,
  ],
  [
    "৭১. PostgreSQL এ SERIAL কী?",
    "71. What is SERIAL in PostgreSQL?",
    `Auto increment integer।

\`\`\`sql
id SERIAL PRIMARY KEY
\`\`\``,
  ],
  [
    "৭২. UUID কেন use করা হয়?",
    "72. Why use UUID?",
    `Guess করা কঠিন, security better, distributed system এ useful।`,
  ],
  [
    "৭৩. PostgreSQL এ JSON vs JSONB",
    "73. JSON vs JSONB in PostgreSQL",
    `JSON — Text format
JSONB — Binary optimized, fast query support

💡 PostgreSQL interview এ খুব common।`,
  ],
  [
    "৭৪. VACUUM কী PostgreSQL এ?",
    "74. What is VACUUM in PostgreSQL?",
    `Unused storage clean করে — performance maintain করে।`,
  ],
  [
    "৭৫. ACID কেন important?",
    "75. Why is ACID important?",
    `Data corruption prevent করে — Banking system এ critical।`,
  ],
  [
    "৭৬. Large table fast করার উপায়?",
    "76. How to make large tables fast?",
    `Index, Pagination, Query optimization, Cache, Proper JOIN, Partitioning`,
  ],
  [
    "৭৭. Pagination কেন দরকার?",
    "77. Why pagination?",
    `সব data একসাথে load না করার জন্য — performance ভালো হয়।`,
  ],
  [
    "৭৮. Offset Pagination Problem কী?",
    "78. Offset pagination problem",
    `Large offset slow হয়ে যায় — Better: Cursor pagination`,
  ],
  [
    "৭৯. Cursor Pagination কী?",
    "79. What is cursor pagination?",
    `Last ID/reference দিয়ে next data fetch।

\`\`\`sql
SELECT * FROM users WHERE id > 100 LIMIT 10;
\`\`\``,
  ],
  [
    "৮০. Soft Delete কী?",
    "80. What is soft delete?",
    `Data actual delete না করে hidden — is_deleted = true`,
  ],
  [
    "৮১. Hard Delete কী?",
    "81. What is hard delete?",
    `Permanent delete — row সত্যিই মুছে যায়।`,
  ],
  [
    "৮২. Why use transactions in payment system?",
    "82. Transactions in payments",
    `কারণ partial update dangerous — money mismatch হতে পারে।`,
  ],
  [
    "৮৩. Composite Index কী?",
    "83. What is a composite index?",
    `Multiple column এর উপর index।

INDEX(name, email)`,
  ],
  [
    "৮৪. Cardinality কী?",
    "84. What is cardinality?",
    `Unique value কত বেশি।

High: email | Low: gender`,
  ],
  [
    "৮৫. OLTP vs OLAP",
    "85. OLTP vs OLAP",
    `OLTP — Real-time transaction (bKash, banking)
OLAP — Analytics/report system`,
  ],
  [
    "৮৬. Top 5 highest salary",
    "86. SQL: Top 5 salaries",
    `\`\`\`sql
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 5;
\`\`\``,
  ],
  [
    "৮৭. Duplicate remove",
    "87. SQL: Remove duplicates",
    `\`\`\`sql
DELETE FROM users
WHERE id NOT IN (
  SELECT MIN(id) FROM users GROUP BY email
);
\`\`\``,
  ],
  [
    "৮৮. Employees without department",
    "88. SQL: Employees without department",
    `\`\`\`sql
SELECT * FROM employees e
LEFT JOIN departments d ON e.department_id = d.id
WHERE d.id IS NULL;
\`\`\``,
  ],
  [
    "৮৯. Find nth highest salary",
    "89. SQL: Nth highest salary",
    `\`\`\`sql
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;
\`\`\``,
  ],
  [
    "৯০. Find duplicate emails",
    "90. SQL: Duplicate emails",
    `\`\`\`sql
SELECT email, COUNT(*) FROM users
GROUP BY email HAVING COUNT(*) > 1;
\`\`\``,
  ],
  [
    "৯১. Slow query debug করবেন কীভাবে?",
    "91. How to debug slow queries?",
    `EXPLAIN ANALYZE
Add index
Avoid nested subquery
Optimize JOIN
Cache
Reduce SELECT columns`,
  ],
  [
    "৯২. JOIN slow কেন হয়?",
    "92. Why are JOINs slow?",
    `No index, Large table, Bad query plan`,
  ],
  [
    "৯৩. Database scaling কীভাবে করবেন?",
    "93. How to scale a database?",
    `Replication, Sharding, Caching, Read replica`,
  ],
  [
    "৯৪. Read Replica কী?",
    "94. What is a read replica?",
    `Read operation এর জন্য copied database।`,
  ],
  [
    "৯৫. CAP Theorem কী?",
    "95. What is CAP theorem?",
    `Distributed system — ৩টা থেকে ২টা:
Consistency, Availability, Partition Tolerance`,
  ],
  [
    "৯৬. ORM কী?",
    "96. What is an ORM?",
    `Database library — Prisma, Sequelize, TypeORM`,
  ],
  [
    "৯৭. ORM vs Raw SQL",
    "97. ORM vs raw SQL",
    `ORM — Easy, less boilerplate
Raw SQL — More control + performance`,
  ],
  [
    "৯৮. Connection Pooling কী?",
    "98. What is connection pooling?",
    `Multiple reusable DB connection maintain করা — performance improve হয়।`,
  ],
  [
    "৯৯. Why database connection pooling important?",
    "99. Why connection pooling?",
    `বারবার নতুন connection create expensive।`,
  ],
  [
    "১০০. Migration vs Seeder",
    "100. Migration vs seeder",
    `Migration — Schema change
Seeder — Dummy/test data insert`,
  ],
  [
    "PostgreSQL কেন জনপ্রিয়?",
    "Why is PostgreSQL popular?",
    `Open source, Powerful, JSON support, High performance, Complex query support`,
  ],
  [
    "PostgreSQL এ JSON support কেন useful?",
    "Why JSON in PostgreSQL?",
    `NoSQL এর মতো flexible data।

\`\`\`sql
SELECT info->>'name' FROM users;
\`\`\``,
  ],
  [
    "MySQL vs PostgreSQL",
    "MySQL vs PostgreSQL",
    `| | MySQL | PostgreSQL |
| Simple | Advanced |
| Fast read | Complex query powerful |
| Beginner friendly | Enterprise level |`,
  ],
  [
    "Fresher Rapid Fire — গুরুত্বপূর্ণ পার্থক্য",
    "Fresher rapid-fire differences",
    `DELETE vs TRUNCATE
WHERE vs HAVING
CHAR vs VARCHAR
PRIMARY KEY vs UNIQUE KEY
INNER JOIN vs LEFT JOIN
UNION vs UNION ALL

💡 Interview এ বারবার আসে।`,
  ],
  [
    "Interview Tips — Interviewer যা জিজ্ঞেস করে",
    "Interview tips — common topics",
    `JOIN, Index, Normalization, Primary/Foreign Key, Transaction, GROUP BY, Subquery, Pagination, ACID`,
  ],
];

const header = `import type { QA } from "./types";

/** ১০০+ SQL interview Q&A — আপনার দেওয়া সুন্দর ফরম্যাট */
export const sqlQAs: QA[] = [
`;

const footer = `];
`;

const body = items.map(([q, qEn, a]) => qa(q, qEn, a)).join("\n");
writeFileSync("src/data/sql.ts", header + body + footer);
console.log("Wrote", items.length, "SQL questions");
