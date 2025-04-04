In React, data typically flows from **parent to child** using props. However, to pass data **from child to parent**, you can use **callback functions**. Here’s how:

---

## ✅ **Method 1: Using Callback Functions**
1. The **parent component** defines a function.
2. It passes this function as a **prop** to the **child component**.
3. The child **calls the function**, passing data back to the parent.

### **Example: Passing Data from Child to Parent**
#### 📌 **Step 1: Parent Component (Define Callback)**
```jsx
import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");

  // Function to receive data from the child
  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {message}</p>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default Parent;
```

#### 📌 **Step 2: Child Component (Call the Callback)**
```jsx
import React from "react";

const Child = ({ sendDataToParent }) => {
  const data = "Hello from Child!";

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => sendDataToParent(data)}>Send Data</button>
    </div>
  );
};

export default Child;
```

#### 🔥 **How It Works?**
- When the button is clicked, `sendDataToParent(data)` is called.
- This triggers the function in the parent (`handleDataFromChild`).
- The parent receives the child’s data and updates its state.

---

## ✅ **Method 2: Using useState Hook in Parent and Lifting State Up**
If a child component needs to update a parent's state, **lifting state up** is a common approach.

1. The **parent component** manages the state.
2. The **child component** updates the state via a function from the parent.

### **Example**
#### **Parent Component**
```jsx
import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count in Parent: {count}</h2>
      <Child updateCount={setCount} />
    </div>
  );
};

export default Parent;
```

#### **Child Component**
```jsx
import React from "react";

const Child = ({ updateCount }) => {
  return (
    <div>
      <button onClick={() => updateCount(prev => prev + 1)}>Increase Count</button>
    </div>
  );
};

export default Child;
```

---

## ✅ **Method 3: Using React Context API**
If multiple children need to send data to a parent, **React Context** is useful.

#### **Step 1: Create Context**
```jsx
import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState("");

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
```

#### **Step 2: Parent Component (Consume Context)**
```jsx
import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import Child from "./Child";

const Parent = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h2>Data from Child: {data}</h2>
      <Child />
    </div>
  );
};

export default Parent;
```

#### **Step 3: Child Component (Update Context)**
```jsx
import React, { useContext } from "react";
import { DataContext } from "./DataProvider";

const Child = () => {
  const { setData } = useContext(DataContext);

  return (
    <button onClick={() => setData("Hello Parent from Context!")}>
      Send Data
    </button>
  );
};

export default Child;
```

#### **Step 4: Wrap App with Provider**
```jsx
import React from "react";
import ReactDOM from "react-dom";
import Parent from "./Parent";
import DataProvider from "./DataProvider";

ReactDOM.render(
  <DataProvider>
    <Parent />
  </DataProvider>,
  document.getElementById("root")
);
```

---

## ✅ **Method 4: Using Redux (For Large-Scale Apps)**
Redux can also be used to manage shared state between **parent and child**.

1. **Parent and Child components** connect to Redux.
2. Child dispatches an **action**.
3. Parent **reads the updated state** from Redux.

---

## 🎯 **Which Method Should You Use?**
| Use Case | Best Approach |
|----------|--------------|
| Simple parent-child communication | Callback functions (`props`) |
| Multiple child components updating parent | Context API |
| Global state management | Redux |
| Avoid prop drilling | Context API or Redux |

Would you like a **Redux example** for child-to-parent communication? 😊