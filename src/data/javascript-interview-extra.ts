import type { QA } from "./types";

/** JavaScript — extra commonly-asked interview Q&As (BN, concise). */
export const javascriptInterviewExtraQAs: QA[] = [
  // Types & Coercion
  {
    q: "৭৬. Primitive vs Reference",
    qEn: "76. Primitive vs Reference",
    a: "Primitive value কপি হয়, আর reference type (object/array/function) reference কপি হয়—তাই mutation এ side effect হতে পারে।",
  },
  {
    q: "৭৭. null vs undefined",
    qEn: "77. null vs undefined",
    a: "undefined মানে value দেয়া হয়নি, null মানে ইচ্ছাকৃতভাবে empty/none সেট করা।",
  },
  {
    q: "৭৮. == vs ===",
    qEn: "78. == vs ===",
    a: "== type coercion করে compare করে, === type coercion ছাড়া strict compare করে।",
  },
  {
    q: "৭৯. Truthy/Falsy",
    qEn: "79. Truthy/Falsy",
    a: "Falsy: false, 0, -0, 0n, \"\", null, undefined, NaN—বাকি সব truthy।",
  },
  {
    q: "৮০. Type Coercion",
    qEn: "80. Type coercion",
    a: "JavaScript প্রয়োজনে এক type কে আরেক type-এ implicit/explicitভাবে convert করে।",
  },
  {
    q: "৮১. NaN কী?",
    qEn: "81. What is NaN?",
    a: "NaN মানে Not-a-Number; এটা number type-ই, কিন্তু invalid numeric result বোঝায়।",
  },
  {
    q: "৮২. isNaN vs Number.isNaN",
    qEn: "82. isNaN vs Number.isNaN",
    a: "isNaN আগে coercion করে ভুল positive দিতে পারে; Number.isNaN strictভাবে শুধু NaN হলে true।",
  },
  {
    q: "৮৩. typeof quirks",
    qEn: "83. typeof quirks",
    a: "`typeof null` হলো \"object\" (legacy bug); array check করতে `Array.isArray()`।",
  },
  {
    q: "৮৪. BigInt কী?",
    qEn: "84. What is BigInt?",
    a: "Safe integer range ছাড়িয়ে বড় integer represent করার type; literal: `123n`।",
  },
  {
    q: "৮৫. Symbol কী?",
    qEn: "85. What is Symbol?",
    a: "Unique identifier type; object key হিসেবে collision এড়াতে/hidden-ish property হিসেবে ব্যবহার হয়।",
  },

  // Variables, scope, runtime
  {
    q: "৮৬. var vs let vs const",
    qEn: "86. var vs let vs const",
    a: "var function-scoped + hoisted; let/const block-scoped + TDZ; const reassign করা যায় না (object mutate করা যায়)।",
  },
  {
    q: "৮৭. Hoisting কীভাবে কাজ করে?",
    qEn: "87. How hoisting works?",
    a: "Declaration phase-এ bindings তৈরি হয়; var undefined দিয়ে init, let/const TDZ-এ থাকে; function declaration পুরোটা hoist হয়।",
  },
  {
    q: "৮৮. Strict mode",
    qEn: "88. Strict mode",
    a: "\"use strict\" কিছু silent error ধরায়, unsafe behavior (implicit globals) বন্ধ করে, `this` binding rules stricter করে।",
  },
  {
    q: "৮৯. Global scope leakage",
    qEn: "89. Global scope leakage",
    a: "declare না করে assign করলে global তৈরি হতে পারে (strict mode এ error)—interview red flag।",
  },

  // Functions & this
  {
    q: "৯০. this binding rules",
    qEn: "90. this binding rules",
    a: "call-site নির্ভর: default (global/undefined strict), implicit (obj.method), explicit (call/apply/bind), constructor (`new`)।",
  },
  {
    q: "৯১. Arrow vs Regular function (this)",
    qEn: "91. Arrow vs regular function (this)",
    a: "Arrow-এর own `this`/arguments নেই—lexical capture করে; regular function-এর `this` call-site অনুযায়ী।",
  },
  {
    q: "৯২. arguments object",
    qEn: "92. arguments object",
    a: "regular function-এ array-like `arguments` থাকে; arrow function-এ নেই—rest parameter ব্যবহার করুন।",
  },
  {
    q: "৯৩. Default parameters",
    qEn: "93. Default parameters",
    a: "parameter না দিলে fallback value: `function f(x=1){}`—undefined হলে default নেয়।",
  },
  {
    q: "৯৪. Rest vs Spread",
    qEn: "94. Rest vs Spread",
    a: "Rest collect করে (`...args`), Spread expand করে (`fn(...arr)` / `{...obj}`)।",
  },

  // Prototypes & classes
  {
    q: "৯৫. Prototype chain",
    qEn: "95. Prototype chain",
    a: "object property না পেলে `[[Prototype]]` ধরে parent-এ খোঁজে—এই lookup chain-ই prototype chain।",
  },
  {
    q: "৯৬. __proto__ vs prototype",
    qEn: "96. __proto__ vs prototype",
    a: "`prototype` হলো constructor-এর property; `__proto__`/`Object.getPrototypeOf` হলো instance-এর parent link।",
  },
  {
    q: "৯৭. Class syntax কী?",
    qEn: "97. What is class syntax?",
    a: "ES6 `class` prototype-based inheritance-এর syntactic sugar; আসলে JS still prototype-based।",
  },
  {
    q: "৯৮. new কী করে?",
    qEn: "98. What does new do?",
    a: "নতুন object বানায়, prototype সেট করে, constructor `this` bind করে, শেষে object return করে (বা explicit object return হলে সেটা)।",
  },
  {
    q: "৯৯. instanceof কী?",
    qEn: "99. What is instanceof?",
    a: "prototype chain-এ constructor-এর `prototype` আছে কিনা check করে।",
  },

  // Async deeper
  {
    q: "১০০. Microtask vs Macrotask",
    qEn: "100. Microtask vs Macrotask",
    a: "Microtask (Promise jobs) প্রতিটা macrotask-এর পরে আগে drain হয়—তাই promise callbacks আগে চলে।",
  },
  {
    q: "১০১. Promise chaining",
    qEn: "101. Promise chaining",
    a: "then/catch return value পরের then-এ যায়; promise return করলে chain wait করে।",
  },
  {
    q: "১০২. Promise error handling",
    qEn: "102. Promise error handling",
    a: "throw/Rejected promise catch-এ যায়; async/await-এ try/catch ব্যবহার করুন।",
  },
  {
    q: "১০৩. async function return",
    qEn: "103. async function return",
    a: "async function সবসময় Promise return করে—return value resolve হয়, throw reject হয়।",
  },
  {
    q: "১০৪. await parallel vs serial",
    qEn: "104. await parallel vs serial",
    a: "serial: `await a; await b;` ধীর; parallel: `const [x,y]=await Promise.all([a(),b()])`।",
  },

  // Collections & data
  {
    q: "১০৫. Map vs Object",
    qEn: "105. Map vs Object",
    a: "Map any type key নিতে পারে + predictable iteration; Object string/symbol key, prototype pitfalls থাকতে পারে।",
  },
  {
    q: "১০৬. Set ব্যবহার",
    qEn: "106. Set usage",
    a: "Unique values store করে; dedupe/fast membership check-এ কাজে লাগে।",
  },
  {
    q: "১০৭. WeakMap/WeakSet",
    qEn: "107. WeakMap/WeakSet",
    a: "keys weakly referenced (GC হতে পারে); private metadata/cache রাখতে ব্যবহার হয়; iterate করা যায় না।",
  },
  {
    q: "১০৮. JSON.stringify caveats",
    qEn: "108. JSON.stringify caveats",
    a: "function/symbol বাদ পড়ে, circular হলে error, Date string হয়—deep copy হিসেবে সবসময় safe না।",
  },

  // Modules
  {
    q: "১০৯. CommonJS vs ESM",
    qEn: "109. CommonJS vs ESM",
    a: "CJS: `require/module.exports` (runtime); ESM: `import/export` (static, tree-shaking friendly)।",
  },
  {
    q: "১১০. Tree shaking",
    qEn: "110. Tree shaking",
    a: "unused exports build-time এ বাদ দেওয়া (ESM + bundler) — smaller bundle।",
  },

  // Errors
  {
    q: "১১১. try/catch কোথায় কাজ করে?",
    qEn: "111. Where try/catch works?",
    a: "sync code-এ কাজ করে; async callback-এর error ধরতে callback-এর ভেতরে catch বা Promise catch/await try/catch লাগবে।",
  },
  {
    q: "১১২. throw vs return",
    qEn: "112. throw vs return",
    a: "throw control flow থামিয়ে error propagate করে; return normal flow এ value দেয়।",
  },

  // Browser/DOM APIs frequently asked
  {
    q: "১১৩. event.target vs event.currentTarget",
    qEn: "113. event.target vs event.currentTarget",
    a: "target হলো যেই element থেকে event এসেছে; currentTarget হলো listener যেই element-এ লাগানো।",
  },
  {
    q: "১১৪. passive event listener",
    qEn: "114. passive event listener",
    a: "`{ passive: true }` দিলে browser ধরে নেয় `preventDefault` হবে না—scroll performance ভালো হয়।",
  },
  {
    q: "১১৫. requestAnimationFrame",
    qEn: "115. requestAnimationFrame",
    a: "browser paint-এর আগে callback run—animation/measurements smooth করতে ব্যবহার হয়।",
  },

  // Security basics
  {
    q: "১১৬. XSS কী?",
    qEn: "116. What is XSS?",
    a: "malicious script injection; prevent: output escaping, CSP, sanitize, avoid dangerouslySetInnerHTML।",
  },
  {
    q: "১১৭. CSRF কী?",
    qEn: "117. What is CSRF?",
    a: "user-এর authenticated session ব্যবহার করে unwanted request; prevent: same-site cookies, CSRF tokens।",
  },

  // Patterns
  {
    q: "১১৮. Debounce vs Throttle",
    qEn: "118. Debounce vs Throttle",
    a: "Debounce শেষ event-এর পর run করে; Throttle fixed interval-এ max একবার run করে।",
  },
  {
    q: "১১৯. Memoization vs Caching",
    qEn: "119. Memoization vs caching",
    a: "Memoization হলো function output cache করা (same input → reuse); caching broader (data/resources)।",
  },
  {
    q: "১২০. Idempotent function",
    qEn: "120. Idempotent function",
    a: "একই input বারবার দিলে effect একই থাকে (repeated calls safe) — API/side-effect design এ গুরুত্বপূর্ণ।",
  },
];

