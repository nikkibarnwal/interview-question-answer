Aaja bhai! Ab samjhte hain Node.js ke ek aur kaam ke hero ka naam — **`path` module** 🔧  
ekdum simple aur yaad rehne wala style 😎

---

## ❓ **What is the `path` module in Node.js?**

> **`path`** ek **built-in Node.js module** hai  
> Jo files ya folders ke **paths ko handle aur manipulate** karne ke kaam aata hai.

Iska kaam hai:
- Path ko **join karna**
- Path se **file name nikalna**
- Extension check karna
- **Cross-platform compatibility** maintain karna (Windows vs Linux)

---

## 🧳 Real-Life Analogy: **Delivery Boy in a Mall**

Socho ek **delivery boy** ko mall ke andar pizza dena hai 🍕  
Lekin path kuch aisa hai:
```
/mall/floor1/sectionA/room42
```

Agar koi bole:  
> "Bas `sectionA/room42` pe de do"

Toh delivery boy ko **full path banani padti hai**.

### 🧠 Same kaam karta hai `path` module — **location/route set karta hai** 📍

---

## 🔧 Common `path` Methods & Their Use:

### 1. ✅ `path.join()`  
**Multiple parts ko sahi way mein jodta hai** (Windows ya Linux difference ko sambhalta hai)

```js
const path = require('path');
const fullPath = path.join(__dirname, 'images', 'pizza.jpg');
console.log(fullPath);
```

> **Real-life:** "Kitchen + Fridge + Tray" → sahi path banao!

---

### 2. 🧾 `path.basename()`  
**File ka naam** nikaal ke deta hai

```js
const fileName = path.basename('/user/data/menu.pdf');
console.log(fileName); // menu.pdf
```

> "File ka sirf naam chahiye, pura address nahi!"

---

### 3. 🔍 `path.extname()`  
**File extension** batata hai

```js
console.log(path.extname('pizza.jpeg')); // .jpeg
```

> Chef ko bataana hai: "Yeh image hai ya recipe PDF?"

---

### 4. 🏠 `path.dirname()`  
**Parent folder ka path** deta hai

```js
console.log(path.dirname('/app/routes/user.js')); // /app/routes
```

> "Yeh file kis shelf (folder) mein hai?"

---

### 5. 🧭 `__dirname` vs `__filename`

```js
console.log(__dirname);  // current folder
console.log(__filename); // current file ka full path
```

---

## 🎯 Summary Table:

| Method               | Kya karta hai?                    | Real-Life Example             |
|----------------------|-----------------------------------|-------------------------------|
| `path.join()`        | Parts ko join karta hai           | Mall ke andar raste banana   |
| `path.basename()`    | Sirf file ka naam deta hai        | Recipe file ka naam           |
| `path.extname()`     | Extension batata hai              | ".pdf" ya ".jpg"              |
| `path.dirname()`     | Parent folder ka path             | Shelf location                |

---

## 🧠 Easy Trick to Remember:

> **`path` = GPS for your files & folders** 🧭  
> ➤ Join karo,  
> ➤ Naam nikalo,  
> ➤ Extension dekho,  
> ➤ Aur delivery exact jagah karo! 📦✅

---

