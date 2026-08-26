# Q30 — React Render Phase vs Commit Phase

### 📁 File

`q30-react-render-phase-commit-phase.md`

---

## 🎤 Interview Question

> **"What are the Render Phase and Commit Phase in React? What happens in each phase?"**

## 🎤 Simple Interview Answer

> React's update process can be understood in two main phases: **Render Phase** and **Commit Phase**.
>
> In the **Render Phase**, React determines what the UI should look like. It runs the component functions, creates the new React element tree, and performs reconciliation with the previous tree.
>
> The Render Phase should be **pure**, meaning we should not perform side effects such as API calls, DOM manipulation, or subscriptions directly inside the component render.
>
> In the **Commit Phase**, React applies the required changes to the actual DOM. React also runs certain lifecycle-related work such as `useLayoutEffect` at the appropriate point around the commit.
>
> After the commit, the browser can paint the updated UI, and `useEffect` runs after the commit/paint timing.
>
> So simply:
>
> **Render Phase → Calculate what should change**
>
> **Commit Phase → Apply those changes**

---

# 🔄 Easy Diagram

```text
          State / Props Change
                  ↓
            Render Phase
                  ↓
        Component functions run
                  ↓
        New React element tree
                  ↓
           Reconciliation
                  ↓
        Determine DOM changes
                  ↓
             Commit Phase
                  ↓
          Update actual DOM
                  ↓
        useLayoutEffect
                  ↓
          Browser Paint
                  ↓
           useEffect
```

---

# 1. Render Phase

Suppose:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

When:

```js
setCount(1);
```

React starts the **Render Phase**.

Conceptually:

```text
Old UI
<h1>0</h1>

       ↓

New UI
<h1>1</h1>
```

React determines:

> "The `<h1>` content needs to change from `0` to `1`."

### Important:

During the Render Phase, React is **calculating** what should happen. It has not necessarily changed the real DOM yet.

---

# 2. Commit Phase

After React finishes the render/reconciliation work:

```text
Render Phase
     ↓
"Need to change <h1>0</h1>
 to <h1>1</h1>"
     ↓
Commit Phase
     ↓
Actual DOM updated
```

Now the browser has the updated DOM.

---

# ⭐ Why Must Render Be Pure?

Consider this:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // ❌ Don't do this
  fetch("/api/users");

  return <h1>{count}</h1>;
}
```

This is bad because React may run rendering more than once in certain situations.

The render function should ideally behave like:

```text
Same input
   ↓
Same UI output
```

So:

```jsx
function Counter({ count }) {
  return <h1>{count}</h1>;
}
```

is pure.

Side effects should generally go into:

```jsx
useEffect(...)
```

or other appropriate mechanisms.

---

# 🔥 Very Important Senior-Level Point

The **Render Phase can be interrupted, restarted, or discarded** in React's concurrent rendering model.

That's why side effects should not be performed during rendering.

For example:

```text
Render starts
    ↓
React calculates UI
    ↓
Render interrupted
    ↓
React starts rendering again
```

If you performed an API call during render:

```text
Render
 ↓
API call ❌
 ↓
Render restarted
 ↓
API call again ❌
```

You could accidentally perform the side effect multiple times.

This is one reason React expects the render phase to remain pure.

---

# 🧠 `useEffect` vs `useLayoutEffect` Connection

This connects directly to our previous question.

```text
Render Phase
     ↓
Reconciliation
     ↓
Commit Phase
     ↓
DOM updated
     ↓
useLayoutEffect
     ↓
Browser Paint
     ↓
useEffect
```

A simplified interview model is:

### `useLayoutEffect`

> Runs after DOM mutations but before the browser paints.

### `useEffect`

> Runs after the commit, generally after the browser has painted.

---

# 📊 Render vs Commit

|                         | Render Phase         | Commit Phase                         |
| ----------------------- | -------------------- | ------------------------------------ |
| Main job                | Calculate UI changes | Apply changes                        |
| Component function runs | ✅                   | ❌                                   |
| Reconciliation          | ✅                   | ❌                                   |
| Actual DOM mutation     | ❌                   | ✅                                   |
| Should be pure?         | ✅                   | Side effects happen here/around here |
| Can be interrupted?     | ✅                   | Commit is not treated the same way   |

---

# 🧠 Easy Way to Remember

Think of it like preparing a house renovation:

```text
Render Phase
    ↓
"Which walls need changing?"
    ↓
Planning

Commit Phase
    ↓
"Actually make the changes."
    ↓
Execution
```

Or simply:

> **Render = Calculate**

> **Commit = Apply**

---

# 🎯 Interview-Ready Short Answer

If PwC asks this question and you want a concise answer:

> **"React's Render Phase is where React runs the component functions, creates the new element tree, and performs reconciliation to determine what needs to change. The render phase should be pure because React may run or restart it. In the Commit Phase, React applies the required changes to the actual DOM. `useLayoutEffect` runs around the commit before paint, while `useEffect` runs after the commit and generally after paint."**

---

## 🔥 Next Question — Q31

### 📁 File

`Q31-react-strict-mode.md`

> **"What is React Strict Mode? Why does `useEffect` sometimes appear to run twice during development?"**
