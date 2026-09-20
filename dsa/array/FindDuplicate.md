### Brute force way

```js
const arr2 = [10, 3, 4, 5, 1, 6, 2, 8, 9, 12, 15, 18];
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(findDuplicate(arr2)); // false
console.log(findDuplicate([1, 3, 4, 2, 4, 4, 5, 6])); // true
```

### optimized way

```js
function hasDuplicate(arr) {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

console.log(hasDuplicate(arr2)); // false
console.log(hasDuplicate([1, 3, 4, 2, 4, 4, 5, 6])); // true
```
