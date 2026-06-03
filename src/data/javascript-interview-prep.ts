import type { QA } from "./types";

/** JavaScript Interview Preparation — concise, one-line answers (BN). */
export const javascriptInterviewPrepQAs: QA[] = [
  // Execution & Memory
  {
    q: "১. Execution Context",
    qEn: "1. Execution Context",
    a: "JavaScript code execute করার জন্য browser/function যে environment তৈরি করে তাকে Execution Context বলে।",
  },
  {
    q: "২. Call Stack",
    qEn: "2. Call Stack",
    a: "Function execution track করার জন্য JavaScript Call Stack ব্যবহার করে।",
  },
  {
    q: "৩. Memory Heap",
    qEn: "3. Memory Heap",
    a: "Objects এবং reference type data Memory Heap-এ store হয়।",
  },
  {
    q: "৪. Scope",
    qEn: "4. Scope",
    a: "Variable কোথা থেকে access করা যাবে সেটাই Scope নির্ধারণ করে।",
  },
  {
    q: "৫. Lexical Scope",
    qEn: "5. Lexical Scope",
    a: "Function declaration-এর position অনুযায়ী variable access হওয়াকে Lexical Scope বলে।",
  },
  {
    q: "৬. Scope Chain",
    qEn: "6. Scope Chain",
    a: "Variable না পেলে parent scope-এ খোঁজার process হলো Scope Chain।",
  },
  {
    q: "৭. Hoisting",
    qEn: "7. Hoisting",
    a: "Variable এবং function declaration execution-এর আগে memory-তে allocate হওয়াকে Hoisting বলে।",
  },
  {
    q: "৮. Temporal Dead Zone (TDZ)",
    qEn: "8. Temporal Dead Zone (TDZ)",
    a: "let এবং const declaration-এর আগে access করা যায় না, এই সময়টাকে TDZ বলে।",
  },

  // Functions
  {
    q: "৯. Closure",
    qEn: "9. Closure",
    a: "Function তার outer scope-এর variable মনে রাখতে পারলে তাকে Closure বলে।",
  },
  {
    q: "১০. Callback Function",
    qEn: "10. Callback Function",
    a: "অন্য function-এর argument হিসেবে pass করা function হলো Callback।",
  },
  {
    q: "১১. Higher Order Function",
    qEn: "11. Higher Order Function",
    a: "Function receive বা return করে এমন function হলো Higher Order Function।",
  },
  {
    q: "১২. Pure Function",
    qEn: "12. Pure Function",
    a: "একই input-এর জন্য সবসময় একই output দেয় এবং side effect তৈরি করে না।",
  },
  {
    q: "১৩. IIFE",
    qEn: "13. IIFE",
    a: "Immediately Invoked Function Expression declaration-এর সাথে সাথেই execute হয়।",
  },
  {
    q: "১৪. Currying",
    qEn: "14. Currying",
    a: "Multiple arguments-কে single argument function chain-এ convert করাকে Currying বলে।",
  },
  {
    q: "১৫. Function Borrowing",
    qEn: "15. Function Borrowing",
    a: "call, apply, bind ব্যবহার করে অন্য object-এর method ব্যবহার করাকে Function Borrowing বলে।",
  },

  // this Keyword
  {
    q: "১৬. this",
    qEn: "16. this",
    a: "this current execution context-এর object-কে refer করে।",
  },
  {
    q: "১৭. call()",
    qEn: "17. call()",
    a: "Function invoke করে এবং this explicitly set করে।",
  },
  {
    q: "১৮. apply()",
    qEn: "18. apply()",
    a: "call()-এর মতো কিন্তু arguments array আকারে নেয়।",
  },
  {
    q: "১৯. bind()",
    qEn: "19. bind()",
    a: "New function return করে যেখানে this permanently bind করা থাকে।",
  },
  {
    q: "২০. Arrow Function",
    qEn: "20. Arrow Function",
    a: "Arrow function-এর নিজস্ব this থাকে না, lexical this ব্যবহার করে।",
  },

  // Async JavaScript
  {
    q: "২১. Event Loop",
    qEn: "21. Event Loop",
    a: "Call Stack এবং Queue manage করে asynchronous code execute করে।",
  },
  {
    q: "২২. Promise",
    qEn: "22. Promise",
    a: "Future asynchronous operation-এর success বা failure represent করে।",
  },
  {
    q: "২৩. Promise States",
    qEn: "23. Promise States",
    a: "Promise-এর state তিনটি: Pending, Fulfilled, Rejected।",
  },
  {
    q: "২৪. async/await",
    qEn: "24. async/await",
    a: "Promise-based asynchronous code synchronous style-এ লেখার syntax।",
  },
  {
    q: "২৫. Microtask Queue",
    qEn: "25. Microtask Queue",
    a: "Promise callback এবং MutationObserver Microtask Queue-তে যায়।",
  },
  {
    q: "২৬. Macrotask Queue",
    qEn: "26. Macrotask Queue",
    a: "setTimeout, setInterval, DOM events Macrotask Queue-তে যায়।",
  },
  {
    q: "২৭. Promise.all()",
    qEn: "27. Promise.all()",
    a: "সব Promise success হলে result return করে।",
  },
  {
    q: "২৮. Promise.allSettled()",
    qEn: "28. Promise.allSettled()",
    a: "সব Promise complete হওয়ার পর result return করে।",
  },
  {
    q: "২৯. Promise.race()",
    qEn: "29. Promise.race()",
    a: "প্রথম settled Promise-এর result return করে।",
  },
  {
    q: "৩০. Promise.any()",
    qEn: "30. Promise.any()",
    a: "প্রথম successful Promise-এর result return করে।",
  },

  // Objects
  {
    q: "৩১. Object",
    qEn: "31. Object",
    a: "Key-value pair store করার data structure হলো Object।",
  },
  {
    q: "৩২. Object.freeze()",
    qEn: "32. Object.freeze()",
    a: "Object modify হওয়া বন্ধ করে।",
  },
  {
    q: "৩৩. Object.seal()",
    qEn: "33. Object.seal()",
    a: "New property add/remove বন্ধ করে কিন্তু existing property modify করা যায়।",
  },
  {
    q: "৩৪. Destructuring",
    qEn: "34. Destructuring",
    a: "Object বা array থেকে value extract করার syntax।",
  },
  {
    q: "৩৫. Spread Operator (...)",
    qEn: "35. Spread Operator (...)",
    a: "Array/Object copy বা merge করার shorthand syntax।",
  },
  {
    q: "৩৬. Rest Operator (...)",
    qEn: "36. Rest Operator (...)",
    a: "Multiple values collect করে array বানায়।",
  },

  // Arrays
  {
    q: "৩৭. map()",
    qEn: "37. map()",
    a: "Array-এর প্রতিটি element transform করে নতুন array return করে।",
  },
  {
    q: "৩৮. filter()",
    qEn: "38. filter()",
    a: "Condition অনুযায়ী element filter করে।",
  },
  {
    q: "৩৯. reduce()",
    qEn: "39. reduce()",
    a: "Multiple value combine করে single value তৈরি করে।",
  },
  {
    q: "৪০. find()",
    qEn: "40. find()",
    a: "প্রথম matching element return করে।",
  },
  {
    q: "৪১. some()",
    qEn: "41. some()",
    a: "অন্তত একটি element condition satisfy করলে true return করে।",
  },
  {
    q: "৪২. every()",
    qEn: "42. every()",
    a: "সব element condition satisfy করলে true return করে।",
  },
  {
    q: "৪৩. forEach()",
    qEn: "43. forEach()",
    a: "Array iterate করে কিন্তু কিছু return করে না।",
  },

  // Event Handling
  {
    q: "৪৪. Event Bubbling",
    qEn: "44. Event Bubbling",
    a: "Event child থেকে parent-এর দিকে propagate হয়।",
  },
  {
    q: "৪৫. Event Capturing",
    qEn: "45. Event Capturing",
    a: "Event parent থেকে child-এর দিকে propagate হয়।",
  },
  {
    q: "৪৬. stopPropagation()",
    qEn: "46. stopPropagation()",
    a: "Event bubbling/capturing বন্ধ করে।",
  },
  {
    q: "৪৭. preventDefault()",
    qEn: "47. preventDefault()",
    a: "Browser-এর default behavior বন্ধ করে।",
  },
  {
    q: "৪৮. Event Delegation",
    qEn: "48. Event Delegation",
    a: "Parent element-এ event listener বসিয়ে child event handle করার technique।",
  },

  // Performance
  {
    q: "৪৯. Debouncing",
    qEn: "49. Debouncing",
    a: "নির্দিষ্ট সময় পর্যন্ত event trigger না হলে function execute হয়।",
  },
  {
    q: "৫০. Throttling",
    qEn: "50. Throttling",
    a: "নির্দিষ্ট interval-এ একবার function execute হয়।",
  },
  {
    q: "৫১. Memoization",
    qEn: "51. Memoization",
    a: "Previous result cache করে repeated calculation কমানো হয়।",
  },

  // OOP Concepts
  {
    q: "৫২. Class",
    qEn: "52. Class",
    a: "Object তৈরির blueprint হলো Class।",
  },
  {
    q: "৫৩. Object (OOP)",
    qEn: "53. Object (OOP)",
    a: "Class-এর instance হলো Object।",
  },
  {
    q: "৫৪. Encapsulation",
    qEn: "54. Encapsulation",
    a: "Data এবং method একসাথে bundle করাকে Encapsulation বলে।",
  },
  {
    q: "৫৫. Inheritance",
    qEn: "55. Inheritance",
    a: "Parent class-এর property ও method child class inherit করে।",
  },
  {
    q: "৫৬. Polymorphism",
    qEn: "56. Polymorphism",
    a: "একই method বিভিন্ন behavior দেখাতে পারে।",
  },
  {
    q: "৫৭. Abstraction",
    qEn: "57. Abstraction",
    a: "Internal implementation hide করে essential information expose করাকে Abstraction বলে।",
  },
  {
    q: "৫৮. Overriding",
    qEn: "58. Overriding",
    a: "Child class parent method redefine করলে তাকে Overriding বলে।",
  },
  {
    q: "৫৯. Overloading",
    qEn: "59. Overloading",
    a: "JavaScript native method overloading support করে না।",
  },

  // Data Copying
  {
    q: "৬০. Shallow Copy",
    qEn: "60. Shallow Copy",
    a: "Top-level property copy হয়, nested object reference share করে।",
  },
  {
    q: "৬১. Deep Copy",
    qEn: "61. Deep Copy",
    a: "Nested object-সহ সম্পূর্ণ independent copy তৈরি করে।",
  },

  // ES6+ Features
  {
    q: "৬২. let",
    qEn: "62. let",
    a: "Block scoped variable declaration।",
  },
  {
    q: "৬৩. const",
    qEn: "63. const",
    a: "Reassign করা যায় না এমন block scoped variable।",
  },
  {
    q: "৬৪. Template Literals",
    qEn: "64. Template Literals",
    a: "Backtick (`) ব্যবহার করে string interpolation করা যায়।",
  },
  {
    q: "৬৫. Optional Chaining",
    qEn: "65. Optional Chaining",
    a: "Null/undefined error ছাড়া nested property access করা যায়।",
  },
  {
    q: "৬৬. Nullish Coalescing (??)",
    qEn: "66. Nullish Coalescing (??)",
    a: "null বা undefined হলে fallback value return করে।",
  },
  {
    q: "৬৭. Modules",
    qEn: "67. Modules",
    a: "Code organize করার জন্য import/export system।",
  },
  {
    q: "৬৮. Dynamic Import",
    qEn: "68. Dynamic Import",
    a: "Runtime-এ module load করার technique।",
  },

  // Browser Concepts
  {
    q: "৬৯. DOM",
    qEn: "69. DOM",
    a: "HTML document-এর tree representation হলো DOM।",
  },
  {
    q: "৭০. BOM",
    qEn: "70. BOM",
    a: "Browser-এর API collection হলো BOM।",
  },
  {
    q: "৭১. Local Storage",
    qEn: "71. Local Storage",
    a: "Browser-এ permanently data store করে।",
  },
  {
    q: "৭২. Session Storage",
    qEn: "72. Session Storage",
    a: "Tab close হওয়া পর্যন্ত data store করে।",
  },
  {
    q: "৭৩. Cookies",
    qEn: "73. Cookies",
    a: "Small data browser এবং server-এর মধ্যে exchange হয়।",
  },
  {
    q: "৭৪. CORS",
    qEn: "74. CORS",
    a: "Different origin request control করার browser security policy।",
  },
  {
    q: "৭৫. WebSocket",
    qEn: "75. WebSocket",
    a: "Client-server real-time bidirectional communication protocol।",
  },
];

