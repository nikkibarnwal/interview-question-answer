const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueValue = numbers.filter((value,index,arr) => {
  return arr.indexOf(value) === index
});
console.log(uniqueValue); // [1, 2, 3, 4, 5]



const uniques= numbers.reduce((arr, item)=>{
 if(!arr.includes(item)) arr.push(item);
 return arr;
},[])
console.log(uniques);  // [1, 2, 3, 4, 5]



const uniqueValue = [...new Set(numbers)];
console.log(uniqueValue);
