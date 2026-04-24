**Topic: Redis ke sath Rate Limiting kaise use karte hain?**

---

# ⚡ Redis + Rate Limiting — Rajendra Style (Sabse Simple & Practical)

Rate limiting ka simple funda:
**“Ek user kitni baar API hit karega → uska counter Redis me rakho.”**

If counter > limit → **Block the user**.

---

# 🧠 Rate Limiting ka Flow (simple mind-map)

```
API hit → Redis counter check →
  If count < limit → allow + counter++
  If count >= limit → block (429 Too Many Requests)
```

Example:
"1 minute me 50 API hits allowed"
Varna → block.

---

# 🧠 Step 1: Redis install + client setup

```js
import { createClient } from "redis";

const redis = createClient();
await redis.connect();

export default redis;
```

---

# 🧠 Step 2: Rate Limiting Middleware (Manual + Best Method)

### Yeh **Production Ready** logic hai — interview me direct bol sakte ho.

```js
import redis from "../config/redis.js";

export const rateLimiter = (limit, windowSeconds) => {
  return async (req, res, next) => {
    const ip = req.ip; // user ko identify karne ka best way
    const key = `rate:${ip}`;

    const current = await redis.get(key);

    if (!current) {
      // first request → counter = 1 and expiry set
      await redis.setEx(key, windowSeconds, 1);
      return next();
    }

    if (current < limit) {
      // increase counter
      await redis.incr(key);
      return next();
    }

    // limit exceeded
    return res.status(429).json({
      message: "Too Many Requests, slow down boss!",
    });
  };
};
```

---

# 🧠 Step 3: Use middleware in your routes

```js
import { rateLimiter } from "./middlewares/rateLimiter.js";

app.get(
  "/products",
  rateLimiter(50, 60), // 50 requests, 60 seconds
  (req, res) => {
    res.send("OK");
  }
);
```

---

# 🧠 Kaise kaam karta hai? (Interview answer)

1. Har user/IP ke liye Redis me ek **counter key** banti hai
   Example: `rate:106.22.33.1`
2. Pehli request par:

   - counter = 1
   - expiry = 60 sec

3. Agli requests par:

   - counter increment hota hai

4. Limit cross karne par:

   - Redis value limit se badh jati hai
   - API directly **429 Too Many Requests** return karti hai

5. 60 seconds baad counter auto delete → User fresh start.

---

# 🧠 Why Redis is perfect for rate limiting?

- Speed = **RAM level**
- Auto Expiry (TTL)
- Atomic increments (`INCR` operation)
- High concurrency safe
- Microservices friendly

---

# 🧠 BONUS: User-based rate limit (token se identify)

IP se nahi token se limit lagani ho to:

```js
const userId = req.user.id;
const key = `rate:user:${userId}`;
```

---

# 🧠 BONUS: Multiple limits — per minute + per hour

Common in production:

```js
app.get(
  "/login",
  rateLimiter(5, 60), // 5 per minute
  rateLimiter(100, 3600), // 100 per hour
  loginController
);
```

---

# 🧠 FINAL SUMMARY (Aapki language me short)

- Redis me counter rakho
- Har request par `INCR`
- Limit cross → block
- Redis TTL → auto reset
- Fast, accurate, scalable

---
