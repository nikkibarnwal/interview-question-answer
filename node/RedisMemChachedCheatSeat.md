Perfect 👍 Here’s your **Redis vs Memcached Cheat Sheet** in Markdown format (short & crisp for interviews):

---

# 📝 Redis vs Memcached – Cheat Sheet

## 🔹 Redis

- In-memory data store with **persistence** (RDB, AOF).
- **Data structures**: Strings, Hashes, Lists, Sets, Sorted Sets.
- **Supports TTL per key** → ideal for sessions.
- **Replication + clustering** → high availability.
- Slightly heavier but **reliable & flexible**.

✅ **Best Use Case**: Session store, queues, pub/sub, leaderboards.

---

## 🔹 Memcached

- Pure **in-memory key-value store** (Strings only).
- ❌ No persistence → data lost on restart.
- Super lightweight & **very fast**.
- Scaling = client-side sharding (no built-in clustering).

✅ **Best Use Case**: Simple caching (API responses, HTML fragments).
❌ Not reliable for sessions.

---

## 🔹 Quick Comparison

| Feature            | Redis ✅                         | Memcached ❌    |
| ------------------ | -------------------------------- | --------------- |
| Data Types         | Rich (Strings, Hash, List, Set…) | Strings only    |
| Persistence        | Yes (RDB, AOF)                   | No              |
| Expiry per key     | Yes                              | Yes             |
| Session Store      | Excellent                        | Weak            |
| Clustering/Scaling | Yes                              | Manual          |
| Performance        | High                             | Ultra-fast      |
| Use Case           | Sessions, Queues, Leaderboards   | Temporary cache |

---

## 🔹 Interview Answer (Shortcut)

👉 \*For session store → Always choose **Redis\*** ✅
Because sessions need **persistence, TTL, replication, and advanced data structures**.
Memcached is only good for **simple, temporary caching**.

---

⚡ **Code Example: Express.js + Redis Session Store**

```js
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const Redis = require("ioredis");

const redisClient = new Redis();

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60000 },
  })
);
```

---
