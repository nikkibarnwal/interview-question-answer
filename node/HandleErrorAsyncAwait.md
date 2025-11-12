Bilkul bhai! 😄 Chalo ab **Async/Await error handling** ko bhi samjhte hain 🍕

---

## ❓ **How do you handle errors in async/await code in Node.js?**

### 🔧 Problem kya hota hai?

Jab aap `async/await` use karte ho, toh asynchronous kaam **sequential** lagta hai, lekin error agar aaye toh handle kaise karein?

---

## 🍽️ Real-Life Analogy (Pizza Shop Style 🍕):

👨‍🍳 Chef: “Main pizza banane jaa raha hoon...”  
💥 Oven garam nahi hua – chef panic mein aa gaya!  
🛑 Agar chef ne **try-catch** nahi lagaya, toh pura kitchen crash ho gaya!  
✅ Lekin agar chef ne bola — “Oven fail ho gaya, koi baat nahi, main dusra tareeka try karta hoon.”  
Yeh hi hai `try-catch` in `async/await`!

---

## ✅ Basic Syntax: Try-Catch

```js
app.get("/order", async (req, res) => {
  try {
    const pizza = await makePizza(); // 👨‍🍳 pizza ban raha hai
    res.send(pizza);
  } catch (error) {
    console.error("🍕 Pizza banate waqt error:", error);
    res.status(500).send("Sorry! Pizza nahi ban paya.");
  }
});
```

> **Rule:** Jab bhi `await` use karo — uske aas-paas `try-catch` lagana zaroori hai!

---

## 🔁 Advanced: Error Middleware (Global Guard 🛡️)

```js
// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("🔥 Error caught:", err.message);
  res.status(500).json({ error: "Something went wrong!" });
});
```

### And throw from async controller:

```js
app.get("/order", async (req, res, next) => {
  try {
    const pizza = await makePizza();
    res.send(pizza);
  } catch (err) {
    next(err); // 👉 Yeh global middleware ko bhejta hai
  }
});
```

---

## 🧠 Easy Trick to Remember:

> **“Async chef bina gloves ke kaam karega toh haath jal sakta hai! Try-Catch = gloves 🔥🧤”**

---

## 📋 Summary Table:

| Technique               | Use Case                              | Trick                                |
| ----------------------- | ------------------------------------- | ------------------------------------ |
| `try { await } catch`   | Basic async error handle              | Chef + Gloves analogy                |
| `next(err)`             | Middleware mein error pass karna      | Chef kitchen manager ko bulata hai   |
| Global error middleware | Har jagah se error handle ek jagah pe | Manager har problem handle karta hai |

---

## 🎯 Final Line:

> Jab bhi async ka use ho, error ke liye **"gloves pehnna"** mat bhoolna = `try-catch` ya `next(err)`  
> Server crash hone se bachaoge, boss bhi khush rahega 😄

---
