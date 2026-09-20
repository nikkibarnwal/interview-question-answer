```js
const arr = [10, 3, 4, 5, 1, 6, 2, 8, 9, 12, 15, 18];
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  arr.map((item) => {
    if (item > largest) {
      secondLargest = largest;
      largest = item;
    } else if (item > secondLargest && item !== largest) {
      secondLargest = item;
    }
  });
  console.log(largest, secondLargest);
}

findSecondLargest(arr);
```
