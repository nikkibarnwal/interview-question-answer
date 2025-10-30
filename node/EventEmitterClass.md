Aaja bhai, ab baat karte hain ek **superstar concept** ki —  
🎤 **EventEmitter in Node.js** — jo Node ke **event-driven** nature ka king hai!

Jaise hamesha, Hindi-English mix mein, mast example + analogy ke saath, taaki easily yaad ho jaye 🔥

---

## ❓ What is EventEmitter in Node.js?

> Node.js ek **event-driven architecture** follow karta hai —  
> iska matlab:  
> **Koi kaam hone par event trigger hota hai** → aur koi function us par react karta hai 🎯

> **EventEmitter** is a class in Node.js which lets you:

- 🔔 Emit (trigger) custom events
- 👂 Listen (handle) those events

---

## 🔔 Real-Life Analogy: School Bell System 🛎️

> Socho ek **school bell** lagayi gayi hai:
>
> - Jab bell bajti hai (event emit hota hai)
> - Tab students (listeners) react karte hain: class chhod ke nikal jaate hain 🚶‍♂️

> **Bell = EventEmitter**  
> **Students = Listeners/Handlers**

---

## ✅ How to Use EventEmitter:

```js
const EventEmitter = require("events");

// 1️⃣ Create instance
const emitter = new EventEmitter();

// 2️⃣ Add event listener
emitter.on("bellRing", () => {
  console.log("🚶‍♂️ Students left the class");
});

// 3️⃣ Emit the event
emitter.emit("bellRing");
```

### 🧾 Output:

```
🚶‍♂️ Students left the class
```

> Jab `bellRing` event emit hua, listener ne turant kaam kar diya ✅

---

## 🛠️ Real Use-Case Example: Login Event

```js
const EventEmitter = require("events");
const eventBus = new EventEmitter();

// Listener
eventBus.on("userLoggedIn", (user) => {
  console.log(`📩 Welcome email sent to: ${user.email}`);
});

// Trigger
eventBus.emit("userLoggedIn", { email: "hello@chai.dev" });
```

### 🧾 Output:

```
📩 Welcome email sent to: hello@chai.dev
```

---

## 📘 Common Methods:

| Method              | Use Kya Hai                 |
| ------------------- | --------------------------- |
| `on(event, fn)`     | Event listener add karo     |
| `emit(event, data)` | Event trigger karo          |
| `once(event, fn)`   | Sirf ek baar listener chale |
| `removeListener()`  | Listener hatao              |

---

## 🎯 Summary Table:

| Concept        | Real-life Analogy           | Node.js Action   |
| -------------- | --------------------------- | ---------------- |
| Emit event     | Bell bajana                 | `emitter.emit()` |
| Listen event   | Student bell pe react karna | `emitter.on()`   |
| One-time react | Sirf pehli bell pe utthna   | `emitter.once()` |

---

## 🧠 Easy Trick to Remember:

> **EventEmitter = Bell System 🔔 + Reaction System**  
> ✔ Bell bajao → kaam shuru ho jaata hai  
> ✔ Multiple bells = multiple triggers  
> ✔ Students = listener functions who act on signal

---

## 🧪 Bonus: Custom Class with EventEmitter

```js
const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("📚 Class started");
    this.emit("bellRing");
  }
}

const school = new School();

school.on("bellRing", () => {
  console.log("🚶‍♂️ Students go home");
});

school.startPeriod();
```

---
