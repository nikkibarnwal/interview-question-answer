What is the use of req.params, req.query, and req.body?

Bilkul! 😄  
Chalo aaj samajhte hain:  
### `req.params`, `req.query`, aur `req.body` — inko kab aur kaise use karte hain  


---

## 🛣️ **Express request data teen jagah se aata hai:**

| Type         | Kahan se aata hai?             | Example URL                              |
|--------------|--------------------------------|-------------------------------------------|
| `req.params` | URL path ke andar              | `/user/45`                                |
| `req.query`  | URL ke `?` ke baad             | `/user?name=raj&age=25`                   |
| `req.body`   | Request ke body (POST, PUT)    | Form ya JSON data ke through bheja gaya   |

---

## 🧠 Easy Trick to Remember:

> **“**  
> 🔠 `params` = **Path se**  
> ❓ `query` = **Question mark se**  
> 📦 `body` = **Box (inside request) se**  
> **”**

---

## 🍕 Real-life Analogy: Pizza Order

Imagine:

- 📍 `params`: "Pizza ID bolo" — `/pizza/101`
- ❓ `query`: "Extra details?" — `/pizza/101?extraCheese=true&size=large`
- 📦 `body`: "Full order form" — name, address, toppings (sent via POST)

---

## ✅ Example Code:

```js
app.get('/user/:id', (req, res) => {
  console.log("Params:", req.params); // { id: '45' }
  console.log("Query:", req.query);   // { name: 'raj', age: '25' }
  res.send("User Data");
});

app.post('/user', (req, res) => {
  console.log("Body:", req.body);     // { name: 'raj', age: 25 }
  res.send("User Created");
});
```

If user hits:
```
GET /user/45?name=raj&age=25
```

🔍 Output:
```js
req.params => { id: '45' }
req.query  => { name: 'raj', age: '25' }
req.body   => {} // (because it's a GET request)
```

---

## 🔁 Summary Table:

| Property       | Data From                 | Used In        | Looks Like                            |
|----------------|----------------------------|----------------|----------------------------------------|
| `req.params`   | 🔠 URL path               | GET/PUT/DELETE | `/user/45` → `{ id: '45' }`            |
| `req.query`    | ❓ URL ke ? ke baad       | GET            | `/user?name=raj` → `{ name: 'raj' }`   |
| `req.body`     | 📦 Request body se        | POST/PUT       | `{ name: 'raj', age: 25 }`             |

---

## 💡 Final Trick to Remember:

> **“Params path mein hota hai, Query question mark ke baad, Body box ke andar.”**  
> (P-Q-B = **Path, Question, Box**) 🧠

---
