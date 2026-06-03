import type { QA } from "./types";

/** Modern React stack — appended after core react.ts */
export const reactInterviewExtra: QA[] = [
  {
    q: "৪০২. TanStack Query (React Query)",
    qEn: "402. TanStack Query (React Query)",
    a: "কী?\nAPI fetch + cache + refetch + loading/error state এক জায়গায়।\n\n```javascript\nconst { data, isLoading } = useQuery({\n  queryKey: ['users'],\n  queryFn: () => fetch('/api/users').then(r => r.json())\n});\n```\n\n💡 মুখস্থ: useQuery = fetch + cache",
  },
  {
    q: "৪০৩. Zustand",
    qEn: "403. Zustand",
    a: "```javascript\nconst useStore = create((set) => ({\n  count: 0,\n  inc: () => set(s => ({ count: s.count + 1 }))\n}));\n```\n\nRedux এর চেয়ে কম boilerplate — ছোট/মাঝারি global state।",
  },
  {
    q: "৪০৪. Redux Toolkit (RTK)",
    qEn: "404. Redux Toolkit",
    a: "createSlice, configureStore — modern Redux, কম কোড।\n\nInterview: কখন Redux? বড় team, complex global state, DevTools।",
  },
  {
    q: "৪০৫. React 19 সংক্ষেপে",
    qEn: "405. React 19 overview",
    a: "useActionState, use() hook, Server Actions, better hydration/streaming।\n\n💡 Next.js + React 19 interview trend",
  },
  {
    q: "৪০৬. Server vs Client Component",
    qEn: "406. Server vs Client Component",
    a: "Server Component: DB, secrets, zero JS client\nClient Component: useState, onClick — 'use client'\n\nNext.js App Router interview must",
  },
  {
    q: "৪০৭. Hydration mismatch",
    qEn: "407. Hydration mismatch",
    a: "Server HTML ≠ client first render\n\nএড়ান: Date.now(), Math.random(), window in render\nসমাধান: useEffect, suppressHydrationWarning (careful)",
  },
  {
    q: "৪০৮. React Hook Form",
    qEn: "408. React Hook Form",
    a: "register, handleSubmit — কম re-render, ভালো UX\n\n💡 বড় form এ Formik/ RHF",
  },
  {
    q: "৪০৯. react-window (virtual list)",
    qEn: "409. react-window",
    a: "হাজার item — শুধু visible row render\n\nPerformance interview classic",
  },
  {
    q: "৪১০. useMemo / useCallback কখন?",
    qEn: "410. When useMemo / useCallback?",
    a: "expensive calculation বা memo child এ stable reference\n\nপ্রমাণ ছাড়া ব্যবহার না — premature optimization",
  },
  {
    q: "৪১১. Error Boundary",
    qEn: "411. Error Boundary",
    a: "class component বা react-error-boundary\n\nuseEffect error catch করে না — UI fallback দরকার",
  },
  {
    q: "৪১২. React Testing Library",
    qEn: "412. React Testing Library",
    a: "getByRole, userEvent — user মতো test\n\nImplementation detail নয়, behavior test",
  },
  {
    q: "৪১৩. Vite vs CRA",
    qEn: "413. Vite vs CRA",
    a: "নতুন project: Vite + React — fast HMR, ESM\n\nCRA maintenance mode feeling",
  },
  {
    q: "৪১৪. Prop drilling সমাধান",
    qEn: "414. Prop drilling solutions",
    a: "Context, Zustand/Redux, composition (children)\n\nছোট tree: Context; বড়: state library",
  },
  {
    q: "৪১৫. React performance checklist",
    qEn: "415. React performance checklist",
    a: "memo, lazy, virtual list, avoid inline functions in lists, React Query cache, key prop\n\n💡 5yr: measure first (Profiler), then optimize",
  },
];
