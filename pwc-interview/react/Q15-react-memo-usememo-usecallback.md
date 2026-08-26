# Q15 — `React.memo` vs `useMemo` vs `useCallback`

### 📁 File

`q15-react-memo-usememo-usecallback.md`

---

## 🎤 Interview Question

> **"What is the difference between `React.memo`, `useMemo`, and `useCallback`?"**

## 🎤 Simple Interview Answer

> All three are related to performance optimization, but they solve different problems.
>
> **`React.memo`** is used to memoize a **React component**. It can skip the component's re-render when its props have not changed.
>
> **`useMemo`** is used to memoize a **calculated value**. It prevents an expensive calculation from running again when its dependencies have not changed.
>
> **`useCallback`** is used to memoize a **function reference**. It keeps the same function reference between renders until its dependencies change.
>
> So, in simple terms:
>
> **`React.memo` → component**
>
> **`useMemo` → value**
>
> **`useCallback` → function**
>
> I would use them selectively when they solve an actual performance problem rather than using them everywhere.

---

## 🔄 Easy Diagram

```text id="q15diagram"
React Performance Optimization
             |
      ┌──────┼───────┐
      ↓      ↓       ↓
React.memo useMemo useCallback
   ↓         ↓          ↓
Component   Value     Function
```

### Example

```jsx id="q15example"
const UserList = React.memo(({ users, onUserClick }) => {
  return <div>...</div>;
});

const activeUsers = useMemo(() => users.filter((user) => user.active), [users]);

const handleUserClick = useCallback((id) => {
  console.log(id);
}, []);
```

Here:

```text id="q15flow"
activeUsers
    ↓
useMemo
    ↓
Memoized VALUE


handleUserClick
    ↓
useCallback
    ↓
Memoized FUNCTION


UserList
    ↓
React.memo
    ↓
Memoized COMPONENT
```

---

# 🧠 Easy Way to Remember

Use this simple table:

| Tool          | Remembers               | Main Purpose                   |
| ------------- | ----------------------- | ------------------------------ |
| `React.memo`  | Component output/render | Skip unnecessary child render  |
| `useMemo`     | Value                   | Avoid expensive calculation    |
| `useCallback` | Function reference      | Keep callback reference stable |

### One-line memory trick:

> **Component → `React.memo`** > **Value → `useMemo`** > **Function → `useCallback`**

---

# 🔥 Practical Example

Imagine:

```jsx
function Parent({ users }) {
  const [count, setCount] = useState(0);

  const activeUsers = useMemo(() => {
    return users.filter((user) => user.active);
  }, [users]);

  const handleUserClick = useCallback((id) => {
    console.log(id);
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <UserList users={activeUsers} onUserClick={handleUserClick} />
    </>
  );
}
```

And:

```jsx
const UserList = React.memo(({ users, onUserClick }) => {
  return <div>...</div>;
});
```

Now:

```text id="q15flow2"
Parent state changes
       ↓
Parent re-renders
       |
       ├── useMemo
       |      ↓
       |   same users?
       |      ↓
       |   same array reference
       |
       ├── useCallback
       |      ↓
       |   same function reference
       |
       ↓
    React.memo
       ↓
Props unchanged
       ↓
UserList can skip render ✅
```

---

# ⚠️ Important Interview Point

Don't say:

> ❌ "`useMemo` prevents re-render."

Instead:

> **"`useMemo` memoizes a calculated value. It doesn't prevent the component from rendering."**

Similarly:

> **"`useCallback` doesn't prevent rendering. It keeps a function reference stable."**

And:

> **"`React.memo` can skip a component render when its props haven't changed."**

---

# ⭐ Senior-Level Answer

If PwC asks this question and expects a concise answer:

> **"`React.memo` is used at the component level to skip unnecessary renders when props haven't changed. `useMemo` memoizes the result of a calculation, while `useCallback` memoizes a function reference. I use `useMemo` for expensive calculations, `useCallback` when function reference stability matters, especially with memoized children, and `React.memo` for components that frequently re-render with unchanged props. I use them selectively based on actual performance needs."**

---

## 🔥 Possible Follow-up

A very common next question is:

> **"If `useMemo`, `useCallback`, and `React.memo` are performance optimizations, why shouldn't we use them everywhere?"**

### 📌 Next File

`Q16-why-not-use-memoization-everywhere.md`
