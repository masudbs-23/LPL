/** Adds উদাহরণ + code blocks to React answers (SQL-style) when missing */

const SNIPPETS = new Map([
  [1, "ছোট component জোড়া দিয়ে UI বানানো হয়।\n\n```javascript\nfunction App() {\n  return <h1>Hello React</h1>;\n}\n```"],
  [2, "২০১৩: ওপেন সোর্স → ২০১৯: Hooks (useState, useEffect)।"],
  [3, "JSX, Virtual DOM, Components, একমুখী data flow, Hooks।"],
  [4, "```javascript\nconst element = <h1>Hello</h1>;\n// বাবেল → React.createElement('h1', null, 'Hello')\n```"],
  [5, "Element = object descriptor; Component = function যা element return করে।"],
  [6, "```javascript\nfunction Welcome() { return <h1>Hi</h1>; }\n\nclass Welcome extends React.Component {\n  render() { return <h1>Hi</h1>; }\n}\n```"],
  [7, "Hooks আসার পর প্রায় সব সময় functional component; Error Boundary এখনও class বা library।"],
  [8, "```javascript\nconst MemoBtn = React.memo(function Button({ onClick }) {\n  return <button onClick={onClick}>Click</button>;\n});\n```"],
  [9, "```javascript\nconst [count, setCount] = useState(0);\n```"],
  [10, "```javascript\nfunction Child({ name }) { return <p>{name}</p>; }\n// <Child name=\"Rahim\" />\n```"],
  [11, "| | state | props |\n| পরিবর্তন | হ্যাঁ (setState) | না |\n| মালিক | নিজে | parent |"],
  [12, "HTML: onclick=\"fn()\" → React: onClick={fn}"],
  [13, "```javascript\nfunction handleClick(e) {\n  e.preventDefault(); // synthetic event\n}\n```"],
  [14, "```javascript\n{isLoggedIn ? <Logout /> : <Login />}\n{isLoading && <Spinner />}\n```"],
  [15, "```javascript\n{items.map(item => (\n  <li key={item.id}>{item.name}</li>\n))}\n```"],
  [16, "Memory-তে lightweight tree; change হলে diff করে real DOM update।"],
  [17, "Change → new VDOM → diff → patch real DOM (reconciliation)।"],
  [18, "| Shadow DOM | Virtual DOM |\n| Browser encapsulation | React performance |"],
  [19, "Render কাজ ছোট unit-এ ভাগ; interrupt ও priority support।"],
  [20, "Interruptible rendering, priority updates, concurrent features।"],
  [21, "```javascript\n<input value={name} onChange={e => setName(e.target.value)} />\n```"],
  [22, "```javascript\nconst ref = useRef();\n<input ref={ref} defaultValue=\"hello\" />\n```"],
  [23, "```javascript\nReact.createElement('h1', null, 'Hi');\nReact.cloneElement(el, { className: 'active' });\n```"],
  [24, "```javascript\n// Parent\nconst [user, setUser] = useState(null);\n<Profile user={user} />\n<Settings user={user} />\n```"],
  [25, "```javascript\nfunction withLoading(Wrapped) {\n  return function Enhanced(props) {\n    if (props.loading) return <Spinner />;\n    return <Wrapped {...props} />;\n  };\n}\n```"],
  [26, "```javascript\n<Card><h1>Title</h1></Card> // h1 হল children\n```"],
  [27, "```javascript\n{/* JSX comment */}\n// normal JS comment outside JSX\n```"],
  [28, "পুরনো vs নতুন VDOM tree compare → minimal DOM update।"],
  [29, "```javascript\nconst Lazy = React.lazy(() => import('./Heavy'));\n// named export: .then(m => ({ default: m.Named }))\n```"],
  [30, "class রিজার্ভড → JSX-এ className, htmlFor।"],
  [31, "```javascript\n<>\n  <h1>Title</h1>\n  <p>Text</p>\n</>\n```"],
  [32, "অতিরিক্ত <div> wrapper লাগে না — flex/grid ভাঙে না।"],
  [33, "```javascript\nReactDOM.createPortal(\n  <Modal />,\n  document.getElementById('modal-root')\n);\n```"],
  [34, "```javascript\nfunction Badge({ label }) { return <span>{label}</span>; }\n```"],
  [35, "```javascript\nfunction Counter() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}\n```"],
  [36, "```javascript\nMyComponent.propTypes = {\n  name: PropTypes.string.isRequired,\n};\n```"],
  [48, "```javascript\nexport default React.memo(ExpensiveList);\n```"],
  [49, "```javascript\n// Server\nconst html = renderToString(<App />);\n// Client\ncreateRoot(el).render(<App />);\n```"],
  [50, "CRA: npm run build | Vite: vite build"],
  [51, "Hooks বেশিরভাগ HOC/render props replace করে; জটিল reuse-এ এখনও pattern দরকার হতে পারে।"],
  [57, "```javascript\n{users.map(u => <li key={u.id}>{u.name}</li>)}\n```"],
  [68, "```javascript\nconst inputRef = useRef();\nuseEffect(() => { inputRef.current?.focus(); }, []);\nreturn <input ref={inputRef} />;\n```"],
  [72, "```javascript\nexport default function Button() { return <button>OK</button>; }\nimport Button from './Button';\n```"],
  [79, "```javascript\n<BrowserRouter>\n  <Routes>\n    <Route path=\"/\" element={<Home />} />\n  </Routes>\n</BrowserRouter>\n```"],
  [83, "```javascript\nconst navigate = useNavigate();\nnavigate('/dashboard');\n```"],
  [87, "```javascript\n<Route path=\"*\" element={<NotFound />} />\n```"],
  [93, "```javascript\nconst intl = useIntl();\n<input placeholder={intl.formatMessage({ id: 'name' })} />\n```"],
  [94, "```javascript\nconst { locale } = useIntl();\nconsole.log(locale); // 'bn' | 'en'\n```"],
  [95, "```javascript\n<FormattedDate value={new Date()} year=\"numeric\" month=\"long\" day=\"numeric\" />\n```"],
  [96, "```javascript\nimport { shallow } from 'enzyme';\nconst wrapper = shallow(<MyComponent />);\n```"],
  [97, "```javascript\nimport TestRenderer from 'react-test-renderer';\nconst tree = TestRenderer.create(<App />).toJSON();\n```"],
  [98, "```javascript\nimport { render, screen } from '@testing-library/react';\nrender(<App />);\n```"],
  [101, "```javascript\ntest('adds numbers', () => {\n  expect(1 + 2).toBe(3);\n});\n```"],
  [102, "Action → Dispatcher → Store → View (one-way)"],
  [103, "```javascript\nconst store = createStore(reducer);\nstore.dispatch({ type: 'INCREMENT' });\n```"],
  [114, "```javascript\n// thunk\nexport const fetchUser = () => async (dispatch) => {\n  const data = await api.getUser();\n  dispatch({ type: 'SET_USER', payload: data });\n};\n```"],
  [116, "```javascript\nconst count = useSelector(s => s.counter.value);\nconst dispatch = useDispatch();\n```"],
  [125, "```javascript\nconst thunk = () => (dispatch) => {\n  dispatch({ type: 'LOADING' });\n};\n```"],
  [127, "Redux DevTools extension → time-travel, action log।"],
  [154, "```javascript\nconst selectVisible = createSelector(\n  [getTodos, getFilter],\n  (todos, filter) => todos.filter(t => t.status === filter)\n);\n```"],
  [164, "```javascript\nconst MemoChild = React.memo(Child);\n```"],
  [165, "```javascript\nconst LazyPage = React.lazy(() => import('./Page'));\n<Suspense fallback={<Spinner />}><LazyPage /></Suspense>\n```"],
  [168, "useState, useEffect, useContext… — functional component-এ state/lifecycle।"],
  [181, "```javascript\nconst LazyHome = React.lazy(() => import('./Home'));\n```"],
  [199, "```javascript\n<Suspense fallback={<div>Loading…</div>}>\n  <LazyComponent />\n</Suspense>\n```"],
  [217, "```javascript\nuseEffect(() => {\n  let cancelled = false;\n  fetch('/api').then(r => r.json()).then(data => {\n    if (!cancelled) setData(data);\n  });\n  return () => { cancelled = true; };\n}, []);\n```"],
  [226, "Parent → props → child; child event → parent state update।"],
  [241, "| useState | useRef |\n| change → re-render | change → no re-render |"],
  [265, "```javascript\nconst [state, dispatch] = useReducer(reducer, { count: 0 });\n```"],
  [267, "```javascript\nconst theme = useContext(ThemeContext);\n```"],
  [271, "```javascript\nconst expensive = useMemo(() => compute(a, b), [a, b]);\n```"],
  [274, "```javascript\nconst [n] = useState(() => JSON.parse(localStorage.getItem('x')));\n```"],
  [280, "```javascript\nconst reducer = (s, action) => {\n  switch (action.type) {\n    case 'inc': return { count: s.count + 1 };\n    default: return s;\n  }\n};\n```"],
  [284, "```javascript\nconst ThemeContext = createContext('light');\nconst theme = useContext(ThemeContext);\n```"],
  [288, "```javascript\nuseEffect(() => { /* runs when dep changes */ }, [userId]);\n```"],
  [297, "```javascript\nconst ref = useRef(null);\n<input ref={ref} />\nref.current.focus();\n```"],
  [307, "```javascript\nconst onClick = useCallback(() => doSomething(id), [id]);\n```"],
  [308, "```javascript\nfunction useWindowWidth() {\n  const [w, setW] = useState(window.innerWidth);\n  useEffect(() => {\n    const fn = () => setW(window.innerWidth);\n    window.addEventListener('resize', fn);\n    return () => window.removeEventListener('resize', fn);\n  }, []);\n  return w;\n}\n```"],
  [317, "```javascript\nuseEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);\n```"],
  [319, "Top-level only; React functions only; eslint-plugin-react-hooks চালু রাখুন।"],
]);

