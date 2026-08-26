# Q34 — Context API and Performance

### 📁 File

`q34-usecontext-performance.md`

---

## 🎤 Interview Question

> **"How does Context API work, and what performance problems can occur when using Context in a large React application?"**

## 🎤 Simple Interview Answer

> Context API allows us to share data between components without passing props manually through every level.
>
> We create a Context, provide a value using `Context.Provider`, and consume it using `useContext`.
>
> Context is useful for relatively stable global values such as theme, language, or user preferences.
>
> The main performance concern is that when the **Context value changes, components consuming that Context can re-render**.
>
> In a large application, if we put frequently changing data into one large Context, many components may re-render even when they only need a small part of that data.
>
> To improve this, I can split large Contexts into smaller Contexts, keep frequently changing state local when possible, memoize the provider value when appropriate, and use Redux or another state-management solution when the state becomes complex or needs more advanced subscription behavior.

---

# 🔄 Easy Diagram

### Context Flow

```text
              Context
                 ↓
          Context.Provider
                 ↓
        ┌────────┼────────┐
        ↓        ↓        ↓
    Component Component Component
        ↓        ↓        ↓
     useContext useContext useContext
```

When Context changes:

```text
Context value changes
        ↓
Consumers of Context
        ↓
Can re-render
```

---

# 1. Basic Context Example

Create Context:

```jsx
const ThemeContext = createContext();
```

Provider:

```jsx
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}
```

Consume:

```jsx
function Header() {
  const { theme } = useContext(ThemeContext);

  return <div>{theme}</div>;
}
```

Flow:

```text
App
 ↓
ThemeContext.Provider
 ↓
Header
 ↓
useContext()
 ↓
theme
```

---

# 2. The Performance Problem

Suppose we have:

```jsx
<ThemeContext.Provider
  value={{
    theme,
    user,
    notifications,
    cart,
    setTheme,
    setUser
  }}
>
```

Now imagine:

```text
notifications change
        ↓
Context value changes
        ↓
All consumers of this Context
may update
```

But perhaps one component only needs:

```js
theme;
```

It may still be affected by the Context update because it consumes the same Context.

---

# ⚠️ Important Technical Point

Don't say:

> ❌ **"When any Context value changes, the entire application re-renders."**

That's incorrect.

Better:

> **"When the value provided by a Context changes, components consuming that Context can re-render."**

Components that don't consume that Context are not automatically re-rendered just because the Context changed.

---

# 3. Problem With Object Value

Consider:

```jsx
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}
```

Every time `App` renders:

```js
{
  theme, setTheme;
}
```

creates a **new object reference**.

We can sometimes stabilize the value:

```jsx
const contextValue = useMemo(
  () => ({
    theme,
    setTheme,
  }),
  [theme],
);

return (
  <ThemeContext.Provider value={contextValue}>
    <Dashboard />
  </ThemeContext.Provider>
);
```

Now the object doesn't get recreated unnecessarily when unrelated parent state changes.

### But remember:

> **`useMemo` doesn't magically solve all Context performance problems.**

If `theme` changes, `contextValue` still changes, and consumers still need to update.

---

# 4. Split Large Contexts

Instead of:

```text
AppContext
├── User
├── Theme
├── Notifications
├── Cart
└── Settings
```

we can use:

```text
UserContext
ThemeContext
NotificationContext
CartContext
SettingsContext
```

Then:

```text
Theme changes
    ↓
ThemeContext consumers
    ↓
Update
```

Instead of having unrelated state inside one large Context.

---

# ⭐ When Would You Choose Redux?

For a small requirement:

```text
Theme
Language
User preferences
```

Context is usually enough.

For complex application state:

```text
Membership
Rewards
Permissions
Cart
Orders
Multiple API states
Complex business logic
```

Redux Toolkit can provide a more structured approach.

```text
Context
→ Simple shared values

Redux Toolkit
→ Complex shared application state
```

---

# 🧠 Easy Way to Remember

Remember these **4 points**:

```text
Context Performance

1. Context value changes
       ↓
   Consumers can re-render

2. Large Context
       ↓
   Harder to control updates

3. Split Contexts
       ↓
   Reduce unrelated updates

4. Complex global state
       ↓
   Consider Redux Toolkit
```

---

# 🎯 Interview-Ready Short Answer

> **"Context API is useful for sharing global values without prop drilling. The main performance concern is that when a Context value changes, its consumers can re-render. In a large application, I avoid putting frequently changing unrelated state into one Context. I can split Contexts, keep local state local, and memoize the provider value where appropriate. If the application has complex global state and many consumers, I would consider Redux Toolkit."**

---

## 🔥 Possible Follow-up

> **"If Context can cause unnecessary re-renders, why would you use Context instead of Redux?"**

### 📌 Next Question — Q35

**File:** `Q35-context-vs-redux-real-world.md`

> **"In a real-world application, when would you choose Context API and when would you choose Redux Toolkit?"**
