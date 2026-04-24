Here is a **simple, clear, interview-ready** explanation:

---

# **Difference Between Clustered Index and Non-Clustered Index**

## **1. Physical Storage**

### **Clustered Index**

- Changes the **physical order** of data in the table.
- Data is stored **in the order of the index**.
- A table can have **only one** clustered index.

### **Non-Clustered Index**

- Does **not** change the physical order of data.
- Creates a **separate index structure** that points to the actual rows.
- A table can have **multiple** non-clustered indexes.

---

## **2. Speed**

### **Clustered Index**

- Faster for **range queries** (like BETWEEN, >, <) because data is sorted.

### **Non-Clustered Index**

- Good for **searching specific values**, but slightly slower than clustered because it must look up the row pointer.

---

## **3. Example (Easy to Understand)**

### **Clustered Index (Phonebook Example)**

Names in a phonebook are stored _physically_ in alphabetical order.
→ This is like a **clustered index**.

### **Non-Clustered Index (Bookmark Example)**

You keep a separate bookmark list that tells you “Raj is on page 34.”
→ This is like a **non-clustered index**:

- Separate from the main data
- Points to the actual location

---

## **4. Count**

- **Clustered Index:** Only **ONE** per table
- **Non-Clustered Index:** **Many** allowed

---

# **Simple One-Line Summary:**

**Clustered index sorts the actual data physically (only one).
Non-clustered index creates a separate index pointing to the data (many allowed).**

---
