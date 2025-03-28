# **🚀 JavaScript Event Loop – "Restaurant Kitchen Concept"**  

JavaScript **Single-Threaded** होता है, यानी एक बार में सिर्फ एक काम कर सकता है। लेकिन फिर भी यह **Asynchronous tasks (setTimeout, API calls, etc.)** को कैसे handle करता है? इसका जवाब है – **Event Loop**!  

---

## **🍽 Trick to Remember – "Restaurant Kitchen Concept"**  
Imagine एक **Restaurant Kitchen** है, जहाँ एक **Chef (JavaScript Engine)** खाना बना रहा है।  
- **Call Stack** → Chef की **Work Table** (जहाँ वो खाना बनाता है)  
- **Web APIs** → Kitchen के **Helper Staff** (जो long tasks handle करते हैं)  
- **Callback Queue** → तैयार **Order की Line** (जिसे Chef process करेगा)  
- **Event Loop** → **Manager** (जो Chef को बताएगा कि अगला कौन सा order लेना है)  

💡 **JavaScript में भी यही होता है:**  
✅ **Fast काम (Synchronous code)** – Chef तुरंत बना देता है (Call Stack में)।  
✅ **Slow काम (Asynchronous code)** – Helper Staff को भेज देता है (Web APIs में)।  
✅ **जब काम पूरा हो जाता है**, तो Manager (Event Loop) उसे Chef की Table पर भेजता है।  

---

## **✅ Event Loop in Action – Example**  
```javascript
console.log("🍔 Order Received!"); // 1️⃣

setTimeout(() => {
  console.log("🍕 Pizza Ready!"); // 4️⃣ (After 2 sec)
}, 2000);

console.log("🥤 Serving Drinks!"); // 2️⃣
```
### **💡 How it works?**
1️⃣ `"🍔 Order Received!"` – Call Stack में गया और तुरंत print हुआ।  
2️⃣ `setTimeout(2000)` – Web API को भेज दिया गया (Helper Staff)।  
3️⃣ `"🥤 Serving Drinks!"` – Call Stack में गया और print हो गया।  
4️⃣ 2 सेकंड बाद, Callback Queue में `"🍕 Pizza Ready!"` आया। Event Loop ने इसे Call Stack में डाला, और finally print हुआ!  

📌 **Conclusion:**  
👉 JavaScript पहले **Synchronous Code** execute करता है, फिर **Asynchronous Code को Event Loop** के ज़रिए Call Stack में डालता है!  

---

## **🔄 Step-by-Step Breakdown of Event Loop**  
| Step | Action | Example |
|------|--------|---------|
| 1️⃣ | **Call Stack** में Synchronous code execute होता है | `"🍔 Order Received!"` print होता है |
| 2️⃣ | **Asynchronous Code (setTimeout, API calls)** को Web APIs में भेजते हैं | `setTimeout(2000)` Web API में चला जाता है |
| 3️⃣ | बाकी Synchronous Code execute होता है | `"🥤 Serving Drinks!"` print होता है |
| 4️⃣ | Web API का काम पूरा होने के बाद, Callback Queue में function जाता है | 2 sec बाद `"🍕 Pizza Ready!"` Callback Queue में जाता है |
| 5️⃣ | **Event Loop चेक करता है कि Call Stack खाली है, फिर Callback Queue से Code को Execute करता है** | `"🍕 Pizza Ready!"` print होता है |

---

## **🔹 Microtasks vs Macrotasks – "VIP और Normal Orders"**  
JavaScript में **दो तरह की Task Queues होती हैं:**  
1️⃣ **Microtasks** → (VIP Orders) – जल्दी process होते हैं (e.g., `Promise.then()`, `MutationObserver`)  
2️⃣ **Macrotasks** → (Normal Orders) – बाद में process होते हैं (e.g., `setTimeout()`, `setInterval()`)  

💡 **Example:**  
```javascript
console.log("🍔 Order Received!"); 

setTimeout(() => console.log("🍕 Pizza Ready!"), 0); // Macrotask  
Promise.resolve().then(() => console.log("🍩 Dessert Ready!")); // Microtask  

console.log("🥤 Serving Drinks!");
```
👉 **Output:**  
```
🍔 Order Received!
🥤 Serving Drinks!
🍩 Dessert Ready!  ✅ (Microtask executes first)
🍕 Pizza Ready!  ✅ (Macrotask executes later)
```
🔹 **Key Point:** Microtasks हमेशा Macrotasks से पहले execute होते हैं!  

---

## **🎯 Final Summary – याद रखने का आसान तरीका**  
| Concept | Trick | Key Point |
|---------|-------|-----------|
| **Call Stack** | 👨‍🍳 "Chef की Work Table" | Synchronous Code यहीं execute होता है |
| **Web APIs** | 👨‍🍳🍽 "Helper Staff" | Asynchronous Tasks को handle करते हैं (setTimeout, API Calls) |
| **Callback Queue** | 🍽 "Orders की Line" | जब Task ready हो जाता है, तो यहाँ आता है |
| **Event Loop** | 🏃‍♂️ "Manager" | Check करता है कि Call Stack खाली है, तो Callback Queue से Task Execute करता है |
| **Microtask Queue** | ⚡ "VIP Orders" | (Faster) Promises, `process.nextTick()` |
| **Macrotask Queue** | 🐢 "Normal Orders" | (Slower) `setTimeout()`, `setInterval()` |

अब JavaScript का **Event Loop** कभी नहीं भूलेगा! 🚀🔥