const RULES = [
  [/jsx/i, "```javascript\nconst el = <div className=\"box\">Hi</div>;\n```"],
  [/useState|স্টেট কী|state কী/i, "```javascript\nconst [value, setValue] = useState(initial);\n```"],
  [/useEffect|ইফেক্ট/i, "```javascript\nuseEffect(() => {\n  // side effect\n  return () => cleanup();\n}, [deps]);\n```"],
  [/useRef|রেফ/i, "```javascript\nconst ref = useRef(null);\n```"],
  [/useMemo/i, "```javascript\nconst v = useMemo(() => heavy(a), [a]);\n```"],
  [/useCallback/i, "```javascript\nconst fn = useCallback(() => action(), [dep]);\n```"],
  [/useReducer|রিডিউসার হুক/i, "```javascript\nconst [state, dispatch] = useReducer(reducer, init);\n```"],
  [/useContext|কনটেক্সট হুক/i, "```javascript\nconst value = useContext(MyContext);\n```"],
  [/redux|রিডাক্স/i, "```javascript\ndispatch({ type: 'ACTION', payload: data });\n```"],
  [/router|রাউটার/i, "```javascript\n<Link to=\"/about\">About</Link>\n```"],
  [/jest|জেস্ট/i, "```javascript\nexpect(result).toBe(expected);\n```"],
  [/portal|পোর্টাল/i, "```javascript\ncreatePortal(children, document.body)\n```"],
  [/fragment|ফ্র্যাগমেন্ট/i, "```javascript\n<>...</>\n```"],
  [/propTypes|প্রপটাইপ/i, "```javascript\nname: PropTypes.string.isRequired\n```"],
  [/styled|স্টাইলড/i, "```javascript\nconst Btn = styled.button`padding: 8px;`;\n```"],
  [/next\.?js|নেক্সট/i, "```javascript\n// app/page.tsx — Server Component by default\nexport default function Page() { return <main />; }\n```"],
  [/typescript|টাইপস্ক্রিপ্ট/i, "```typescript\ninterface Props { name: string }\nfunction Hello({ name }: Props) { return <h1>{name}</h1>; }\n```"],
  [/error boundary|এরর বাউন্ডারি/i, "```javascript\nclass ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError() { return { hasError: true }; }\n  render() { return this.state.hasError ? <h1>Oops</h1> : this.props.children; }\n}\n```"],
  [/formik|react hook form|ফর্মিক/i, "```javascript\nconst { register, handleSubmit } = useForm();\n```"],
  [/mobx|মবিএক্স/i, "```javascript\n// observable state + autorun\n```"],
  [/relay|রিলে/i, "```graphql\nquery AppQuery { viewer { name } }\n```"],
];

