# **🚀 Callbacks, Promises, Async/Await – "Food Delivery Concept"**  

JavaScript **Asynchronous Programming** को **तीन तरीकों से** handle करता है:  
1️⃣ **Callbacks** – "Restaurant Call for Order Pickup" 📞  
2️⃣ **Promises** – "Zomato Order Tracking" 🍽  
3️⃣ **Async/Await** – "Swiggy Instant Order Status" 🚀  

---

## **🍽 Trick to Remember – "Food Delivery Concept"**  

| Concept | Real-Life Example |
|---------|------------------|
| **Callbacks** | आपने Restaurant में order किया, और जब खाना तैयार हो गया, तो **Chef ने आपको call किया (Callback Function)** 📞 |
| **Promises** | आपने Zomato से order किया, अब आप **Order Tracking** देख सकते हैं (Pending → Fulfilled/Rejected) 🍽 |
| **Async/Await** | आपने Swiggy से order किया, और बिना रुकावट के **सीधा Notification आता है** कि Order तैयार है! 🚀 |

---

## **🔹 1️⃣ Callbacks – "Restaurant Call for Order Pickup"**  

**Callbacks** में हम एक function को **दूसरे function में argument की तरह pass करते हैं**, ताकि वो बाद में execute हो।  

💡 **Example:**  
```javascript
function orderFood(callback) {
  console.log("🍔 Order Placed!");
  setTimeout(() => {
    console.log("🍕 Order Ready!");
    callback(); // जब खाना बन जाएगा, तब callback को call करेंगे
  }, 2000);
}

orderFood(() => {
  console.log("🚚 Order Picked Up!"); 
});
```
👉 **Output:**  
```
🍔 Order Placed!
🍕 Order Ready!  (After 2 sec)
🚚 Order Picked Up!
```
📌 **Problem with Callbacks?**  
- अगर एक के अंदर एक callback रखना पड़े, तो **Callback Hell (Pyramid of Doom)** बन जाता है!  

💡 **Example of Callback Hell:**  
```javascript
orderFood(() => {
  makePayment(() => {
    deliverOrder(() => {
      console.log("🎉 Order Completed!");
    });
  });
});
```
❌ **Difficult to Read & Maintain!**  

---

## **🔹 2️⃣ Promises – "Zomato Order Tracking"**  

**Promises** JavaScript में Asynchronous Code को **ज़्यादा readable और maintainable** बनाता है।  
🔹 **Promise के तीन states होते हैं:**  
- 🟡 **Pending** → Order अभी तैयार नहीं हुआ  
- ✅ **Fulfilled** → Order Ready  
- ❌ **Rejected** → Order Cancel  

💡 **Example:**  
```javascript
function orderFood() {
  return new Promise((resolve, reject) => {
    console.log("🍔 Order Placed!");
    setTimeout(() => {
      let success = true; // Try changing this to false to see rejection
      if (success) {
        resolve("🍕 Order Ready!"); // Order successful
      } else {
        reject("❌ Order Cancelled!"); // Order failed
      }
    }, 2000);
  });
}

orderFood()
  .then((order) => {
    console.log(order); // ✅ If order is ready
    console.log("🚚 Order Picked Up!");
  })
  .catch((error) => {
    console.log(error); // ❌ If order is cancelled
  });
```
👉 **Output (if success = true):**  
```
🍔 Order Placed!
🍕 Order Ready!  (After 2 sec)
🚚 Order Picked Up!
```
👉 **Output (if success = false):**  
```
🍔 Order Placed!
❌ Order Cancelled!  (After 2 sec)
```
📌 **Benefit of Promises?**  
✅ Callback Hell को **solve** करता है  
✅ Code ज़्यादा **clean और readable** बन जाता है  

---

## **🔹 3️⃣ Async/Await – "Swiggy Instant Order Status"**  

Async/Await, Promises का **easy & cleaner way** है! इसमें `await` keyword **Promise resolve होने तक wait करता है**, जिससे code ज़्यादा readable बन जाता है।  

💡 **Example:**  
```javascript
function orderFood() {
  return new Promise((resolve) => {
    console.log("🍔 Order Placed!");
    setTimeout(() => {
      resolve("🍕 Order Ready!");
    }, 2000);
  });
}

async function processOrder() {
  console.log("🛍 Waiting for Order...");
  let order = await orderFood(); // ⏳ Waits until Promise resolves
  console.log(order);
  console.log("🚚 Order Picked Up!");
}

processOrder();
```
👉 **Output:**  
```
🛍 Waiting for Order...
🍔 Order Placed!
🍕 Order Ready!  (After 2 sec)
🚚 Order Picked Up!
```
📌 **Benefit of Async/Await?**  
✅ **No Callbacks, No `.then()`, No `.catch()`** → ज़्यादा **clean code**  
✅ **Readable & Easy to Debug**  

---

## **🎯 Final Summary – याद रखने का आसान तरीका**  

| Concept | Trick | Key Point |
|---------|-------|-----------|
| **Callbacks** | 📞 "Restaurant Call for Pickup" | Function inside function, लेकिन Callback Hell का problem |
| **Promises** | 🍽 "Zomato Order Tracking" | `.then()` & `.catch()` के साथ Asynchronous Handling |
| **Async/Await** | 🚀 "Swiggy Instant Order" | Promises को readable बनाने का best तरीका |

अब **Callbacks, Promises और Async/Await** का Concept कभी नहीं भूलेगा! 😃 🚀