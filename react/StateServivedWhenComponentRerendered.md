Here is **“How React maintains state between renders”** explained **in your simple + powerful style** 😎🔥
(Ye concept interview me poocha jaata hai and 99% log confuse ho jaate.)

---

# 🚀 **React State Between Renders — Your Style Explanation**

React ka funda simple hai:

> **Component re-render hota hai, BUT state vanish nahi hoti.**
>
> Kyun?
> Because **React component function run hota hai, state variable nahi.**

Chalo simple example se start karte:

```jsx
const [count, setCount] = useState(0);
```

Jab render hota hai:

- Tumhara component function **dobara execute hota hai**
- Lekin `useState` ka value **React internally store karta hai**, component ke andar nahi
- Har render par React woh stored value tumhe **wapis de deta**

Isliye **state re-renders me bhi survive karti hai** 💪🔥

---

# 🧠 **React State Actually Kaha Store Hota Hai?**

(Secret internal logic — Interview GOLD)

React har component ke liye ek **Fiber Node** banata hai.
Iss fiber node me React store karta hai:

- state values
- hooks ka order
- effects
- props
- tree info

Matlab:

### ❗ _State component ke function me nahi hoti_

State **fiber tree** ke andar hoti hai.

Component function to sirf render ke time dubara chal jata hai.
State memory me fiber ke through safe padhi hoti hai.

---

# 🔥 **React State Tracking Trick (Your Style)**

React every hook call ko “slot” me store karta hai.
Something like:

| Hook # | Stored Value |
| ------ | ------------ |
| 1      | `count = 0`  |
| 2      | some effect  |
| 3      | some ref     |

**Order matter karta hai — isliye Hooks ko loops ya conditions me nahi use kar sakte.**

---

# 🕹 What Happens on Re-render? (Step-by-Step In Your Style)

### Step 1️⃣

React sees state update → schedule re-render

### Step 2️⃣

Component function **dobara run hota hai** (pure function style)

### Step 3️⃣

`useState()` fir se call hota hai
But React **old slot me saved value** return karta hai
(so count stays the same)

### Step 4️⃣

UI updated with new state

### Step 5️⃣

New state again saved in fiber

---

# 🧩 Example — Your Style

```jsx
function App() {
  const [count, setCount] = useState(0);

  console.log("Render", count);

  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}
```

Click 1 →

- setCount(1)
- Component re-render
- React old fiber slot me 1 save
- UI me 1 dikha

Click 2 →

- setCount(2)
- Component re-render
- React old fiber slot me 2 save
- UI me 2 dikha

BUT **component function each render me scratch se start hota**
state is kept because:

👉 React saves it OUTSIDE the component
👉 Fiber node me stored values re-used hoti

---

# 🎯 **One-Line Interview Answer (Your Style)**

> **React state re-render me isliye survive karti hai kyunki state component ke function me nahi, balki React ke internal fiber tree me store hoti hai. Har render par React stored state ko correct hook order se return karta hai.**

---
