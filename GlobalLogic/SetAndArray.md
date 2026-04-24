Here is a **simple, clear, interview-friendly** explanation of the difference between **Set** and **Array** in JavaScript:

---

# **Difference Between Set and Array**

## **1. Uniqueness of Values**

- **Array:**
  Can store **duplicate** values.
- **Set:**
  **Does NOT allow duplicates** — each value is unique.

```js
const arr = [1, 1, 2]; // duplicates allowed
const set = new Set([1, 1, 2]); // becomes {1, 2}
```

---

## **2. Order & Access**

- **Array:**
  Maintains order and supports **index-based access** (`arr[0]`).
- **Set:**
  Maintains insertion order but **no index-based access**.

---

## **3. Performance**

- **Array:**
  Searching (`includes`) is slower for large data.
- **Set:**
  Searching (`has`) is faster because Set uses hashing.

---

## **4. Use Case**

- **Array:**
  Best when you need ordered data, indexing, loops, maps, filters.
- **Set:**
  Best when you need **unique values**, quick lookups, or removing duplicates.

---

## **5. Methods**

- **Array:**
  `map`, `filter`, `reduce`, `push`, `pop`, etc.
- **Set:**
  `add`, `delete`, `has`, `clear`.

---

## **6. Converting Between Them**

```js
const arr = [1, 2, 2, 3];
const set = new Set(arr); // remove duplicates
const backToArray = [...set];
```

---

# **Simple One-Line Summary:**

**Array allows duplicates and supports indexing.
Set stores only unique values and provides faster lookups.**

---
