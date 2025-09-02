Perfect 👍 Here’s your **Redux Toolkit Cheat Sheet (Markdown format)** — super concise, easy to revise for interviews:

---

# 📝 Redux Toolkit Cheat Sheet

## ⭐ Key Features

- **`configureStore`** → Simplifies store setup with good defaults (like Redux DevTools, middleware).
- **`createSlice`** → Combines reducer + actions in one place
- **`createAsyncThunk`** → Easy async logic (API calls)
- **Immer.js inside** → Mutable-looking code, produces immutable state

---

## ✅ Benefits

- 🚀 Less boilerplate, faster development
- 🧑‍💻 Easier to learn than classic Redux
- 📦 Includes best practices by default
- 🔄 Built-in async handling
- 🕵️ Great debugging with Redux DevTools

---

## 🎯 Best Use Cases

- Medium → large apps with **complex global state**
- Apps needing **async API calls**
- Teams wanting **clean, maintainable state logic**
- Migrating from **classic Redux → modern Redux**

---

## 💻 Example: Counter Slice

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## ⚡ Async Example with `createAsyncThunk`

```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async action
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default usersSlice.reducer;
```

---

👉 Quick Trick to Remember:
**Redux Classic = Boilerplate + Manual setup**
**Redux Toolkit = Slice + Store + Async (all in one, less headache 🚀)**

---

---

## 🎯 Interview-Ready Answer (Short)

“Redux Toolkit is the official, recommended way to use Redux because it reduces boilerplate by combining actions and reducers in `createSlice`, simplifies async operations with `createAsyncThunk`, and provides sensible defaults with `configureStore`. Unlike classic Redux, where we had to manually create actions, reducers, and types, RTK makes code shorter, cleaner, and easier to maintain. It’s best for medium to large apps with complex state and async logic.”

---
