# **🔹 Memoization in JavaScript – आसान भाषा में 🚀**  

👉 **Memoization एक technique है, जिससे हम functions के results को cache करके performance improve कर सकते हैं।**  
👉 **अगर कोई function बार-बार same input के साथ call हो रहा है, तो Memoization उसकी previous output को store कर लेता है, जिससे दुबारा calculation करने की जरूरत नहीं पड़ती।**  
👉 **यह dynamic programming का एक important concept है और performance optimization के लिए बहुत useful होता है।**  

---

## **🔹 1. Memoization क्यों ज़रूरी है?**
👉 **अगर कोई function बार-बार same input के साथ call हो रहा है, तो हर बार calculation करने में extra time और memory लगती है।**  
👉 **Memoization इस problem को solve करता है – पहली बार function execute होने के बाद result को cache कर लेता है और अगली बार वही result instantly return कर देता है।**  

---

## **🔹 2. Memoization को कैसे Implement करें?**

### **✅ पहले (Without Memoization) – Slow Function**
```javascript
function slowFunction(num) {
  console.log("Calculating...");
  return num * num;
}

console.log(slowFunction(5)); // ✅ "Calculating..." → 25
console.log(slowFunction(5)); // ✅ "Calculating..." → 25 (फिर से calculation हुआ!)
```
👉 **हर बार function call पर दुबारा calculation हो रहा है, जिससे performance slow हो सकती है।**  

---

### **✅ अब (With Memoization) – Fast Function**
```javascript
function memoizedFunction() {
  let cache = {}; // 🔥 Cache to store results

  return function (num) {
    if (num in cache) {
      console.log("Fetching from cache...");
      return cache[num]; // ✅ Cached result return होगा
    } else {
      console.log("Calculating...");
      let result = num * num;
      cache[num] = result; // ✅ Result cache में store हो गया
      return result;
    }
  };
}

const square = memoizedFunction();

console.log(square(5)); // ✅ "Calculating..." → 25
console.log(square(5)); // ✅ "Fetching from cache..." → 25 (Instant result!)
console.log(square(6)); // ✅ "Calculating..." → 36
console.log(square(6)); // ✅ "Fetching from cache..." → 36
```
✅ **अब function पहले से faster है क्योंकि वही result cache से return हो रहा है!**  

---

## **🔹 3. Fibonacci Sequence Example**
👉 **Fibonacci sequence एक common example है, जिसमें Memoization बहुत useful होता है।**  

### **✅ पहले (Without Memoization) – Slow Recursive Function**
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // बहुत slow होगा क्योंकि recursion बार-बार same values को calculate करेगा
```
👉 **यह approach बहुत slow होगी क्योंकि recursion बार-बार same values को calculate करेगा।**  

---

### **✅ अब (With Memoization) – Fast Recursive Function**
```javascript
function memoizedFibonacci() {
  let cache = {}; // 🔥 Cache for storing previous results

  return function fib(n) {
    if (n in cache) {
      return cache[n]; // ✅ Cached result return होगा
    }
    if (n <= 1) return n;

    cache[n] = fib(n - 1) + fib(n - 2); // ✅ Result store कर लिया
    return cache[n];
  };
}

const fibonacci = memoizedFibonacci();

console.log(fibonacci(10)); // ✅ Faster और efficient calculation
console.log(fibonacci(10)); // ✅ Cached result instantly return होगा!
```
✅ **अब function बहुत fast है, क्योंकि unnecessary calculations avoid हो रही हैं।**  

---

## **🔹 4. Memoization with JavaScript Higher-Order Functions**
👉 **Higher-order function से हम Memoization को reusable बना सकते हैं।**  

```javascript
function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args); // ✅ Arguments को key में convert किया
    if (key in cache) {
      console.log("Fetching from cache...");
      return cache[key];
    } else {
      console.log("Calculating...");
      let result = fn(...args);
      cache[key] = result; // ✅ Store result in cache
      return result;
    }
  };
}

function multiply(a, b) {
  return a * b;
}

const memoizedMultiply = memoize(multiply);

console.log(memoizedMultiply(5, 10)); // ✅ "Calculating..." → 50
console.log(memoizedMultiply(5, 10)); // ✅ "Fetching from cache..." → 50
console.log(memoizedMultiply(6, 10)); // ✅ "Calculating..." → 60
```
✅ **अब `memoize()` function किसी भी function को optimize करने के लिए use किया जा सकता है!**  

---

## **🔹 Memoization vs Caching – क्या अंतर है?**
| Feature  | Memoization | Caching |
|----------|------------|---------|
| **Definition** | Function results को store करना | Data को store करना |
| **Scope** | Function के अंदर limited scope | Application-wide या external |
| **Use Case** | Same function calls को optimize करना | Database/API calls को optimize करना |
| **Example** | Recursive Fibonacci, Factorial | API response storage |

---

## **🎯 Best Practices**
✅ **Memoization तभी use करें जब कोई function बार-बार same input पर call हो।**  
✅ **Cache की size को manage करें ताकि memory overflow ना हो।**  
✅ **Recursive functions (जैसे Fibonacci, Factorial) में Memoization बहुत effective होता है।**  
✅ **Higher-order function से Memoization को reusable बनाएं।**  

💡 **Simple Trick:**  
👉 **अगर function बार-बार same input के साथ slow हो रहा है → Memoization use करें!** 🚀  

अगर कोई और example चाहिए, तो बताइए! 😊