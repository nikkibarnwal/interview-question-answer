Bilkul! Chaliye aasan language mein samajhte hain —  
**Mongoose ke middleware ya hooks** kya hote hain, kaise kaam karte hain, aur kab use karne chahiye — with Hindi + English mix and full example 😎🔁

---

## 🧠 What is Middleware/Hook in Mongoose?

> Mongoose middleware (a.k.a **hooks**) are functions  
> jo **automatically chalte hain** — before ya after kisi mongoose action ke.  
> Ye actions ho sakte hain: `save`, `find`, `delete`, `update`, etc.

---

## 🔧 Types of Middleware

| Type   | Kya karta hai            | Kab chalta hai                  |
| ------ | ------------------------ | ------------------------------- |
| `pre`  | Pehle kaam karta hai     | Before save, find, delete, etc. |
| `post` | Baad mein kaam karta hai | After save, find, delete, etc.  |

---

## 🔁 Use Cases (Kaha Use Hota Hai?)

- Password hashing before saving user
- Logging queries
- Auditing / timestamps
- Validating relationships
- Setting default fields dynamically

---

## ✅ Trick to Remember:

> **"Pre = Pehle | Post = Baad mein"**  
> Jaise function ke aage/baad kuch extra kaam lagana ho 🔨

---

## 🧪 Example: Password Hashing with `pre('save')`

```js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// 👇 PRE middleware (before save)
userSchema.pre("save", async function (next) {
  // Only hash if password is modified or new
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  console.log("🔒 Password hashed before save");
  next(); // Move to next step
});
```

---

### 🔁 `POST` Example: Logging After Save

```js
userSchema.post("save", function (doc) {
  console.log(`✅ User ${doc.name} saved to DB`);
});
```

---

## 🧪 Example with Model

```js
const User = mongoose.model("User", userSchema);

// Creating a new user
const user = new User({
  name: "Aman",
  email: "aman@example.com",
  password: "plainpassword",
});

await user.save();
// 🔒 Will hash password in `pre`
// ✅ Will log message in `post`
```

---

## 📌 Key Points:

- `pre('save')` runs **before** saving to DB
- `post('save')` runs **after** document saved
- `this` keyword inside pre middleware points to **current document**
- You **must call `next()`** in pre hooks to proceed
- Hooks can be **async** as well!

---

## 🧠 Real Analogy:

> **Pre hook = Safai karna pehle guest aaye**  
> **Post hook = Guest ke jaane ke baad table saaf karna**

---

## 🔚 Summary:

| Use Hook Type  | For Action  | Purpose Example                   |
| -------------- | ----------- | --------------------------------- |
| `pre('save')`  | Before Save | Hash password, validate data      |
| `post('save')` | After Save  | Log info, send confirmation email |
| `pre('find')`  | Before Find | Add filter or log query           |

---
