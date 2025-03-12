const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueValue = numbers.filter((acc, value) => {
  if (!acc.includes(value)) acc.push(value);
}, []);
console.log(uniqueValue); // [1, 3, 5]
