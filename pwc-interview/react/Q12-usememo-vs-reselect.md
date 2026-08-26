# Q12 — `useMemo` vs `createSelector`

### 📁 File

`q12-usememo-vs-reselect.md`

---

## 🎤 Interview Question

> **"What is the difference between `useMemo` and a memoized selector created with Reselect? When would you use each?"**

## 🎤 Simple Interview Answer

> Both `useMemo` and `createSelector` use **memoization**, but they are used in different places.
>
> `useMemo` is a React hook used **inside a component** to memoize the result of a calculation.
>
> `createSelector` is used with Redux to create a **memoized selector** for deriving data from the Redux store.
>
> For example, if I have some local component data and an expensive calculation, I can use `useMemo`.
>
> If I have Redux data and I need to filter, sort, or combine that data, I can use `createSelector`.
>
> `useMemo` depends on a dependency array. When one of the dependencies changes, React recalculates the value.
>
> `createSelector` depends on its input selectors. When the input values change, it recalculates the result; otherwise, it can return the cached result.
>
> So, I would use **`useMemo` for expensive calculations inside a React component**, and **`createSelector` for derived or expensive calculations based on Redux state**.

---

## 🔄 Easy Diagram

### `useMemo`

```text
React Component
      ↓
    Data
      ↓
   useMemo
      ↓
Expensive Calculation
      ↓
   Cached Value
```

### `createSelector`

```text
Redux Store
     ↓
Input Selectors
     ↓
createSelector
     ↓
Derived Data
     ↓
Cached Result
     ↓
useSelector()
     ↓
React Component
```

---

# 🧠 Simple Example

### `useMemo`

Suppose the component has local data:

```jsx
function ProductList({ products }) {
  const expensiveResult = useMemo(() => {
    return products
      .filter((product) => product.active)
      .sort((a, b) => a.price - b.price);
  }, [products]);

  return <ProductListView products={expensiveResult} />;
}
```

Here:

```text
products changed?
     ↓
   YES → calculate again
   NO  → use cached result
```

---

### `createSelector`

Suppose products are in Redux:

```js
const selectProducts = (state) => state.products;

const selectActiveProducts = createSelector([selectProducts], (products) =>
  products
    .filter((product) => product.active)
    .sort((a, b) => a.price - b.price),
);
```

Then:

```jsx
const products = useSelector(selectActiveProducts);
```

Here the calculation is based on **Redux state**, so `createSelector` is a better fit.

---

# ⭐ Important Difference

|             | `useMemo`                   | `createSelector`           |
| ----------- | --------------------------- | -------------------------- |
| Where?      | React component             | Redux selector             |
| Purpose     | Memoize calculation         | Memoize derived Redux data |
| Input       | Dependency array            | Input selectors            |
| Returns     | Cached value                | Cached selector result     |
| Typical use | Component-level calculation | Redux state transformation |

---

# 🔥 Important Interview Point

The interviewer may ask:

> **"Can we use `useMemo` instead of `createSelector` for Redux data?"**

You can technically calculate Redux-derived data inside a component with `useMemo`, but there is an important difference.

For example:

```jsx
const rewards = useSelector((state) => state.rewards);

const activeRewards = useMemo(() => rewards.filter((reward) => reward.active), [
  rewards,
]);
```

This works.

But if the same derived data is needed by **multiple components**, putting the logic into a reusable selector is usually cleaner:

```js
const selectActiveRewards = createSelector([selectRewards], (rewards) =>
  rewards.filter((reward) => reward.active),
);
```

Then multiple components can use:

```jsx
const rewards = useSelector(selectActiveRewards);
```

So:

> **`useMemo` is component-level memoization, while `createSelector` is reusable Redux-level memoization.**

---

# 🧠 Easy Way to Remember

Just remember:

```text
useMemo
   ↓
Inside React Component
   ↓
Expensive calculation


createSelector
   ↓
Redux
   ↓
Derived data
```

### One-line interview answer:

> **"`useMemo` memoizes a calculation inside a React component, while `createSelector` creates a memoized and reusable selector for derived Redux state."**

---

# ⚠️ Senior-Level Point

Don't say:

> ❌ "`useMemo` prevents re-renders."

Better:

> **"`useMemo` memoizes a calculated value. It can help avoid repeating expensive calculations, but it doesn't prevent the component itself from rendering."**

Similarly:

> **"`createSelector` doesn't prevent all Redux or React renders; it memoizes the selector result and can help avoid unnecessary calculations and updates."**

---

## 🔥 Possible Follow-up

The interviewer may now ask:

> **"What is the difference between `useMemo` and `useCallback`?"**

### 📁 Next File

`Q13-usememo-vs-usecallback.md`
