# Q18 — Common Causes of React Re-renders

### 📁 File

`q18-common-causes-react-rerenders.md`

---

## 🎤 Interview Question

> **"What are the common reasons a React component re-renders?"**

## 🎤 Simple Interview Answer

> There are several common reasons why a React component re-renders.
>
> **First, its own state changes.** When we call a state setter like `setCount`, React schedules a re-render.
>
> **Second, the parent component re-renders.** Normally, when a parent renders, its child components also render unless the child is optimized, for example with `React.memo`.
>
> **Third, its props change.** If a component receives new props, it can re-render.
>
> **Fourth, a Context value changes.** Components consuming that Context can re-render when the context value changes.
>
> **Fifth, Redux state selected by the component changes.** If the value returned by `useSelector` changes, the component can re-render.
>
> Also, new object, array, or function references can cause props to appear changed even when their contents are the same.
>
> So when debugging re-renders, I check **state, parent renders, props, Context, Redux selectors, and reference changes**.

---

# 🔄 Easy Diagram

```text id="q18diagram"
             Component
                 |
       Why did it re-render?
                 |
    ┌────────────┼─────────────┐
    ↓            ↓             ↓
 Own State     Parent        Props
  changed      rendered      changed
    |            |             |
    └────────────┼─────────────┘
                 |
        ┌────────┴────────┐
        ↓                 ↓
     Context           Redux
     changed           changed
        |                 |
        └────────┬────────┘
                 ↓
          Component renders
```

---

# 🧠 1. State Change

```jsx id="q18state"
const [count, setCount] = useState(0);

setCount(1);
```

State changes:

```text id="q18stateflow"
setCount()
   ↓
State changes
   ↓
Component re-renders
```

This is the most basic case.

---

# 🧠 2. Parent Re-renders

```jsx id="q18parent"
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <Child />
    </>
  );
}
```

When:

```text id="q18parentflow"
Parent state changes
       ↓
Parent re-renders
       ↓
Child can also render
```

If `Child` is wrapped with:

```jsx id="q18memo"
const Child = React.memo(() => {
  return <div>Child</div>;
});
```

React can skip the child if its props haven't changed.

---

# 🧠 3. Props Change

```jsx id="q18props"
<Child name={name} />
```

If:

```text id="q18propsflow"
name changes
    ↓
New prop
    ↓
Child can re-render
```

---

# 🧠 4. Context Changes

Suppose:

```jsx id="q18context"
const ThemeContext = createContext();
```

A component consumes it:

```jsx id="q18usecontext"
const theme = useContext(ThemeContext);
```

If the Context value changes:

```text id="q18contextflow"
Context value changes
       ↓
Consumers of that Context
       ↓
Can re-render
```

This is one reason we should be careful about putting frequently changing data into a large Context.

---

# 🧠 5. Redux State Changes

Example:

```jsx id="q18redux"
const membership = useSelector((state) => state.membership);
```

If the selected value changes:

```text id="q18reduxflow"
Redux state changes
       ↓
Selector result changes
       ↓
Component re-renders
```

This is why **good selectors** are important.

For example:

```jsx id="q18bad"
const entireState = useSelector((state) => state);
```

is generally a poor choice because the component is subscribing to the entire store.

Better:

```jsx id="q18good"
const status = useSelector((state) => state.membership.status);
```

The component only needs the data it actually uses.

---

# ⚠️ Important: Objects, Arrays and Functions

This is a common interview trap.

Consider:

```jsx id="q18object"
<Child user={{ name: "Raj" }} />
```

Every parent render creates a new object:

```text id="q18objectflow"
Render 1 → Object A
Render 2 → Object B
```

Even though:

```js id="q18objectcompare"
ObjectA.name === ObjectB.name;
```

the references are different:

```js id="q18reference"
ObjectA === ObjectB; // false
```

So `React.memo` can consider the prop changed.

Same concept applies to functions:

```jsx id="q18function"
<Child onClick={() => console.log("click")} />
```

A new function is created on every render.

---

# ⭐ Important Correction for Interviews

Don't say:

> ❌ "A component always re-renders when its parent renders."

A better statement is:

> **"When a parent re-renders, its child components are normally evaluated again as part of the rendering process. `React.memo` can allow React to skip a child when its props haven't changed."**

This is more technically accurate.

---

# 🧠 Easy Way to Remember

Remember:

```text id="q18remember"
S → State
P → Parent
P → Props
C → Context
R → Redux
R → References
```

Or simply:

> **State → Parent → Props → Context → Redux → References**

When a React component unexpectedly renders, check these six areas.

---

## 🎯 Short Interview Answer

If the interviewer wants a quick answer:

> **"The common causes are a component's own state changing, its parent rendering, props changing, Context updates, and changes in Redux state selected through `useSelector`. I also check for new object, array, or function references because they can make props appear changed. When debugging, I use React DevTools Profiler to identify the actual cause."**

---

# 🔥 Next Question — Q19

### 📁 File

`Q19-useeffect-dependency-array.md`

> **"Explain `useEffect`. What is the difference between an empty dependency array, no dependency array, and a dependency array with specific values?"**
