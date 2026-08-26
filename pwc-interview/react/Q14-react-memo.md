# Q14 — `React.memo`

### 📁 File

`q14-react-memo.md`

---

## 🎤 Interview Question

> **"What is `React.memo`, how does it work, and when would you use it?"**

## 🎤 Simple Interview Answer

> `React.memo` is a higher-order component that helps prevent unnecessary re-renders of a functional component.
>
> When a component is wrapped with `React.memo`, React compares its previous props with the new props. If the props have not changed, React can skip rendering that component.
>
> By default, `React.memo` performs a **shallow comparison** of props.
>
> For example, if a parent component re-renders but passes the same primitive props to a memoized child, the child can skip the re-render.
>
> However, for objects, arrays, and functions, reference equality is important. If the parent creates a new object or function on every render, React.memo will see a new reference and the child can re-render.
>
> That's why `useCallback` can be useful for callback props and `useMemo` can be useful for object or calculated-value props.
>
> I would use `React.memo` when a component renders frequently, its rendering is relatively expensive, and its props often remain unchanged.
>
> I wouldn't use it everywhere because memoization also has some overhead. I would normally use profiling to identify components where it provides a real benefit.

---

# 🔄 Easy Diagram

### Without `React.memo`

```text id="4e9x0f"
Parent state changes
        ↓
Parent re-renders
        ↓
Child re-renders
        ↓
Even if props are same
```

### With `React.memo`

```text id="9q0g0d"
Parent state changes
        ↓
Parent re-renders
        ↓
React.memo checks props
        ↓
   Props changed?
     /       \
   No         Yes
   ↓           ↓
Skip child   Re-render
```

---

# 🧠 Simple Example

### Child component

```jsx id="wq1d6h"
const Child = React.memo(({ name }) => {
  console.log("Child rendered");

  return <div>{name}</div>;
});
```

### Parent

```jsx id="j8i7pi"
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <Child name="Raj" />
    </>
  );
}
```

When `count` changes:

```text id="6m4vkl"
Parent re-renders
        ↓
Child receives "Raj"
        ↓
"Raj" === "Raj"
        ↓
Props unchanged
        ↓
Child can skip render ✅
```

---

# ⚠️ Objects and Functions

This is where interviewers usually test your understanding.

### Object

```jsx id="n2h9jj"
<Child user={{ name: "Raj" }} />
```

Every parent render creates a new object:

```text id="kwq8vp"
Render 1 → { name: "Raj" } → Reference A

Render 2 → { name: "Raj" } → Reference B
```

Even though the values are the same:

```js id="3s5p9k"
ReferenceA === ReferenceB; // false
```

So `React.memo` sees the prop as changed.

### Better approach

```jsx id="4ypl0b"
const user = useMemo(() => ({ name: "Raj" }), []);

<Child user={user} />;
```

Now the object reference remains stable.

---

# Function Example

Without `useCallback`:

```jsx id="s20c8m"
const handleClick = () => {
  console.log("clicked");
};

<Child onClick={handleClick} />;
```

Every parent render creates a new function.

With `useCallback`:

```jsx id="u1s4yf"
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);

<Child onClick={handleClick} />;
```

Now the function reference remains stable until dependencies change.

```text id="n2bycr"
React.memo
    +
useCallback
    ↓
Stable function prop
    ↓
Child can skip unnecessary render
```

---

# ⭐ Important Senior-Level Point

### Don't say:

> ❌ "`React.memo` prevents the child from rendering."

Better:

> **"`React.memo` allows React to skip a child re-render when its props haven't changed."**

Also remember:

> **`React.memo` only compares props.**

If the child itself changes its own state:

```jsx id="y9gl3a"
const Child = React.memo(() => {
  const [count, setCount] = useState(0);
});
```

the child will still re-render when its own state changes.

Similarly, if the child consumes a Context value and that context changes, `React.memo` does not simply block that update.

---

# 🔥 `React.memo` + `useCallback` + `useMemo`

These three are often used together:

```text id="y6b8tl"
                Parent
                   |
          ┌────────┼─────────┐
          ↓        ↓         ↓
      useMemo  useCallback   props
          ↓        ↓
        Value   Function
          └────────┬─────────┘
                   ↓
              React.memo
                   ↓
             Child Component
```

### Remember:

```text id="qf4k4t"
useMemo
→ Memoize VALUE

useCallback
→ Memoize FUNCTION

React.memo
→ Memoize COMPONENT rendering
```

---

# 🎯 Interview-Ready Short Answer

If the interviewer wants a quick answer:

> **"`React.memo` is used to avoid unnecessary re-renders of functional components. It performs a shallow comparison of props and can skip the render when props haven't changed. For object or function props, reference equality matters, so `useMemo` or `useCallback` can sometimes be used to keep those references stable. I use `React.memo` selectively for components where unnecessary rendering is actually a performance issue."**

This is the version I recommend you **memorize for the interview**.

---

## 🔥 Possible Follow-up

The interviewer may ask:

> **"What is the difference between `React.memo`, `useMemo`, and `useCallback`?"**

### 📌 Next File

`Q15-react-memo-usememo-usecallback.md`
