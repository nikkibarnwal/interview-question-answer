Agar `findBy...` query se element nahi milta hai, toh **Jest ek error throw karega** jo kuch is tarah dikhega:  

### **🔥 Error Message Example:**
```
Unable to find an element with the text: Submit. 
This could be because the text is not present, or the element is not yet rendered.
```

### **🔎 Explanation:**  
- `findBy` **async query hoti hai**, toh yeh **default timeout (1000ms)** tak wait karega.  
- Agar **timeout ke andar element nahi mila**, toh **error throw hoga**.  

---

## **🛠 Example with `findByText` Error**
```jsx
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("findByText fails if element is not found", async () => {
  render(<MyComponent />);
  
  await screen.findByText("Submit"); // ❌ Yeh error throw karega agar "Submit" nahi mila
});
```
👉 **Agar "Submit" text DOM me available nahi hai, toh test fail hoga.**  

---

## **🛠 How to Handle Errors Gracefully?**
### **✅ 1. Try-Catch Use Karke**
Agar aap `findBy` use kar rahe ho aur error handle karna chahte ho, toh `try-catch` use kar sakte ho:  

```jsx
test("handle findByText error", async () => {
  render(<MyComponent />);
  
  try {
    await screen.findByText("Submit");
  } catch (error) {
    console.log("Element not found!", error.message);
  }
});
```
👉 **Yeh test fail nahi karega, balki error ko gracefully handle karega.**  

---

### **✅ 2. Timeout Increase Karna (Agar API Se Data Aa Raha Ho)**
Agar element **delay se render ho raha hai** (jaise API call ke baad), toh aap **timeout badha sakte ho**:  

```jsx
await screen.findByText("Submit", {}, { timeout: 3000 });
```
👉 **Yeh `3000ms` tak wait karega element ke aane ka.**  

---

### **📌 Key Takeaways**
1️⃣ `findBy` async hai, agar element nahi milta toh **error throw karega**.  
2️⃣ **Default timeout 1000ms hota hai**, par aap isko badha sakte ho.  
3️⃣ `try-catch` ka use karke **errors handle** kar sakte ho.  
4️⃣ Agar element ho sakta hai ki exist na kare, toh **`queryBy` use karo**, jo `null` return karega error ki jagah.  

---

### **🔥 Trick to Remember:**  
👉 **"Find Waits, But Fails If Not Found!"**