Here is a **simple and clear explanation** — perfect for interviews:

---

# **What is a Primary Key?**

A **primary key** is a column that **uniquely identifies each row** in a table.

### **Key points:**

- Must be **unique**
- Cannot be **NULL**
- Only **one primary key** per table
- Example: `user_id`, `order_id`

### **Example:**

```sql
CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  name VARCHAR(50)
);
```

---

# **What is a Foreign Key?**

A **foreign key** is a column that **links one table to another**.
It refers to the **primary key of another table**.

### **Key points:**

- Used to maintain **relationships** between tables
- Ensures **data consistency** (cannot insert invalid references)
- A table can have **multiple foreign keys**

### **Example:**

```sql
CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
```

Here:

- `user_id` in **Users** = primary key
- `user_id` in **Orders** = foreign key (linking to Users)

---

# **One-Line Summary:**

**Primary key identifies a record uniquely.
Foreign key connects two tables together.**

---

Can we have NULL in Foreign Key?

Yes, foreign key can be NULL.

Why?

NULL means “this row is not linked to the parent table yet.”

It is allowed because foreign key just ensures valid values — and NULL is treated as “no relation”.

Example
Orders Table:
order_id | user_id(FK) | amount

---

201 | NULL | 1200

This order is not assigned to any user yet — and that’s valid in many systems.
