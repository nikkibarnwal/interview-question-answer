# Q26 — Pagination vs Infinite Scroll vs Virtualization

### 📁 File

`q26-pagination-vs-infinite-scroll-vs-virtualization.md`

---

## 🎤 Interview Question

> **"What is the difference between pagination, infinite scrolling, and virtualization? When would you use each?"**

## 🎤 Simple Interview Answer

> **Pagination, infinite scrolling, and virtualization solve different problems.**
>
> **Pagination** divides a large dataset into pages. The client requests a limited number of records at a time, for example 20 or 50 records per page. It is useful for tables, admin dashboards, and applications where users need predictable navigation.
>
> **Infinite scrolling** automatically loads the next set of records when the user reaches near the bottom of the page. It provides a smoother browsing experience and is useful for feeds, product listings, or social media.
>
> **Virtualization** is different. It controls how many items are actually rendered in the DOM. Even if thousands of records are loaded, only the visible rows are rendered.
>
> For a large application, I can also combine these techniques. For example, I can use **server-side pagination or cursor-based loading to fetch data**, and **virtualization to render only visible rows**.

---

# 🔄 Easy Diagram

### 1. Pagination

```text
50,000 Records
      ↓
     API
      ↓
Page 1 → 50 records
      ↓
User clicks Next
      ↓
Page 2 → 50 records
```

```text
Fetch limited data
        ↓
Show one page
        ↓
Next / Previous
```

---

### 2. Infinite Scroll

```text
50,000 Records
      ↓
Initial API
      ↓
First 50 records
      ↓
User scrolls
      ↓
Load next 50
      ↓
User scrolls
      ↓
Load next 50
      ↓
...
```

The user doesn't explicitly click **Next**.

---

### 3. Virtualization

```text
50,000 Records
      ↓
Virtualized List
      ↓
Only visible rows
      ↓
~30-50 DOM elements
```

When the user scrolls:

```text
Scroll
  ↓
Visible items change
  ↓
Render new visible items
  ↓
Remove/reuse old items
```

---

# 🧠 The Most Important Difference

Remember this:

```text
Pagination
    ↓
Controls DATA FETCHING

Infinite Scroll
    ↓
Controls HOW MORE DATA IS LOADED

Virtualization
    ↓
Controls DOM RENDERING
```

That's the easiest way to remember it.

---

# 📊 Comparison

|                         | Pagination            | Infinite Scroll         | Virtualization      |
| ----------------------- | --------------------- | ----------------------- | ------------------- |
| Main purpose            | Split data into pages | Load more automatically | Reduce DOM elements |
| Controls API data       | ✅                    | ✅                      | ❌                  |
| Controls DOM rendering  | Not necessarily       | Not necessarily         | ✅                  |
| User clicks Next        | Usually               | No                      | No                  |
| Good for tables         | ✅                    | ⚠️                      | ✅                  |
| Good for feeds          | ⚠️                    | ✅                      | ✅                  |
| Works with 50K records  | ✅                    | ✅                      | ✅                  |
| Can combine with others | ✅                    | ✅                      | ✅                  |

---

# ⭐ Real-World Example

Suppose PwC asks:

> **"You have an e-commerce product listing with 100,000 products. What would you use?"**

I would say:

> "I would not send all 100,000 products to the browser. I would use server-side filtering and cursor-based pagination or API-based incremental loading. For a browsing experience, I could use infinite scrolling. If the number of loaded products becomes large and rendering becomes expensive, I would add virtualization."

Architecture:

```text
                    MongoDB
                       ↓
                Server-side Query
                       ↓
              Cursor Pagination
                       ↓
                Node.js API
                       ↓
              React Application
                       ↓
                Infinite Scroll
                       ↓
                Virtualization
                       ↓
              Visible Products
```

---

# 🔥 Pagination vs Cursor Pagination

A senior interviewer may go one level deeper.

### Offset pagination

```http
GET /products?page=10&limit=50
```

The server calculates:

```text
skip = (page - 1) × limit
```

For very large datasets, large offsets can become inefficient depending on the database/query.

### Cursor pagination

```http
GET /products?cursor=abc123&limit=50
```

The server uses a cursor based on a stable ordering field, such as `_id` or a timestamp.

```text
First request
      ↓
50 products
      ↓
nextCursor = abc123
      ↓
Next request
      ↓
products after abc123
```

For large or continuously changing datasets, **cursor pagination is often preferable** because it avoids relying on large offsets and provides more stable navigation.

---

# ⚠️ Important Interview Point

Don't say:

> ❌ "Virtualization reduces the amount of data fetched."

That's incorrect.

Virtualization mainly reduces:

> **"The number of DOM elements rendered at a time."**

For example:

```text
API returns 10,000 records
       ↓
Virtualized List
       ↓
Only 30 rows rendered
```

The browser still has the data, but it doesn't create DOM nodes for all 10,000 rows.

---

# 🎯 Interview-Ready Short Answer

If they want a quick answer:

> **"Pagination divides data into pages and fetches a limited amount at a time. Infinite scrolling automatically loads the next set of data as the user scrolls. Virtualization is different because it limits the number of DOM elements rendered at one time. For large applications, I can combine them—for example, cursor-based pagination for fetching data, infinite scroll for the user experience, and virtualization for rendering performance."**

---

## 🔥 Next Question — Q27

### 📁 File

`Q27-react-key-prop-list-rendering.md`

> **"Why is the `key` prop important when rendering lists in React? What problems can occur if we use the array index as the key?"**
