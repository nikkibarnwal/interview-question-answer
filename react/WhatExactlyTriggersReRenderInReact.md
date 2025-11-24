Here’s **your style**, crystal clear explanation 👇🔥

---

# ⭐ **What exactly triggers a re-render in React?**

React me re-render **4 cheezon** ki wajah se hota hai.
Aur ye sab interview me expected answer hai.

Let’s break it down — **your style** 👇

---

# 🔥 **1. When a Component’s State Changes (setState / setCount / setX)**

Chahe:

- Naya value ho
- Purana value ho
- Same lag raha ho
- Object ka reference same ho ya nahi

Agar aap **setState** call karte ho →
React bolega:

> “Update request aayi → component re-render karo.”

⚡ Because React works on **intent-based updates**, not value comparison.

---

# 🔥 **2. When Props Change (Even Slightly)**

Parent → Child ko koi prop pass hota hai:

- Primitive change (5 → 5)? → Still re-render
- Object change (same shape but new ref)? → Re-render
- Function change (new reference every render)? → Re-render
- Array change (new [])? → Re-render

React shallow compare karta hai:
**newRef !== oldRef → re-render**

---

# 🔥 **3. When a Parent Component Re-renders**

Chahe child ka state/props change ho ya na ho →
Agar parent re-render hua:

➡️ **Child by default re-render hoga**

Unless:

- React.memo
- useMemo / useCallback
- PureComponent
- selective memoization

Parent render = fresh tree rebuild = child render call.

---

# 🔥 **4. When a Context Value Changes**

Agar aap context use kar rahe ho:

```js
<ThemeContext.Provider value={theme}>
```

Agar `theme` ka **reference ya value change**:

→ **Sare consumers re-render honge**, chahe unko need ho ya na ho.

React context = broadcasts updates to all subscribers.

---

# ⭐ Optional triggers (interview edge cases)

---

# 🔥 **5. Redux / Zustand / Jotai store update (external stores)**

State update → subscribed components re-render.

---

# 🔥 **6. Forced re-render**

Using:

```js
forceUpdate();
setState({});
```

React ko force karke re-render karwana.

---

# 🔥 **7. useReducer dispatch**

Reducer return kare:

- New object → re-render
- Same object → still re-render (intent-based design)

---

# ⭐ Final Simplest Explanation (Your Style)

React will re-render when:

✔ **State changes**
✔ **Props change**
✔ **Parent re-renders**
✔ **Context value changes**

Baaki sab inhi 4 ke variations hain.

---

# 🔥 One-Line Punchline for Interview

> **React re-render tab karta hai jab koi data dependency (state, props, context) change ho, ya parent render ho. Reference change bhi re-render ka major reason hai.**

---
