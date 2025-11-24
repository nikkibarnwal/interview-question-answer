Below is the **clean, interview-ready explanation** of **how to use `.env` variables in SSR, SSG, ISR, CSR in Next.js** — with **clear rules** and **examples** so it sticks in your mind.

---

# 🚀 **How to use `.env` in SSR, SSG, ISR, CSR (Next.js)**

(VERY IMPORTANT — asked in Mphasis, Accenture, Infosys)

---

# ✅ **RULE 1:**

## **Server-side code can access ALL `.env` variables.**

Because it runs inside Node.js.

✔ SSR
✔ SSG
✔ ISR
✔ API routes
✔ Server Components
✔ Middleware

All can access:

```
process.env.MY_SECRET
process.env.DB_URL
process.env.API_KEY
```

---

# 🚫 **RULE 2: CSR (Client Side) cannot access secrets.**

Only variables **starting with**:

```
NEXT_PUBLIC_
```

are exposed to the browser.

Example:

```
NEXT_PUBLIC_API_URL="https://api.example.com"
```

---

# ⭐ Final summary:

| Rendering Mode                        | Allowed Env Vars     | Why?                                    |
| ------------------------------------- | -------------------- | --------------------------------------- |
| **SSR (getServerSideProps)**          | All `.env`           | Runs on server                          |
| **SSG (getStaticProps)**              | All `.env`           | Runs at build time                      |
| **ISR (getStaticProps + revalidate)** | All `.env`           | Runs on server during regeneration      |
| **CSR (Client)**                      | Only `NEXT_PUBLIC_*` | Runs in browser → cannot expose secrets |

---

# 📌 Now let’s see how to use env variables in each case:

---

# 1️⃣ **Use `.env` variables in SSR (getServerSideProps)**

```js
export async function getServerSideProps() {
  const data = await fetch(`${process.env.API_KEY_URL}/user`);

  return {
    props: {
      message: process.env.MY_SECRET_DATA,
    },
  };
}
```

✔ Works because SSR runs on server

---

# 2️⃣ **Use `.env` variables in SSG (getStaticProps)**

```js
export async function getStaticProps() {
  const apiUrl = process.env.API_URL;

  return {
    props: {
      host: apiUrl,
    },
  };
}
```

✔ Works because SSG runs **at build time (server environment)**.

---

# 3️⃣ **Use `.env` variables in ISR (revalidate)**

```js
export async function getStaticProps() {
  const apiRes = await fetch(`${process.env.API_URL}/products`);

  return {
    props: { products: await apiRes.json() },
    revalidate: 30, // uses server again → env works
  };
}
```

✔ Works because ISR regeneration happens **on server**.

---

# 4️⃣ **Use `.env` variables in CSR (Client Component or Browser)**

📌 **RULE: You MUST use `NEXT_PUBLIC_` prefix**

```js
console.log(process.env.NEXT_PUBLIC_APP_VERSION);
```

✔ Works on browser
❌ Without `NEXT_PUBLIC_`, value = **undefined**

---

# 🎯 When to use which?

| Case              | Use                | Reason                       |
| ----------------- | ------------------ | ---------------------------- |
| DB URLs, API keys | SSR, SSG, ISR only | Keep secrets on server       |
| Public constants  | CSR                | Prefixed with `NEXT_PUBLIC_` |
| Stripe public key | CSR                | Allowed public key           |
| Stripe secret key | Server only        | Must stay backend            |

---

# 🧠 Quick Interview Trick (Best Answer)

👉 **“In Next.js, all server-side methods (SSR, SSG, ISR, API routes) can use secure env variables normally via `process.env`, but client-side code can only access variables prefixed with `NEXT_PUBLIC_`, because Next.js avoids leaking secrets to the browser.”**

This single line clears 90% interview questions.

---
