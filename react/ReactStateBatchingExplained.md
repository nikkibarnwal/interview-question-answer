Here’s **your style**, crisp, deep, interview-cracking explanation 👇🔥

---

# ⭐ **How does React batch state updates to avoid unnecessary re-renders?**

Short answer (your style):

> **React ek hi render cycle me multiple `setState` calls ko group (batch) karta hai,
> taaki component sirf _1 baar_ re-render ho — har call ke baad nahi.**

Ab detail me dimag-me-set karte hain 👇🔥

---

# ⭐ 1. **React batches updates inside events by default**

Example:

```js
setCount(count + 1);
setName("Raj");
setAge(25);
```

Normal expectation: → 3 re-renders
Reality: → **1 re-render**

### ✔ Why?

Because React bolega:

> “Jab tak event handler chal raha, sare setState ek bucket me daal do.
> Event khatam → ek combined re-render karo.”

Ye performance optimization hai.

---

# ⭐ 2. **Batching = React queues updates, not immediate render**

Har `setState` ye karta hai:

- Ek update object banata hai
- React Fiber ke update queue me daal deta hai
- But TURANT re-render start nahi karta

React wait karta hai:

- Event handler complete ho,
- Promise resolve ho,
- Async block khatam ho,
- Scheduler idle ho

Then React runs:

✔ **1 re-render**
✔ **Latest merged state ke saath**

---

# ⭐ 3. **Batching became universal after React 18**

React 17 me batching LIMITED thi:

- Browser events → batching
- Promises, timeouts → ❌ batch nahi
- fetch() then() → ❌ batch nahi

React 18 me:

👉 **ALL async updates automatically batch**

```js
setTimeout(() => {
  setCount(c + 1);
  setName("x");
}, 1000);
```

React 18+:

- **Both are batched → 1 re-render**

---

# ⭐ 4. Example to understand batching clearly

### 🔥 Without batching (hypothetical)

```
setCount(1)  → re-render
setCount(2)  → re-render
setCount(3)  → re-render
```

3 renders 😵

### 🔥 With batching (React actual)

All updates go into a queue:

```
Updates: [1, 2, 3]
Batch → resolve → final state = 3
Re-render → Only once
```

1 render 😎

---

# ⭐ 5. How React merges updates internally?

React Fiber scheduling:

- Every setState pushes an update node
- React merges them in order
- At flush-time → final snapshot create hota hai
- UI **once** re-render hota hai

This prevents:

- lag
- flickers
- wasted renders
- wasted reconciliation
- wasted DOM ops

---

# ⭐ 6. When batching does NOT happen? (tricky!)

React 18 ke pehle:

- Native browser event listeners
- async microtasks
- setTimeout
- fetch().then()

React 18 ke baad sab batch ho jaate hain —
**except** when you intentionally escape batching using:

```js
import { flushSync } from "react-dom";

flushSync(() => {
  setCount(1);
});
```

Ye **force immediate re-render** karta hai (dangerous but used for rare UI sync needs).

---

# ⭐ Final Interview Punchlines (Your Style)

✔ **React batches multiple setState calls into one re-render for performance.**
✔ **Batching groups updates in the same event loop before triggering render.**
✔ **React 18 introduced automatic batching everywhere (promises, timeouts, fetch, async).**
✔ **flushSync breaks batching on demand.**
✔ **Batching avoids unnecessary renders and improves Fiber scheduling.**

---
