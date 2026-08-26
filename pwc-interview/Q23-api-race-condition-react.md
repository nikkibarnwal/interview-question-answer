# Q23 — API Race Condition in React

### 📁 File

`q23-api-race-condition-react.md`

---

## 🎤 Interview Question

> **"What is a race condition in API calls, and how would you prevent an older API response from overwriting the latest response in React?"**

## 🎤 Simple Interview Answer

> A **race condition** can happen when multiple API requests are running at the same time, but they finish in a different order.
>
> For example, suppose the user changes a search value quickly:
>
> ```text
> User searches "React"
>       ↓
> Request A
>
> User changes to "React Hooks"
>       ↓
> Request B
> ```
>
> If Request B finishes first, we display the correct latest result. But if Request A finishes later and updates the state, it can overwrite the result from Request B.
>
> To prevent this, I can use **AbortController** to cancel the previous request when the dependency changes.
>
> Another important approach is to make sure that only the **latest request** is allowed to update the state.
>
> For search functionality, I would normally combine this with **debouncing**, so we don't send a request for every keystroke.

---

## 🔄 Easy Diagram

### Problem

```text id="q23-bad"
User types "React"
       ↓
Request A ────────────────→ Response A
                                  ↓
                              setState()
                                  ↓
                         ❌ Old Result


User types "React Hooks"
       ↓
Request B ───────→ Response B
                       ↓
                   setState()
                       ↓
                  ✅ Latest Result
```

The problem is:

```text id="q23-order"
Request A starts
Request B starts

B finishes first
A finishes later

A can overwrite B ❌
```

---

# ✅ Solution 1 — `AbortController`

This is a good modern solution.

```jsx id="q23-code"
useEffect(() => {
  const controller = new AbortController();

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/users?q=${search}`, {
        signal: controller.signal,
      });

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
      }
    }
  };

  fetchUsers();

  return () => {
    controller.abort();
  };
}, [search]);
```

### What happens?

When `search` changes:

```text id="q23-abort-flow"
search changes
     ↓
Cleanup previous effect
     ↓
Abort previous request
     ↓
New effect starts
     ↓
New API request
```

So the old request doesn't get a chance to update the UI.

---

# ✅ Solution 2 — Request ID / Latest Request Check

Another approach is to track which request is the latest.

Conceptually:

```text id="q23-request-id"
Request 1 → ID 1
Request 2 → ID 2
Request 3 → ID 3
```

When a response arrives:

```text id="q23-check"
Response ID
     ↓
Is it the latest request?
     ↓
Yes → update state
No  → ignore response
```

This is useful when the request **cannot be cancelled**.

---

# 🔥 Search Example

Suppose the user types:

```text id="q23-search"
R
Re
Rea
React
```

Without debouncing:

```text id="q23-search-bad"
R      → API
Re     → API
Rea    → API
React  → API
```

That's unnecessary.

A better approach:

```text id="q23-search-good"
User types
     ↓
Debounce
     ↓
Wait for user to stop typing
     ↓
Send one API request
     ↓
Get latest result
```

So in a real application, I may combine:

```text id="q23-combined"
Debounce
   +
AbortController
   +
Latest response check
```

---

# 🧠 Easy Way to Remember

Remember:

```text id="q23-memory"
Multiple Requests
      ↓
Different Completion Times
      ↓
Old Response can overwrite New Response
      ↓
Race Condition
```

Solutions:

```text id="q23-solutions"
1. AbortController
2. Ignore old responses
3. Debounce user input
```

---

# ⭐ Important Senior-Level Point

Don't say:

> ❌ "Race condition only happens when requests fail."

It has nothing to do with whether the request succeeds or fails.

The issue is:

> **Multiple requests are in flight, and their responses can arrive in an unexpected order.**

### Strong interview sentence:

> **"A race condition occurs when multiple asynchronous requests are in flight and an older response arrives after a newer response, potentially overwriting the latest state."**

---

## 🎯 Short Interview Answer

If you need to answer quickly:

> **"A race condition can happen when multiple API requests are running at the same time and their responses arrive out of order. An older response can overwrite the latest response. I would usually prevent this with `AbortController` to cancel the previous request, and for requests that can't be cancelled, I can track the latest request and ignore older responses. For search APIs, I would also use debouncing."**

---

## 🔥 Next Question — Q24

### 📁 File

`Q24-debounce-vs-throttle.md`

> **"What is the difference between debounce and throttle? Where would you use each in a React application?"**
