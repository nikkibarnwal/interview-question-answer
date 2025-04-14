Ab samajhte hain **`process` object in Node.js** — ekdum simple language mein, Hindi-English mix + daily life analogy ke saath 😎

---

## ❓ **What is the `process` object in Node.js?**

> `process` Node.js ka **global object** hai  
> Jo aapke **application ke environment, runtime, and current status** ka pura control deta hai.

Matlab:  
> **Node.js ka "command center"** jo bataata hai:  
> ➤ App kaunse mode mein chal raha hai,  
> ➤ Kya inputs aaye,  
> ➤ Kab exit karna hai, etc.

---

## 🍽️ Analogy: Chef + Kitchen Monitor System 👨‍🍳📋

Socho aap ek smart kitchen mein kaam kar rahe ho —  
Wahan ek **digital board (process)** laga hai jahan:

| Feature                     | Kitchen Analogy                        |
|-----------------------------|----------------------------------------|
| `process.env`              | Kitchen ke rules (like: Open today?)    |
| `process.argv`             | Ingredients jo order ke time mile       |
| `process.pid`              | Chef ka ID 🧑‍🍳                         |
| `process.cwd()`            | Kitchen ki location (current folder)    |
| `process.exit()`           | Kitchen close kar do (exit)             |
| `process.memoryUsage()`    | Kitna gas ya light use ho raha hai 🔌    |

---

## 🔧 Common `process` Examples:

### 1. 🔐 `process.env` — Environment Variables
```js
console.log(process.env.NODE_ENV); // "development" or "production"
```

> **Real-life:** Kitchen ka rule board → “Sunday closed” 😅

---

### 2. 🍴 `process.argv` — Command Line Inputs
```js
console.log(process.argv);
```

> **Real-life:** Customer ne order diya: `node app.js pizza`  
> To argv[2] = "pizza"

---

### 3. 🔚 `process.exit()` — Exit the App
```js
if (!orderReceived) {
  console.log("No order! Closing kitchen...");
  process.exit(1);
}
```

> **Real-life:** Order nahi aaya → kitchen bandh 🏁

---

### 4. 🧠 `process.memoryUsage()` — Memory Check
```js
console.log(process.memoryUsage());
```

> **Real-life:** Kitna gas ya electricity lag raha hai kitchen mein

---

## 🧠 Easy Trick to Remember:

> **process = Node.js ka kitchen manager 📋**  
> Jo dekhta hai:  
> 🔹 Aap kahan ho (`cwd`)  
> 🔹 Kaunse rule mein ho (`env`)  
> 🔹 Kya input mila (`argv`)  
> 🔹 Kab band hona hai (`exit`)  
> 🔹 Kitna resource use ho raha hai (`memoryUsage`)

---

## 🎯 Summary Table:

| Property/Method             | Kya karta hai?                          | Analogy                    |
|-----------------------------|-----------------------------------------|-----------------------------|
| `process.env`              | Env vars read karta hai                 | Kitchen rules               |
| `process.argv`             | CLI se input leta hai                   | Customer ke ingredients     |
| `process.exit()`           | App ko band karta hai                   | Kitchen close               |
| `process.cwd()`            | Current working dir batata hai          | Kitchen location            |
| `process.memoryUsage()`    | Memory usage detail deta hai            | Gas bill tracker 😄          |

---
