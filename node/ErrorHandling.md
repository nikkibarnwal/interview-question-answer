Aaja bhai! Ab ek important topic cover karte hain — **"Error Handling in Node.js"** 🛠️  
real-life analogy, aur yaad rehne wali trick ke saath 😎

---

## ❓ **How do you handle errors in Node.js?**

> Errors toh kahin bhi aa sakte hain — file read karte waqt, database se data laate waqt, ya API call fail hone pe.

**Node.js mein 3 major ways hote hain errors ko handle karne ke:**

1. ✅ **Try-Catch** (for synchronous & async/await code)  
2. ✅ **Error-first Callbacks** (Node-style functions)  
3. ✅ **Global Error Handlers** (for unhandled stuff)

---

## 🍽️ Analogy: Chef in a Kitchen 👨‍🍳🔥

Socho ek chef pizza bana raha hai.  
Agar oven garam na ho, ya cheese khatam ho jaye — toh agar **chef alert nahi hua**, kitchen blast ho sakta hai! 💥

Toh kya karta hai chef?

➡️ **Try-catch** karta hai!  
➡️ **Manager ko batata hai (callback error)**  
➡️ **Emergency exit hota hai (global error handler)**

---

## 1️⃣ ✅ **Try-Catch** (Best for async/await or sync code)

```js
try {
  let data = await readFileAsync('menu.txt');
  console.log(data);
} catch (err) {
  console.error('File read failed:', err.message);
}
```

> Jaise: Chef ne oven chalaya, try kiya — nahi chala, toh panic mein aane ke bajaye **catch** mein handle kiya calmly 🍕

---

## 2️⃣ ✅ **Error-First Callback Pattern**

Node.js mein bohot saare functions aise hote hain jo error-first callback use karte hain:

```js
fs.readFile('data.json', 'utf-8', (err, data) => {
  if (err) {
    console.error("File read error:", err.message);
    return;
  }
  console.log(data);
});
```

> Pehle check karo: **err hai kya?** Agar hai toh handle karo — nahi toh kaam chalu rakho ✔️

---

## 3️⃣ ✅ **Global Error Handling (Backup plan)**

Kabhi-kabhi koi error escape ho jata hai — uske liye Node mein hota hai global handler:

```js
process.on('uncaughtException', (err) => {
  console.error("Uncaught Exception:", err);
  // Optional: gracefully exit
});
```

```js
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
```

> Jaise kitchen mein fire alarm 🔥 — kuch bhi out of control hua, toh sabko alert milta hai!

---

## 🎯 Summary Table:

| Error Type            | Use When                        | Analogy                            |
|------------------------|----------------------------------|-------------------------------------|
| Try-Catch              | Sync or Async/Await code        | Chef ne kaam shuru karne se pehle tayyari ki |
| Error-first Callback   | Node-style functions            | Assistant se bola: “error ho toh pehle bata” |
| Global Error Handler   | Unexpected crashes              | Emergency fire alarm system 🚨     |

---

## 🧠 Easy Trick to Remember:

> **Error handling = “Chef + Fire alarm + First-aid box”**  
> ✔️ Pehle try karo (try-catch)  
> ✔️ Assistant se error check karwao (callback)  
> ✔️ Agar kuch miss ho jaye toh fire alarm baja do (global handler)

---
