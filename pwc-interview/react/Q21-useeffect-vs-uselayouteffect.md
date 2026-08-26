# Q21 — `useEffect` vs `useLayoutEffect`

### 📁 File

`q21-useeffect-vs-uselayouteffect.md`

---

## 🎤 Interview Question

> **"What is the difference between `useEffect` and `useLayoutEffect`, and when would you use `useLayoutEffect`?"**

## 🎤 Simple Interview Answer

> Both `useEffect` and `useLayoutEffect` are used to handle side effects, but the main difference is **when they run**.
>
> `useEffect` runs **after React has updated the DOM and the browser has had a chance to paint the screen**.
>
> `useLayoutEffect` runs **after React updates the DOM but before the browser paints the screen**.
>
> Because `useLayoutEffect` runs before the browser paints, it is useful when I need to **measure the DOM or make a visual change before the user sees the page**.
>
> For example, if I need to get the size or position of an element and then adjust its position, I can use `useLayoutEffect`.
>
> For normal side effects such as API calls, subscriptions, timers, and logging, I would use `useEffect`.
>
> I would avoid using `useLayoutEffect` unnecessarily because it can block the browser from painting and can affect performance.

---

## 🔄 Easy Diagram

### `useEffect`

```text id="q21-effect-flow"
React Render
     ↓
DOM Update
     ↓
Browser Paint
     ↓
useEffect
```

### `useLayoutEffect`

```text id="q21-layout-flow"
React Render
     ↓
DOM Update
     ↓
useLayoutEffect
     ↓
Browser Paint
```

### Main difference

```text id="q21-main"
useEffect
    ↓
After Paint

useLayoutEffect
    ↓
Before Paint
```

---

# 🧠 Simple Example

Suppose we want to measure an element:

```jsx id="q21-example"
function Tooltip() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const width = boxRef.current.getBoundingClientRect().width;

    console.log(width);
  }, []);

  return <div ref={boxRef}>Tooltip</div>;
}
```

Here we use `useLayoutEffect` because we want to measure the DOM **before the browser paints the final UI**.

---

# ⭐ Why not always use `useLayoutEffect`?

Because it runs before the browser paints.

If we put expensive work inside it:

```text id="q21-performance"
React Render
     ↓
DOM Update
     ↓
useLayoutEffect
     ↓
Expensive Work ❌
     ↓
Browser Paint delayed
     ↓
User sees UI later
```

So it can make the UI slower.

With `useEffect`:

```text id="q21-effect-performance"
React Render
     ↓
DOM Update
     ↓
Browser Paint
     ↓
useEffect
     ↓
Side Effect
```

The browser can show the UI first.

---

# 🧠 When to use which?

| Requirement                                  | Hook              |
| -------------------------------------------- | ----------------- |
| API call                                     | `useEffect`       |
| Timer                                        | `useEffect`       |
| Event listener                               | `useEffect`       |
| WebSocket subscription                       | `useEffect`       |
| Logging                                      | `useEffect`       |
| DOM measurement                              | `useLayoutEffect` |
| Calculate element position                   | `useLayoutEffect` |
| Prevent visual flicker during DOM adjustment | `useLayoutEffect` |

---

# ⭐ Interview Example — Visual Flicker

Suppose you have:

```text id="q21-flicker"
Render
  ↓
Element appears at wrong position
  ↓
Browser paints ❌
  ↓
Effect changes position
  ↓
Element moves
```

The user may see the element **jump or flicker**.

With `useLayoutEffect`:

```text id="q21-no-flicker"
Render
  ↓
DOM Update
  ↓
useLayoutEffect
  ↓
Calculate / adjust position
  ↓
Browser Paint
  ↓
Correct UI shown
```

This is one of the main practical reasons to use `useLayoutEffect`.

---

# 🎯 Easy Way to Remember

Remember:

> **`useEffect` → after paint**

> **`useLayoutEffect` → before paint**

And:

> **Normal side effects → `useEffect`**

> **DOM measurement / visual adjustment → `useLayoutEffect`**

---

## 🔥 Senior-Level Interview Answer

If PwC asks for a short answer:

> **"`useEffect` runs after the browser has painted the updated UI, while `useLayoutEffect` runs after the DOM update but before the browser paints. I normally use `useEffect` for API calls, subscriptions, timers, and other side effects. I use `useLayoutEffect` when I need to measure the DOM or make a visual adjustment before the user sees the result. I use it carefully because it can block painting and affect performance."**

---

### 📌 Next Question — Q22

**File:** `Q22-useeffect-api-call-cleanup.md`

> **"How would you handle an API call inside `useEffect`, including loading, error handling, cleanup, and avoiding updates after the component unmounts?"**
