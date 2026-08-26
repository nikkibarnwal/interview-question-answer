Yes, **almost correct**, but there is one small typo: you wrote `pre` as the parameter and `prev` inside the function.

Correct:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

But there is an **important point**:

```js
setCount((prev) => prev + 1);
console.log(count);
```

The `console.log(count)` will **still print the old value**.

For example:

```text
Initial count = 0

Click
 ↓
setCount(prev => prev + 1)
 ↓
console.log(count) → 0
 ↓
React re-renders
 ↓
count = 1
```

The functional update fixes the **state update**, but it does **not immediately change the `count` variable inside the current render/event handler**.

If you want to see the updated value, you can use:

```jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

Now:

```text
Click
 ↓
setCount(prev => prev + 1)
 ↓
React re-renders
 ↓
count = 1
 ↓
useEffect
 ↓
console.log(1)
```

### 🧠 Remember this

> **Functional update gives you the latest state for calculating the next state, but `count` inside the current function still belongs to the current render.**

---

# Q33 — `useState` vs `useReducer`

### 📁 File

`q33-usestate-vs-usereducer.md`

## 🎤 Interview Question

> **"What is the difference between `useState` and `useReducer`? When would you choose `useReducer` over `useState`?"**

## 🎤 Simple Interview Answer

> `useState` is simpler and is useful when the state is simple or when updates are straightforward.
>
> `useReducer` is useful when the state is more complex and has multiple related values or multiple ways to update the state.
>
> With `useReducer`, I define a reducer function that takes the current state and an action and returns the next state.
>
> I would use `useReducer` when state transitions are complex, when multiple fields change together, or when I want to keep the state update logic separate from the component.
>
> For example, a simple input field can use `useState`, while a complex form with loading, success, error, validation, and multiple actions can be easier to manage with `useReducer`.

---

## 🔄 Easy Diagram

### `useState`

```text
Component
    ↓
useState
    ↓
setState()
    ↓
New State
```

### `useReducer`

```text
Component
    ↓
dispatch(action)
    ↓
Reducer
    ↓
(currentState + action)
    ↓
New State
```

---

# 1. Simple `useState`

```jsx
const [count, setCount] = useState(0);

const increment = () => {
  setCount((prev) => prev + 1);
};
```

Very simple:

```text
State
 ↓
setState
 ↓
New State
```

Use this when the state logic is simple.

---

# 2. `useReducer`

Suppose we have:

```js
const initialState = {
  count: 0,
  loading: false,
  error: null,
};
```

We have multiple actions:

```text
increment
decrement
reset
startLoading
success
error
```

Instead of having many `setState` calls, we can centralize the update logic:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}
```

Then:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

And:

```jsx
dispatch({ type: "increment" });
```

---

# 🧠 Easy Way to Remember

```text
Simple state
    ↓
useState

Complex state transitions
    ↓
useReducer
```

Or:

> **`useState` → simple state**

> **`useReducer` → complex state logic**

---

# ⭐ Senior-Level Point

Don't say:

> ❌ "`useReducer` is faster than `useState`."

That's not the main reason to choose it.

Instead say:

> **"I choose `useReducer` mainly for better organization and predictable state transitions when the state logic becomes complex."**

---

## 🎯 Interview-Ready Short Answer

> **"`useState` is suitable for simple state and straightforward updates. I use `useReducer` when the state has multiple related values or complex state transitions. A reducer centralizes the state update logic using actions, which makes complex state changes more predictable and easier to maintain."**

---

### 📌 Next Question — Q34

**File:** `Q34-usecontext-performance.md`

> **"How does Context API work, and what performance problems can occur when using Context in a large React application?"**
