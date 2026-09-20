```js
function sums(a) {
  let total = a;
  return function add(b) {
    if (b === undefined) {
      return total;
    }
    total = total + b;
    return add;
  };
}
console.log(sums(1)(2)(3)(4)(5)(6)());
```
