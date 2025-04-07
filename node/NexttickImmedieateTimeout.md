What are process.nextTick(), setImmediate(), and setTimeout()? What’s the difference?

### `process.nextTick()`, `setImmediate()`, aur `setTimeout()`  

---

## 🔄 Ye teen kya hain?

Ye teeno functions Node.js mein use hote hain **asynchronous tasks schedule karne ke liye** — matlab "kaam baad mein karna hai", lekin kis order mein karein, usmein farak hota hai.

---

## 🍕 Real-Life Analogy: Pizza Shop!

Imagine ek chef ke paas 3 tarah ke reminders hain:

| Function            | Reminder Type                        | Hindi Style Explanation                             |
|---------------------|--------------------------------------|------------------------------------------------------|
| `process.nextTick()` | 🛎️ **Microwave Reminder**         | "Jo kaam **turant next moment** mein karna hai"      |
| `setImmediate()`     | 🔔 **Wall Clock Reminder**          | "Kaam event loop complete hone ke baad karna hai"    |
| `setTimeout()`       | ⏰ **Alarm Clock** (delay wala)      | "Itne time baad kaam karna hai (min. 0ms bhi ho sakta)" |

---

## 🧪 Let’s See Them in Code:

```js
console.log("Start");

process.nextTick(() => {
  console.log("➡️ nextTick");
});

setTimeout(() => {
  console.log("⏰ setTimeout 0ms");
}, 0);

setImmediate(() => {
  console.log("🔔 setImmediate");
});

console.log("End");
```

🧠 Output:
```
Start
End
➡️ nextTick
🔔 setImmediate   // OR ⏰ setTimeout — ye dono kabhi kabhi order change karte hain
⏰ setTimeout 0ms
```

---

### 🧠 Why This Order?

| Function            | Kab execute hota hai?                                                                 |
|---------------------|----------------------------------------------------------------------------------------|
| `process.nextTick()` | 🧠 **Current phase ke turant baad** (microtasks queue)                                 |
| `setImmediate()`     | 🕓 **Event loop ke current phase ke baad** (check phase)                               |
| `setTimeout()`       | ⌛ **Delay ke baad** (timer complete hone ke baad event loop mein aata hai)           |

---

## 🧾 Summary Table:

| Function            | Execution Time                        | Best Used For                                |
|---------------------|----------------------------------------|----------------------------------------------|
| `process.nextTick()` | Sabse pehle (microtask queue)         | Urgent kaam jo next line ke turant baad chahiye |
| `setImmediate()`     | Event loop ke baad                    | Jab kaam current I/O ke baad chahiye         |
| `setTimeout()`       | Specific delay ke baad                | Timed tasks, retries, or timeouts            |

---

### 🧠 Easy Trick to Remember:

> **“Tick – Turant”**  
> **“Immediate – Thoda baad”**  
> **“Timeout – Time ke baad”**

### 🍽️ Chef Analogy Wrap-up:

| Function            | Chef’s Task Style                                           |
|---------------------|-------------------------------------------------------------|
| `nextTick()`         | “Abhi kaam karna hai jaise hi haath khali hua”             |
| `setImmediate()`     | “Current round ke baad kar lenge”                          |
| `setTimeout()`       | “Alarm lagake yaad dila dena, thoda baad”                  |

---
 💥