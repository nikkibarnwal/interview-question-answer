Bilkul **aapke style me** (easy Hindi+English mix, interview + practical dono).
**Topic: Redis Cache kaise use karte hain MERN backend me?**

---

# 🔥 Redis Cache — Rajendra Style Explanation

Redis ko aise samjho:
**“Ek ultra-fast memory box jisme frequently used data rakho, taki MongoDB ko baar-baar hit na dena pade.”**

Result =
⚡ API 10x fast
⚡ Server load 50% kam
⚡ Database stress down

---

# 🧠 **1) Redis kyun use karte hain?**

- Frequently data ka API response **memory se** mil jata hai
- Mongo query avoid hoti hai
- Rate limiting
- Session store
- OTP store
- Token blacklist
- Counters (views, likes, cart count, etc.)

Redis = **RAM-speed + Key-Value store**

---

# 🧠 **2) Redis ka simple flow (mind-map)**

```
API hit → Check Redis →
  If data found → return fast response (0.5 ms)
  Else → Fetch from Mongo → Save to Redis → Return
```

Isko **read-through caching** bolte hain.

---

# 🧠 **3) Installation**

### Local:

```bash
sudo apt install redis
redis-server
```

### Node project me install:

```bash
npm install redis
```

---

# 🧠 **4) Redis client setup (MOST IMPORTANT)**

```js
import { createClient } from "redis";

const redis = createClient({
  url: "redis://127.0.0.1:6379",
});

redis
  .connect()
  .then(() => console.log("Redis connected"))
  .catch((err) => console.log(err));

export default redis;
```

---

# 🧠 **5) Real-Life Example: GET API with Caching**

Suppose API hai: `/products`

## Step 1 → Pehle Redis check

## Step 2 → Redis me na ho to Mongo hit + Redis me store

```js
import Product from "../models/Product.js";
import redis from "../config/redis.js";

export const getProducts = async (req, res) => {
  try {
    // STEP 1: Check cache
    const cacheData = await redis.get("products");

    if (cacheData) {
      console.log("🔥 Cache hit");
      return res.json(JSON.parse(cacheData));
    }

    console.log("📦 Cache miss → Fetching from Mongo");
    const products = await Product.find();

    // STEP 2: Save to Redis with expiry (TTL 60 sec)
    await redis.setEx("products", 60, JSON.stringify(products));

    res.json(products);
  } catch (err) {
    res.status(500).send("Error");
  }
};
```

---

# 🧠 **6) TTL (Time to live) – Bahut important**

TTL = Data kab expire hoga

Examples:

- Products → 60 sec
- News → 10 sec
- OTP → 120 sec
- Token blacklist → 1 hour

```js
redis.setEx("key", 60, "value");
```

---

# 🧠 **7) POST/PUT/Delete ke baad Cache clear karna zaruri hai**

Jab bhi data change ho → cache stale ho jayega → clear karo.

```js
await redis.del("products");
```

---

# 🧠 **8) Rate Limiting (powerful use-case)**

```js
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50,
});
```

Redis + Rate limiting =
Server safe from bot/DDOS.

---

# 🧠 **9) Token Blacklisting (Logout case)**

Logout ke time token ko Redis me daal do:

```js
await redis.setEx("blacklist:" + token, 3600, "true");
```

Phir har API me check:

```js
if (await redis.get("blacklist:" + token)) {
  return res.status(401).json("Token expired");
}
```

---

# 🧠 **10) Session Store**

Express-session + Redis store:

```bash
npm i express-session connect-redis
```

---

# 🧠 FINAL SUMMARY (your quick recall)

- Redis = Ultra fast RAM database
- Use for → Response caching, sessions, rate-limits, tokens, counts
- Flow = Check Redis → Return if found → Mongo if not → Redis save
- Use `setEx` for TTL
- Update ke baad cache invalidate
- Protect API with Redis-backed rate-limit

---
