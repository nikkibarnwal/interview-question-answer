Perfect 🔥 Rajendra — this is one of the most **asked topics in JavaScript interviews**, especially for developers with your experience.

Let’s cover **all the frequently used JavaScript Array methods**, grouped by purpose — with **simple examples**, **use-cases**, and **tricks** to remember them (for interview clarity 💡).

---

# 🧠 **JavaScript Array Methods – Ultimate Interview Cheat Sheet**

---

## 🟢 **1. Array Creation & Checking**

| Method            | Description                       | Example                             |
| ----------------- | --------------------------------- | ----------------------------------- |
| `Array.isArray()` | Check if variable is an array     | `Array.isArray([1,2]) → true`       |
| `Array.from()`    | Create array from iterable/string | `Array.from('abc') → ['a','b','c']` |
| `Array.of()`      | Create array from arguments       | `Array.of(1,2,3) → [1,2,3]`         |

👉 **Trick:**
✅ `Array.isArray()` → Checking
✅ `Array.from()` → From something
✅ `Array.of()` → Of values

---

## 🟡 **2. Adding / Removing Elements**

| Method                                 | Description                      | Example               |
| -------------------------------------- | -------------------------------- | --------------------- |
| `push()`                               | Add at **end**                   | `arr.push(5)`         |
| `pop()`                                | Remove from **end**              | `arr.pop()`           |
| `unshift()`                            | Add at **start**                 | `arr.unshift(0)`      |
| `shift()`                              | Remove from **start**            | `arr.shift()`         |
| `splice(start, deleteCount, ...items)` | Add/remove from **any position** | `arr.splice(2,1,'x')` |

👉 **Trick:**
`push/pop` → work at **end**
`unshift/shift` → work at **start**
`splice` → **surgery** (add/remove anywhere)

---

## 🔵 **3. Searching & Filtering**

| Method          | Description                         | Example                            |
| --------------- | ----------------------------------- | ---------------------------------- |
| `indexOf()`     | Returns index of first match        | `[1,2,3].indexOf(2)` → `1`         |
| `lastIndexOf()` | Returns index of last match         | `[1,2,2].lastIndexOf(2)` → `2`     |
| `includes()`    | Checks if element exists            | `[1,2,3].includes(2)` → `true`     |
| `find()`        | Returns first element that matches  | `[1,2,3].find(x=>x>1)` → `2`       |
| `findIndex()`   | Returns index of first match        | `[1,2,3].findIndex(x=>x>1)` → `1`  |
| `filter()`      | Returns new array of matching items | `[1,2,3].filter(x=>x>1)` → `[2,3]` |

👉 **Trick:**

- `.find()` → **value**
- `.findIndex()` → **position**
- `.filter()` → **multiple matches**

---

## 🟣 **4. Iteration (Looping Methods)**

| Method          | Description                            | Example                                           |
| --------------- | -------------------------------------- | ------------------------------------------------- |
| `forEach()`     | Run function for each item (no return) | `[1,2,3].forEach(x=>console.log(x))`              |
| `map()`         | Returns new array after transformation | `[1,2,3].map(x=>x*2)` → `[2,4,6]`                 |
| `reduce()`      | Combine array into single value        | `[1,2,3].reduce((a,b)=>a+b)` → `6`                |
| `reduceRight()` | Like reduce but from right             | `['a','b','c'].reduceRight((a,b)=>a+b)` → `'cba'` |
| `some()`        | True if any element passes test        | `[1,2,3].some(x=>x>2)` → `true`                   |
| `every()`       | True if all pass test                  | `[1,2,3].every(x=>x>0)` → `true`                  |

👉 **Trick:**

- `map` → transform
- `filter` → pick few
- `reduce` → summarize
- `some` / `every` → test logic

---

## 🟠 **5. Sorting & Reordering**

| Method         | Description                               | Example                            |
| -------------- | ----------------------------------------- | ---------------------------------- |
| `sort()`       | Sort elements (alphabetically by default) | `[3,1,2].sort()` → `[1,2,3]`       |
| `reverse()`    | Reverse array in place                    | `[1,2,3].reverse()` → `[3,2,1]`    |
| `toReversed()` | Returns new reversed array (ES2023)       | `[1,2,3].toReversed()` → `[3,2,1]` |

