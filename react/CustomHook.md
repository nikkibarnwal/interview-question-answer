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
### Production ready custom hook
```js
import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  // 1. Initialize data as null to accommodate any API response type
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

// Stringify options to prevent infinite rerender loops from object references
  const stringiFyOption = JSON.stringify(options);

  useEffect(() => {
    let isMounted = true;
// 2. Instantiate the controller at the useEffect level so the cleanup function can see it
    const controller = new AbortController();
    const fetchUrl = async () => {
      setLoading(true);
      setError(null);

     // Parse the options back into an object
      const parsedOption = JSON.parse(stringiFyOption);
      try {
       // Merge the user's options with the AbortController signal
        const response = await fetch(url, {
          ...parsedOption,
          signal: controller.signal
        });
        if (!response.ok) {
          console.log(`HTTP error with status ${response.status}`)
          throw new Error(`HTTP error with status ${response.status}`);
        }
        const resData = await response.json();
// 3. Only update state if this specific request hasn't been aborted/superseded
        if (isMounted)
          setData(resData);
      } catch (err) {
        if (isMounted) {
         // 4. Correct way to check for AbortController cancellation
          if (err.message === 'AbortError') {
            console.log('Fetch successfully aborted');
          } else {
            setError(err.message || 'An unexpected error occurred');
          }
        }
      } finally {
     // 5. Only turn off loading if the component is still actively tracking this request
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchUrl();

 // 6. Cleanup function properly calls abort and marks the mount status as false
    return () => {
      isMounted = false;
      controller.abort();
    }

  }, [url, stringiFyOption]) // Dependency array tracks the stringified string


  return { data, loading, error };
}

export default useFetch;
```

---

### Why this is useful 
## Prevents Race Conditions: 
If a user clicks the "Next Post" button rapidly, older requests are aborted immediately.    
Only the response from the most recently requested URL will update your state
## Memory Leaks:    
If the user navigates away from the page (unmounting the component) while a heavy data fetch is still running, the cleanup function triggers controller.abort(), stopping the request mid-flight.

---

## **5. Real-Life Analogy**

- **Without Custom Hook** → Har jagah ek hi biryani ka recipe likh ke bana rahe ho → bore ho jaoge.
- **With Custom Hook** → Ek recipe card (hook) bana lo, jahan chahiye wahan use kar lo.

---
## usePagination hook
```js
import { useMemo, useState } from "react";

function usePagination(
  totalItems,
  itemsPerPage = 10
) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    totalItems / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const endIndex =
    startIndex + itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages)
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      Math.max(prev - 1, 1)
    );
  };

  const goToPage = (page) => {
    setCurrentPage(
      Math.min(
        Math.max(page, 1),
        totalPages
      )
    );
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    prevPage,
    goToPage
  };
}

export default usePagination;

//usage

const {
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  nextPage,
  prevPage
} = usePagination(users.length, 10);

const currentUsers =
  users.slice(startIndex, endIndex);
```


