Great! Here are **all four** — **CSR, SSR, SSG, ISR** — in the **simplest possible form**, using **Next.js App Router (13/14)**.

These 4 examples are perfect for learning + interviews.

---

# 🌟 **1. CSR (Client-Side Rendering) – Simple Example**

**Data is fetched on the browser (client).**

here in place of **use client** we can use **export const dynamic = "force-client";** this will also work as CSR

📁 `app/csr-example/page.jsx`

```jsx
"use client";

import { useEffect, useState } from "react";

export default function CSRExample() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  if (!post) return <p>Loading…</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>📗 CSR Example</h1>
      <p>
        <b>Title:</b> {post.title}
      </p>
      <p>
        <b>Body:</b> {post.body}
      </p>
    </div>
  );
}
```

🟢 When used?

- Dashboards
- Logged-in user pages
- Real-time data

---

# 🌟 **2. SSR (Server-Side Rendering) – Simple Example**

**Data is fetched on the server on every request.**

📁 `app/ssr-example/page.jsx`

```jsx
// app/ssr-example/page.jsx

export const dynamic = "force-dynamic";
// ensures SSR on every request

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json();
}

export default async function SSRExample() {
  const post = await getData();

  return (
    <div style={{ padding: 20 }}>
      <h1>📕 SSR Example</h1>
      <p>
        <b>Title:</b> {post.title}
      </p>
      <p>
        <b>Body:</b> {post.body}
      </p>
    </div>
  );
}
```

🟢 When used?

- Auth pages
- Dynamic dashboards
- Highly personalized data

---

# 🌟 **3. SSG (Static Site Generation) – Simple Example**

**Data fetched at build time → creates static HTML.**

📁 `app/ssg-example/page.jsx`

```jsx
// app/ssg-example/page.jsx

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json();
}

export default async function SSGExample() {
  const post = await getData();

  return (
    <div style={{ padding: 20 }}>
      <h1>📘 SSG Example</h1>
      <p>
        <b>Title:</b> {post.title}
      </p>
      <p>
        <b>Body:</b> {post.body}
      </p>
    </div>
  );
}
```

🚫 No `dynamic`
🚫 No `revalidate`
→ Pure static.

🟢 When used?

- Blogs
- Docs
- Marketing pages
- Non-changing pages

---

# 🌟 **4. ISR (Incremental Static Regeneration) – Simple Example**

**Static page regenerated every X seconds.**

📁 `app/isr-example/page.jsx`

```jsx
// app/isr-example/page.jsx

export const revalidate = 10;
// regenerate the page every 10 seconds

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json();
}

export default async function ISRExample() {
  const post = await getData();

  return (
    <div style={{ padding: 20 }}>
      <h1>📒 ISR Example</h1>
      <p>
        <b>Title:</b> {post.title}
      </p>
      <p>
        <b>Body:</b> {post.body}
      </p>
      <p style={{ color: "gray", marginTop: 20 }}>
        (This page regenerates every 10 seconds)
      </p>
    </div>
  );
}
```

🟢 When used?

- Product details
- News pages
- Pricing pages
- Data that changes occasionally

---

# 🏆 Quick Interview Summary (Use this!)

### **CSR**

- Runs on client
- SEO not good
- Best for dashboards/live updates

### **SSR**

- Runs on server on each request
- SEO good
- Good for authenticated pages

### **SSG**

- Build time
- Fastest performance
- Best for static content

### **ISR**

- Static + auto regeneration
- Best mix of SEO + performance

---

If you want, I can also give:

✔ Code examples with API routes
✔ Dynamic route example `/posts/[id]`
✔ Difference diagram
✔ Real interview answers for CSR/SSR/SSG/ISR

Just tell me **“give dynamic example”** or **“give interview answers”**.
