Here is a **simple, clear, interview-friendly answer** in easy English:

---

# **What is the use of the `map` function?**

The **map** function is used to **transform** each item in an array and return a **new array** with the updated values.

It does **not change the original array**.

---

## **Why do we use `map`?**

- To loop through an array
- To modify each element
- To return a new array
- Very useful in React for rendering lists

---

## **Example (Simple):**

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6]
```

Here:

- `map` goes through every number
- multiplies it by 2
- returns a new array

---

## **React Example (Common in interviews):**

```jsx
const users = ["Raj", "Nikko", "Sam"];

return (
  <ul>
    {users.map((user) => (
      <li>{user}</li>
    ))}
  </ul>
);
```

We use `map` in React to **render lists** dynamically.

---

# **One-Line Summary:**

**The map function is used to transform array items and create a new array without changing the original one.**

---
