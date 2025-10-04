Bahut acha sawal 👍 ye point interview me confuse karta hai.
Chalo step by step samajhte hain:

---

## 🔹 1. Normal Function (without `useCallback`)

```jsx
function MyComponent() {
  const handleClick = () => {
    console.log("clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}
```

👉 Har render pe `handleClick` ka **naya reference** banega.
But kyunki ye function **sirf isi component ke andar use ho raha hai**, React ko farq nahi padta — child me pass nahi hua, dependency me use nahi hua.
So koi **performance issue nahi**.

---

## 🔹 2. With `useCallback`

```jsx
function MyComponent() {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return <button onClick={handleClick}>Click</button>;
}
```

👉 Ab React is function ko **memoize** karega. Matlab:

- React isko ek internal structure me store karta hai.
- Har render pe dependencies check karta hai (`[]` means empty).
- Agar deps change nahi huye → purana function reference return karega.

---

## 🔹 3. Then why NOT always use `useCallback`?

- `useCallback` **khud ek extra overhead** hai (React ko dependency array track karni padti hai).
- Agar function sirf andar hi use ho raha hai aur bahar pass nahi ho raha → function ka **naya banana aur purana discard karna cheaper hai** than dependency tracking.
- Matlab:

  - **Creating a new function is very cheap** in JS.
  - **Tracking deps + memoization is slightly expensive**.

So actually, **useCallback = optimization** → but agar optimize karne jaisa kuch hi nahi hai, to wo **over-optimization** ban jaata hai.

---

## 🔹 Rule of Thumb (Clear Statement)

- Agar function **sirf component ke andar** hai → normal function rakho (fast & simple).
- Agar function **bahar jaa raha hai (props/effect/memo deps)** → `useCallback` lagao (stable reference zaruri hai).

---

👉 Simple Example:

- **Sirf button ke `onClick` me use ho raha hai** → ❌ `useCallback` ki zarurat nahi.
- **Child ko prop ke through pass kar rahe ho** → ✅ `useCallback` lagao.

---

Kya mai iska ek **visual diagram (like pros/cons arrows)** bana kar de du, jisme ye “kab zaruri hai aur kab overkill hai” clear ho jaye?
