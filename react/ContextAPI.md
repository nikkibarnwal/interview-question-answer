## **React Context API – Global State Management समझने की आसान Trick**

React में **props drilling** एक बड़ी problem होती है, जब हमें **parent से बहुत नीचे के components तक data भेजना पड़ता है**।  
इसे solve करने के लिए **React Context API** का use करते हैं, जो एक **Global Store** की तरह काम करता है।

---

## **🎯 Easy to Remember Trick – "रसोईया vs होटल मैनेजर"**

Global state management को समझने के लिए एक आसान example लेते हैं:

1. **Props Drilling (रसोईया - हर Table तक खाना खुद पहुँचाना)**

   - अगर एक restaurant में रसोईया (Chef) को हर table पर खुद खाना पहुँचाना पड़े, तो ये बहुत **inefficient** हो जाएगा।
   - यही React में होता है जब हम **हर component को props पास करते हैं** (Props Drilling)।

2. **Context API (होटल मैनेजर - Waiter को खाना serve करने का काम दे दिया)**
   - अब सोचो, अगर एक **होटल मैनेजर** (Context Provider) सभी tables को manage करे और waiter (useContext) से सीधे खाना पहुँचवाए, तो कितना आसान हो जाएगा!
   - Context API भी **यही करता है**, जिससे हमें हर बार props manually pass नहीं करनी पड़ती।

---

## **🛠 React Context API कैसे काम करता है? (Step by Step Example)**

### **1️⃣ Step 1 - Context Create करना (`createContext`)**

```jsx
import { createContext } from "react";

// 1️⃣ Context Create किया
export const ThemeContext = createContext(null);
```

---

### **2️⃣ Step 2 - Context Provider बनाना (Global Store)**

```jsx
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ChildComponent from "./ChildComponent";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

✅ हमने `ThemeContext.Provider` में **theme और setTheme** को **globally** available कर दिया।

---

### **3️⃣ Step 3 - Context को use करना (Consumer Component)**

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ChildComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ChildComponent;
```

✅ **`useContext(ThemeContext)`** से हमें **global state** मिल गई, बिना props पास किए!

---

### **4️⃣ Step 4 - Context Provider को App में Wrap करना**

```jsx
import React from "react";
import ThemeProvider from "./ThemeProvider";
import ChildComponent from "./ChildComponent";

const App = () => {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
};

export default App;
```

✅ `ThemeProvider` ने पूरी app को **global theme state** दे दी!

---

## **💡 React Context API vs Redux - कौन बेहतर?**

| Feature        | Context API (होटल मैनेजर) | Redux (बड़ा होटल)           |
| -------------- | ------------------------- | --------------------------- |
| Complexity     | Simple & Lightweight      | Complex, ज्यादा boilerplate |
| State Updates  | `useState` & `useReducer` | Actions, Reducers, Store    |
| Best for       | Small/Medium Apps         | Large Apps                  |
| Async Handling | Manual (`useEffect`)      | Thunk/Saga                  |

**📌 कब Use करें?**

- **छोटे apps के लिए Context API perfect है।**
- **Redux तब use करें जब state बहुत complex हो।**

---

## **🎉 अब Context API आसान लग रही है!**

बस याद रखो:  
✅ **Props Drilling = रसोईया खुद table तक खाना पहुँचाए**  
✅ **Context API = होटल मैनेजर (Global State Provider) + Waiter (useContext)**

अब आप confidently **Context API** से **Global State Management** कर सकते हैं! 🚀
