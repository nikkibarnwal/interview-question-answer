# Q19 — `useEffect` and Dependency Array

### 📁 File

`q19-useeffect-dependency-array.md`

---

## 🎤 Interview Question

> **"Explain `useEffect`. What is the difference between an empty dependency array, no dependency array, and a dependency array with specific values?"**

## 🎤 Simple Interview Answer

> `useEffect` is a React Hook used to perform **side effects** in a component.
>
> Examples of side effects are API calls, subscriptions, timers, event listeners, and updating something outside React.
>
> The dependency array tells React **when the effect should run again**.
>
> If I don't provide a dependency array, the effect runs after **every render**.
>
> If I provide an empty dependency array `[]`, the effect runs after the **initial render** and doesn't run again because of dependency changes.
>
> If I provide specific dependencies, the effect runs after the initial render and then runs again whenever one of those dependencies changes.
>
> We can also return a cleanup function from `useEffect` to clean up things like event listeners, timers, or subscriptions.

---

# 🔄 Easy Diagram

```text id="q19diagram"
                useEffect
                    |
          ┌─────────┼──────────┐
          ↓         ↓          ↓
      No array     []      [dependencies]
          ↓         ↓          ↓
      Every       Initial    Initial +
      render      render     dependency
                              changes
```

---

# 1. No Dependency Array

```jsx id="q19noarray"
useEffect(() => {
  console.log("Effect");
});
```

Flow:

```text id="q19noarrayflow"
Render
  ↓
Effect
  ↓
Render
  ↓
Effect
  ↓
Render
  ↓
Effect
  ↓
...
```

It runs after **every render**.

### Interview line:

> "Without a dependency array, the effect runs after every render."

---

# 2. Empty Dependency Array

```jsx id="q19empty"
useEffect(() => {
  fetchUsers();
}, []);
```

Flow:

```text id="q19emptyflow"
Initial Render
     ↓
Effect runs
     ↓
Future renders
     ↓
Effect doesn't run again
```

### Interview line:

> "With an empty dependency array, the effect runs after the initial render and doesn't re-run because of dependency changes."

---

# 3. Specific Dependencies

```jsx id="q19deps"
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

Flow:

```text id="q19depsflow"
Initial Render
     ↓
Effect runs
     ↓
userId changes
     ↓
Effect runs again
     ↓
userId changes
     ↓
Effect runs again
```

### Interview line:

> "When we provide dependencies, the effect runs after the initial render and whenever one of those dependencies changes."

---

# 4. Cleanup Function

This is very important for senior React interviews.

Example with an event listener:

```jsx id="q19cleanup"
useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

Flow:

```text id="q19cleanupflow"
Component mounts
      ↓
Add event listener
      ↓
Component unmounts
      ↓
Cleanup runs
      ↓
Remove event listener
```

You can also clean up:

```text id="q19cleanupitems"
Timers
Subscriptions
WebSocket connections
Event listeners
AbortController / API requests
```

---

# ⭐ Important Senior-Level Point

Don't say:

> ❌ "`useEffect` runs after the component renders."

A more accurate answer is:

> **"`useEffect` runs after React has committed the update to the DOM."**

For most interviews, you can simply say:

> **"`useEffect` runs after the render is committed."**

---

# 🔥 Common Interview Follow-up

### "What happens if you update state inside `useEffect`?"

Example:

```jsx id="q19loop"
useEffect(() => {
  setCount(count + 1);
});
```

Because there is no dependency array:

```text id="q19loopflow"
Render
  ↓
Effect
  ↓
setCount()
  ↓
Render
  ↓
Effect
  ↓
setCount()
  ↓
Render
  ↓
...
```

This can create an **infinite render loop**.

---

# 🧠 Easy Way to Remember

```text id="q19remember"
No []
→ Every render

[]
→ Initial render

[value]
→ Initial + when value changes

return cleanup
→ Clean resources
```

### One-line interview answer:

> **"`useEffect` handles side effects. The dependency array controls when the effect runs, and the cleanup function is used to remove subscriptions, timers, listeners, or other resources."**

---

## 📌 Next Question — Q20

### File

`Q20-useeffect-stale-closure.md`

> **"What is a stale closure in `useEffect`, why does it happen, and how would you fix it?"**
