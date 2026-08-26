# Q10 — Preventing Unnecessary Redux/React Re-renders

### 📁 File

`q10-redux-unnecessary-rerenders.md`

---

## 🎤 Interview Question

> **"How would you prevent unnecessary re-renders in a React application using Redux Toolkit?"**

## 🎤 Simple Interview Answer

> First, I would identify which components are re-rendering unnecessarily using **React DevTools Profiler**.
>
> With Redux Toolkit, I would use **selectors** so that a component subscribes only to the piece of state it actually needs.
>
> For example, if a component only needs the user's membership status, I wouldn't make it subscribe to the entire user or membership object.
>
> I would also avoid creating new object or array references unnecessarily because React-Redux uses reference comparison to determine whether the selected value has changed.
>
> If the calculation is expensive, I can use a **memoized selector**, for example using Reselect.
>
> For child components, I can use `React.memo` when it makes sense, and I can use `useMemo` or `useCallback` when they help maintain stable values or function references.
>
> I would also keep frequently changing local UI state outside Redux when it doesn't need to be shared globally.
>
> So my approach would be: **profile first, use specific selectors, avoid unnecessary object creation, use memoized selectors where needed, and keep local state local.**

---

## 🔄 Easy Diagram

```text id="3qj5bq"
             Redux Store
                  ↓
          Specific Selector
                  ↓
       Only required state
                  ↓
             Component
                  ↓
               Render
```

Instead of:

```text id="badredux"
          Redux Store
               ↓
       Entire State/Object
               ↓
          Component
               ↓
       Unnecessary renders ❌
```

---

## 🧠 Easy Example

Suppose Redux has:

```js
{
  user: {...},
  membership: {...},
  rewards: [...],
  notifications: [...],
  settings: {...}
}
```

A component only needs:

```js
membership.status;
```

Instead of selecting everything:

```js
const state = useSelector((state) => state);
```

we should select only what we need:

```js
const status = useSelector((state) => state.membership.status);
```

Now the component is mainly concerned with changes to that selected value.

---

## ⭐ Important Technical Point

The interviewer may ask:

> **"Does `useSelector()` prevent re-renders?"**

Answer:

> "`useSelector` doesn't completely prevent re-renders. It subscribes the component to the selected value and uses equality checking to determine whether the component should update. So selecting a small, stable piece of state helps avoid unnecessary re-renders."

### Another important point

Don't say:

> ❌ "`React.memo` prevents re-renders."

Better:

> **"`React.memo` can skip a child component's re-render when its props haven't changed."**

---

## 🧠 Remember These 5 Things

```text id="remember5"
1. Profile first
2. Use specific selectors
3. Avoid new object/array references
4. Use memoized selectors for expensive calculations
5. Keep local state local
```

That's enough to give a strong senior-level answer without making it complicated.

---

# 🔥 Possible Follow-up

> **"What is a memoized selector, and why would you use Reselect with Redux?"**

### 📌 Next File

`Q11-memoized-selector-reselect.md`
