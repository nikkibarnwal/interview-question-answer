# Q13 — `useMemo` vs `useCallback`

### 📁 File

`q13-usememo-vs-usecallback.md`

---

## 🎤 Interview Question

> **"What is the difference between `useMemo` and `useCallback`? When would you use each?"**

## 🎤 Simple Interview Answer

> Both `useMemo` and `useCallback` are React hooks used for **memoization**, but they memoize different things.
>
> `useMemo` memoizes the **result of a calculation**, so it returns a value.
>
> `useCallback` memoizes a **function**, so it returns the same function reference until its dependencies change.
>
> I would use `useMemo` when I have an expensive calculation and I don't want to calculate it again on every render.
>
> I would use `useCallback` when I need to pass a function to a memoized child component and I want to keep the function reference stable.
>
> I wouldn't use them everywhere. I would use them when they solve an actual performance or reference-equality problem.

---

## 🔄 Easy Diagram

### `useMemo`

```text id="wz8f9t"
Data
 ↓
Expensive Calculation
 ↓
useMemo()
 ↓
Cached VALUE
```

Example:

```jsx id="jzv9go"
const sortedUsers = useMemo(() => users.sort(sortUsers), [users]);
```

`sortedUsers` is a **value**.

---

### `useCallback`

```text id="a8k0hk"
Function
   ↓
useCallback()
   ↓
Cached FUNCTION
```

Example:

```jsx id="i0s5l4"
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

`handleClick` is a **function**.

---

# 🧠 Easy Way to Remember

This is the easiest way:

```text id="6l6kcu"
useMemo
   ↓
Memoize VALUE


useCallback
   ↓
Memoize FUNCTION
```

Or:

> **useMemo → value**

> **useCallback → function**

---

# 🔥 Why Does `useCallback` Matter?

Consider:

```jsx id="qk5f4h"
function Parent() {
  const handleClick = () => {
    console.log("clicked");
  };

  return <Child onClick={handleClick} />;
}
```

Every time `Parent` renders:

```text id="m6u0yq"
Parent render
    ↓
new handleClick function
    ↓
Child receives new function reference
    ↓
Child may re-render
```

Even though the function does exactly the same thing.

If `Child` uses `React.memo`:

```jsx id="6c1s4u"
const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});
```

you can stabilize the function:

```jsx id="4d5pjw"
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

Now:

```text id="m40hup"
Parent render
    ↓
same handleClick reference
    ↓
React.memo sees same prop
    ↓
Child can skip re-render
```

---

# ⭐ Important Interview Point

Don't say:

> ❌ "`useCallback` prevents re-renders."

That's not exactly correct.

Say:

> **"`useCallback` keeps the same function reference between renders when its dependencies haven't changed. This can help prevent unnecessary child re-renders when the child is memoized with `React.memo`."**

That's much more accurate.

---

# 🔥 `useMemo` vs `useCallback`

|                 | `useMemo`             | `useCallback`      |
| --------------- | --------------------- | ------------------ |
| Memoizes        | Value                 | Function           |
| Returns         | Calculated value      | Function reference |
| Common use      | Expensive calculation | Stable callback    |
| Helps with      | Repeated calculations | Reference equality |
| Often used with | Expensive computation | `React.memo`       |

---

## Example Together

```jsx id="0a7lrb"
function Parent({ users }) {
  const activeUsers = useMemo(() => {
    return users.filter((user) => user.active);
  }, [users]);

  const handleUserClick = useCallback((id) => {
    console.log(id);
  }, []);

  return <UserList users={activeUsers} onUserClick={handleUserClick} />;
}
```

Here:

```text id="3n8x6d"
users
  ↓
useMemo
  ↓
activeUsers VALUE


handleUserClick FUNCTION
  ↓
useCallback
  ↓
stable function reference
```

---

# ⚠️ Senior-Level Point

You may get this follow-up:

> **"Should we use `useMemo` and `useCallback` everywhere?"**

Answer:

> **"No. Both hooks have their own overhead. I would use them when there is an expensive calculation, a referential equality issue, or when they help a memoized child avoid unnecessary renders. I would first use profiling to identify the actual performance problem."**

That's a strong answer for a senior React interview.

---

# 🧠 Final Memory Trick

```text id="0c0bdc"
useMemo
→ "Remember this VALUE."

useCallback
→ "Remember this FUNCTION."

React.memo
→ "Skip this COMPONENT if props haven't changed."
```

These three are often discussed together:

```text id="6v2z5e"
             Parent
               |
       ┌───────┴────────┐
       ↓                ↓
   useMemo          useCallback
       ↓                ↓
    Value            Function
       └───────┬────────┘
               ↓
          React.memo
               ↓
         Child Component
```

### 📌 Next Question

**Q14 — File:** `Q14-react-memo.md`

> **"What is `React.memo`, how does it work, and when would you use it?"**
