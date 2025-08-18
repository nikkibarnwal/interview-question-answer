Bhai 😅 baat sahi hai — ye to **interview ke liye ready-made cheatsheet** hona hi chahiye. Chalo mai tere liye ek **single file Rest vs Spread Cheatsheet** bana deta hoon, Hindi + English mixed explanation ke sath:

---

```js
/***********************************************
 🔥 REST vs SPREAD Cheatsheet (Easy Revision)
************************************************/

/*
👉 Trick to Remember:
   - Spread = "Expand" (phaila do values)
   - Rest   = "Collect" (baaki ko ikattha karo)
*/

// 1️⃣ Array Clone (Spread)
const arr = [1, 2, 3];
const arrCopy = [...arr];
console.log("Spread - Array Clone:", arrCopy);
// [1, 2, 3]

// 2️⃣ Merge Arrays (Spread)
const a = [1, 2],
  b = [3, 4];
const merged = [...a, ...b];
console.log("Spread - Merge Arrays:", merged);
// [1, 2, 3, 4]

// 3️⃣ String to Array (Spread)
const name = "Raj";
console.log("Spread - String:", [...name]);
// ["R", "a", "j"]

// 4️⃣ Object Copy / Merge (Spread)
const user = { name: "Raj" };
const details = { age: 30 };
const newUser = { ...user, ...details };
console.log("Spread - Merge Object:", newUser);
// { name: "Raj", age: 30 }

// 5️⃣ Immutable Update (React use case)
const oldUser = { name: "Raj", city: "Delhi" };
const updatedUser = { ...oldUser, city: "Mumbai" };
console.log("Spread - Immutable Update:", updatedUser);
// { name: "Raj", city: "Mumbai" }

/***********************************************
 REST Examples
************************************************/

// 1️⃣ Function with Multiple Arguments (Rest)
function multiply(factor, ...nums) {
  return nums.map((n) => n * factor);
}
console.log("Rest - Function Args:", multiply(2, 1, 2, 3));
// [2, 4, 6]

// 2️⃣ Array Destructuring (Rest)
const [first, ...restNums] = [10, 20, 30, 40];
console.log("Rest - First:", first); // 10
console.log("Rest - Remaining:", restNums); // [20, 30, 40]

// 3️⃣ Object Destructuring (Rest)
const { password, ...safeUser } = {
  name: "Raj",
  password: "1234",
  city: "Delhi",
};
console.log("Rest - Safe User:", safeUser);
// { name: "Raj", city: "Delhi" }

// 4️⃣ Log All Arguments (Rest)
function logAll(...args) {
  console.log("Rest - LogAll:", args);
}
logAll("Raj", 25, "Delhi");
// ["Raj", 25, "Delhi"]

/*
⚡ Interview Summary:
- Spread operator (`...`) → Copy, Merge, Expand
- Rest operator (`...`)   → Collect, Remaining, Flexible arguments
- SAME syntax, DIFFERENT behavior, 
  depend karta hai POSITION pe (left side → Rest, right side → Spread)
*/
```

---

⚡ Bhai, agar interviewer ne confuse karne ke liye pucha:
👉 `"Rest aur Spread ka syntax same hai, kaise decide hoga?"`
Answer: **Position pe depend karta hai** →

- Right side (copy/expand) = Spread
- Left side (destructuring/collect) = Rest

---

Bhai 👌 tu sahi bol raha hai — dono hi **syntax me left side** pe bhi aa sakte hain aur right side pe bhi.
Main isko thoda aur **clear aur visual** tariqe se samjhata hoon:

---

### 🎯 Rule of Thumb

👉 Ye `...` ka behavior **context (kis jagah use ho raha hai)** pe depend karta hai:

1. **RIGHT side of `=` (value banate time) → Spread**
   Matlab: cheeze **phaila do / expand**.

   ```js
   const arr = [1, 2, 3];
   const copy = [...arr]; // RIGHT side → Spread (expand array)
   ```

2. **LEFT side of `=` (destructuring) → Rest**
   Matlab: baaki sab ko **collect kar lo**.

   ```js
   const [first, ...rest] = [10, 20, 30, 40];
   // LEFT side → Rest (collect remaining values)
   ```

3. **Function Arguments me:**

   - Function **call** me use hoga → Spread
   - Function **definition** me use hoga → Rest

   ```js
   function sum(...nums) {
     // Rest (collect all args)
     return nums.reduce((a, b) => a + b, 0);
   }
   console.log(sum(1, 2, 3)); // Spread in call
   ```

---

### ⚡ Visual Mind Map

```
                ┌──────────────┐
                │   ...        │
                └──────┬───────┘
                       │
       ┌───────────────┴───────────────┐
       │                               │
   REST (Collect)                 SPREAD (Expand)
   ──────────────────             ──────────────────
   - Left side of =               - Right side of =
   - Function definition          - Function call
   - Destructuring                - Copy / Merge
```

---

### ✅ Easy Trick to Remember

👉 "Definition me Rest, Execution me Spread"

- **Definition** (Destructuring / Function args) → Rest = **Collect**
- **Execution** (Array/Object banate time / Function call) → Spread = **Expand**

---

Bhai ab clear hua?
Chaahe **left** side ho ya **right**, decide hamesha **context** karega (Destructuring vs Value Creation).

---
