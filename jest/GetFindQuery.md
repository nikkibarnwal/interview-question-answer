## **🔥 React Testing Library Queries Explained (getBy, findBy, queryBy, etc.)**  

Jest me **React Testing Library** ka use karke hum DOM elements ko dhoondhne ke liye **queries** ka use karte hain. Yeh queries teen tarah ki hoti hain:  

1️⃣ **getBy...** → **(Sync, Fail Fast)**  
2️⃣ **findBy...** → **(Async, Waits for Element)**  
3️⃣ **queryBy...** → **(Safe Check, Returns Null Instead of Error)**  

### **🤔 Question:** `getByText`, `findByLabelText`, `queryByRole` jaise queries ka kya difference hai?  

---

## **✅ Answer: Queries with Trick to Remember**  
| Query Type | Example | Behavior | Trick |
|------------|---------|-----------|--------|
| **getBy** | `getByText("Submit")` | ✅ Element milega toh return karega, nahi mila toh **error throw** karega | **"Get or Fail"** |
| **getAllBy** | `getAllByRole("button")` | ✅ Multiple elements return karega, nahi mile toh **error** | **"Get All or Fail"** |
| **findBy** | `await findByText("Submit")` | ✅ **Async wait karega**, element milne tak | **"Find and Wait"** |
| **findAllBy** | `await findAllByRole("button")` | ✅ Async multiple elements return karega | **"Find All and Wait"** |
| **queryBy** | `queryByText("Submit")` | ✅ Element milega toh return karega, nahi mila toh **null** (error nahi dega) | **"Query Safely"** |
| **queryAllBy** | `queryAllByRole("button")` | ✅ Multiple elements return karega, nahi mile toh **empty array** | **"Query All Safely"** |

---

### **🔥 Trick to Remember:**  
👉 **"Get = Fail Fast, Find = Wait, Query = Safe"**  

- **getBy:** **Fast but Fails** → Agar element nahi mila toh turant error dega.  
- **findBy:** **Slow but Smart** → Agar element delay se aane wala hai, toh wait karega.  
- **queryBy:** **Safe but Silent** → Agar element nahi mila toh error nahi dega, balki `null` return karega.  

---

## **🛠 Example Comparison:**
### **📌 Example 1: getByText vs findByText vs queryByText**
```jsx
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

// ✅ getByText (Fast but Fails if not found)
test("getByText example", () => {
  render(<MyComponent />);
  const element = screen.getByText("Hello"); // Agar "Hello" nahi mila toh test fail ho jayega
  expect(element).toBeInTheDocument();
});

// ✅ findByText (Waits for element)
test("findByText example", async () => {
  render(<MyComponent />);
  const element = await screen.findByText("Hello"); // Wait karega element ke aane tak
  expect(element).toBeInTheDocument();
});

// ✅ queryByText (Safe check, no error)
test("queryByText example", () => {
  render(<MyComponent />);
  const element = screen.queryByText("Hello"); // Agar nahi mila toh `null` return karega
  expect(element).not.toBeInTheDocument(); // Yeh test pass hoga agar "Hello" nahi hai
});
```
👉 **Agar element 100% available hai, toh `getByText` use karo.**  
👉 **Agar element async load ho raha hai, toh `findByText` better hai.**  
👉 **Agar element ho sakta hai ki exist na kare, toh `queryByText` use karo.**  

---

## **🛠 Common Queries List with Examples**
| Query | Use Case | Example |
|-------|----------|---------|
| **getByText** | Text se element dhoondho | `screen.getByText("Submit")` |
| **findByText** | Text wait karna ho | `await screen.findByText("Submit")` |
| **queryByText** | Check karo ki text exist karta hai ya nahi | `screen.queryByText("Submit")` |
| **getByRole** | Role (button, heading, textbox) se dhoondho | `screen.getByRole("button")` |
| **getByLabelText** | Label se input field dhoondho | `screen.getByLabelText("Username")` |
| **getByPlaceholderText** | Placeholder se input field dhoondho | `screen.getByPlaceholderText("Enter name")` |
| **getByTestId** | Custom `data-testid` se dhoondho | `screen.getByTestId("login-button")` |

---

### **📌 Example 2: Role-Based Query**
```jsx
test("getByRole example", () => {
  render(<button>Click Me</button>);
  const button = screen.getByRole("button"); // "button" role se element dhoondh raha hai
  expect(button).toBeInTheDocument();
});
```
👉 **Role-based queries accessibility friendly hote hain, toh inka use recommended hai!**  

---

### **📌 Example 3: getByLabelText (Label + Input Field)**
```jsx
test("getByLabelText example", () => {
  render(
    <label>
      Username:
      <input type="text" />
    </label>
  );
  const input = screen.getByLabelText("Username:");
  expect(input).toBeInTheDocument();
});
```
👉 **Yeh ensure karega ki label aur input field properly linked hain.**  

---

### **📌 Example 4: getByTestId (For Custom Components)**
```jsx
test("getByTestId example", () => {
  render(<div data-testid="custom-element">Hello</div>);
  const element = screen.getByTestId("custom-element");
  expect(element).toBeInTheDocument();
});
```
👉 **Agar element find karna mushkil ho toh `data-testid` ka use kar sakte hain.**  

---

## **🚀 Final Recap:**
1. **`getBy` = Fail fast** (Instantly element dhoondho, nahi mila toh error)  
2. **`findBy` = Waits for element** (Async elements ke liye)  
3. **`queryBy` = Safe check** (Element nahi mile toh null return karega)  
4. **Use `getByRole`, `getByLabelText`, `getByTestId` for better readability**  

👉 **"Get Fast, Find Smart, Query Safe"** – Yeh yaad rakho aur queries easy ho jayengi! 🚀