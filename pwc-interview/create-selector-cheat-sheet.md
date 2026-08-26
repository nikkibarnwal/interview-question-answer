# `createSelector` Cheat Sheet

### 📁 Suggested Git file

`create-selector-cheat-sheet.md`

---

## 1. What is `createSelector`?

`createSelector` is used to create a **memoized selector**.

It is useful when we need to:

- Calculate derived data
- Filter data
- Sort data
- Transform data
- Perform expensive calculations
- Avoid repeating the same calculation when input data hasn't changed

```js
import { createSelector } from "@reduxjs/toolkit";
```

> **Simple definition:** > `createSelector` takes input selectors + a calculation function and remembers the previous result.

---

# 2. Basic Syntax

```js
const selector = createSelector(
  [inputSelector1, inputSelector2],
  (input1, input2) => {
    // calculation
    return result;
  },
);
```

Remember:

```text
INPUTS
  ↓
CALCULATION
  ↓
CACHED RESULT
```

---

# 3. Simple Example

Redux state:

```js
{
  rewards: [
    { id: 1, status: "active" },
    { id: 2, status: "expired" },
    { id: 3, status: "active" },
  ];
}
```

### Input selector

```js
const selectRewards = (state) => state.rewards;
```

### Memoized selector

```js
const selectActiveRewards = createSelector([selectRewards], (rewards) =>
  rewards.filter((reward) => reward.status === "active"),
);
```

### Component

```jsx
const activeRewards = useSelector(selectActiveRewards);
```

---

# 4. How Does Data Come From Redux Store?

`createSelector` **doesn't directly access the Redux store**.

`useSelector()` passes the Redux state to the selector.

```text
Redux Store
     ↓
useSelector()
     ↓
selectActiveRewards(state)
     ↓
selectRewards(state)
     ↓
state.rewards
     ↓
filter active rewards
     ↓
activeRewards
     ↓
React Component
```

### Important

```js
const selectRewards = (state) => state.rewards;
```

Here:

```text
Input  → complete Redux state
Output → rewards
```

Then:

```js
rewards => rewards.filter(...)
```

Here:

```text
Input  → rewards
Output → active rewards
```

---

# 5. Why `useSelector` Is Still Required

`createSelector` and `useSelector` have different jobs.

### `useSelector`

> Connects the React component to the Redux store.

```jsx
const rewards = useSelector(selectRewards);
```

### `createSelector`

> Creates a memoized selector for calculating/transforming Redux data.

```js
const selectActiveRewards = createSelector(
  [selectRewards],
  rewards => rewards.filter(...)
);
```

### Remember

```text
useSelector
    =
Get data from Redux in React

createSelector
    =
Calculate/transform Redux data efficiently
```

---

# 6. Simple Data vs Derived Data

### Simple data

No `createSelector` needed:

```jsx
const plan = useSelector((state) => state.membership.plan);
```

### Derived data

`createSelector` can be useful:

```js
const selectActiveRewards = createSelector([selectRewards], (rewards) =>
  rewards.filter((reward) => reward.status === "active"),
);
```

Then:

```jsx
const activeRewards = useSelector(selectActiveRewards);
```

---

# 7. Why Memoization?

Without memoization:

```text
Redux update
     ↓
selector runs
     ↓
filter()
     ↓
new array
     ↓
calculation again
```

With `createSelector`:

```text
Redux update
     ↓
Input changed?
   /       \
 No        Yes
 ↓          ↓
Return    Calculate
cached       ↓
result     Cache result
```

### Core idea

> **If the input hasn't changed, return the previous result.**

---

# 8. Multiple Inputs

`createSelector` can accept multiple input selectors.

```js
const selectUsers = (state) => state.users;

const selectSearchText = (state) => state.searchText;

const selectFilteredUsers = createSelector(
  [selectUsers, selectSearchText],
  (users, searchText) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  },
);
```

Flow:

```text
Redux State
    |
    ├── users
    |
    └── searchText
          |
          ↓
    createSelector
          |
          ↓
   Filter calculation
          |
          ↓
   filteredUsers
```

---

# 9. Where Should Selectors Live?

For a large application, keep selectors separate from components.

Example:

```text
membership/
├── membershipSlice.js
├── membershipSelectors.js
└── Membership.jsx
```

### `membershipSelectors.js`

```js
import { createSelector } from "@reduxjs/toolkit";

const selectMembership = (state) => state.membership;

export const selectActiveRewards = createSelector(
  [selectMembership],
  (membership) =>
    membership.rewards.filter((reward) => reward.status === "active"),
);
```

### Component

```jsx
const rewards = useSelector(selectActiveRewards);
```

This keeps the component cleaner and makes selectors reusable.

---

# 10. `createSelector` vs `useMemo`

### `useMemo`

Used inside a React component:

```jsx
const result = useMemo(() => expensiveCalculation(data), [data]);
```

### `createSelector`

Used for Redux-derived data:

```js
const result = createSelector([selectData], (data) =>
  expensiveCalculation(data),
);
```

### Easy difference

```text
useMemo
   ↓
React component calculation

createSelector
   ↓
Redux state calculation
```

---

# 11. When Should I Use `createSelector`?

Use it when:

```text
✅ Filtering large data
✅ Sorting data
✅ Transforming data
✅ Combining multiple Redux values
✅ Expensive calculations
✅ Reusing derived Redux data
```

Example:

```js
activeRewards;
filteredUsers;
sortedProducts;
cartTotal;
userPermissions;
dashboardStatistics;
```

---

# 12. When NOT to Use It?

Don't use it just because it exists.

For simple state access:

```js
const name = useSelector((state) => state.user.name);
```

That's enough.

Don't create:

```js
const selectName = createSelector([(state) => state.user], (user) => user.name);
```

unless there is a specific reason.

### Senior-level principle

> **Use memoization when it provides a benefit; don't use it everywhere.**

---

# 13. Important Interview Questions

### Q1. What is `createSelector`?

> "`createSelector` creates a memoized selector. It takes input selectors and a result function, and it reuses the previous result when the inputs haven't changed."

---

### Q2. Does `createSelector` access the Redux store directly?

> "No. `createSelector` doesn't directly access the store. `useSelector` passes the Redux state to the selector."

---

### Q3. Do we still need `useSelector`?

> "Yes. `useSelector` connects the React component to the Redux store, while `createSelector` creates the memoized selector."

---

### Q4. Why use `createSelector`?

> "To efficiently calculate derived data and avoid repeating expensive calculations when the input state hasn't changed."

---

### Q5. Does `createSelector` prevent all re-renders?

> "No. It memoizes selector results. It can help avoid unnecessary calculations and updates, but it doesn't prevent every React re-render."

---

### Q6. When would you NOT use it?

> "For simple state access where there is no expensive calculation or derived data, a normal `useSelector` is sufficient."

---

# 🧠 Final Memory Trick

Remember this:

```text
                 Redux Store
                      ↓
                 useSelector
                      ↓
                createSelector
                      ↓
               Input Selectors
                      ↓
                 Calculation
                      ↓
                Cached Result
                      ↓
                React Component
```

And remember the one-liner:

> **`useSelector` gets the Redux state; `createSelector` efficiently derives data from that state.**

### ⭐ Most important distinction

```text
useSelector
→ Connect React to Redux

createSelector
→ Memoize derived Redux data

useDispatch
→ Dispatch actions to change Redux state
```

That's all you need to remember for a **senior-level interview answer**.
