# **🚀 Higher-Order Functions & Functional Programming – "Chef & Recipe Concept"**  

JavaScript में **functions को variables की तरह treat किया जाता है**, यानी:  
✅ आप एक function को **argument** की तरह पास कर सकते हो  
✅ आप एक function को **return** कर सकते हो  

इससे हमें **Higher-Order Functions** और **Functional Programming** का फायदा मिलता है!  

---

## **👨‍🍳 Trick to Remember – "Chef & Recipe Concept"**  

| Concept | Real-Life Example |
|---------|------------------|
| **Higher-Order Function** | 👨‍🍳 "MasterChef Recipe" – Chef (HOF) एक recipe (function) लेता है और उसे modify करता है |
| **Functional Programming** | 🍕 "Pizza-Making Process" – हर step में नया ingredient जोड़ते हैं, लेकिन original ingredient change नहीं होता (Immutable Data) |

---

## **🔹 1️⃣ Higher-Order Functions – "MasterChef Recipe"**  

अगर **कोई function एक दूसरे function को argument के रूप में लेता है या function return करता है**, तो उसे **Higher-Order Function (HOF)** कहते हैं।  

💡 **Example:**  
👉 आप **Restaurant में MasterChef** से कहो – "Pizza बनाओ, लेकिन Extra Cheese डालना!"  

```javascript
// Higher-Order Function: Chef को instruction देना
function masterChef(recipe) {
  return function (extra) {
    console.log(`🍕 Making ${recipe} with ${extra}`);
  };
}

// Using the HOF
const makePizza = masterChef("Pizza"); // Function return हुआ
makePizza("Extra Cheese"); // Call किया

const makeBurger = masterChef("Burger"); 
makeBurger("Extra Mayo"); 
```
👉 **Output:**  
```
🍕 Making Pizza with Extra Cheese
🍔 Making Burger with Extra Mayo
```
📌 **Higher-Order Functions के फायदे?**  
✅ **Code Reusability** – एक ही function को अलग-अलग तरीके से use कर सकते हैं  
✅ **More Readable** – Code clean और short हो जाता है  

---

## **🔹 2️⃣ Functional Programming – "Pizza-Making Process"**  

**Functional Programming** का मतलब होता है – **Immutable Data (data को modify नहीं करना), Pure Functions (कोई side-effect नहीं), और Reusability**।  

💡 **Example:**  
👉 Pizza बनाने में हर step में नया ingredient जोड़ते हैं, लेकिन original dough को modify नहीं करते!  

```javascript
// Pure Function: Ingredients को Modify नहीं करेगा
function addIngredient(pizza, ingredient) {
  return [...pizza, ingredient]; // नया pizza array return करेगा
}

const basePizza = ["Dough", "Sauce"];
const cheesePizza = addIngredient(basePizza, "Cheese");
const veggiePizza = addIngredient(basePizza, "Veggies");

console.log(cheesePizza); // ['Dough', 'Sauce', 'Cheese']
console.log(veggiePizza); // ['Dough', 'Sauce', 'Veggies']
console.log(basePizza); // ['Dough', 'Sauce'] (Original unchanged ✅)
```
📌 **Functional Programming के फायदे?**  
✅ **Immutable Data** – Original data change नहीं होता  
✅ **Predictability** – हर function एक ही input पर हमेशा same output देगा  
✅ **No Side Effects** – Global state को modify नहीं करता  

---

## **🔹 3️⃣ Common Higher-Order Functions – "Chef Toolkit"**  

JavaScript में कुछ in-built **Higher-Order Functions** हैं जो Functional Programming को आसान बनाते हैं:  

| Function | Purpose |
|----------|---------|
| `map()` | Array के हर element पर function apply करके नया array return करता है |
| `filter()` | कुछ elements को condition के हिसाब से चुनता है |
| `reduce()` | Array के elements को एक single value में reduce करता है |

💡 **Example: Restaurant Order List**  
```javascript
const orders = [100, 200, 300, 400];

// 1️⃣ map() – Tax Add करके नया Bill बनाएंगे
const billWithTax = orders.map(order => order * 1.1);
console.log(billWithTax); // [110, 220, 330, 440]

// 2️⃣ filter() – High Value Orders निकालेंगे
const bigOrders = orders.filter(order => order > 250);
console.log(bigOrders); // [300, 400]

// 3️⃣ reduce() – Total Bill निकालेंगे
const total = orders.reduce((sum, order) => sum + order, 0);
console.log(total); // 1000
```
📌 **Key Benefits of HOFs & Functional Programming?**  
✅ **Less Code, More Power** – One-liners में Complex Tasks  
✅ **Immutable & Pure Functions** – Safe & Bug-Free Code  
✅ **Better Readability & Maintainability** – Debugging आसान  

---

## **🎯 Final Summary – याद रखने का आसान तरीका**  

| Concept | Trick | Key Point |
|---------|-------|-----------|
| **Higher-Order Functions** | 👨‍🍳 "MasterChef Recipe" | Functions को argument में लेना या return करना |
| **Functional Programming** | 🍕 "Pizza-Making Process" | Immutable Data, Pure Functions & Reusability |
| **map()** | 📝 "Menu Update" | Array modify करके नया array return करता है |
| **filter()** | 🍽 "Order Selection" | कुछ elements निकालता है |
| **reduce()** | 💰 "Total Bill" | Array को एक value में reduce करता है |

अब **Higher-Order Functions और Functional Programming** कभी नहीं भूलोगे! 🚀🔥