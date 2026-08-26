# Q11 — Memoized Selectors / Reselect

### 📁 File

`q11-memoized-selector-reselect.md`

---

## 🎤 Interview Question

> **"What is a memoized selector, and why would you use Reselect with Redux?"**

## 🎤 Simple Interview Answer

> A selector is a function that reads specific data from the Redux store.
>
> A **memoized selector** remembers the previous result and returns the same result when the input data has not changed.
>
> This is useful when we have an expensive calculation, such as filtering, sorting, or transforming a large list.
>
> Without memoization, the calculation can run again whenever the component checks the selector.
>
> With **Reselect**, we can create memoized selectors. Reselect checks whether the input values have changed. If they haven't changed, it returns the previous result instead of running the calculation again.
>
> This can improve performance and help avoid unnecessary re-renders when working with large or complex Redux state.

---

## 🔄 Easy Diagram

```text
Redux Store
    ↓
Input Selector
    ↓
Has input changed?
    ↓
 ┌──┴───┐
No      Yes
↓        ↓
Return   Run calculation
cached       ↓
result    New result
             ↓
         Cache result
```

### Example

Suppose we have thousands of rewards:

```js
const rewards = [
  // thousands of records
];
```

We want only active rewards.

Without memoization:

```js
const selectActiveRewards = (state) =>
  state.rewards.filter((reward) => reward.active);
```

The filtering calculation can run repeatedly.

With Reselect:

```js
import { createSelector } from "@reduxjs/toolkit";

const selectRewards = (state) => state.rewards;

const selectActiveRewards = createSelector([selectRewards], (rewards) =>
  rewards.filter((reward) => reward.active),
);
```

Now, if `state.rewards` hasn't changed, the selector can return the previously calculated result.

---

## 🧠 Easy Way to Remember

Think:

> **Selector = Get data**

> **Memoized selector = Get data + remember the previous calculation**

```text
Normal Selector
     ↓
Calculate again
     ↓
Calculate again
     ↓
Calculate again


Memoized Selector
     ↓
Calculate
     ↓
Remember result
     ↓
Input unchanged?
     ↓
Return previous result
```

---

## ⭐ Senior-Level Point

The interviewer may ask:

> **"Does memoization always improve performance?"**

Answer:

> "No. Memoization also has a cost because we need to store and compare previous inputs and results. I would use it when the calculation is expensive or when it helps prevent unnecessary renders. I wouldn't use memoization everywhere."

That's a very good senior-level answer.

---

## 🔥 Possible Follow-up

> **"What is the difference between `useMemo` and a memoized Redux selector?"**

### Easy distinction

```text
useMemo
   ↓
Memoizes a calculation
inside a React component


Reselect
   ↓
Memoizes a selector
outside / around Redux state
```

---

# 📌 Next Question

**Q12 — File:** `Q12-usememo-vs-reselect.md`

> **"What is the difference between `useMemo` and a memoized selector created with Reselect? When would you use each?"**
