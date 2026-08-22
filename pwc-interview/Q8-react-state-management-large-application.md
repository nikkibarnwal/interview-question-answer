# Q8 — State Management in a Large React Application

### 📁 File

`q08-react-state-management-large-application.md`

---

## 🎤 Interview Question

> **"How would you design state management for a large React application? When would you use Redux, Context API, or local state?"**

## 🎤 Simple Interview Answer

> In a large React application, I don't put everything into Redux. I first identify what type of state I have and then choose the appropriate solution.
>
> I generally divide state into three categories: **local state, global application state, and server state**.
>
> For **local state**, such as form fields, modal visibility, dropdown state, or a selected tab, I would use `useState` or `useReducer`.
>
> For **global application state**, such as logged-in user information, permissions, membership details, or complex data shared across many components, I would use **Redux Toolkit**.
>
> I would use **Context API** for relatively simple global values that don't change frequently, such as theme, language, or user preferences.
>
> For **server state**, such as API data, caching, loading states, and refetching, I would consider a library such as React Query or RTK Query instead of manually managing everything in Redux.
>
> The main goal is to keep state as close as possible to where it is needed. This helps reduce unnecessary re-renders and keeps the application easier to maintain.
>
> So, I would choose the state management solution based on the **scope, complexity, update frequency, and ownership of the state**, rather than using one solution for everything.

---

## 🔄 Easy Diagram

```text
                 React Application
                        |
        ┌───────────────┼────────────────┐
        ↓               ↓                ↓
   Local State     Global State      Server State
        |               |                |
     useState        Redux Toolkit    React Query
     useReducer                       / RTK Query
        |
   Component/Form
```

### Another easy way

```text
Only one component needs it?
        ↓
      useState

Many components need it?
        ↓
  Redux / Context

Data comes from API?
        ↓
 Server State Tool
```

---

# 🧠 Example

Suppose our membership application has:

```text
Membership page
    ↓
User selects plan
    ↓
Add supplemental member
    ↓
Calculate rewards
    ↓
Purchase membership
```

I might design it like:

```text
Local State
├── Selected tab
├── Modal open/close
└── Form input

Redux
├── Logged-in user
├── Membership information
├── Permissions
└── Application-wide state

Server State
├── Membership API data
├── Rewards API data
└── Purchase status
```

---

## ⭐ Important Interview Point

The interviewer may ask:

> **"Why shouldn't we put everything into Redux?"**

Answer:

> "Because Redux is shared global state. If I put every small UI state into Redux, the store becomes difficult to manage and can cause unnecessary complexity. I prefer keeping local state local and using Redux only when the state really needs to be shared or has complex business logic."

That's a **strong senior-level answer**.

---

## 🔥 Follow-up Question

> **"What problems can happen when using Context API for a large application, and why might you choose Redux instead?"**

The key topic here is **unnecessary re-renders and complex state management**.

---

### 📌 Next

**Q9 — File:** `q09-context-api-vs-redux.md`

> **"What are the limitations of Context API, and when would you choose Redux Toolkit instead?"**
