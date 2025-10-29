## What are Higher-Order Components (HOC) and when would you use them?

### **Higher-Order Components (HOC) in React – Easy Trick to Remember 🚀**

React में **Higher-Order Component (HOC)** एक **function** होता है जो एक **component लेता है और एक नया enhanced component return करता है**। इसे React में **code reusability और logic sharing** के लिए use किया जाता है।

💡 **Trick to Remember:**  
👉 **"HOC = COC"** → **Higher-Order Component = Component On Component**  
यानि **एक Component को दूसरे Component के अंदर wrap करना** और उसे extra functionality देना।

---

## **🔥 What is HOC? (HOC क्या है?)**

💡 **HOC एक function होता है, जो एक Component को लेता है और Modified Component return करता है।**

📌 **Example:** Suppose हमें multiple components में same logic apply करना हो (e.g., authentication check, API data fetching, logging)।  
🚀 **Instead of duplicating logic, हम HOC का use करके इसे अलग से manage कर सकते हैं।**

### **HOC Syntax (🔥 Simple Structure)**

```jsx
const withExtraFeature = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} extraProp="Extra Feature" />;
  };
};
```

- `withExtraFeature` – HOC function है
- `WrappedComponent` – जो भी Component pass करेंगे, वो modify होकर return होगा
- `{...props}` – Existing props को pass करना जरूरी है, ताकि Original Component काम करता रहे
- `"extraProp"` – इस तरह हम नया feature add कर सकते हैं

---

## **1️⃣ Example – HOC for Logging Props (🎯 Logging Incoming Props)**

```jsx
import React from "react";

// HOC Function
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props received:", props);
    return <WrappedComponent {...props} />;
  };
};

// Normal Component
const Hello = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Enhanced Component using HOC
const EnhancedHello = withLogger(Hello);

export default function App() {
  return <EnhancedHello name="React Developer" />;
}
```

✅ **जब भी `EnhancedHello` render होगा, वह पहले props को console.log करेगा, फिर `Hello` component को render करेगा।**

---

## **2️⃣ Example – HOC for Authentication Check (🔒 Protecting Routes)**

📌 **अगर हमें कुछ pages को protected बनाना हो, तो हम एक HOC का use कर सकते हैं।**

```jsx
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Suppose we check user authentication here

    if (!isAuthenticated) {
      return <h1>Access Denied ❌</h1>;
    }

    return <WrappedComponent {...props} />;
  };
};

// Normal Component
const Dashboard = () => {
  return <h1>Welcome to Dashboard ✅</h1>;
};

// Enhanced Component
const ProtectedDashboard = withAuth(Dashboard);

export default function App() {
  return <ProtectedDashboard />;
}
```

✅ **अगर User authenticated है तो Dashboard दिखेगा, वरना "Access Denied" message आएगा।**

---

## **🔥 When to Use HOC? (HOC कब Use करें?)**

💡 जब भी हमें **Reusable Logic** चाहिए और हम चाहते हैं कि multiple components में इसे easily apply कर सकें।

| **Use Case**                | **Example**                                          |
| --------------------------- | ---------------------------------------------------- |
| **Logging Props**           | Debugging के लिए                                     |
| **Authentication Handling** | Protected Routes (जैसे `withAuth`)                   |
| **Fetching Data from API**  | Multiple components में API call की जरूरत हो         |
| **Theme Management**        | Different themes apply करने के लिए                   |
| **Permission Control**      | Different roles (Admin/User) को अलग-अलग content देना |

---

## **🚀 Final Trick to Remember "HOC = COC" 🔥**

1️⃣ **HOC एक function है** जो **component को लेता है और modified component return करता है।**  
2️⃣ **Props forwarding जरूरी है**, ताकि original component को सभी data मिले।  
3️⃣ **Code Reusability और Separation of Concerns** के लिए HOC बहुत useful है।

🎯 **अब जब भी आपको Code Reusability चाहिए, तो HOC = COC (Component On Component) का use करें!** 🚀
