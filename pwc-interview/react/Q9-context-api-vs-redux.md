# Q9 — Context API vs Redux Toolkit

### 📁 File

`q09-context-api-vs-redux.md`

---

## 🎤 Interview Question

> **"What are the limitations of Context API, and when would you choose Redux Toolkit instead?"**

## 🎤 Simple Interview Answer

> Context API is useful for sharing simple global data between components without prop drilling. For example, I can use it for theme, language, or user preferences.
>
> However, Context API is not a complete state management solution. When the context value changes, all components consuming that context can re-render, which can become a performance issue if the context contains frequently changing data.
>
> Also, when the application becomes large, managing complex state, actions, reducers, debugging, and data flow with multiple Contexts can become difficult.
>
> In that situation, I would prefer **Redux Toolkit** because it provides a structured way to manage complex global state. It also provides tools such as slices, actions, middleware, selectors, and Redux DevTools.
>
> So, for simple and relatively stable global data, I would use Context API. For complex, frequently changing, shared application state, I would choose Redux Toolkit.

---

## 🔄 Easy Diagram

### Context API

```text id="ctxflow"
          Context
             ↓
     ┌───────┼───────┐
     ↓       ↓       ↓
 Component Component Component
     ↓       ↓       ↓
   Re-render when
   context changes
```

### Redux Toolkit

```text id="reduxflow"
          Redux Store
               ↓
        ┌──────┴──────┐
        ↓             ↓
      Slice         Slice
        ↓             ↓
   Components      Components
        ↓
      Selectors
        ↓
  Only required data
      is consumed
```

---

## 🧠 Easy Way to Remember

Remember **3 differences**:

```text
Context
├── Simple global state
├── Easy to use
└── Can cause unnecessary re-renders

Redux Toolkit
├── Complex global state
├── Better structure
└── Better debugging / scalability
```

### Example

For your membership application:

**Context API:**

```text
Theme
Language
User preferences
```

**Redux Toolkit:**

```text
User
Membership
Rewards
Permissions
Complex application state
```

---

## ⭐ Important Senior-Level Point

Be careful with this statement:

> ❌ "Context API causes all components to re-render."

That's not exactly correct.

A better answer is:

> **"When a Context value changes, components that consume that context may re-render. If a frequently changing context is consumed by many components, it can create unnecessary re-renders."**

That's technically more accurate.

Also remember:

> **Redux itself doesn't automatically prevent re-renders.**

Redux Toolkit + **selectors** helps components subscribe to the specific state they need.

---

## 🔥 Possible Follow-up

The interviewer may ask:

> **"How would you prevent unnecessary re-renders when using Redux?"**

A simple answer:

> "I would use proper selectors so components subscribe only to the state they need. I would also avoid creating unnecessary new object or array references and use memoized selectors when required."

---

### 📌 Next Question

**Q10 — File:** `Q10-redux-unnecessary-rerenders.md`

> **"How would you prevent unnecessary re-renders in a React application using Redux Toolkit?"**
