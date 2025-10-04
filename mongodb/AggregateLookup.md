Great 👍 let’s go deep into **\$lookup** and **\$project**, because these are the most asked stages in interviews.

---

# 🔗 **\$lookup (JOIN in MongoDB)**

- Used to join documents from another collection.
- Equivalent to SQL `JOIN`.

**Example: Users + Orders join**

👉 Suppose we have two collections:

**users**

```json
{ "_id": 1, "name": "Raj" }
{ "_id": 2, "name": "Nikki" }
```

**orders**

```json
{ "_id": 101, "userId": 1, "amount": 500 }
{ "_id": 102, "userId": 1, "amount": 200 }
{ "_id": 103, "userId": 2, "amount": 100 }
```

**Query with \$lookup:**

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders", // target collection
      localField: "_id", // field in users
      foreignField: "userId", // field in orders
      as: "userOrders", // new field name
    },
  },
]);
```

**Output:**

```json
{
  "_id": 1,
  "name": "Raj",
  "userOrders": [
    { "_id": 101, "userId": 1, "amount": 500 },
    { "_id": 102, "userId": 1, "amount": 200 }
  ]
}
{
  "_id": 2,
  "name": "Nikki",
  "userOrders": [
    { "_id": 103, "userId": 2, "amount": 100 }
  ]
}
```

✅ **Best Use Case:** Fetch user with all orders (like SQL join).

---

# 📝 **\$project (Choose fields, reshape output)**

- Used to **include/exclude specific fields** or create computed fields.

**Example:**

```js
db.users.aggregate([
  {
    $project: {
      _id: 0, // exclude _id
      name: 1, // include name
      nameUpper: { $toUpper: "$name" }, // computed field
      isActive: { $literal: true }, // add new field with static value
    },
  },
]);
```

**Output:**

```json
{ "name": "Raj", "nameUpper": "RAJ", "isActive": true }
{ "name": "Nikki", "nameUpper": "NIKKI", "isActive": true }
```

✅ **Best Use Case:**

- When you want to **shape data for frontend** → only required fields, no extra weight.
- Creating computed/derived fields (uppercase, concatenation, flags).

---

# ⚡ Quick Summary

| Stage      | Purpose                   | Example Use Case                  |
| ---------- | ------------------------- | --------------------------------- |
| `$lookup`  | Join collections          | User + Orders, Product + Category |
| `$project` | Shape/transform documents | Select fields, rename, compute    |

---
