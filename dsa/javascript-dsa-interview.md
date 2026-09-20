You're right 👍 **Aage se har question ke baad main GitHub `.md` notes bhi update karunga.** Tumhe manually copy-paste karne ki zarurat nahi honi chahiye.

Abhi tak **Q1, Q2, Q3** ko ek clean revision format mein maintain karte hain.

### `javascript-dsa-interview.md`

````md
# JavaScript DSA Interview Preparation

> Goal: Interview-focused DSA preparation.
> Focus on problem-solving patterns, JavaScript implementation, complexity, and interview explanation.

---

# Big-O Quick Reference

| Complexity | Meaning      |
| ---------- | ------------ |
| O(1)       | Constant     |
| O(log n)   | Logarithmic  |
| O(n)       | Linear       |
| O(n log n) | Linearithmic |
| O(n²)      | Quadratic    |

### Important Rules

- O(2n) → O(n)
- O(5n) → O(n)
- O(n + 10) → O(n)
- Fixed number of variables → O(1)
- Array/Set/Map storing n elements → O(n)

---

# 1. Arrays

## Q1. Find Largest Element

### Problem

Given an array of integers, find the largest element.

### Example

```js
Input: [10, 5, 20, 8, 15];
Output: 20;
```
````

### Approach

1. Take the first element as the initial maximum.
2. Traverse the array.
3. Compare each element with the current maximum.
4. If the current element is greater, update maximum.
5. Return maximum after traversal.

### JavaScript

```js
function findLargest(arr) {
  let largest = arr[0];

  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}
```

### Dry Run

```text
Input: [10, 5, 20, 8, 15]

largest = 10

5  > 10 ❌
20 > 10 ✅ → largest = 20
8  > 20 ❌
15 > 20 ❌

Answer = 20
```

### Complexity

- Time: O(n)
- Space: O(1)

### Interview Answer

> I'll initialize the first element as the current maximum and iterate through the array. For each element, I'll compare it with the current maximum and update it if the element is greater. Since I traverse the array once, the time complexity is O(n), and since I use only one variable, the auxiliary space is O(1).

---

## Q2. Find Second Largest Element

### Problem

Find the second largest element without using `sort()`.

### Example

```js
Input: [10, 5, 20, 8, 15];
Output: 15;
```

### Approach

Maintain two variables:

```js
largest;
secondLargest;
```

While traversing:

- If current number > largest:

  - Move current `largest` to `secondLargest`
  - Update `largest`

- Otherwise, if current number > `secondLargest`:

  - Update `secondLargest`

### JavaScript

```js
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}
```

### Dry Run

```text
Input: [10, 5, 20, 8, 15]

Start:
largest = -Infinity
secondLargest = -Infinity

10:
largest = 10
secondLargest = -Infinity

5:
largest = 10
secondLargest = 5

20:
20 > 10
secondLargest = 10
largest = 20

8:
8 > 20 ❌
8 > 10 ❌

15:
15 > 20 ❌
15 > 10 ✅
secondLargest = 15

Result:
largest = 20
secondLargest = 15
```

### Complexity

- Time: O(n)
- Space: O(1)

### Important Big-O Concept

```text
O(2n) → O(n)
```

Constants are ignored in Big-O.

Also:

```text
2 variables → O(1)
10 variables → O(1)
100 fixed variables → O(1)
```

The number is fixed and does not depend on `n`.

### Interview Answer

> I'll maintain two variables, largest and secondLargest, and traverse the array only once. Whenever I find a value greater than largest, I'll move the current largest to secondLargest and update largest. This gives O(n) time complexity and O(1) auxiliary space.

---

# Q3. Find Duplicate Values

### Problem

Find all duplicate values in an array.

### Example

```js
Input: [1, 2, 3, 4, 5, 3, 2];
Output: [3, 2];
```

---

## Brute Force Approach

Use nested loops and compare every element with the elements after it.

### Complexity

- Time: O(n²)
- Space: O(n) because we need an output array for duplicates.

### Important Point

A naive nested-loop implementation may add the same duplicate multiple times.

Example:

```js
Input: [1, 2, 2, 3, 3, 3];
```

Expected:

```js
[2, 3];
```

So we need logic to ensure a duplicate is added only once.

---

## Optimized Approach

Use a `Set`.

Maintain:

```text
seen
duplicates
```

### Logic

1. Traverse the array.
2. If the current value already exists in `seen`, it is a duplicate.
3. Add it to `duplicates`.
4. Otherwise, add it to `seen`.

### JavaScript

```js
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}
```

### Dry Run

```text
Input: [1, 2, 3, 4, 3, 2]

1 → seen = {1}
2 → seen = {1, 2}
3 → seen = {1, 2, 3}
4 → seen = {1, 2, 3, 4}

3 → already seen → duplicate
2 → already seen → duplicate

Result:
[3, 2]
```

### Complexity

- Time: O(n) average
- Space: O(n)

### Problem-Solving Pattern

When the question contains:

- duplicate
- repeated
- already exists
- seen before
- frequency
- unique

Think:

```text
Set / Map / Object
```

### Interview Answer

> The brute-force approach would compare every element with every other element, resulting in O(n²) time. To optimize it, I'll use a Set to track elements I've already seen. If an element already exists in the Set, I'll consider it a duplicate. This gives O(n) average time and O(n) space.

---

# Problem-Solving Patterns

## Pattern 1: "Have I Seen This Before?"

```text
Duplicate?
Repeated?
Already exists?
Unique?
Frequency?

        ↓

Set / Map / Object
```

## Pattern 2: One Pass

Whenever possible, ask:

> Can I solve this while traversing the array only once?

Example:

```text
Find maximum       → O(n)
Find second max    → O(n)
Find duplicates    → O(n) using Set
```

---

# Space Complexity Rules

Ask:

> What extra memory am I creating apart from the input?

### O(1)

Fixed number of variables:

```js
let max;
let secondMax;
```

### O(n)

Data structure grows with input:

```js
const result = [];
const seen = new Set();
const map = new Map();
```

### Important

Input itself is normally not counted when discussing **auxiliary space**.

---

# Upcoming Topics

- [ ] Arrays — 10 questions
- [ ] Strings — 10 questions
- [ ] Objects / HashMap — 10 questions
- [ ] Sorting — 10 questions
- [ ] String Sorting
- [ ] Array Sorting
- [ ] Stack
- [ ] Queue
- [ ] Linked List
- [ ] DFS
- [ ] BFS
- [ ] Job Processing / Queue
- [ ] Problem-Solving Patterns
- [ ] Big-O

````

### आगे से हमारा workflow

हर question के बाद मैं **दो चीजें दूँगा**:

**1. Interview explanation + correction**
**2. `javascript-dsa-interview.md` में add करने वाला section**

और जब सारे questions complete हो जाएंगे, हम इसे एक **final clean GitHub-ready `.md` file** में भी बना देंगे।

अब **Q4** पर चलते हैं:

> **Given an array, remove duplicate values and return only unique values.**

```js
Input:  [1, 2, 2, 3, 4, 3, 5]
Output: [1, 2, 3, 4, 5]
````

पहले **approach + time + space** batao.
