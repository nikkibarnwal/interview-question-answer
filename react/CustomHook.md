Ok Rajendra, let’s break **Custom Hook** down in simple Hindi + English mix language, with a **remember trick** and an **example**.

---

## **1. Custom Hook Kya Hai?**

React me **Custom Hook** ek **apna banaya hua function** hota hai jo `use` se start hota hai (naming convention),
aur jisme hum React ke built-in hooks (useState, useEffect, etc.) ka use karke **logic ko reuse** kar sakte hain.

📌 **Remember Trick** →
**Custom Hook = Logic ka “Tiffin Box”**

- Tum ek tiffin box me khana pack karke har jagah le ja sakte ho.
- Waise hi ek custom hook me logic pack karke multiple components me reuse kar sakte ho.

---

## **2. Kyun Use Karte Hain? (Why Useful?)**

✅ **Logic Reuse** → Har component me same code repeat karne ki jarurat nahi.
✅ **Clean Code** → Component ka UI part clear ho jata hai, logic alag ho jata hai.
✅ **Testability** → Logic ko easily test kiya ja sakta hai.
✅ **Maintainability** → Agar logic me change karna hai, to ek jagah change karo — sab jagah update ho jayega.

---

## **3. Rules for Custom Hook**

1. Name hamesha `use` se start hona chahiye (e.g., `useFetch`, `useForm`).
2. Sirf function component ya dusre hooks ke andar call karo.
3. Hooks ke rules follow karne honge (top-level me call, conditionals ke andar nahi).

---

## **4. Example: useFetch Custom Hook**

**🔹 Custom Hook File → useFetch.js**

```javascript
import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

---

**🔹 Using it in a Component**

```javascript
import React from "react";
import useFetch from "./useFetch";

export default function UserList() {
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  /*
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      headers: {
        Authorization: "Bearer my-token",
        "Content-Type": "application/json",
      },
    }
  );
*/

  /*
  const { data, loading, error } = useFetch(
    "https://api.example.com/add-user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Rajendra", age: 30 }),
    }
  );
  */

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## **5. Real-Life Analogy**

- **Without Custom Hook** → Har jagah ek hi biryani ka recipe likh ke bana rahe ho → bore ho jaoge.
- **With Custom Hook** → Ek recipe card (hook) bana lo, jahan chahiye wahan use kar lo.

---

If you want, I can give you **5 useful custom hooks** that are mostly asked in interviews with examples.
It will make you interview-ready for this topic.
