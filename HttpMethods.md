Bahut badiya question bhai 👏 — ye interview me **HTTP Methods** par question **pakka aata hai** (specially jab REST APIs ka topic chalu hota hai).
Chalo easy aur interview-friendly style me samjhate hain (Hindi + English mixed, jaise tujhe pasand hai 😎):

---

## 🌐 **HTTP Methods (CRUD ke base par samjho)**

| HTTP Method | CRUD Operation        | Kaam kya karta hai                                                                       | Real Example                              | Key Benefits                                                         |
| ----------- | --------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| **GET**     | Read (Fetch Data)     | Server se data **read** karta hai                                                        | `/api/users` → sab users laao             | 🔹 Fast 🔹 Cached ho sakta hai 🔹 Safe (data change nahi karta)      |
| **POST**    | Create (Add Data)     | Server me **naya record create** karta hai                                               | `/api/users` + `{ name:"Raj", age:30 }`   | 🔹 Naya data add karne ke liye 🔹 Body me complex data bhej sakte ho |
| **PUT**     | Update (Replace Data) | **Pure record ko replace** karta hai (agar kuch field missing hui to overwrite kar dega) | `/api/users/1` + `{ name:"Raj", age:31 }` | 🔹 Consistent update 🔹 Predictable behavior                         |
| **PATCH**   | Partial Update        | Sirf **specific field update** karta hai (baaki fields as-it-is)                         | `/api/users/1` + `{ age:32 }`             | 🔹 Lightweight 🔹 Efficient (partial update)                         |
| **DELETE**  | Delete                | Record **delete** karta hai                                                              | `/api/users/1` → user id 1 delete         | 🔹 Clean data 🔹 Resource free hota hai                              |
| **OPTIONS** | Discover              | Server se puchta hai ki **kaunse method allowed hain**                                   | Browser CORS me use hota hai              | 🔹 CORS check 🔹 API capability discovery                            |
| **HEAD**    | Read Headers          | GET jaisa hi hota hai, but sirf **headers fetch karta hai** (body nahi)                  | `/api/users` → sirf headers milega        | 🔹 Performance check 🔹 Lightweight                                  |
| **UPDATE**  | ❌ Invalid            | HTTP me officially **UPDATE** method exist nahi karta                                    | ❌ —                                      | ❌ Not a valid HTTP verb                                             |

---

## 💡 **Example through CRUD API**

Suppose humare paas ek endpoint hai:
👉 `/api/products`

| Operation                | Method     | Example                                                    | Description                   |
| ------------------------ | ---------- | ---------------------------------------------------------- | ----------------------------- |
| Get all products         | **GET**    | `GET /api/products`                                        | Sab products laao             |
| Get single product       | **GET**    | `GET /api/products/10`                                     | ID = 10 ka product laao       |
| Create new product       | **POST**   | `POST /api/products` + `{ name:"Mobile", price:9999 }`     | Naya product add karo         |
| Replace product          | **PUT**    | `PUT /api/products/10` + `{ name:"iPhone", price:120000 }` | Purana product overwrite karo |
| Update product partially | **PATCH**  | `PATCH /api/products/10` + `{ price:110000 }`              | Sirf price update karo        |
| Delete product           | **DELETE** | `DELETE /api/products/10`                                  | Product delete karo           |

---

## ⚙️ **Interview Tips (Easy Tricks)**

| Trick                            | Remember Like               |
| -------------------------------- | --------------------------- |
| **G**ET → **G**rab Data          | (Sirf data lene ke liye)    |
| **P**OST → **P**ush Data         | (Naya data bhejna)          |
| **PU**T → **PU**re replace       | (Pura object replace karna) |
| **PA**TCH → **PA**rtially change | (Thoda change karna)        |
| **DEL**ETE → **DEL**ete Data     | (Remove karna)              |

---

## 🚫 Common Interview Confusion

**Q:** PUT aur PATCH me kya difference hai?
**A:**

- **PUT** → Purana record **completely replace** karta hai
- **PATCH** → Sirf **specific fields** update karta hai

**Example:**
Current user data:

```json
{ "name": "Raj", "age": 30, "city": "Delhi" }
```

**PUT** request:

```json
{ "name": "Rajendra" }
```

➡ Result: `{ "name": "Rajendra" }`
(Baaki fields overwrite ho gaye)

**PATCH** request:

```json
{ "name": "Rajendra" }
```

➡ Result: `{ "name": "Rajendra", "age": 30, "city": "Delhi" }`
(Partial update)

---

Agar tu chahe to mai iska **real Node.js + Express code example** bhi likh deta hoon jisme ye saare HTTP methods implemented ho —
chahe ek simple “User API” bana kar samjha du?
