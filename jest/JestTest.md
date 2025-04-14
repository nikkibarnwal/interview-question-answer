Jest ke saath React testing samajhne ke liye, yeh **top interview questions** aur unke answers ko **easy trick** ke saath yaad rakho. 🚀  

---  
## **1️⃣ Jest kya hai?**  
### 🤔 **Question:** Jest kya hai aur React testing mein kaise kaam karta hai?  
### ✅ **Answer:**  
Jest ek JavaScript testing framework hai jo fast, simple aur reliable hai. Yeh mainly **React applications** ke liye use hota hai.  

### 🔥 **Trick to Remember:**  
👉 **"Jest = Just Easy Standard Testing"**  
Yaani **Jest simple aur standard testing framework hai.**  

### 🛠 **Example:**  
```jsx
test("simple test", () => {
  expect(1 + 1).toBe(2);
});
```
👉 **Yeh test sirf check kar raha hai ki 1+1 ka result 2 aaya ya nahi.**  

---  
## **2️⃣ React component kaise test karte hain?**  
### 🤔 **Question:** React component ko Jest aur React Testing Library se kaise test karenge?  
### ✅ **Answer:**  
Hum **render** function ka use karke component ko render karte hain, phir **getByText, getByRole** se check karte hain.  

### 🔥 **Trick to Remember:**  
👉 **"Render -> Select -> Expect" (RSE Formula)**  
- **Render:** Component ko mount karo.  
- **Select:** Usme jo element dikh raha hai, usko choose karo.  
- **Expect:** Dekho ki expected result match ho raha hai ya nahi.  

### 🛠 **Example:**  
```jsx
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders Hello text", () => {
  render(<MyComponent />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
```
👉 **Yeh test check karega ki "Hello" text render ho raha hai ya nahi.**  

---  
## **3️⃣ Mock function kya hota hai?**  
### 🤔 **Question:** Jest me mock function ka use kyun hota hai?  
### ✅ **Answer:**  
Mock function ka use **API calls, functions ya dependencies ko fake karne ke liye hota hai** taaki hum sirf apne component ka behavior test kar sakein.  

### 🔥 **Trick to Remember:**  
👉 **"Mock = Fake but Controlled"**  
Matlab hum fake function bana sakte hain lekin uska behavior control kar sakte hain.  

### 🛠 **Example:**  
```jsx
const mockFunction = jest.fn();
mockFunction(); 

expect(mockFunction).toHaveBeenCalled(); // Check karega ki function call hua ya nahi.
```

---  
## **4️⃣ Event Handling kaise test karein?**  
### 🤔 **Question:** Button click ya user event ko Jest me kaise test karenge?  
### ✅ **Answer:**  
Hum **fireEvent ya userEvent** ka use karke user interaction ko simulate kar sakte hain.  

### 🔥 **Trick to Remember:**  
👉 **"Act -> Fire -> Expect" (AFE Formula)**  
1. **Act:** Component ko render karo.  
2. **Fire:** Event trigger karo.  
3. **Expect:** Dekho ki event ka expected output match ho raha hai ya nahi.  

### 🛠 **Example:**  
```jsx
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from "./ButtonComponent";

test("button click increases count", () => {
  render(<ButtonComponent />);
  const button = screen.getByText("Click Me");

  fireEvent.click(button); // Button ko click karo
  expect(screen.getByText("Clicked 1 times")).toBeInTheDocument();
});
```
👉 **Yeh test check karega ki button click hone par count increase ho raha hai ya nahi.**  

---  
## **5️⃣ API Calls kaise mock karein?**  
### 🤔 **Question:** API request aur response kaise test karenge?  
### ✅ **Answer:**  
API ko mock karne ke liye **jest.fn()** ya **jest.mock()** ka use hota hai.  

### 🔥 **Trick to Remember:**  
👉 **"Mock API = Fake Server Response"**  
Hum fake response return karenge taaki real API call na ho.  

### 🛠 **Example:**  
```jsx
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";
import axios from "axios";

jest.mock("axios");

test("fetches and displays data", async () => {
  axios.get.mockResolvedValue({ data: { message: "Hello API" } });

  render(<MyComponent />);
  expect(await screen.findByText("Hello API")).toBeInTheDocument();
});
```
👉 **Yeh test ensure karega ki API se "Hello API" message mil raha hai ya nahi.**  

---  
## **6️⃣ Snapshot Testing kya hota hai?**  
### 🤔 **Question:** Jest snapshot testing kya hoti hai aur iska use kya hai?  
### ✅ **Answer:**  
Snapshot testing ka use **UI changes track karne ke liye hota hai**.  

### 🔥 **Trick to Remember:**  
👉 **"Snapshot = Photo of UI"**  
Matlab ek baar UI ka snapshot save hoga, agar future me change hua to test fail ho jayega.  

### 🛠 **Example:**  
```jsx
import { render } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("matches snapshot", () => {
  const { asFragment } = render(<MyComponent />);
  expect(asFragment()).toMatchSnapshot();
});
```
👉 **Yeh ensure karega ki UI bina reason ke change na ho.**  

---  
## **7️⃣ Code Coverage kaise check karein?**  
### 🤔 **Question:** Jest me code coverage report kaise generate karein?  
### ✅ **Answer:**  
Bas **jest --coverage** command run karni hoti hai.  

### 🔥 **Trick to Remember:**  
👉 **"Coverage = Test Ka Report Card"**  
Jisme bataya jata hai ki kitne code lines test hue hain.  

### 🛠 **Command:**  
```bash
jest --coverage
```
👉 **Yeh ek report generate karega jo batayega ki kitna code test ho chuka hai.**  

---

### 🚀 **Final Recap:**  
1. **Jest = Just Easy Standard Testing**  
2. **Render -> Select -> Expect (Component Testing Formula)**  
3. **Mock = Fake but Controlled (Mock Function Trick)**  
4. **Act -> Fire -> Expect (Event Handling Formula)**  
5. **Mock API = Fake Server Response (API Call Testing Trick)**  
6. **Snapshot = Photo of UI (Snapshot Testing Memory Trick)**  
7. **Coverage = Test Ka Report Card (Code Coverage Trick)**  

Yeh tricks yaad rakho aur React testing easy ho jayegi! 💡🔥