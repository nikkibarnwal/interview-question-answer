# Q22 — API Call Inside `useEffect`

### 📁 File

`q22-useeffect-api-call-cleanup.md`

---

## 🎤 Interview Question

> **"How would you handle an API call inside `useEffect`, including loading, error handling, cleanup, and avoiding updates after the component unmounts?"**

## 🎤 Simple Interview Answer

> I would handle the API call with separate **loading, data, and error states**.
>
> I would also use `AbortController` to cancel the API request if the component unmounts or if a new request replaces the previous one.
>
> This helps avoid unnecessary network work and prevents us from processing a response that is no longer needed.
>
> I would also handle errors properly and make sure the loading state is updated in both success and failure cases.
>
> For example:

```jsx id="q22-code"
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/users", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return <UserList users={users} />;
}
```

---

# 🔄 Easy Flow

```text id="q22-flow"
Component Mounts
       ↓
Create AbortController
       ↓
Set Loading = true
       ↓
Call API
       ↓
   ┌───┴────┐
   ↓        ↓
Success    Error
   ↓        ↓
Set Data   Set Error
   └───┬────┘
       ↓
Loading = false
       ↓
Component Unmounts
       ↓
controller.abort()
```

---

# 🧠 Why `AbortController`?

Suppose:

```text id="q22-abort"
Component
    ↓
API Request
    ↓
User leaves page
    ↓
Component unmounts
```

The API request might still be running.

With:

```js id="q22-controller"
const controller = new AbortController();

fetch(url, {
  signal: controller.signal,
});
```

we can cancel it:

```js id="q22-abort-code"
controller.abort();
```

This is especially useful for:

- Search APIs
- Large API requests
- Changing filters
- Changing route/page
- Requests that are no longer needed

---

# 🔥 Important Scenario — Search

Suppose the user types:

```text
R
Ra
Raj
Raje
Rajen
```

Without cancellation:

```text id="q22-search-bad"
R     → API request
Ra    → API request
Raj   → API request
Raje  → API request
Rajen → API request
```

Multiple requests can be running at the same time.

A better approach is:

```text id="q22-search-good"
User types
    ↓
New request
    ↓
Cancel previous request
    ↓
New request
    ↓
Latest result
```

For search, we would often combine this with **debouncing**.

---

# ⭐ Important Interview Point

You may hear an interviewer say:

> **"How do you prevent setting state after the component unmounts?"**

A good modern answer is:

> **"I would cancel the request using `AbortController` in the effect cleanup. If the request is aborted, I ignore the `AbortError`."**

Don't focus only on the old pattern of:

```js
let isMounted = true;
```

For cancellable browser requests, `AbortController` is a better approach.

---

# 🧠 Easy Way to Remember

Remember:

```text id="q22-memory"
API in useEffect

Loading
   ↓
Request
   ↓
Success → Data
   ↓
Error → Error
   ↓
Cleanup → AbortController
```

### One-line interview answer:

> **"For an API call in `useEffect`, I manage loading, data, and error states, use `AbortController` for cleanup, handle `AbortError` separately, and cancel requests that are no longer needed."**

---

## 🔥 Possible Follow-up

The interviewer may ask:

> **"What if the user changes `userId` while the previous API request is still running?"**

You should explain **race conditions** and how `AbortController` can prevent an older request from overwriting the latest result.

---

### 📌 Next Question — Q23

**File:** `Q23-api-race-condition-react.md`

> **"What is a race condition in API calls, and how would you prevent an older API response from overwriting the latest response in React?"**
