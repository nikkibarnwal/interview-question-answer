const obj = {
  name: "Rajendra",
  age: 30,
  address: {
    city: "Delhi",
    state: "Delhi",
  },
  hobbies: ["reading", "coding", "travelling"],
};

const scopy = Object.assign({}, obj); // shallow copy
scopy.name = "Rajendra Kumar"; // changing name in shallow copy
console.log("Original Object:", obj);
console.log("Shallow Copy:", scopy);

const scopy2 = { ...obj }; // another way to create shallow copy
scopy2.address.city = "Mumbai"; // changing city in shallow copy

const dcopy = JSON.parse(JSON.stringify(obj)); // deep copy
dcopy.name = "Rajendra Kumar"; // changing name in deep copy
console.log("Original Object after deep copy change:", obj);
console.log("Deep Copy:", dcopy);
// Output:
// Original Object: { name: 'Rajendra', age: 30, address: { city: 'Delhi', state: 'Delhi' }, hobbies: [ 'reading', 'coding', 'travelling' ] }
// Shallow Copy: { name: 'Rajendra Kumar', age: 30, address: { city: 'Delhi', state: 'Delhi' }, hobbies: [ 'reading', 'coding', 'travelling' ] }
// Original Object after deep copy change: { name: 'Rajendra', age: 30, address: { city: 'Delhi', state: 'Delhi' }, hobbies: [ 'reading', 'coding', 'travelling' ] }
// Deep Copy: { name: 'Rajendra Kumar', age: 30, address:  { city: 'Mumbai', state: 'Delhi' }, hobbies: [ 'reading', 'coding', 'travelling' ] }
// Original object remains unchanged in both shallow and deep copies
// Shallow copy changes affect the original object for nested objects, but not for primitive values
// Deep copy creates a completely independent copy of the object, including nested objects
// Shallow copy is faster and uses less memory, but changes to nested objects affect the original object
// Deep copy is slower and uses more memory, but changes to nested objects do not affect the original object

// other methods to create deep copy
// 1. Using structuredClone (available in modern browsers)
// const dcopy2 = structuredClone(obj); // deep copy using structuredClone
// 2. Using lodash's cloneDeep
// const _ = require('lodash');
// const dcopy3 = _.cloneDeep(obj); // deep copy using lodash's cloneDeep
// 3. Using a custom function
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepCopy);
  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
// const dcopy4 = deepCopy(obj); // deep copy using custom function

// What will happen if we do deep copy having function in a object?
const objWithFunction = {
  name: "Rajendra",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
const deepCopyWithFunction = JSON.parse(JSON.stringify(objWithFunction)); // This will not copy the function
deepCopyWithFunction.name = "Rajendra Kumar";
deepCopyWithFunction.greet(); // This will throw an error because greet is undefined

structuredClone(objWithFunction); // This will throw an error because structuredClone does not support functions

// To handle functions, we can use structuredClone or a custom deep copy function that checks for functions
function deepCopyWithFunctions(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (typeof obj === "function") return obj; // return function as is
  if (Array.isArray(obj)) return obj.map(deepCopyWithFunctions);
  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopyWithFunctions(obj[key]);
    }
  }
  return copy;
}
