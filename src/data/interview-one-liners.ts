import type { QA } from "./types";

export const interviewOneLiners: QA[] = [
  // Hooks & Performance
  {
    q: "১. useMemo",
    qEn: "1. useMemo",
    a: "Expensive calculation-এর result memoize করে unnecessary recalculation এড়াতে useMemo ব্যবহার করা হয়।",
  },
  {
    q: "২. useCallback",
    qEn: "2. useCallback",
    a: "Function memoize করে unnecessary function re-creation এবং child component re-render কমাতে useCallback ব্যবহার করা হয়।",
  },
  {
    q: "৩. useEffect",
    qEn: "3. useEffect",
    a: "Component render হওয়ার পরে asynchronousভাবে side effect execute করার জন্য useEffect ব্যবহার করা হয়।",
  },
  {
    q: "৪. useLayoutEffect",
    qEn: "4. useLayoutEffect",
    a: "DOM update হওয়ার পর কিন্তু browser paint-এর আগে synchronousভাবে code execute করার জন্য useLayoutEffect ব্যবহার করা হয়।",
  },
  {
    q: "৫. useState vs useReducer",
    qEn: "5. useState vs useReducer",
    a: "Simple state-এর জন্য useState, আর complex state logic ও multiple state transition-এর জন্য useReducer ব্যবহার করা হয়।",
  },
  {
    q: "৬. React.memo",
    qEn: "6. React.memo",
    a: "Parent re-render হলেও props change না হলে component re-render হওয়া বন্ধ করে।",
  },
  {
    q: "৭. Custom Hook",
    qEn: "7. Custom Hook",
    a: "Reusable stateful logic share করার জন্য Custom Hook তৈরি করা হয়।",
  },
  {
    q: "৮. Controlled Component",
    qEn: "8. Controlled Component",
    a: "Input field-এর value React state দ্বারা control হলে সেটি Controlled Component।",
  },
  {
    q: "৯. Uncontrolled Component",
    qEn: "9. Uncontrolled Component",
    a: "Input field-এর value DOM দ্বারা manage হলে সেটি Uncontrolled Component।",
  },

  // Core React
  {
    q: "১০. What is React?",
    qEn: "10. What is React?",
    a: "React হলো reusable component ব্যবহার করে fast and interactive UI তৈরির JavaScript library।",
  },
  {
    q: "১১. Virtual DOM",
    qEn: "11. Virtual DOM",
    a: "Virtual DOM হলো Real DOM-এর lightweight copy যা changes compare করে minimum DOM update করে।",
  },
  {
    q: "১২. Component",
    qEn: "12. Component",
    a: "Component হলো UI-এর reusable এবং independent building block।",
  },
  {
    q: "১৩. Functional vs Class Component",
    qEn: "13. Functional vs Class Component",
    a: "Functional components Hooks support করে এবং props সরাসরি parameter থেকে পাওয়া যায়, আর Class components-এ Hooks ব্যবহার করা যায় না; props ও state access করতে this.props এবং this.state ব্যবহার করতে হয়।",
  },
  {
    q: "১৪. Props",
    qEn: "14. Props",
    a: "Parent component থেকে child component-এ data pass করার জন্য Props ব্যবহার করা হয়।",
  },
  {
    q: "১৫. State",
    qEn: "15. State",
    a: "Component-এর dynamic data store করার জন্য State ব্যবহার করা হয়।",
  },
  {
    q: "১৬. Props vs State",
    qEn: "16. Props vs State",
    a: "Props immutable এবং parent থেকে আসে, State mutable এবং component নিজে manage করে।",
  },
  {
    q: "১৭. JSX",
    qEn: "17. JSX",
    a: "JSX হলো JavaScript-এর মধ্যে HTML-like syntax লেখার সুবিধা।",
  },
  {
    q: "১৮. Fragment",
    qEn: "18. Fragment",
    a: "Extra DOM element ছাড়া multiple elements return করতে Fragment ব্যবহার করা হয়।",
  },
  {
    q: "১৯. Rendering",
    qEn: "19. Rendering",
    a: "State বা Props change হলে React UI re-render করে Virtual DOM diffing-এর মাধ্যমে।",
  },

  // Optimization
  {
    q: "২০. Prevent Unnecessary Re-render",
    qEn: "20. Prevent Unnecessary Re-render",
    a: "React.memo, useMemo, useCallback এবং proper state management ব্যবহার করে unnecessary re-render কমানো যায়।",
  },
  {
    q: "২১. Reconciliation",
    qEn: "21. Reconciliation",
    a: "Old Virtual DOM এবং New Virtual DOM compare করে minimum DOM update করার process হলো Reconciliation।",
  },
  {
    q: "২২. Code Splitting",
    qEn: "22. Code Splitting",
    a: "Application-কে ছোট ছোট bundle-এ ভাগ করার technique হলো Code Splitting।",
  },
  {
    q: "২৩. Lazy Loading",
    qEn: "23. Lazy Loading",
    a: "Component প্রয়োজন হলে load করার technique হলো Lazy Loading।",
  },
  {
    q: "২৪. Suspense",
    qEn: "24. Suspense",
    a: "Lazy loaded component load হওয়া পর্যন্ত fallback UI দেখানোর জন্য Suspense ব্যবহার করা হয়।",
  },
  {
    q: "২৫. Keys",
    qEn: "25. Keys",
    a: "List item uniquely identify করে efficient reconciliation করার জন্য Key ব্যবহার করা হয়।",
  },
  {
    q: "২৬. React Fiber",
    qEn: "26. React Fiber",
    a: "React Fiber rendering process কে interruptible ও priority-based করে performance improve করে।",
  },
  {
    q: "২৭. Batching",
    qEn: "27. Batching",
    a: "Multiple state update একসাথে process করাকে Batching বলে।",
  },

  // Advanced React
  {
    q: "২৮. HOC",
    qEn: "28. HOC",
    a: "Higher Order Component হলো একটি function যা component নিয়ে enhanced component return করে।",
  },
  {
    q: "২৯. Render Props",
    qEn: "29. Render Props",
    a: "Component-এর মধ্যে function prop pass করে logic share করার pattern হলো Render Props।",
  },
  {
    q: "৩০. Portal",
    qEn: "30. Portal",
    a: "Parent DOM hierarchy-এর বাইরে component render করতে React Portal ব্যবহার করা হয়।",
  },
  {
    q: "৩১. Error Boundary",
    qEn: "31. Error Boundary",
    a: "Child component-এর JavaScript error catch করে fallback UI দেখানোর component হলো Error Boundary।",
  },
  {
    q: "৩২. Hydration",
    qEn: "32. Hydration",
    a: "Server-rendered HTML-কে interactive React application-এ convert করার process হলো Hydration।",
  },
  {
    q: "৩৩. SSR",
    qEn: "33. SSR",
    a: "Server-এ React component render করে HTML পাঠানোর technique হলো SSR।",
  },
  {
    q: "৩৪. Concurrent Mode",
    qEn: "34. Concurrent Mode",
    a: "Multiple rendering task priority অনুযায়ী handle করার React feature হলো Concurrent Rendering।",
  },
  {
    q: "৩৫. React vs React Native",
    qEn: "35. React vs React Native",
    a: "React Web UI তৈরি করে, React Native Mobile App তৈরি করে।",
  },

  // TypeScript
  {
    q: "৩৬. Browser সরাসরি TypeScript পড়তে পারে?",
    qEn: "36. Can a browser run TypeScript directly?",
    a: "Browser সরাসরি TypeScript বুঝে না, TypeScript compile হয়ে JavaScript হওয়ার পর browser execute করে।",
  },

  // Event Loop
  {
    q: "৩৭. Event Loop",
    qEn: "37. Event Loop",
    a: "Call Stack, Microtask Queue এবং Macrotask Queue manage করে asynchronous code execute করার mechanism হলো Event Loop।",
  },
  {
    q: "৩৮. Macro vs Micro Task",
    qEn: "38. Macro vs Micro Task",
    a: "Event Loop সবসময় Macrotask-এর আগে Microtask execute করে।",
  },
  {
    q: "৩৯. 100 Macro + 1 Micro",
    qEn: "39. 100 Macro + 1 Micro",
    a: "100টা Macrotask থাকলেও 1টা Microtask আগে execute হবে।",
  },

  // Web Performance
  {
    q: "৪০. CLS Prevent",
    qEn: "40. Prevent CLS",
    a: "Image, video এবং dynamic content-এর size আগে define করলে Layout Shift কমে।",
  },
  {
    q: "৪১. Debug Production Without Logs",
    qEn: "41. Debug production without logs",
    a: "Browser DevTools, Network Tab, Source Maps, Sentry এবং Monitoring Tools ব্যবহার করা যায়।",
  },
  {
    q: "৪২. Webpack",
    qEn: "42. Webpack",
    a: "Webpack হলো module bundler যা dependency manage এবং asset optimize করে।",
  },
  {
    q: "৪৩. Measure Performance",
    qEn: "43. Measure performance",
    a: "Lighthouse, Chrome DevTools, Web Vitals এবং React Profiler ব্যবহার করা হয়।",
  },
  {
    q: "৪৪. Real DOM vs Virtual DOM",
    qEn: "44. Real DOM vs Virtual DOM",
    a: "Real DOM directly update হয়, Virtual DOM compare করে minimum changes Real DOM-এ apply করে।",
  },
  {
    q: "৪৫. Browser Cache Full",
    qEn: "45. Browser cache full",
    a: "Cache limit, cache cleanup এবং storage quota monitoring ব্যবহার করা উচিত।",
  },
  {
    q: "৪৬. Debug Re-render",
    qEn: "46. Debug re-render",
    a: "React DevTools Profiler এবং Why Did You Render package ব্যবহার করা যায়।",
  },

  // JavaScript
  {
    q: "৪৭. Debouncing",
    qEn: "47. Debouncing",
    a: "নির্দিষ্ট সময় user action বন্ধ না হওয়া পর্যন্ত function call delay করাকে Debouncing বলে।",
  },
  {
    q: "৪৮. Throttling",
    qEn: "48. Throttling",
    a: "নির্দিষ্ট interval-এ function execute limit করাকে Throttling বলে।",
  },
  {
    q: "৪৯. Overloading",
    qEn: "49. Overloading",
    a: "JavaScript native method overloading support করে না।",
  },
  {
    q: "৫০. Overriding",
    qEn: "50. Overriding",
    a: "Child class parent class-এর method redefine করলে তাকে Overriding বলে।",
  },

  // Scenario Questions
  {
    q: "৫১. Previous State Update",
    qEn: "51. Previous state update",
    a: "Previous state-এর উপর নির্ভর করলে functional update `setState(prev => prev + 1)` ব্যবহার করা উচিত।",
  },
  {
    q: "৫২. stopPropagation()",
    qEn: "52. stopPropagation()",
    a: "Parent element-এ event bubble হওয়া বন্ধ করতে stopPropagation() ব্যবহার করা হয়।",
  },
  {
    q: "৫৩. createElement vs JSX",
    qEn: "53. createElement vs JSX",
    a: "JSX compile হয়ে React.createElement() call-এ convert হয়।",
  },
  {
    q: "৫৪. Key Missing হলে কি হয়?",
    qEn: "54. What happens if key is missing?",
    a: "React inefficient reconciliation করতে পারে এবং unexpected UI behavior হতে পারে।",
  },
  {
    q: "৫৫. useEffect Code Output",
    qEn: "55. useEffect code output",
    a: "```javascript\nconst [c, setC] = useState(0);\n\nuseEffect(() => {\n  setC(c + 1);\n  setC(c + 1);\n  setC(c + 1);\n});\n```\n\nFinal value হবে 1, কারণ তিনবারই stale value 0 ব্যবহার করছে এবং React batch update করে।",
  },

  // React 18 / 19
  {
    q: "৫৬. React 18 New Features",
    qEn: "56. React 18 new features",
    a: "Automatic Batching, Concurrent Rendering, Suspense Improvements এবং Transitions যোগ হয়েছে।",
  },
  {
    q: "৫৭. React 19 New Features",
    qEn: "57. React 19 new features",
    a: "Actions, Improved Forms, Better Server Components এবং Enhanced Performance Optimization যোগ হয়েছে।",
  },
];

