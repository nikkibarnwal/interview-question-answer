# 📝 GitHub Notes — `01-arrays.md`

Q4 mein ye section add hoga:

````md
---

# Q4. Remove Duplicate Values

## Problem

Given an array, remove duplicate values and return only unique values.

### Example

```js
Input: [1, 2, 2, 3, 4, 3, 5];
Output: [1, 2, 3, 4, 5];
```
````

## Brute Force Approach

Create an empty array and traverse the input array.

For every element:

- Check whether it already exists in the result array.
- If it exists, skip it.
- Otherwise, add it to the result array.

Using `includes()` for the lookup makes the solution O(n²).

### Code

```js
function removeDuplicates(arr) {
  const unique = [];

  for (const num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return unique;
}
```

### Complexity

- Time: O(n²)
- Space: O(n)

---

## Optimized Approach

Use a `Set` because a Set stores unique values and provides O(1) average lookup.

### Code

```js
function removeDuplicates(arr) {
  const unique = new Set();

  for (const num of arr) {
    unique.add(num);
  }

  return [...unique];
}
```

### Short JavaScript Version

```js
const unique = [...new Set(arr)];
```

### Complexity

- Time: O(n) average
- Space: O(n)

## Problem-Solving Pattern

When the question asks for:

- Unique values
- Remove duplicates
- Duplicate detection

Think:

```text
Set
```

## Interview Answer

> I'll use a Set because it automatically stores unique values. I'll traverse the array once and add each element to the Set. Finally, I'll convert the Set back to an array. This gives O(n) average time complexity and O(n) space complexity.

```

```
