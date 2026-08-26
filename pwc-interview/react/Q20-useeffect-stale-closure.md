# Q20 — Stale Closure in `useEffect`

### 📁 File

`q20-useeffect-stale-closure.md`

---

## 🎤 Interview Question

> **"What is a stale closure in `useEffect`, why does it happen, and how would you fix it?"**

## 🎤 Simple Interview Answer

> A **stale closure** happens when a function inside `useEffect` uses an old value from a previous render instead of the latest value.
>
> This usually happens when we use a state or prop inside an effect but don't include it correctly in the dependency array.
>
> For example:

```jsx id="q20example"
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Here, the dependency array is:

```js id="q20deps"
[];
```

So the effect runs once and the interval captures the **initial value of `count`**.

Even when `count` changes, the interval may continue using that old value.

That's a **stale closure**.

---

# 🔄 Easy Diagram

```text id="q20diagram"
Initial Render
     ↓
count = 0
     ↓
useEffect runs
     ↓
setInterval captures count = 0
     ↓
count changes to 1
     ↓
count changes to 2
     ↓
Interval still sees old count ❌
```

---

# ✅ Fix 1 — Add the dependency

```jsx id="q20fix1"
useEffect(() => {
  const timer = setInterval(() => {
    console.log(count);
  }, 1000);

  return () => clearInterval(timer);
}, [count]);
```

Now:

```text id="q20fix1flow"
count changes
     ↓
Effect cleans up
     ↓
New effect runs
     ↓
New interval sees latest count
```

This is correct when you actually want the effect to restart whenever `count` changes.

---

# ✅ Fix 2 — Use Functional State Update

A very common situation is when we don't need to read the current state directly.

For example:

```jsx id="q20fix2"
useEffect(() => {
  const timer = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

Here:

```text id="q20fix2flow"
setCount(prev => prev + 1)
          ↓
React provides latest state
          ↓
No stale count problem
```

This is often a better solution for counters and similar state updates.

---

# ✅ Fix 3 — `useRef` for Latest Value

Sometimes you need the **latest value inside a long-lived callback** without restarting the effect.

You can use a ref:

```jsx id="q20fix3"
const countRef = useRef(count);

useEffect(() => {
  countRef.current = count;
}, [count]);

useEffect(() => {
  const timer = setInterval(() => {
    console.log(countRef.current);
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

Now the interval can access:

```js id="q20ref"
countRef.current;
```

which contains the latest value.

---

# 🧠 Easy Way to Remember

Remember:

> **Closure remembers the value from the render where it was created.**

So:

```text id="q20remember"
Old Render
    ↓
Old value
    ↓
Callback captures it
    ↓
State changes
    ↓
Callback may still use old value
    ↓
STALE CLOSURE
```

### Three common solutions:

```text id="q20solutions"
1. Add dependency
2. Functional state update
3. useRef for latest value
```

---

# ⭐ Important Interview Point

Don't say:

> ❌ "A stale closure happens because React doesn't update the state."

That's incorrect.

The issue is that **JavaScript closures capture variables from the render in which the callback was created**.

A better answer:

> **"A stale closure happens when a callback keeps referencing values from an older render. In React, this commonly happens with effects, timers, subscriptions, or event handlers when dependencies aren't handled correctly."**

---

# 🔥 PwC Follow-up

The interviewer may ask:

> **"If you add `[count]` as a dependency, won't the interval be recreated every time `count` changes? Is that a problem?"**

A good answer:

> "Yes, React will clean up the old interval and create a new one whenever `count` changes. For a simple counter that's usually acceptable, but if recreating the subscription is expensive, I would consider a functional update or `useRef` depending on the requirement."

---

## 🎯 Short Interview Answer

If you need a quick version:

> **"A stale closure happens when a callback uses a value from an older render. It commonly happens when a state or prop is used inside an effect but isn't included correctly in the dependency array. I can fix it by adding the dependency, using a functional state update, or using a ref when I need access to the latest value without recreating the effect."**

---

### 📌 Next Question — Q21

**File:** `Q21-useeffect-vs-uselayouteffect.md`

> **"What is the difference between `useEffect` and `useLayoutEffect`, and when would you use `useLayoutEffect`?"**
