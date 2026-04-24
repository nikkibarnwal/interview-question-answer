Here is a **simple, visual, and interview-friendly explanation**:

---

# **Difference Between LEFT JOIN, RIGHT JOIN, and INNER JOIN**

## **1. INNER JOIN**

Returns **only matching rows** from both tables.

👉 If both tables have a match → include it.
👉 If no match → skip.

### **Example:**

Users + Orders → Only users who **have orders**.

---

## **2. LEFT JOIN (Left Outer Join)**

Returns:

- **All rows from the LEFT table**
- Matching rows from RIGHT table
- If no match, RIGHT side becomes **NULL**

### **Example:**

Users LEFT JOIN Orders
→ Show **all users**, even those with **no orders**.

---

## **3. RIGHT JOIN (Right Outer Join)**

Returns:

- **All rows from the RIGHT table**
- Matching rows from LEFT table
- If no match, LEFT side becomes **NULL**

### **Example:**

Users RIGHT JOIN Orders
→ Show **all orders**, even if some orders don't have matching users.

---

# **Simple Diagram (Easy to Remember)**

```
INNER JOIN:
   A ∩ B  → only matched data

LEFT JOIN:
   A + (A unmatched as NULL)

RIGHT JOIN:
   B + (B unmatched as NULL)
```

---

# **Simple Example to Speak:**

### Users Table

```
id | name
-----------
1  | Raj
2  | Nikko
3  | Sam
```

### Orders Table

```
order_id | user_id
-------------------
10       | 1
11       | 2
```

### INNER JOIN → users who have orders

```
Raj
Nikko
```

### LEFT JOIN → all users (missing orders as NULL)

```
Raj
Nikko
Sam ← no order, shows NULL
```

### RIGHT JOIN → all orders (missing users as NULL)

```
Raj
Nikko
NULL ← if order has no matching user
```

---

# **One-Line Summary**

**INNER JOIN → Only matched rows
LEFT JOIN → All left + matched
RIGHT JOIN → All right + matched**

---