👉 **Custom sorting (important in interviews):**

```js
const arr = [10, 2, 5];
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending
```

---

## 🔴 **6. Combining & Slicing**

| Method              | Description                    | Example                                    |
| ------------------- | ------------------------------ | ------------------------------------------ |
| `concat()`          | Merge arrays                   | `[1,2].concat([3,4])` → `[1,2,3,4]`        |
| `slice(start, end)` | Copy portion (non-destructive) | `[1,2,3,4].slice(1,3)` → `[2,3]`           |
| `join(separator)`   | Convert array → string         | `[1,2,3].join('-')` → `"1-2-3"`            |
| `flat(depth)`       | Flatten nested arrays          | `[1,[2,[3]]].flat(2)` → `[1,2,3]`          |
| `flatMap()`         | Map + flat (one level)         | `[1,2].flatMap(x=>[x, x*2])` → `[1,2,2,4]` |

👉 **Trick:**
`slice()` = copy
`splice()` = modify
`flat()` = flatten nested array

---

## 🟤 **7. Conversion & Utility**

| Method                           | Description                         | Example                                       |
| -------------------------------- | ----------------------------------- | --------------------------------------------- |
| `toString()`                     | Converts to comma-separated string  | `[1,2,3].toString()` → `"1,2,3"`              |
| `join()`                         | Join with custom separator          | `[1,2,3].join('-')` → `"1-2-3"`               |
| `fill(value, start, end)`        | Fill array with static value        | `[1,2,3].fill(0,1,3)` → `[1,0,0]`             |
| `copyWithin(target, start, end)` | Copy part of array to another index | `[1,2,3,4,5].copyWithin(0,3)` → `[4,5,3,4,5]` |

---

## 🧩 **8. Modern (ES6–ES13) Array Methods**

| Method                            | Description                                        | Example                                   |
| --------------------------------- | -------------------------------------------------- | ----------------------------------------- |
| `Array.prototype.at()`            | Get element by index (supports negative index)     | `[1,2,3].at(-1)` → `3`                    |
| `Array.prototype.toSorted()`      | Returns new sorted array (doesn’t mutate original) | `[3,1,2].toSorted()` → `[1,2,3]`          |
| `Array.prototype.toSpliced()`     | Immutable version of splice                        | `[1,2,3].toSpliced(1,1,9)` → `[1,9,3]`    |
| `Array.prototype.findLast()`      | Last element that matches                          | `[1,2,3,2].findLast(x=>x===2)` → `2`      |
| `Array.prototype.findLastIndex()` | Last index that matches                            | `[1,2,3,2].findLastIndex(x=>x===2)` → `3` |

👉 **Trick:**
New ES2023 methods = immutable (non-mutating) versions → **start with “to”**
e.g., `toSorted`, `toReversed`, `toSpliced`

---

## 🧠 **9. Most Frequently Asked in Interviews**

✅ `.map()`
✅ `.filter()`
✅ `.reduce()`
✅ `.find()` / `.findIndex()`
✅ `.some()` / `.every()`
✅ `.splice()` vs `.slice()`
✅ `.sort()` (with compare function)
✅ `.flat()`
✅ `.includes()`
✅ `Array.isArray()`

---

## ⚡ **Trick Table (Quick Memory Aid)**

| Goal              | Method                | Trick                       |
| ----------------- | --------------------- | --------------------------- |
| Transform array   | `.map()`              | Same length, changed values |
| Filter items      | `.filter()`           | Smaller array               |
| Combine items     | `.reduce()`           | One output                  |
| Check condition   | `.some()`, `.every()` | Boolean                     |
| Find element      | `.find()`             | First match                 |
| Modify array      | `.splice()`           | Destructive                 |
| Copy portion      | `.slice()`            | Non-destructive             |
| Merge arrays      | `.concat()`           | Combine                     |
| Remove duplicates | `[...new Set(arr)]`   | Shortcut                    |
| Flatten nested    | `.flat(Infinity)`     | Deep flatten                |

---
