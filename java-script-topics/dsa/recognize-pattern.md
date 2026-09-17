**How to recognize the pattern from the problem statement** and then convert it into JavaScript.

# 🧠 DSA Pattern Recognition → JavaScript

The easiest way is:

> **Problem wording → Constraints → Pattern → Data structure → JS implementation**

Don't start coding immediately.

---

## 1. First question: What is the problem asking?

When you read a DSA question, identify the main action.

| Problem asks...                   | Think about...                    |
| --------------------------------- | --------------------------------- |
| Find pair                         | Two Sum / Two Pointers / Hash Map |
| Find duplicate                    | Set / Hash Map                    |
| Count frequency                   | Hash Map / Object                 |
| Find longest/shortest subarray    | Sliding Window                    |
| Sorted array + pair               | Two Pointers                      |
| Search in sorted array            | Binary Search                     |
| Maximum/minimum contiguous sum    | Sliding Window / Kadane           |
| Matching brackets                 | Stack                             |
| Next greater/smaller              | Monotonic Stack                   |
| First/last occurrence             | Binary Search                     |
| Top K                             | Heap / Frequency Map              |
| Connected components              | DFS / BFS                         |
| Shortest path in unweighted graph | BFS                               |
| Tree level-by-level               | BFS                               |
| All possible combinations         | Backtracking                      |
| All subsets                       | Backtracking                      |
| Repeated overlapping subproblems  | Dynamic Programming               |
| Dependency/order                  | Graph + Topological Sort          |

---

# 🔥 Pattern 1 — Hash Map / Set

### Trigger words

Look for:

> **duplicate, frequency, count, occurrence, pair, lookup, seen, unique**

Example:

> Find the first non-repeating character.

Immediately think:

```text
Need frequency
      ↓
Hash Map
```

JavaScript:

```js
const freq = {};

for (const ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}
```

Then second pass to find the first character with frequency `1`.

### Recognition rule

> **If I need fast lookup/counting → Hash Map / Set.**

---

# 🔥 Pattern 2 — Two Pointers

### Trigger words

Look for:

> **sorted array, pair, opposite ends, left/right, reverse, palindrome**

Example:

> Given a sorted array, find two numbers whose sum equals target.

Think:

```text
Sorted array
     +
Pair
     ↓
Two pointers
```

```js
let left = 0;
let right = arr.length - 1;

while (left < right) {
  const sum = arr[left] + arr[right];

  if (sum === target) {
    return [left, right];
  }

  if (sum < target) {
    left++;
  } else {
    right--;
  }
}
```

### Recognition rule

> **Sorted + pair/search from both ends → Two Pointers.**

---

# 🔥 Pattern 3 — Sliding Window

This is one of the **most important L2 patterns**.

### Trigger words

Look for:

> **contiguous subarray / substring**

and:

> **longest / shortest / maximum / minimum**

Example:

> Find the length of the longest substring without repeating characters.

Think:

```text
Substring
   +
Longest
   +
Condition
   ↓
Sliding Window
```

Basic structure:

```js
let left = 0;
let maxLen = 0;
const set = new Set();

for (let right = 0; right < str.length; right++) {
  while (set.has(str[right])) {
    set.delete(str[left]);
    left++;
  }

  set.add(str[right]);

  maxLen = Math.max(maxLen, right - left + 1);
}
```

### Recognition rule

> **Contiguous + longest/shortest/max/min → Think Sliding Window.**

---

# 🔥 Pattern 4 — Binary Search

### Trigger words

Look for:

> **sorted**

or:

> **find efficiently / minimum possible / maximum possible**

Example:

> Find target in a sorted array.

Think:

```text
Sorted
  ↓
Can eliminate half?
  ↓
Binary Search
```

```js
let left = 0;
let right = arr.length - 1;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

return -1;
```

### Recognition rule

> **Sorted + search → Binary Search.**

---

# 🔥 Pattern 5 — Stack

### Trigger words

Look for:

> **valid parentheses, matching, nested, undo, previous, next greater**

Example:

> Check whether brackets are balanced.

Think:

```text
Opening bracket → push
Closing bracket → compare/pop
```

```js
const stack = [];

for (const ch of str) {
  if (ch === "(") {
    stack.push(ch);
  } else if (ch === ")") {
    if (stack.pop() !== "(") return false;
  }
}

return stack.length === 0;
```

### Recognition rule

> **Nested/matching/reverse-order dependency → Stack.**

---

# 🔥 Pattern 6 — Monotonic Stack

This is a more advanced version.

### Trigger words

> **next greater element**
>
> **next smaller element**
>
> **previous greater**
>
> **temperature**
>
> **stock span**

Example:

> Find the next greater element for every element.

Think:

```text
Next greater
     ↓
Monotonic Stack
```

Common JS structure:

```js
const stack = [];
const result = new Array(nums.length).fill(-1);

for (let i = 0; i < nums.length; i++) {
  while (
    stack.length &&
    nums[i] > nums[stack[stack.length - 1]]
  ) {
    const index = stack.pop();
    result[index] = nums[i];
  }

  stack.push(i);
}
```

---

# 🔥 Pattern 7 — Prefix Sum

