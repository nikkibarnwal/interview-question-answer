# Q17 — Debugging Unnecessary React Re-renders

### 📁 File

`q17-react-re-render-debugging.md`

---

## 🎤 Interview Question

> **"Suppose a React page is re-rendering very frequently and the UI is becoming slow. How would you identify which component is causing the unnecessary re-renders and how would you fix it?"**

## 🎤 Simple Interview Answer

> First, I would **measure the problem instead of immediately adding memoization**.
>
> I would use **React DevTools Profiler** to record the page and identify which components are rendering frequently and how much time they are taking.
>
> Then I would check why those components are rendering. Common reasons are **state changes, parent re-renders, Context updates, Redux updates, changed props, or new object and function references**.
>
> If the problem is a parent component passing a new object or function on every render, I can use `useMemo` or `useCallback` when appropriate.
>
> If a child component receives the same props but still re-renders because its parent renders, I can consider `React.memo`.
>
> If Context is causing many components to re-render, I would check whether the Context contains frequently changing data. I may split the Context or move frequently changing state to a more suitable state management solution.
>
> If Redux is involved, I would check the selectors and make sure components subscribe only to the data they need. For expensive derived data, I could use a memoized selector with `createSelector`.
>
> I would also check whether expensive calculations or large lists are causing the problem. In that case, I might use `useMemo`, pagination, or virtualization depending on the problem.
>
> Finally, after making the changes, I would profile the application again and compare the results.
>
> So my approach is: **Profile → Find the cause → Apply the right optimization → Measure again.**

---

## 🔄 Easy Diagram

```text id="q17diagram"
Slow React UI
      ↓
React DevTools Profiler
      ↓
Find frequently rendering components
      ↓
Find WHY they render
      ↓
┌─────────────┬──────────────┬──────────────┐
↓             ↓              ↓
Props       State/Context   Redux
changed       changed       update
↓             ↓              ↓
Fix props    Split state    Optimize
references   / Context      selectors
      \          |             /
       \         |            /
        ↓        ↓           ↓
          Apply optimization
                  ↓
               Profile
                  ↓
             Measure again
```

---

# 🧠 Common Causes of Re-renders

Remember these:

```text id="q17causes"
1. State changed
2. Parent re-rendered
3. Props changed
4. New object/array reference
5. New function reference
6. Context value changed
7. Redux selected value changed
```

---

## ⭐ Example: New Function Reference

### Problem

```jsx id="q17bad"
function Parent() {
  const handleClick = () => {
    console.log("click");
  };

  return <Child onClick={handleClick} />;
}
```

If:

```jsx id="q17child"
const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});
```

Parent re-renders → new `handleClick` → new reference → `React.memo` sees changed prop → child can re-render.

### Fix

```jsx id="q17good"
const handleClick = useCallback(() => {
  console.log("click");
}, []);
```

Now the function reference stays stable while dependencies remain unchanged.

---

# ⭐ Example: Expensive Calculation

If profiling shows:

```jsx id="q17calc"
const result = expensiveCalculation(data);
```

is taking too much time, we can consider:

```jsx id="q17memo"
const result = useMemo(() => expensiveCalculation(data), [data]);
```

But only if profiling shows that this calculation is actually a problem.

---

# ⭐ Example: Large List

Suppose:

```text id="q17list"
10,000 products
      ↓
10,000 DOM elements
      ↓
Slow UI
```

Instead of rendering everything:

```text id="q17virtual"
10,000 products
      ↓
Virtualization
      ↓
Only visible items
      ↓
Better performance
```

---

# 🧠 Easy Interview Formula

Remember:

> **P → W → F → M**

```text id="q17formula"
P = Profile
W = Why is it rendering?
F = Fix the actual problem
M = Measure again
```

This is a very strong answer because you're showing that you don't blindly use `React.memo`, `useMemo`, or `useCallback`.

---

## 🔥 Possible Follow-up

The interviewer may now ask:

> **"What are the common reasons a React component re-renders?"**

You should be ready to explain the difference between:

- **State change**
- **Parent re-render**
- **Props change**
- **Context change**
- **Redux state change**

### 📌 Next File

`q18-common-causes-react-rerenders.md`
