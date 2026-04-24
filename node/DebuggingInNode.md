Here’s a **simple, practical, interview-ready + real-project-ready** guide on **how to debug a Node.js + Express + MongoDB project** — in your style, clear and action-oriented.

---

# ✅ **How to Debug in Node + Express + MongoDB (Practical Guide)**

---

# 🚀 **1. Debug using `console.log()` (95% devs use it)**

Sabse simple aur effective:

```js
console.log("Request Body:", req.body);
console.log("User ID:", userId);
console.log("DB Query:", query);
console.log("Error:", error.message);
```

👉 **Where to add logs?**

- Before DB calls
- Inside try/catch
- Before returning response
- In error middleware

---

# 🚀 **2. Debug with VS Code Debugger (BEST / Professional way)**

### **Step-by-step**

1. VS Code → **Run & Debug** panel
2. Click **create a launch.json**
3. Add:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Server",
      "program": "${workspaceFolder}/server.js",
      "env": {
        "NODE_ENV": "development"
      }
    }
  ]
}
```

### **Start debugging**

- Put **breakpoints**
- Press **F5**
- Execution will **stop at your breakpoint**
- You can inspect variables, call stack, network calls

👉 **Interview point:**
_"I prefer VS Code debugger because it helps me inspect request, response, Mongo queries, and call stack in real-time."_

---

# 🚀 **3. Debug via `node --inspect` (Chrome DevTools)**

Run server in inspect mode:

```bash
node --inspect server.js
```

Browser → open:

```
chrome://inspect
```

You can:

- Debug line-by-line
- Set breakpoints
- See async calls
- Check MongoDB responses

---

# 🚀 **4. Debug Express Errors Using Error Middleware**

Create a global error handler:

```js
app.use((err, req, res, next) => {
  console.log("Error Log:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});
```

👉 Yeh 90% issues turant pakad leta hai (route + controller + DB errors).

---

# 🚀 **5. Debug MongoDB with Mongoose Debug Mode**

Enable Mongoose debug logging:

```js
mongoose.set("debug", true);
```

It prints all queries:

```
Mongoose: users.find({ age: { '$gt': 25 } })
```

👉 Aapko pata chal jayega:

- Query correct ja rahi hai ya nahi
- Filters kuch miss to nahi ho rahe
- Jo query expected thi woh hi chal rahi hai ya nahi

---

# 🚀 **6. Debug Using MongoDB Compass**

Compass install karo → connect to DB
You can verify:

- Data sahi save ho raha
- Filtering / sorting correct hai
- Schema mismatch to nahi
- Duplicate data issue

---

# 🚀 **7. Debug with Postman + Logs**

Whenever API fails:

1. Postman → check request
2. VS Code terminal → check logs
3. Add temporary logs:

```js
console.log("----START----");
console.log("Params:", req.params);
console.log("Body:", req.body);
console.log("Query:", req.query);
console.log("----END----");
```

---

# 🚀 **8. Debug JWT Authentication**

Add these logs:

```js
console.log("Auth Header:", req.headers.authorization);
console.log("Decoded Token:", decoded);
```

Missing token / expired token issues 100% pakad lo.

---

# 🚀 **9. Debug Using `try...catch` Everywhere**

Always wrap async functions:

```js
try {
  const user = await User.findById(id);
} catch (err) {
  console.log("DB Error:", err);
}
```

---

# 🚀 **10. Debug Using Nodemon + Clear Console**

```bash
npm i -D nodemon
nodemon server.js
```

`console.clear()` before logs makes debugging clean:

```js
console.clear();
console.log("Server started...");
```

---

# 🔥 **Best 1-Minute Interview Answer (Your Style)**

\*\*“Node Express MongoDB debugging main mai 3 cheeze use karta hoon:

1. Console logs for quick trace,
2. VS Code debugger with breakpoints for deep inspection,
3. Mongoose debug mode to verify real MongoDB queries.
   Saath hi Postman + error middleware + try/catch se complete request lifecycle trace karta hoon. xYe approach se mai har error 2–3 mins me catch kar leta hoon.”\*\*

---
