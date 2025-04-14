What are middleware functions? Give an example of a custom middleware.

Bhai ab chalte hain **Middleware Functions** ki duniya mein — ekdum simple, Hindi-English mix + 🎯 yaad rakhne wali trick ke saath — aur haan, restaurant analogy toh hogi hi 😄🍽️

---

## ❓ **What are Middleware Functions in Express?**

### 🔧 Simple Definition:

> **Middleware functions** aise functions hote hain jo **request** aur **response** ke beech mein kaam karte hain.  
> Ye kuch extra kaam karte hain — jaise **security check, logging, body parsing, etc.**

---

## 🍽️ Restaurant Analogy (Our Style 😎)

Socho aap pizza restaurant mein gaye ho:

🧍‍♂️ Customer → 👨‍✈️ Guard → 🧼 Sanitizer → 👨‍💼 Waiter → 👨‍🍳 Chef → 🍕 Pizza Serve

### Yahan har middleware:
- Guard = Token check karega  
- Sanitizer = Clean karega (like body parsing)  
- Logger = Note karega ki customer kab aaya  

> Har middleware kuch kaam karega **aur phir aage request pass karega**

---

## ✅ Syntax:

```js
function myMiddleware(req, res, next) {
  console.log("Middleware activated! 🔍");
  next(); // Aage badho
}
```

### Use karne ka tareeka:

```js
const express = require('express');
const app = express();

app.use(myMiddleware); // global middleware

app.get('/', (req, res) => {
  res.send("Hello from Home!");
});
```

---

## 🛠️ Example: Custom Middleware - `logger`

```js
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Don't forget this!
}

app.use(logger);
```

### 🔁 Har request par output aayega:
```
[2025-04-07T10:15:00Z] GET /home
```

> Isse hume pata chalta hai ki kaun user kab kya request kar raha hai

---

## 🧠 Easy Trick to Remember:

> **Middleware = Bouncer + Sanitizer + Security + Note Taker**  
> Jo har guest ko check karta hai, clean karta hai, aur chef ke paas bhejta hai 🍕

---

## 🎯 Summary Table:

| Middleware Type       | Kya karta hai?                          | Real-life Analogy      |
|------------------------|-----------------------------------------|--------------------------|
| Logging                | Console mein request ka record          | Entry register 📖        |
| Body Parser            | Request body ko JSON mein convert       | Guest ko samajhna 🧼     |
| Authentication         | Token check karta hai                   | Guard ID verify karta hai |
| Error Handling         | Error ko catch karta hai                | Manager handle karta hai ⚠️ |

---
