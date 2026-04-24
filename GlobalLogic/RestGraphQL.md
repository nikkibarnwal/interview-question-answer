Here is a **simple, clear, interview-friendly answer** in easy English, exactly in your style:

---

### **Difference Between REST API and GraphQL (Simple English)**

**1. Data Fetching:**

- **REST:** Fixed endpoints. Each endpoint returns a fixed structure. Sometimes you get **more data or less data** than needed (over-fetching / under-fetching).
- **GraphQL:** Only **one endpoint**, and the client can ask **exact data it needs**. No extra or missing data.

**2. Flexibility:**

- **REST:** If UI needs a different data shape, we often create a **new endpoint**.
- **GraphQL:** Very flexible. Client decides the shape of response.

**3. Network Calls:**

- **REST:** For related data, sometimes the client must make **multiple API calls**.
- **GraphQL:** Mostly **single request** can fetch everything needed.

**4. Versioning:**

- **REST:** We usually create versions like `/api/v1`, `/api/v2`.
- **GraphQL:** Mostly **no versioning** needed — we add/remove fields in schema.

**5. Performance:**

- **REST:** Can be slow in some cases because of multiple calls.
- **GraphQL:** Can be faster because of single endpoint and controlled fields.

---

### **One-line Summary (Interview Perfect):**

**REST gives fixed data from multiple endpoints.
GraphQL gives exactly the data you want, from one endpoint.**

---

If you want, I can also give a **real-life example** to explain this with UI pages.

Here is a **very simple and practical example** that you can speak naturally in your interview:

---

### **Example: Fetching User Profile + User’s Orders**

#### **REST API**

If the frontend needs:

- user profile
- user’s last 5 orders

Then in REST, we normally call:

1. `/api/user/123` → returns user profile
2. `/api/user/123/orders` → returns order list

So the frontend makes **two separate API calls**.
Also, the `/user` endpoint may return **extra data** that UI doesn’t even need.

---

#### **GraphQL**

In GraphQL, we have **one endpoint**: `/graphql`.
The frontend sends a query like:

```graphql
{
  user(id: 123) {
    name
    email
    orders(limit: 5) {
      id
      amount
    }
  }
}
```

GraphQL returns **exactly** this data — nothing extra, nothing missing — in **one single request**.

---

### **Simple Summary:**

REST → multiple endpoints, fixed data, multiple calls.
GraphQL → one endpoint, exact data, one call.

---
