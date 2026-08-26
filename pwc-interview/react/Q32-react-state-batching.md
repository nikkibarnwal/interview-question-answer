# Q32 — React State Batching

### 📁 File

`q32-react-state-batching.md`

---

## 🎤 Interview Question

> **"What is state batching in React? If you call `setState` multiple times, how does React handle those updates?"**

## 🎤 Simple Interview Answer

> **State batching** means React groups multiple state updates together and processes them in a single render instead of rendering the component after every individual state update.
>
> This improves performance by reducing unnecessary renders.
>
> In modern React, especially React 18+, automatic batching works for updates inside React events as well as many asynchronous contexts such as promises, timers, and async callbacks.
>
> Also, when multiple updates depend on the previous state, I should use the **functional state update** form to make sure each update uses the latest state.

---

# 1. Simple Example

Suppose:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

You might expect:

```text
0 → 1 → 2 → 3
```

But this doesn't happen.

Because all three updates use the same `count` value from the current render:

```text
count = 0

setCount(0 + 1)
setCount(0 + 1)
setCount(0 + 1)
```

So the result is generally:

```text
0 → 1
```

And React performs the update in a batched render.

---

# 2. Correct Way — Functional Updates

If you want to increment three times:

```jsx
const handleClick = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};
```

Now React processes them sequentially:

```text
Initial count = 0

Update 1:
prev = 0
→ 1

Update 2:
prev = 1
→ 2

Update 3:
prev = 2
→ 3
```

Final result:

```text
count = 3
```

---

# 🔄 Easy Diagram

```text
Multiple setState calls
          ↓
       Batching
          ↓
   ┌──────┼──────┐
   ↓      ↓      ↓
Update 1 Update 2 Update 3
   └──────┼──────┘
          ↓
     Single Render
```

---

# 3. Why Functional Updates Matter

Consider:

```jsx
setCount(count + 1);
setCount(count + 1);
```

Both updates use:

```text
count from current render
```

But:

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

each update receives the **latest pending state**.

```text
        count = 0
            ↓
      prev => prev + 1
            ↓
            1
            ↓
      prev => prev + 1
            ↓
            2
```

### 🧠 Remember:

> **If the next state depends on the previous state, use the functional form.**

---

# 4. React 18 Automatic Batching

Older React behavior had more limited batching in some asynchronous situations.

Modern React provides **automatic batching** for many update contexts.

For example:

```jsx
setTimeout(() => {
  setCount((c) => c + 1);
  setName("Raj");
}, 1000);
```

React can batch these updates into a single render.

Conceptually:

```text
setCount()
   +
setName()
   ↓
Batch
   ↓
One render
```

This reduces unnecessary rendering work.

---

# ⭐ Important Interview Point

The interviewer may ask:

> **"Does batching mean React combines the state values into one state?"**

No.

Batching means:

> **React groups multiple state updates so that they can be processed together and usually result in fewer renders.**

Each update still gets processed.

For example:

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

All three updates are processed, resulting in:

```text
0 → 1 → 2 → 3
```

but React can commit the resulting UI with a single render/commit cycle rather than three separate ones.

---

# 🔥 Common Interview Question

### "What will this print?"

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

Answer:

```text
0
```

Why?

Because the `count` variable inside that event handler belongs to the **current render**.

Calling:

```js
setCount(count + 1);
```

schedules a state update. It doesn't immediately change the `count` variable inside the currently executing function.

---

# 🧠 Easy Mental Model

Think of state updates as:

```text
Current Render
     ↓
count = 0
     ↓
setCount(1)
     ↓
React schedules update
     ↓
Current function continues
     ↓
React processes update
     ↓
New Render
     ↓
count = 1
```

So:

> **State updates are scheduled; the current render's state value doesn't magically change immediately.**

---

# 🎯 Interview-Ready Short Answer

> **"State batching means React groups multiple state updates and processes them together to reduce unnecessary renders. If multiple updates depend on the previous state, I use the functional update form, such as `setCount(prev => prev + 1)`, because each update then receives the latest state. React 18 also provides automatic batching across many asynchronous contexts."**

---

## 📌 Next Question — Q33

### File

`Q33-usestate-vs-usereducer.md`

> **"What is the difference between `useState` and `useReducer`? When would you choose `useReducer` over `useState`?"**
