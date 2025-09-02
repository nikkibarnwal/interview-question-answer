Let’s now take Redux Toolkit to the next level by learning how to handle **Async API calls using `createAsyncThunk()`** — in simple, real-life language, with full working code! ✅

---

## 🔄 What is `createAsyncThunk()`?

> Ek function jo API call ke 3 states manage karta hai automatically:  
> `loading`, `success`, `error` — bina boilerplate ke! 😍

---

## 🎯 Easy Trick to Remember — **"Delivery Order Tracker 🍕"**

> You ordered a pizza 🍕 online
>
> - 🕒 `pending` – Pizza is being made
> - ✅ `fulfilled` – Pizza delivered
> - ❌ `rejected` – Order cancelled

Just like that:

```js
createAsyncThunk() = async ka pizza tracker 😄
```

---

## 🧠 What It Does

- Automatically dispatches 3 actions:
  - `pending` 🕒
  - `fulfilled` ✅
  - `rejected` ❌
- Helps us easily manage async API data
- Works well with `createSlice`

---

## 🔧 Let's Build It: Async API with Redux Toolkit

We'll:

- Fetch list of users from an API (`https://jsonplaceholder.typicode.com/users`)
- Show loading, data, and error states

---

### 📦 1. Create User Slice with `createAsyncThunk`

#### 📁 `features/user/userSlice.js`

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Step 1: Create async thunk
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
```

---

### 🏪 2. Add to Store

#### 📁 `app/store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
```

---

### 🔄 3. Create User Component

#### 📁 `UserList.js`

```jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/user/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h2>User List (Async API)</h2>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            👤 {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

---

### 📁 `App.js`

```jsx
import React from "react";
import UserList from "./UserList";

function App() {
  return (
    <div>
      <h1>Redux Toolkit + Async Thunk</h1>
      <UserList />
    </div>
  );
}

export default App;
```

---

## 🧠 Recap: 3 States of Async Thunk

| Status         | Action           | Meaning     |
| -------------- | ---------------- | ----------- |
| 🕒 `pending`   | API call started | Show loader |
| ✅ `fulfilled` | Success          | Show data   |
| ❌ `rejected`  | Error            | Show error  |

---

## 🎉 Final Tip

> `createAsyncThunk()` = "Automatic API ka delivery boy + tracker" 🍔📦  
> You order (dispatch), and Redux Toolkit takes care of everything — loading, data, and errors!

---

## ✅ Bonus Benefits

- Axios ya fetch – your choice
- DevTools support
- Works with multiple APIs easily
- Clean, maintainable code

---

---

## ⚙️ Key Features in Redux Toolkit

1. **`configureStore`** 🏦

   - Simplifies store setup, includes good defaults (like Redux DevTools, middleware).

2. **`createSlice`** 🍰

   - Combines **action + reducer** in one place (less boilerplate).
   - Automatically generates action creators.

3. **`createAsyncThunk`** ⚡

   - Simplifies async API calls (fetch, post, etc.).
   - Handles loading, success, error states automatically.

4. **Immer.js integration** ✨

   - Allows writing **mutable-looking code** that produces **immutable state updates**.

---

## ⭐ Benefits of Redux Toolkit

- 🚀 **Less boilerplate** (reducers + actions auto-generated).
- 🧠 **Easier learning curve** than old Redux.
- ✅ Includes **best practices by default**.
- ⚡ Built-in async handling (via `createAsyncThunk`).
- 🔍 Debugging & DevTools supported out of the box.

---

---

## ✅ Best Use Cases for Redux Toolkit

- Large and medium-sized apps where **state logic is complex**.
- Apps with **async operations** (API calls, caching, fetching).
- Teams that want **cleaner, more maintainable Redux code**.
- Migration from **old Redux** to a **modern, scalable approach**.

---
