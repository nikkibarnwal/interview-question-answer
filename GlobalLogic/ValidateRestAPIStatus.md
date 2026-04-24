Here is a **simple and clean answer**, perfect for a client round:

---

## **How do we validate REST API call status? (Simple English)**

We validate REST API calls mainly by checking the **HTTP status codes** and the **response body**.

### **1. Check the Status Code**

Common status codes:

- **200** → Success
- **201** → Created
- **400** → Bad Request
- **401** → Unauthorized
- **403** → Forbidden
- **404** → Not Found
- **500** → Server Error

If status code is in the **2xx range**, it usually means the API worked successfully.

---

### **2. Check the Response Body**

Even if status is 200, we confirm:

- Data is correct
- Required fields are present
- No error message is inside the body

---

### **3. Example (Node.js / Fetch)**

```js
fetch("/api/user")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`API failed with status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log("Success:", data))
  .catch((err) => console.error(err));
```

Here we check:

- `res.ok` → true only for 2xx status
- `res.status` → exact code
- Response data

---

### **One-line Summary:**

**We validate REST API calls by checking the HTTP status code first and then validating the response data.**

---
