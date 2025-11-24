how do we prevent devDependencies from installing in production

Here’s the **clean + interview-ready explanation** in your style 👇

---

# 🔥 **Question:**

In Node.js, how do we prevent devDependencies from installing in production?

---

# ✅ **Short, Senior-Level Punchline**

“Production environment me hum sirf actual runtime dependencies install karte hain, devDependencies ko skip kar dete hain using environment flags
like `NODE_ENV=production` or `npm ci --only=production`.”

---

# 🧠 **Full Explanation (Simple + Interview Style)**

Node.js me dependencies do type ki hoti hain:

- **dependencies** → Jo runtime me required hoti hain (Express, Mongoose, JWT, Redis, etc.)
- **devDependencies** → Sirf development aur build time me use hoti hain (Jest, Nodemon, Babel, ESLint, etc.)

Local development me hum generally run karte hain:

```
npm install
```

Ye **devDependencies + dependencies dono install** kar deta hai.
But **production me devDependencies ka koi kaam nahi hota**, aur unnecessary disk usage + slower build hota.

---

# 🚀 **Production me devDependencies install nahi hoti — kaise achieve karein?**

### **1️⃣ Using NODE_ENV=production (most common)**

```
NODE_ENV=production npm install
```

This automatically **skips devDependencies**.
(Internally npm behaves like → `npm install --production`)

### **2️⃣ Using npm install --production**

```
npm install --production
```

or

```
npm install --only=production
```

This installs **only main dependencies**.

### **3️⃣ Best Practice in CI/CD → npm ci (clean install)**

In production:

```
npm ci --only=production
```

Why this is best?

- Uses **package-lock.json** exactly
- Faster, deterministic, clean install
- No dev dependencies

**This is the recommended production install command**.

---

# 🧩 **How it works in Docker (very common in interviews)**

```
RUN npm ci --only=production
```

Because Docker images should NOT contain devDependencies.

---

# 🎯 **Interview-Winning Explanation**

“Production environment me mujhe sirf runtime dependencies chahiye hoti hain.
So I use `npm ci --only=production` in CI/CD pipelines or Docker builds.
It gives me a faster, deterministic install and skips all devDependencies.
Agar environment variable setup ho to `NODE_ENV=production npm install` bhi same behavior deta hai.”

---

# 🔥 Want a ultra-short 1-liner?

**“Production = npm ci --only=production. Development = npm install.”**

---

If you want, I can give you
👉 **follow-up questions + answers**
👉 **Dockerfile example with best practices**
👉 **Real-world CI/CD pipeline snippet**

Just say **"yes"** 🚀
