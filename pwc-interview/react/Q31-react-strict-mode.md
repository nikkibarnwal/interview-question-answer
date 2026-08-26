# Q31 — React Strict Mode

### 📁 File

`q31-react-strict-mode.md`

---

## 🎤 Interview Question

> **"What is React Strict Mode? Why does `useEffect` sometimes appear to run twice during development?"**

## 🎤 Simple Interview Answer

> **React Strict Mode** is a development-time feature that helps identify potential problems in a React application.
>
> It doesn't change the production behavior of the application.
>
> In development, Strict Mode may intentionally run certain lifecycle-related logic more than once. In React 18+, one common example is that an effect can be set up, cleaned up, and then set up again during initial mounting in development.
>
> The purpose is to help us find problems such as **missing cleanup, side effects that aren't safe to repeat, and code that isn't resilient to React's rendering behavior**.
>
> So if I see an API call or `useEffect` running twice in development, I first check whether Strict Mode is enabled. I don't immediately assume React has a bug.
>
> The correct solution is usually to make the effect and its cleanup **correct and safe**, rather than simply trying to prevent the second execution.

---

# 🔄 Easy Diagram

```text
Development + StrictMode

Component Mount
      ↓
Render
      ↓
Effect setup
      ↓
Cleanup
      ↓
Effect setup again
      ↓
Continue normally
```

The important thing is:

```text
Development
    ↓
StrictMode
    ↓
Extra checks
    ↓
Find potential problems
```

This behavior is primarily a **development check**, not something you should expect in the same way in production.

---

# 🧠 Why Does React Do This?

Imagine an effect:

```jsx
useEffect(() => {
  const connection = connectToServer();

  return () => {
    connection.disconnect();
  };
}, []);
```

Strict Mode helps verify that the effect correctly handles:

```text
Setup
  ↓
Cleanup
  ↓
Setup again
```

If you forgot cleanup:

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  // ❌ Missing cleanup
}, []);
```

Strict Mode can help expose the problem during development.

Correct:

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

---

# ⭐ Important Interview Point

The interviewer may ask:

> **"Should we remove Strict Mode because it causes API calls twice?"**

Answer:

> **"No. Strict Mode is there to identify problems during development. I would first make the effect correctly handle setup and cleanup. If an API request must be controlled, I can use techniques such as request cancellation with `AbortController` or move server-state management to a suitable data-fetching library."**

Don't say:

> ❌ "I remove Strict Mode to fix the issue."

That's generally not a good senior-level answer.

---

# 🔥 Another Common Question

### Interviewer:

> **"Does Strict Mode run twice in production?"**

Answer:

> **"The development-only Strict Mode checks that cause this extra effect behavior are not performed the same way in production. Strict Mode is primarily intended to help detect problems during development."**

---

# 🧠 What Problems Can Strict Mode Help Find?

Remember:

```text
1. Missing cleanup
2. Unsafe side effects
3. Unexpected rendering behavior
4. Effects that aren't resilient to setup/cleanup
5. Deprecated or problematic React patterns
```

---

# 🎯 Interview-Ready Short Answer

If PwC asks this and you want a short answer:

> **"Strict Mode is a development-time feature that helps detect potential problems in React applications. In React 18+, effects can appear to run twice during initial development mounting because React performs an extra setup-cleanup cycle. This helps identify missing cleanup and unsafe side effects. It doesn't mean the same extra behavior is happening in production. Instead of disabling Strict Mode, I make my effects properly handle setup and cleanup."**

---

## 📌 Next Question — Q32

### File

`Q32-react-state-batching.md`

> **"What is state batching in React? If you call `setState` multiple times, how does React handle those updates?"**
