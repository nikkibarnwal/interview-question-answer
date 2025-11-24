Here’s **your style**, practical + interview-ready + answer 👇🔥

---

# ⭐ **How to avoid re-renders when storing large objects?**

(React performance master-level answer)

Large objects ko state me store karne se **har update → heavy re-render**
Isliye smart tariqe chahiye jo **UI ko disturb na kare**.

Let’s go step-by-step 👇

---

# 🔥 **1. Don’t use useState — use useRef for large objects**

If the large object **doesn’t affect UI**, then:

```js
const bigObjRef = useRef(largeObject);
```

- Ref updates → ❌ No re-render
- Data accessible across renders
- Memory stable
- Best for huge JSON, configs, cached data, API results (non-UI)

### Example:

```js
bigObjRef.current = { ...bigObjRef.current, x: 100 };
```

UI stable. No re-render. Super fast.

---

# 🔥 **2. Use useMemo to avoid re-creating large objects**

If object create hona zaruri hai (par state nahi hai):

```js
const bigObj = useMemo(() => expensiveBuild(), []);
```

- Only 1 time create hota hai
- Every render me heavy object recreate nahi hota
- Best for: computed data, caching, expensive transformations

---

# 🔥 **3. Store large object OUTSIDE the component**

Super powerful trick 👇

```js
const cache = {}; // module-level

function App() {
  // use it here
}
```

- Component re-renders will not recreate it
- Memory shared across renders
- ZERO re-renders
- Best for global caches, expensive maps

---

# 🔥 **4. If object MUST be in state → isolate component using React.memo**

Example:

```js
<HeavyViewer data={largeData} />
```

Wrap child:

```js
const HeavyViewer = React.memo(function HeavyViewer({ data }) {
  // uses data
});
```

Now parent re-render → child block
Unless `data` reference changes.

---

# 🔥 **5. Stabilize object reference using useMemo**

To avoid React.memo breaking:

```js
const stableData = useMemo(() => largeData, [largeData.id]);
```

Now child won’t re-render unnecessarily.

---

# 🔥 **6. Use useReducer for state updates on big objects**

Why?

Because `useReducer` prevents re-render unless you return a new state.

You can combine reducer + ref to avoid expensive updates.

---

# 🔥 **7. Use useSyncExternalStore for external large data**

React 18 ka ye hook **UI and large storage ko separate** karne me perfect hai.

UI depends only on “selected slice.”

Heavy object kahin aur store hota hai.

---

# ⭐ **Practical Summary (Your Style)**

To avoid re-renders when storing large objects:

✔ **Use `useRef` instead of `useState` (doesn’t trigger re-render)**
✔ **Use `useMemo` to create the object only once**
✔ **Store large object outside the component**
✔ **Wrap child with `React.memo`**
✔ **Stabilize object reference using `useMemo`**
✔ **Use `useReducer` to isolate expensive updates**
✔ **Use `useSyncExternalStore` for global large stores**

---

# ⭐ **One-Line Interview Punchline**

> **Large objects UI ko impact nahi karte? → useRef.
> Large objects expensive to compute? → useMemo.
> Large objects cause prop re-renders? → memo + stable reference.**

---
