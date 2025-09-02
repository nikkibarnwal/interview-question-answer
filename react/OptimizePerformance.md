Perfect 👍 Let’s make a **React Optimization Hooks Cheat Sheet** that you can quickly revise before interview 🚀

---

# ⚡ React Optimization Hooks Cheat Sheet

---

## 🔹 1. `React.memo`

**What it does:**

- Wraps a component.
- Prevents re-render if **props don’t change**.

```jsx
const Child = React.memo(({ value }) => {
  console.log("Rendered");
  return <p>{value}</p>;
});
```

✅ **Benefits**

- Stops unnecessary re-renders of child components.
- Easy optimization with minimal code.

🎯 **Best Use Cases**

- Pure components (render depends only on props).
- Large lists, cards, or repeated child elements.

⚠️ **Caveat:**

- Does a shallow comparison → may fail for deep objects.

---

## 🔹 2. `useCallback`

**What it does:**

- Returns a **memoized function**.
- Function reference stays same until dependencies change.

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);
```

✅ **Benefits**

- Prevents child components (wrapped in `React.memo`) from re-rendering when passing functions as props.
- Stabilizes callback identity for `useEffect`.

🎯 **Best Use Cases**

- Passing event handlers to memoized children.
- Functions inside dependency arrays (`useEffect`, `useMemo`).
- Performance-heavy child components.

⚠️ **Caveat:**

- Adds memory overhead.
- Don’t overuse in simple components.

---

## 🔹 3. `useMemo`

**What it does:**

- Memoizes the **result of a computation**.
- Only recomputes when dependencies change.

```jsx
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

✅ **Benefits**

- Optimizes expensive calculations.
- Prevents recalculating derived data on every render.

🎯 **Best Use Cases**

- Expensive computations (filter, sort, reduce).
- Derived state (calculations from props/state).
- Large data transformations (tables, charts).

⚠️ **Caveat:**

- Small computations don’t need it → may cause overhead.

---

# 🏆 Quick Comparison

| Hook          | Prevents…                          | Best For                       |
| ------------- | ---------------------------------- | ------------------------------ |
| `React.memo`  | Re-render when props don’t change  | Child components               |
| `useCallback` | New function creation on re-render | Callback props, event handlers |
| `useMemo`     | Recomputing heavy values           | Expensive calculations         |

---

# 🚀 Golden Rule for Interviews

📌 **Don’t over-optimize.**
Use them **only when you face performance issues** in re-rendering or expensive computations.

---
