import type { QA } from "./types";

/** TypeScript Interview Preparation — one-line answers (BN/EN). */
export const typescriptInterviewPrepQAs: QA[] = [
  // Core interview prep
  {
    q: "১. Type vs Interface",
    qEn: "1. Type vs Interface",
    a: "Interface object contracts এবং extend-এর জন্য ভালো, আর Type unions, intersections এবং advanced type composition-এর জন্য বেশি flexible।",
    aEn: "Interface is good for object contracts and extending; Type is more flexible for unions, intersections, and advanced type composition.",
  },
  {
    q: "২. Discriminated Union",
    qEn: "2. Discriminated Union",
    a: "Common discriminator field (যেমন status) ব্যবহার করে multiple state-এর type-safe handling নিশ্চিত করা হয়।",
    aEn: "A common discriminator field (e.g. status) enables type-safe handling of multiple states.",
  },
  {
    q: "৩. Generics",
    qEn: "3. Generics",
    a: "Generics reusable code-কে type-safe করে এবং compile time-এ type inference provide করে।",
    aEn: "Generics make reusable code type-safe and provide type inference at compile time.",
  },
  {
    q: "৪. Conditional Types",
    qEn: "4. Conditional Types",
    a: "Input type অনুযায়ী dynamically different output type return করার জন্য Conditional Types ব্যবহার করা হয়।",
    aEn: "Conditional Types return different output types dynamically based on the input type.",
  },
  {
    q: "৫. Immutability",
    qEn: "5. Immutability",
    a: "readonly, Readonly<T> এবং immutable patterns ব্যবহার করে object mutation prevent করা হয়।",
    aEn: "Use readonly, Readonly<T>, and immutable patterns to prevent object mutation.",
  },
  {
    q: "৬. Type Bloat Prevention",
    qEn: "6. Type Bloat Prevention",
    a: "Complex types modularize করে, reusable utility types ব্যবহার করে এবং unnecessary deep unions এড়িয়ে performance maintain করা হয়।",
    aEn: "Modularize complex types, use reusable utility types, and avoid unnecessary deep unions to maintain performance.",
  },
  {
    q: "৭. JS to TS Migration",
    qEn: "7. JS to TS Migration",
    a: "Incrementally migration করা হয়—প্রথমে critical modules convert করে এবং allowJs ব্যবহার করে feature delivery চালু রাখা হয়।",
    aEn: "Migrate incrementally—convert critical modules first and use allowJs to keep feature delivery running.",
  },
  {
    q: "৮. Mapped Types & keyof",
    qEn: "8. Mapped Types & keyof",
    a: "Object-এর existing keys থেকে dynamically new type generate এবং key validation enforce করতে ব্যবহৃত হয়।",
    aEn: "Used to dynamically generate new types from existing object keys and enforce key validation.",
  },
  {
    q: "৯. Type-Safe Dynamic Forms",
    qEn: "9. Type-Safe Dynamic Forms",
    a: "Generics, mapped types এবং schema-based validation ব্যবহার করে dynamic form-কে strictly typed রাখা হয়।",
    aEn: "Keep dynamic forms strictly typed using generics, mapped types, and schema-based validation.",
  },
  {
    q: "১০. Shared Types in Monorepo",
    qEn: "10. Shared Types in Monorepo",
    a: "Shared package/library তৈরি করে common types centrally maintain করা হয়।",
    aEn: "Create a shared package/library to centrally maintain common types.",
  },
  {
    q: "১১. Third-Party Library Without Types",
    qEn: "11. Third-Party Library Without Types",
    a: "Custom declaration file (.d.ts) লিখি অথবা temporary wrapper type তৈরি করি।",
    aEn: "Write a custom declaration file (.d.ts) or create a temporary wrapper type.",
  },
  {
    q: "১২. unknown vs any",
    qEn: "12. unknown vs any",
    a: "unknown type-safe এবং usage-এর আগে type checking বাধ্যতামূলক, আর any সব type checking bypass করে।",
    aEn: "unknown is type-safe and requires checking before use; any bypasses all type checking.",
  },
  {
    q: "১৩. Function Overloads",
    qEn: "13. Function Overloads",
    a: "Different input signatures অনুযায়ী different return types define করতে Function Overloads ব্যবহার করা হয়।",
    aEn: "Function Overloads define different return types based on different input signatures.",
  },

  // Most asked concepts
  {
    q: "১৪. Type Inference",
    qEn: "14. Type Inference",
    a: "TypeScript automatically variable-এর type determine করাকে Type Inference বলে।",
    aEn: "Type Inference is when TypeScript automatically determines a variable's type.",
  },
  {
    q: "১৫. Union Type",
    qEn: "15. Union Type",
    a: "একটি variable একাধিক type ধারণ করতে পারলে তাকে Union Type বলে (যেমন string | number)।",
    aEn: "A Union Type allows a variable to hold multiple types (e.g. string | number).",
  },
  {
    q: "১৬. Intersection Type",
    qEn: "16. Intersection Type",
    a: "Multiple types combine করে single type তৈরিকে Intersection Type বলে (যেমন User & Admin)।",
    aEn: "An Intersection Type combines multiple types into one (e.g. User & Admin).",
  },
  {
    q: "১৭. Enum",
    qEn: "17. Enum",
    a: "Named constant values define করার জন্য Enum ব্যবহার করা হয়।",
    aEn: "Enums are used to define named constant values.",
  },
  {
    q: "১৮. keyof",
    qEn: "18. keyof",
    a: "Object type-এর সব keys-এর union type return করে।",
    aEn: "keyof returns a union type of all keys of an object type.",
  },
  {
    q: "১৯. typeof",
    qEn: "19. typeof",
    a: "Existing variable বা object থেকে type extract করতে ব্যবহৃত হয়।",
    aEn: "typeof extracts a type from an existing variable or object.",
  },
  {
    q: "২০. Partial<T>",
    qEn: "20. Partial<T>",
    a: "সব properties optional করে।",
    aEn: "Makes all properties optional.",
  },
  {
    q: "২১. Required<T>",
    qEn: "21. Required<T>",
    a: "সব properties mandatory করে।",
    aEn: "Makes all properties mandatory.",
  },
  {
    q: "২২. Pick<T, K>",
    qEn: "22. Pick<T, K>",
    a: "নির্দিষ্ট properties select করে নতুন type তৈরি করে।",
    aEn: "Selects specific properties to create a new type.",
  },
  {
    q: "২৩. Omit<T, K>",
    qEn: "23. Omit<T, K>",
    a: "নির্দিষ্ট properties বাদ দিয়ে নতুন type তৈরি করে।",
    aEn: "Creates a new type by omitting specific properties.",
  },
  {
    q: "২৪. Record<K, T>",
    qEn: "24. Record<K, T>",
    a: "Key-value structure-এর type define করতে ব্যবহৃত হয়।",
    aEn: "Used to define a key-value structure type.",
  },
  {
    q: "২৫. Readonly<T>",
    qEn: "25. Readonly<T>",
    a: "সব properties immutable করে।",
    aEn: "Makes all properties immutable.",
  },
  {
    q: "২৬. Never",
    qEn: "26. Never",
    a: "এমন type যা কখনও কোনো value return করে না।",
    aEn: "A type that never returns any value.",
  },
  {
    q: "২৭. Tuple",
    qEn: "27. Tuple",
    a: "Fixed length এবং fixed type-এর array হলো Tuple।",
    aEn: "A Tuple is an array with fixed length and fixed types.",
  },
  {
    q: "২৮. Type Assertion",
    qEn: "28. Type Assertion",
    a: "Developer manually TypeScript-কে type সম্পর্কে জানালে তাকে Type Assertion বলে।",
    aEn: "Type Assertion is when a developer manually tells TypeScript a value's type.",
  },
  {
    q: "২৯. Declaration File (.d.ts)",
    qEn: "29. Declaration File (.d.ts)",
    a: "JavaScript library-এর type definitions declare করার জন্য ব্যবহৃত হয়।",
    aEn: "Used to declare type definitions for JavaScript libraries.",
  },
  {
    q: "৩০. Utility Types",
    qEn: "30. Utility Types",
    a: "Existing type modify বা transform করার built-in helper types-কে Utility Types বলে।",
    aEn: "Utility Types are built-in helpers to modify or transform existing types.",
  },
  {
    q: "৩১. Generic Constraints",
    qEn: "31. Generic Constraints",
    a: "Generic type-এর allowed types limit করতে Constraints ব্যবহার করা হয়।",
    aEn: "Constraints limit the allowed types for a generic type.",
  },
  {
    q: "৩২. Decorators",
    qEn: "32. Decorators",
    a: "Class বা method-এর behavior metadata-এর মাধ্যমে extend করার feature (experimental)।",
    aEn: "An experimental feature to extend class or method behavior via metadata.",
  },
  {
    q: "৩৩. Strict Mode",
    qEn: "33. Strict Mode",
    a: "Stronger type checking enable করে runtime error কমানোর TypeScript configuration।",
    aEn: "A TypeScript configuration that enables stronger type checking to reduce runtime errors.",
  },

  // React + TypeScript (top topics — unique extras)
  {
    q: "৩৪. React Props Typing",
    qEn: "34. React Props Typing",
    a: "Component props `type Props = { ... }` বা `interface Props` দিয়ে define করে; children optional হলে `React.ReactNode` ব্যবহার করা হয়।",
    aEn: "Define component props with type or interface; use React.ReactNode for optional children.",
  },
  {
    q: "৩৫. React.FC vs Explicit Props",
    qEn: "35. React.FC vs Explicit Props",
    a: "Interview-তে explicit props return type (`function Button(props: Props): JSX.Element`) বেশি preferred—React.FC implicit children যোগ করে।",
    aEn: "Explicit props + return type is preferred in interviews; React.FC implicitly adds children.",
  },
  {
    q: "৩৬. useState Generic",
    qEn: "36. useState Generic",
    a: "`useState<User | null>(null)` দিয়ে state type specify করা হয়—union/nullable state-এ inference যথেষ্ট নাও হতে পারে।",
    aEn: "Specify state with useState<User | null>(null); inference may be insufficient for union/nullable state.",
  },
  {
    q: "৩৭. Event Handler Types",
    qEn: "37. Event Handler Types",
    a: "React-এ `React.ChangeEvent<HTMLInputElement>`, `React.MouseEvent<HTMLButtonElement>` ইত্যাদি typed event ব্যবহার করা হয়।",
    aEn: "Use typed events like React.ChangeEvent<HTMLInputElement> and React.MouseEvent<HTMLButtonElement>.",
  },
  {
    q: "৩৮. as const",
    qEn: "38. as const",
    a: "`as const` literal types narrow করে—tuple/array/object-কে readonly + exact literal union বানায়।",
    aEn: "as const narrows to literal types—makes tuples/arrays/objects readonly with exact literal unions.",
  },
  {
    q: "৩৯. satisfies Operator",
    qEn: "39. satisfies Operator",
    a: "`satisfies` type check করে কিন্তু inferred type narrow করে না—config object validation-এ কাজে লাগে।",
    aEn: "satisfies validates types without widening inferred types—useful for config objects.",
  },
  {
    q: "৪০. Type Narrowing",
    qEn: "40. Type Narrowing",
    a: "typeof, instanceof, in operator, discriminated union এবং type guards দিয়ে union type-কে narrow করা হয়।",
    aEn: "Narrow unions with typeof, instanceof, in, discriminated unions, and type guards.",
  },
];