### Trigger words

> **range sum**
>
> **subarray sum**
>
> **sum between i and j**
>
> **multiple range queries**

Example:

> Find the sum between indexes `L` and `R`.

Think:

```text
Many range sums
      ↓
Prefix Sum
```

Build:

```js
const prefix = [0];

for (const num of nums) {
  prefix.push(prefix[prefix.length - 1] + num);
}
```

Then:

```js
const sum = prefix[R + 1] - prefix[L];
```

### Recognition rule

> **Repeated range-sum queries → Prefix Sum.**

---

# 🔥 Pattern 8 — Recursion / Backtracking

### Trigger words

> **all combinations**
>
> **all subsets**
>
> **all permutations**
>
> **generate**
>
> **choose or don't choose**
>
> **all possible ways**

Example:

> Generate all subsets of `[1,2,3]`.

Think:

```text
All possibilities
      ↓
Backtracking
```

Typical structure:

```js
function backtrack(index, path) {
  // process current path

  for (let i = index; i < nums.length; i++) {
    path.push(nums[i]);

    backtrack(i + 1, path);

    path.pop();
  }
}
```

### Recognition rule

> **"Give me ALL possible..." → Backtracking.**

---

# 🔥 Pattern 9 — BFS

### Trigger words

> **level by level**
>
> **minimum number of steps**
>
> **shortest path in an unweighted graph**
>
> **nearest**
>
> **distance**

Example:

> Find the minimum number of moves from A to B.

Think:

```text
Minimum steps
     ↓
BFS
```

JavaScript:

```js
const queue = [start];
let index = 0;

while (index < queue.length) {
  const node = queue[index++];

  // process node

  for (const neighbor of graph[node]) {
    queue.push(neighbor);
  }
}
```

For a true BFS, also track `visited`.

### Recognition rule

> **Minimum steps in an unweighted graph → BFS.**

---

# 🔥 Pattern 10 — DFS

### Trigger words

> **explore**
>
> **connected components**
>
> **island**
>
> **traverse**
>
> **visit everything**

Example:

> Count the number of islands in a grid.

Think:

```text
Grid
 +
Connected cells
      ↓
DFS / BFS
```

DFS:

```js
function dfs(row, col) {
  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    grid[row][col] !== "1"
  ) {
    return;
  }

  grid[row][col] = "0";

  dfs(row + 1, col);
  dfs(row - 1, col);
  dfs(row, col + 1);
  dfs(row, col - 1);
}
```

---

# 🔥 Pattern 11 — Heap / Top K

### Trigger words

> **Top K**
>
> **K largest**
>
> **K smallest**
>
> **K most frequent**
>
> **K closest**

Think:

```text
Top K
 ↓
Heap
```

Example:

> Find the 3 largest elements.

For JavaScript interviews, remember that **JavaScript does not have a built-in `PriorityQueue`/heap**, so you may need to implement a min-heap/max-heap or explain the heap approach.

---

# 🔥 Pattern 12 — Dynamic Programming

Don't jump to DP just because the problem is difficult.

### Trigger words

Look for:

> **maximum/minimum number of ways**
>
> **number of ways**
>
> **choose/not choose**
>
> **overlapping subproblems**
>
> **same smaller problem appears repeatedly**

Example:

> You can climb either 1 or 2 steps. How many ways can you reach step `n`?

Think:

```text
ways(n)
 =
ways(n-1) + ways(n-2)
```

```js
const dp = new Array(n + 1).fill(0);

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

return dp[n];
```

---

# 🧠 Your DSA Pattern Cheat Sheet

This is the part I'd actually memorize:

```text
PAIR / FAST LOOKUP
        ↓
Hash Map / Set

SORTED + PAIR
        ↓
Two Pointers

CONTIGUOUS + LONGEST/SHORTEST
        ↓
Sliding Window

SORTED + SEARCH
        ↓
Binary Search

MATCHING / NESTED / UNDO
        ↓
Stack

NEXT GREATER / SMALLER
        ↓
Monotonic Stack

RANGE SUM
        ↓
Prefix Sum

ALL POSSIBILITIES
        ↓
Backtracking

MINIMUM STEPS / SHORTEST UNWEIGHTED PATH
        ↓
BFS

EXPLORE / CONNECTED COMPONENTS / ISLANDS
        ↓
DFS / BFS

TOP K
        ↓
Heap

OVERLAPPING SUBPROBLEMS
        ↓
DP
```

# 🎯 Most Important for Your Adobe L2

Given your JavaScript/React background, I would prioritize these first:

**Tier 1**

1. Hash Map / Set
2. Two Pointers
3. Sliding Window
4. Stack
5. Binary Search

**Tier 2**

6. Prefix Sum
7. Recursion / Backtracking
8. BFS / DFS
9. Heap

**Tier 3**

10. Dynamic Programming
11. Monotonic Stack
12. Graph algorithms

And don't just memorize the pattern. For every problem, practice saying:

> **"I recognize this as a ___ pattern because the problem has ___."**

That sentence is extremely useful in a senior interview because it shows the interviewer **how you arrived at the solution**, not just that you memorized the code.
