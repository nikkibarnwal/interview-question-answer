```js
const arr = [10, 3, 4, 5, 1, 6, 2, 8, 9, 12, 15, 18];

function getLargest(arr) {
  let max = arr[0];
  arr.map((item) => {
    if (item > max) {
      max = item;
    }
  });
  return max;
}
console.log(getLargest(arr));
```
