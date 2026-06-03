/** Bengali Old Q&A (89). Regenerate: node scripts/build-old-qa-bn-data.mjs */
export const oldQaBn = [
  {
    "q": "কেন সরাসরি state আপডেট করা উচিত নয়?",
    "a": "সরাসরি `this.state.message = 'Hello'` লিখলে React re-render ট্রিগার করে না। `this.setState({ message: 'Hello' })` ব্যবহার করুন—এটি আপডেট শিডিউল করে। constructor বা class field syntax-এ সরাসরি assign করা যায়।"
  },
  {
    "q": "setState()-এ callback ফাংশনের উদ্দেশ্য কী?",
    "a": "setState অ্যাসিঙ্ক্রোনাস; আপডেটের ঠিক পরেই নতুন state নির্ভর কাজের জন্য দ্বিতীয় আর্গুমেন্ট হিসেবে callback দিন। ফাংশন কম্পোনেন্টে `useEffect` দিয়ে একই ধরনের কাজ করা যায়।"
  },
  {
    "q": "JSX callback-এ মেথড বা ইভেন্ট হ্যান্ডলার কীভাবে bind করবেন?",
    "a": "ক্লাস কম্পোনেন্টে তিন উপায়: (১) constructor-এ `.bind(this)`, (২) public class fields (`handleClick = () => {}`), (৩) JSX-এ arrow `onClick={() => this.handleClick()}`। child-এ prop হিসেবে পাস করলে arrow বেশি re-render করতে পারে—bind/fields ভালো।"
  },
  {
    "q": "ইভেন্ট হ্যান্ডলার বা callback-এ প্যারামিটার কীভাবে পাস করবেন?",
    "a": "`<button onClick={() => this.handleClick(id)} />` অথবা `onClick={this.handleClick.bind(this, id)}`। curried arrow: `handleClick = (id) => () => { ... }`।"
  },
  {
    "q": "refs-এর ব্যবহার কী?",
    "a": "ref DOM বা ক্লাস ইনস্ট্যান্সে সরাসরি অ্যাক্সেস দেয়। বেশিরভাগ ক্ষেত্রে এড়িয়ে চলুন; focus, scroll, third-party ইন্টিগ্রেশনে দরকার হতে পারে।"
  },
  {
    "q": "refs কীভাবে তৈরি করবেন?",
    "a": "`React.createRef()` + `ref={this.myRef}` অথবা callback ref `(el) => { this.txt = el }`। ফাংশন কম্পোনেন্টে `useRef`।"
  },
  {
    "q": "forward refs কী?",
    "a": "`React.forwardRef((props, ref) => <button ref={ref} />)` child-এ ref পাঠায়।"
  },
  {
    "q": "callback refs ও findDOMNode()-এর মধ্যে কোনটি ভালো?",
    "a": "callback refs বা `createRef` ব্যবহার করুন; `findDOMNode()` এড়ান—ভবিষ্যৎ React অপ্টিমাইজেশনে বাধা দেয়।"
  },
  {
    "q": "String Refs কেন legacy?",
    "a": "String refs (`ref='x'`, `this.refs.x`) legacy: React stateful রাখে, composable নয়, static analysis-এ খারাপ; React 16-এ সরানো হয়েছে।"
  },
  {
    "q": "কম্পোনেন্ট lifecycle-এর বিভিন্ন ধাপ কী কী?",
    "a": "তিন ধাপ: Mounting (constructor → getDerivedStateFromProps → render → componentDidMount), Updating (shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate), Unmounting (componentWillUnmount)। React-এর Render/Pre-commit/Commit ফেজও আছে।"
  },
  {
    "q": "React-এর lifecycle methods কী কী?",
    "a": "16.3-এর আগে: componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount। 16.3+: getDerivedStateFromProps, componentDidMount, shouldComponentUpdate, getSnapshotBeforeUpdate, componentDidUpdate, componentWillUnmount।"
  },
  {
    "q": "HOC কম্পোনেন্টে props proxy কীভাবে তৈরি করবেন?",
    "a": "HOC render-এ নতুন props মার্জ করে wrapped কম্পোনেন্টে পাঠান: `<WrappedComponent {...this.props} {...newProps} />`।"
  },
  {
    "q": "context কী?",
    "a": "Context ট্রিতে props ছাড়াই ডেটা শেয়ার করে (theme, auth, locale)। `React.createContext(defaultValue)` → Provider/Consumer।"
  },
  {
    "q": "super constructor-এ props আর্গুমেন্ট ব্যবহারের উদ্দেশ্য কী?",
    "a": "child constructor-এ `super(props)` না হলে `this.props` undefined থাকে; constructor-এর বাইরে পার্থক্য নেই। `props` প্যারামিটার সবসময় পাওয়া যায়।"
  },
  {
    "q": "ডাইনামিক key নাম দিয়ে state কীভাবে সেট করবেন?",
    "a": "computed property: `this.setState({ [event.target.id]: event.target.value })`।"
  },
  {
    "q": "রেন্ডারে ফাংশন প্রতিবার কল হওয়ার সাধারণ ভুল কী?",
    "a": "ভুল: `onClick={this.handleClick()}` (প্রতি render-এ কল)। সঠিক: `onClick={this.handleClick}` বা arrow wrapper।"
  },
  {
    "q": "React v16-এ error boundaries কী?",
    "a": "Error boundary child tree-এর JS error ধরে fallback UI দেখায়। `componentDidCatch` বা `static getDerivedStateFromError` সহ class component।"
  },
  {
    "q": "React v15-তে error boundaries কীভাবে handle করা হয়?",
    "a": "React 15-এ `unstable_handleError`; v16-এ `componentDidCatch`।"
  },
  {
    "q": "react-dom-এর render মেথডের উদ্দেশ্য কী?",
    "a": "`ReactDOM.render(element, container, callback)` DOM-এ রেন্ডার/আপডেট করে; optional callback render/update-এর পর চলে।"
  },
  {
    "q": "constructor-এ setState() ব্যবহার করলে কী হবে?",
    "a": "constructor-এ setState re-render চায় কিন্তু কম্পোনেন্ট এখনো mount হয়নি—তাই `this.state = {...}` দিয়ে initialize করুন।"
  },
  {
    "q": "componentWillMount()-এ setState() ব্যবহার করা ভালো?",
    "a": "componentWillMount-এ setState নিরাপদ কিন্তু async/side-effect এড়ান; ডেটা fetch `componentDidMount`-এ করুন।"
  },
  {
    "q": "initial state-এ props ব্যবহার করলে কী হবে?",
    "a": "constructor-এ props থেকে state একবারই সেট হয়; props পরে বদলালে state আপডেট হয় না—controlled হলে render-এ `this.props` ব্যবহার করুন।"
  },
  {
    "q": "React-এ decorators কীভাবে ব্যবহার করবেন?",
    "a": "Decorator HOC-এর syntactic sugar (`@setTitle('Profile')`)—class wrap করে `componentDidMount`-এ title ইত্যাদি সেট করে।"
  },
  {
    "q": "CRA কী এবং এর সুবিধা কী?",
    "a": "Create React App: zero-config React, JSX, ES6, test runner, dev server, production build। `npx create-react-app my-app`।"
  },
  {
    "q": "mounting-এ lifecycle methods-এর ক্রম কী?",
    "a": "Mounting ক্রম: constructor() → static getDerivedStateFromProps() → render() → componentDidMount()।"
  },
  {
    "q": "React v16-এ কোন lifecycle methods deprecated হবে?",
    "a": "componentWillMount, componentWillReceiveProps, componentWillUpdate unsafe; 16.3+ থেকে `UNSAFE_` prefix, v17-এ সরানোর পরিকল্পনা।"
  },
  {
    "q": "getDerivedStateFromProps() lifecycle method-এর উদ্দেশ্য কী?",
    "a": "render-এর আগে props থেকে state derive; object return করলে state আপডেট, null মানে আপডেট দরকার নেই। componentWillReceiveProps-এর বিকল্প।"
  },
  {
    "q": "getSnapshotBeforeUpdate() lifecycle method-এর উদ্দেশ্য কী?",
    "a": "DOM commit-এর ঠিক আগে snapshot (scroll position); মান componentDidUpdate-এর তৃতীয় আর্গুমেন্ট।"
  },
  {
    "q": "কম্পোনেন্ট নামকরণের recommended উপায় কী?",
    "a": "displayName-এর বদলে class/function reference দিয়ে নাম দিন (`export default class TodoApp`)।"
  },
  {
    "q": "class component-এ methods-এর recommended order কী?",
    "a": "ক্রম: static → constructor → lifecycle (mount/update/unmount) → handlers → getters → optional render helpers → render()।"
  },
  {
    "q": "কেন setState()-এ ফাংশন পাস করতে হয়?",
    "a": "setState batch করে; একাধিক `setState({ count: this.state.count+1 })` একবারই যোগ হতে পারে। ফাংশন ফর্ম: `setState((prev, props) => ({ count: prev.count + 1 }))`।"
  },
  {
    "q": "isMounted() কেন anti-pattern এবং সমাধান কী?",
    "a": "isMounted() warning লুকায় কিন্তু unmount-পর setState ঠিক করে না। callback cancel করুন `componentWillUnmount`-এ।"
  },
  {
    "q": "constructor ও getInitialState()-এর পার্থক্য কী?",
    "a": "ES6 class: constructor-এ `this.state`। `React.createClass`: `getInitialState()` (deprecated v16+)।"
  },
  {
    "q": "setState ছাড়া re-render চাপানো যায়?",
    "a": "`forceUpdate(callback)` re-render চাপায়; props/state ছাড়া ডেটা থাকলে—তবু এড়িয়ে চলুন।"
  },
  {
    "q": "ES6 class-এ super() ও super(props)-এর পার্থক্য কী?",
    "a": "constructor-এ `this.props` চাইলে `super(props)`; শুধু `super()` হলে constructor-এ `this.props` undefined।"
  },
  {
    "q": "setState() ও replaceState()-এর পার্থক্য কী?",
    "a": "setState merge করে; replaceState পুরো state প্রতিস্থাপন করে (বিরল)।"
  },
  {
    "q": "state পরিবর্তন কীভাবে শুনবেন?",
    "a": "`componentDidUpdate(prevProps, prevState)`-এ তুলনা করে side-effect চালান।"
  },
  {
    "q": "React state থেকে array element সরানোর recommended উপায় কী?",
    "a": "`filter` দিয়ে নতুন array: `this.setState({ data: this.state.data.filter((_, i) => i !== index) })`—মিউটেট করবেন না।"
  },
  {
    "q": "HTML রেন্ডার ছাড়া React ব্যবহার করা যায়?",
    "a": "হ্যাঁ: `return null`, `false`, `[]` (16+), `Fragment` (16.2+), `undefined` (18+)।"
  },
  {
    "q": "state-এ object আপডেটের উপায় কী কী?",
    "a": "Object.assign বা spread দিয়ে copy, তারপর setState; বা functional setState: `setState(prev => ({ user: { ...prev.user, age: 42 } }))`।"
  },
  {
    "q": "create-react-app-এ polyfills যোগ করার উপায় কী?",
    "a": "core-js manual import অথবা polyfill.io CDN `index.html`-এ।"
  },
  {
    "q": "create-react-app-এ https কীভাবে ব্যবহার করবেন?",
    "a": "HTTPS=true env: package.json start script-এ set HTTPS=true (Windows) বা HTTPS=true npm start।"
  },
  {
    "q": "create-react-app-এ relative import এড়ানোর উপায় কী?",
    "a": "root `.env`-এ `NODE_PATH=src/app`—dev server restart।"
  },
  {
    "q": "প্রতি সেকেন্ডে কম্পোনেন্ট আপডেট কীভাবে করবেন?",
    "a": "`componentDidMount`-এ `setInterval`, `componentWillUnmount`-এ `clearInterval`।"
  },
  {
    "q": "constructor কেন শুধু একবার কল হয়?",
    "a": "reconciliation একই জায়গায় একই টাইপের কম্পোনেন্টকে একই instance ধরে—constructor আবার চলে না।"
  },
  {
    "q": "React-এ constants কীভাবে define করবেন?",
    "a": "static class field: `static DEFAULT_PAGINATION = 10;`।"
  },
  {
    "q": "React-এ programmatically click event কীভাবে trigger করবেন?",
    "a": "ref সংরক্ষণ করে `this.inputElement.click()`।"
  },
  {
    "q": "কোন lifecycle-এ AJAX call করবেন?",
    "a": "Axios/fetch `componentDidMount`-এ; ডেটা এলে setState।"
  },
  {
    "q": "render props কী?",
    "a": "render prop: `value` হিসেবে ফাংশন prop যা React element return করে—কোড শেয়ারিং।"
  },
  {
    "q": "load-এ action কীভাবে dispatch করবেন?",
    "a": "`componentDidMount`-এ `dispatch(fetchData())`; render-এ loading state দেখান।"
  },
  {
    "q": "React Redux-এ connect() কীভাবে ব্যবহার করবেন?",
    "a": "`connect(mapStateToProps, mapDispatchToProps)(App)`—state props-এ, actions bind।"
  },
  {
    "q": "Redux connect decorator-এ @ symbol-এর উদ্দেশ্য কী?",
    "a": "`@connect(...)` decorator syntax—experimental; babel plugin লাগে।"
  },
  {
    "q": "create-react-app-এ TypeScript কীভাবে ব্যবহার করবেন?",
    "a": "`npx create-react-app my-app --template typescript` (react-scripts 3.3+); পুরনোতে `--typescript` বা `react-scripts-ts`।"
  },
  {
    "q": "ES6 class-এ statics object কাজ করে?",
    "a": "না—`statics` শুধু createClass-এ; ES6-এ `static propTypes`, class বাইরে `Component.x = ...`।"
  },
  {
    "q": "inline ref callbacks কেন recommended নয়?",
    "a": "inline callback ref প্রতি render-এ নতুন ফাংশন—null তারপর element দুবার কল। class field method stable রাখুন।"
  },
  {
    "q": "HOC factory implementations কী?",
    "a": "Props Proxy (wrapped-এ props pass) ও Inheritance Inversion (Enhancer extends Wrapped)।"
  },
  {
    "q": "class field declarations syntax কীভাবে ব্যবহার করবেন?",
    "a": "state = {}, arrow handlers—constructor/bind ছাড়াই concise class components।"
  },
  {
    "q": "event handlers-এ error boundaries দরকার নেই কেন?",
    "a": "event handler render phase-এর বাইরে; error boundary লাগে না—try/catch ব্যবহার করুন।"
  },
  {
    "q": "try/catch ও error boundaries-এর পার্থক্য কী?",
    "a": "try/catch imperative কোডে; error boundary declarative render/lifecycle error-এর জন্য।"
  },
  {
    "q": "class component-এ required method কোনটি?",
    "a": "শুধু `render()` বাধ্যতামূলক।"
  },
  {
    "q": "render method-এর সম্ভাব্য return types কী?",
    "a": "elements, array/fragment, portal, string/number, boolean/null (কিছু render নয়)।"
  },
  {
    "q": "constructor-এর মূল উদ্দেশ্য কী?",
    "a": "state initialize ও event handler bind (constructor-এ setState নয়)।"
  },
  {
    "q": "React component-এ constructor বাধ্যতামূলক?",
    "a": "না—state/handlers না থাকলে constructor লাগবে না।"
  },
  {
    "q": "componentWillUnmount-এ setState কেন ডাকবেন না?",
    "a": "unmount-পর আর mount হবে না—setState অর্থহীন।"
  },
  {
    "q": "getDerivedStateFromError-এর উদ্দেশ্য কী?",
    "a": "error থেকে state আপডেট করে fallback UI (`return { hasError: true }`)।"
  },
  {
    "q": "re-render-এ methods-এর order কী?",
    "a": "getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate।"
  },
  {
    "q": "error handling-এ কোন methods invoke হয়?",
    "a": "getDerivedStateFromError, componentDidCatch।"
  },
  {
    "q": "unmountComponentAtNode method-এর উদ্দেশ্য কী?",
    "a": "`ReactDOM.unmountComponentAtNode(container)`—DOM থেকে সরায়, listeners/state cleanup।"
  },
  {
    "q": "HOCs-এর সীমাবদ্ধতা কী?",
    "a": "render-এ HOC তৈরি করবেন না; static methods copy; refs `forwardRef` দরকার।"
  },
  {
    "q": "DevTools-এ forwardRefs কীভাবে debug করবেন?",
    "a": "forwardRef render function-এ নাম/displayName দিন DevTools-এ স্পষ্টতার জন্য।"
  },
  {
    "q": "render methods-এ arrow functions ব্যবহার করা ভালো?",
    "a": "হ্যাঁ, প্যারামিটার পাসে সহজ; প্রতি render নতুন ফাংশন—পারফরম্যান্স খেয়াল।"
  },
  {
    "q": "state updates merged হয় বলতে কী বোঝায়?",
    "a": "setState shallow merge—`setState({ comments })` posts অপরিবর্তিত থাকতে পারে।"
  },
  {
    "q": "event handler-এ arguments কীভাবে পাস করবেন?",
    "a": "arrow `(e) => this.update(id, e)` বা `bind(this, id)`—synthetic event দ্বিতীয় আর্গুমেন্ট।"
  },
  {
    "q": "কম্পোনেন্ট রেন্ডার প্রতিরোধ কীভাবে করবেন?",
    "a": "শর্তে `return null` (যেমন loggedIn না হলে Greeting না দেখানো)।"
  },
  {
    "q": "context ব্যবহারের উদাহরণ দিন?",
    "a": "ThemeContext.Provider value পাঠান; ThemedButton `static contextType` বা Consumer দিয়ে পড়ে।"
  },
  {
    "q": "contextType কীভাবে ব্যবহার করবেন?",
    "a": "class-এ `MyClass.contextType = MyContext` বা `static contextType = MyContext`।"
  },
  {
    "q": "consumer কী?",
    "a": "`<MyContext.Consumer>{value => ...}</MyContext.Consumer>`—function child।"
  },
  {
    "q": "context-এ performance corner cases কীভাবে সমাধান করবেন?",
    "a": "Provider `value`-কে state-এ রাখুন—inline `{ }` object প্রতি render নতুন reference।"
  },
  {
    "q": "HOCs-এ forward ref-এর উদ্দেশ্য কী?",
    "a": "HOC refs pass করে না—`React.forwardRef` + `forwardedRef` prop pattern।"
  },
  {
    "q": "সব function/class component-এ ref argument পাওয়া যায়?",
    "a": "শুধু `React.forwardRef` কম্পোনেন্টে দ্বিতীয় ref argument।"
  },
  {
    "q": "forward refs-এ component library-তে extra care কেন?",
    "a": "forwardRef API পরিবর্তন breaking change—library-তে major version।"
  },
  {
    "q": "ES6 ছাড়া React class component কীভাবে তৈরি করবেন?",
    "a": "`create-react-class`: getDefaultProps, getInitialState; auto-binding।"
  },
  {
    "q": "JSX ছাড়া React ব্যবহার করা যায়?",
    "a": "হ্যাঁ—JSX `React.createElement`-এর syntactic sugar।"
  },
  {
    "q": "render props দিয়ে HOC কীভাবে তৈরি করবেন?",
    "a": "render prop দিয়ে `<Mouse render={mouse => <Component mouse={mouse} />} />` HOC-এর মতো।"
  },
  {
    "q": "react-scripts কী?",
    "a": "create-react-app-এর scripts—dev server, HMR, build, test।"
  },
  {
    "q": "create react app-এর features কী?",
    "a": "React/JSX/TS, autoprefix CSS, dev server, tests, production bundle, PWA optional।"
  },
  {
    "q": "renderToNodeStream method-এর উদ্দেশ্য কী?",
    "a": "SSR: `ReactDOMServer.renderToNodeStream`—HTML stream; শুধু server।"
  },
  {
    "q": "create-react-app-এ redux scaffolding কীভাবে পাবেন?",
    "a": "`npx create-react-app my-app --template redux` বা `redux-typescript`।"
  },
  {
    "q": "state mutation কী এবং কীভাবে প্রতিরোধ করবেন?",
    "a": "setState ছাড়া state মিউটেট করলে React জানে না—সবসময় immutable update + setState; Immutable.js optional।"
  }
];
