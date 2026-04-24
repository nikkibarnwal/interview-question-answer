Here is a **simple, clean, interview-friendly answer** in easy English:

---

# **What is Hoisting in JavaScript? (Simple Explanation)**

Hoisting means **JavaScript moves variable and function declarations to the top of their scope before execution**.

Because of this, you can use some variables/functions **before they are declared**.

---

## **1. Function Hoisting**

Function declarations are fully hoisted.

```js
hello(); // works

function hello() {
  console.log("Hi");
}
```

---

## **2. var Hoisting**

`var` is hoisted but initialized with **undefined**.

```js
console.log(a); // undefined
var a = 10;
```

---

## **3. let and const Hoisting**

`let` and `const` are hoisted **but not initialized**.
They stay in the **Temporal Dead Zone (TDZ)** until their line of declaration.

```js
console.log(b); // ReferenceError
let b = 20;
```

---

# **Simple One-Line Summary:**

**Hoisting means JavaScript moves declarations to the top, so code can use them before they are written — but behavior differs for var, let, const, and functions.**

---
