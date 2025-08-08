Lets understand Promise with **real-life relatable examples**

---

## **1. `Promise.all()` – सब काम होने के बाद ही आगे बढ़ना**

**Logic:** सभी promises resolve होंगे तो ही final result मिलेगा। अगर एक भी fail हुआ → तुरंत reject कर देगा।

**Real Life Example:**
सोचो आप pizza party कर रहे हो 🍕

- Pizza तैयार होना
- Cold drink लाना
- Dessert तैयार करना

**तीनों काम पूरे होने के बाद ही party start होगी**। अगर इनमें से कोई एक fail हो गया (जैसे dessert गिर गया) → party cancel।

**Code Example:**

```javascript
const pizza = new Promise((resolve) =>
  setTimeout(() => resolve("Pizza Ready 🍕"), 1000)
);
const drink = new Promise((resolve) =>
  setTimeout(() => resolve("Drink Ready 🥤"), 2000)
);
const dessert = new Promise((resolve) =>
  setTimeout(() => resolve("Dessert Ready 🍰"), 1500)
);

Promise.all([pizza, drink, dessert])
  .then((results) => console.log("Party Start 🎉", results))
  .catch((err) => console.log("Party Cancel ❌", err));
```

---

## **2. `Promise.race()` – जो सबसे पहले finish होगा वही result देगा**

**Logic:** सबसे fast promise result देगा, बाकी ignore होंगे।

**Real Life Example:**
दो food delivery apps से order किया — जो पहले deliver करेगा वही खाएंगे 😄।

**Code Example:**

```javascript
const zomato = new Promise((resolve) =>
  setTimeout(() => resolve("Zomato Delivered 🚴"), 2000)
);
const swiggy = new Promise((resolve) =>
  setTimeout(() => resolve("Swiggy Delivered 🛵"), 1000)
);

Promise.race([zomato, swiggy]).then((winner) =>
  console.log("Winner is:", winner)
);
```

---

## **3. `Promise.allSettled()` – सबका result चाहिए, fail हो या pass**

**Logic:** हर promise का status (fulfilled/rejected) बताता है, कोई fail हो तो भी बाकी चलते रहेंगे।

**Real Life Example:**
Exam के बाद result list चाहिए → कोई pass, कोई fail लेकिन सभी का status चाहिए।

**Code Example:**

```javascript
const math = new Promise((resolve) =>
  setTimeout(() => resolve("Math Pass ✅"), 1000)
);
const science = new Promise((_, reject) =>
  setTimeout(() => reject("Science Fail ❌"), 1500)
);
const english = new Promise((resolve) =>
  setTimeout(() => resolve("English Pass ✅"), 500)
);

Promise.allSettled([math, science, english]).then((results) =>
  console.log("Exam Results:", results)
);
```

---

## **4. `Promise.any()` – जैसे ही कोई एक succeed होगा, result मिल जाएगा**

**Logic:** First fulfilled promise का result return करता है, बाकी ignore।
अगर सब fail → AggregateError देगा।

**Real Life Example:**
3 दोस्तों से पैसे मांगना 💰 – जो पहले देगा, उससे काम हो जाएगा।

**Code Example:**

```javascript
const friend1 = new Promise((_, reject) =>
  setTimeout(() => reject("Friend 1 Broke ❌"), 1000)
);
const friend2 = new Promise((resolve) =>
  setTimeout(() => resolve("Friend 2 Gave Money 💵"), 2000)
);
const friend3 = new Promise((resolve) =>
  setTimeout(() => resolve("Friend 3 Gave Money 💵"), 1500)
);

Promise.any([friend1, friend2, friend3])
  .then((result) => console.log("Got Help:", result))
  .catch((err) => console.log("Nobody helped 😢", err));
```

---

## **Remember Trick:**

| Method         | याद रखने का तरीका      | Fail Handling                            |
| -------------- | ---------------------- | ---------------------------------------- |
| **all**        | "All pass = success"   | 1 fail → सब fail                         |
| **race**       | "Fastest wins"         | जो पहले resolve/reject होगा वही result   |
| **allSettled** | "Sabka status chahiye" | कोई fail भी चलेगा                        |
| **any**        | "Koi ek hero"          | First success → success, सब fail → error |

---
