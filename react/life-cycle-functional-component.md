### **React Functional Components में Lifecycle Methods (Easy Trick to Remember) 🚀**  

पहले **class-based components** में lifecycle methods होते थे, जैसे:  
- `componentDidMount()`  
- `componentDidUpdate()`  
- `componentWillUnmount()`  

पर Functional Components में **React Hooks** की मदद से lifecycle methods को handle किया जाता है।  

### **🔥 Functional Components में Lifecycle को याद रखने की Easy Trick**  
👉 Functional Components में lifecycle methods को manage करने के लिए सिर्फ **एक Hook** याद रखना है – `useEffect()`.  

💡 **Trick to Remember:**  
🛑 **M-U-U** → (Mount, Update, Unmount)  
- **M** → `useEffect(() => {}, [])` → **Mounting** (Component पहली बार load होता है)  
- **U** → `useEffect(() => { ... }, [dependency])` → **Updating** (जब state या props change हो)  
- **U** → `useEffect(() => { return () => { ... } }, [])` → **Unmounting** (Component हटने पर cleanup)  

---

## **1️⃣ Mounting Phase (componentDidMount) 🟢**  
📌 **जब Component पहली बार render होता है।**  

```jsx
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("Component Mounted ✅");

    // API Call, Event Listener Add करना हो तो यहाँ करें
  }, []); // Empty Dependency Array = सिर्फ एक बार चलेगा

  return <h1>Hello, React!</h1>;
}
```
💡 **Trick:** `useEffect(() => {}, [])` → सिर्फ एक बार चलेगा, जैसे `componentDidMount()`  

---

## **2️⃣ Updating Phase (componentDidUpdate) 🔄**  
📌 **जब state या props update होते हैं।**  

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Updated: ", count);
  }, [count]); // Dependency Array में state/props डालें

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
💡 **Trick:** `useEffect(() => { ... }, [dependency])` → जब state/props change हो, तब चलेगा, जैसे `componentDidUpdate()`  

---

## **3️⃣ Unmounting Phase (componentWillUnmount) ❌**  
📌 **जब component destroy हो जाए (जैसे किसी page से हट जाए)**  

```jsx
import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Component Unmounted ❌");
    };
  }, []);

  return <h1>Timer Running...</h1>;
}
```
💡 **Trick:** `useEffect(() => { return () => { ... } }, [])` → Cleanup function, जैसे `componentWillUnmount()`  

---

## **🚀 Final Trick to Remember M-U-U 🔥**
| Phase | Class Component | Functional Component |
|--------|------------------|------------------|
| **Mounting** | `componentDidMount()` | `useEffect(() => {}, [])` |
| **Updating** | `componentDidUpdate()` | `useEffect(() => {}, [dependency])` |
| **Unmounting** | `componentWillUnmount()` | `useEffect(() => { return () => { ... } }, [])` |

🎯 बस **M-U-U** (Mount, Update, Unmount) याद रखो और Functional Component में Lifecycle का खेल आसान हो जाएगा! 🚀