function hasExampleSection(text) {
  return /উদাহরণ:|Example:/i.test(text);
}

function hasCodeBlock(text) {
  return /```/.test(text);
}

function extractInlineCodeLines(a) {
  const lines = a.split("\n");
  const code = [];
  for (const line of lines) {
    const t = line.trim();
    if (
      /^(const |let |var |function |class |import |export |return |<[A-Z]|use[A-Z])/.test(t) ||
      (t.includes("=>") && t.includes("(")) ||
      /^[a-zA-Z]+:\s*.+→/.test(t)
    ) {
      code.push(t);
    }
  }
  if (code.length >= 1 && code.length <= 8) {
    return "```javascript\n" + code.join("\n") + "\n```";
  }
  return null;
}

function inferSnippet(num, q, a) {
  if (SNIPPETS.has(num)) return SNIPPETS.get(num);

  for (const [re, snip] of RULES) {
    if (re.test(q) || re.test(a)) return snip;
  }

  const inline = extractInlineCodeLines(a);
  if (inline) return inline;

  if (num >= 265 && num <= 319) {
    return "```javascript\n// Hooks — ছোট working example দেখান\n```";
  }
  if (num >= 102 && num <= 135) {
    return "```javascript\n// Redux flow: dispatch → reducer → new state\n```";
  }
  if (num >= 79 && num <= 89) {
    return "```javascript\n<Route path=\"/users/:id\" element={<User />} />\n```";
  }

  const first = a.split("\n\n")[0]?.trim();
  if (first && first.length < 200) return first;
  return "ইন্টারভিউতে সংক্ষেপে বলুন, তারপর ছোট কোড বা ডায়াগ্রাম দেখান।";
}

/**
 * @param {number} num
 * @param {string} q
 * @param {string} a
 */
export function enrichAnswer(num, q, a) {
  let text = a.trim();
  if (!text) return text;

  const hasLabel = hasExampleSection(text);
  const hasCode = hasCodeBlock(text);

  if (hasLabel && hasCode) return text;

  if (hasCode && !hasLabel) {
    return text.replace(/```/, "উদাহরণ:\n\n```");
  }

  if (hasLabel && !hasCode) {
    const snip = inferSnippet(num, q, text);
    if (snip && !snip.startsWith("ইন্টারভিউতে")) {
      return `${text}\n\n${snip}`;
    }
    return text;
  }

  const snippet = inferSnippet(num, q, text);
  const firstPara = text.split("\n\n")[0]?.trim() ?? "";
  if (snippet === firstPara || snippet === text.trim()) {
    const fallback = "```javascript\n// সংক্ষিপ্ত বলুন, তারপর ছোট কোড দেখান\nfunction Demo() { return <p>Example</p>; }\n```";
    return `${text}\n\nউদাহরণ:\n${fallback}`;
  }
  return `${text}\n\nউদাহরণ:\n${snippet}`;
}
