Here is a **simple, clear, interview-friendly answer** in easy English:

---

## **Difference Between `var` and `let` (Simple English)**

### **1. Scope**

- **var** → Function-scoped
  Means it is available inside the whole function, even outside the block.
- **let** → Block-scoped
  Means it is available only inside `{ }` where it is declared.

---

### **2. Hoisting**

- **var** → Hoisted with _undefined_ (you can use it before declaration, but value will be `undefined`).
- **let** → Hoisted but **not initialized**.
  Using let before declaration gives **ReferenceError**.

---

### **3. Re-declaration**

- **var** → Can be **redeclared** in the same scope (not good practice).
- **let** → Cannot be redeclared in the same scope.

---

### **Example (Very Easy):**

```js
if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // 10 (accessible outside block)
console.log(y); // error (not accessible)
```

---

## **One-line Summary:**

**var = function scope + old style + can be redeclared**
**let = block scope + safer + preferred in modern JS**

---
