चलो आसान, trick-based और Hindi-English mix में समझते हैं:  
**Tree Shaking kya hai aur Webpack config me ise enable kaise karte hain?**

---

## 🌳 Tree Shaking – “Use What You Need, Throw the Rest!”

### 📌 Kya hota hai?

> **Tree Shaking** ek optimization technique hai jisme **unused JavaScript code ko remove** kar diya jata hai final bundle se.

🎯 Ye sirf **ES6 module system (import/export)** ke saath kaam karta hai.

---

### 🧠 Trick to Remember:

> 🪓 **"Tree Shaking = Code ki unnecessary branches ko kaat dena!"**  
Sirf wahi code rakho jo actual me use ho raha ho ✅

---

## 🤔 Without Tree Shaking Kya Hota Hai?

Agar tum ek library se 1 function use kar rahe ho, lekin pura module import kiya — to pura code bundle me chala jata hai, even unused code bhi!

```js
// utils.js
export const used = () => console.log("used");
export const unused = () => console.log("unused");

// index.js
import { used } from './utils';
used();
```

> ✅ Tree shaking enabled hone par: `unused()` function bundle me nahi jayega.

---

## ⚙️ Tree Shaking Enable Karne ke Liye Webpack Config Me Kya Karna Hota Hai?

### ✅ 1. **Use ES Modules (import/export only)**  
Tree shaking sirf **ES6 modules** ke saath kaam karta hai. `require()` use mat karo.

```js
// ✅ Good
import { something } from './module';

// ❌ Bad
const something = require('./module');
```

---

### ✅ 2. **Set `mode: 'production'` in Webpack config**

```js
module.exports = {
  mode: 'production', // Yeh automatically tree shaking enable karega
};
```

### ✅ 3. **Set `"sideEffects": false` in `package.json`**

```json
{
  "name": "my-app",
  "sideEffects": false
}
```

🧠 Trick: `"sideEffects": false` ka matlab hai — "Mera koi file load hone par kuch extra kaam nahi karta"  
Agar karta hai (like CSS), to specify karo:

```json
"sideEffects": ["*.css"]
```

---

## 🔍 Bonus: Analyze Tree Shaking

1. Install plugin:

```bash
npm install --save-dev webpack-bundle-analyzer
```

2. Use it in Webpack config:

```js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

plugins: [
  new BundleAnalyzerPlugin()
]
```

🧠 Isse pata chalega — kaunse modules bundle me aa rahe hain, aur kaunse nahi.

---

## 📦 Final Summary Table

| Feature                | Needed for Tree Shaking               |
|------------------------|----------------------------------------|
| Module System          | ✅ ES6 `import/export` only            |
| Webpack Mode           | ✅ `mode: 'production'`                |
| Side Effects           | ✅ `"sideEffects": false` in package   |
| Dead Code Elimination  | ✅ Webpack automatically karta hai     |

---

## 🎯 Use Case:

- Libraries (e.g. Lodash, Moment.js) ke unused parts ko bundle se hata do  
- Smaller bundle = Faster load 🚀

---
