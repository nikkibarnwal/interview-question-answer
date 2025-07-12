Absolutely! 🔥 Let's create **Mongoose schemas** for all three MongoDB relationships — **One-to-One**, **One-to-Many**, and **Many-to-Many** — in an **e-commerce-style example**. I’ll keep it realistic + simple with full Hindi + English mix explanation. 🎯

---

## 🛍️ Project Context:

We're building an e-commerce site with:

1. **User <-> Profile** (One-to-One)
2. **User -> Orders** (One-to-Many)
3. **Products <-> Categories** (Many-to-Many)

---

## 📦 1) **One-to-One (User - Profile)**

```js
// profile.model.js
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  age: Number,
  gender: String,
  phone: String,
});

module.exports = mongoose.model("Profile", profileSchema);
```

```js
// user.model.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
});

module.exports = mongoose.model("User", userSchema);
```

> ✅ Ab `User.find().populate("profile")` se directly profile data mil jayega.

---

## 📦 2) **One-to-Many (User - Orders)**

```js
// order.model.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  amount: Number,
  status: {
    type: String,
    enum: ["placed", "shipped", "delivered"],
    default: "placed",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
```

> ✅ `Order` mein `user` field reference hai `User` collection ka.

```js
// Usage
Order.find()
  .populate("user")
  .then((orders) => {
    console.log(orders);
  });
```

---

## 📦 3) **Many-to-Many (Product - Categories)**

```js
// category.model.js
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Category", categorySchema);
```

```js
// product.model.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
```

> ✅ Product ek ya zyada categories ko reference karega.

```js
// Usage
Product.find()
  .populate("categories")
  .then((products) => {
    console.log(products);
  });
```

---

## 🔗 Recap Table

| Relationship | Ref/Embed            | Example Models            |
| ------------ | -------------------- | ------------------------- |
| One-to-One   | Ref (`profile`)      | `User.profile -> Profile` |
| One-to-Many  | Ref (`user`)         | `Order.user -> User`      |
| Many-to-Many | Ref (`categories[]`) | `Product -> [Category]`   |

---

## ✅ BONUS: Embedded Version of One-to-One

If you want to **embed** instead of reference, you can do this:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profile: {
    age: Number,
    gender: String,
    phone: String,
  },
});
```

> 📌 Use this when profile data is always accessed with user, and not too big.

---
