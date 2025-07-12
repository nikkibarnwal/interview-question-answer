**Webpack me Multiple Entry Points ko kaise manage karte hain?**

---

## 🚪 Multiple Entry Points – Ek se zyada App Start Points

### 📌 Kya hota hai?

> Webpack me **multiple entry points** ka matlab hai — tumhara project ek nahi, **multiple JavaScript entry files** se start ho raha hai.

🎯 Ye useful hota hai jab tumhare paas **multi-page apps**, **admin panel + user site**, ya **widgets** ho jo alag-alag JS bundles chahte ho.

---

## 🧠 Trick to Remember:

> 🎯 **"Multiple Entry Points = Har gate (entry) ka apna bundle!"**  
> Alag-alag entry → alag-alag output bundles

---

## 🧰 Syntax in Webpack Config:

```js
module.exports = {
  entry: {
    home: "./src/home.js",
    admin: "./src/admin.js",
    contact: "./src/contact.js",
  },
  output: {
    filename: "[name].bundle.js", // 'home.bundle.js', 'admin.bundle.js', etc.
    path: __dirname + "/dist",
    clean: true,
  },
};
```

> 📦 Webpack automatically har entry point ke liye **alag bundle** generate karega!

---

## 🧪 Output:

| Entry Name | Input File         | Output File         |
| ---------- | ------------------ | ------------------- |
| `home`     | `./src/home.js`    | `home.bundle.js`    |
| `admin`    | `./src/admin.js`   | `admin.bundle.js`   |
| `contact`  | `./src/contact.js` | `contact.bundle.js` |

---

## 🔗 HTML Files Me Kaise Use Kare?

Tum `HtmlWebpackPlugin` ko multiple times use kar sakte ho:

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
  new HtmlWebpackPlugin({
    filename: "home.html",
    chunks: ["home"],
    template: "./src/templates/home.html",
  }),
  new HtmlWebpackPlugin({
    filename: "admin.html",
    chunks: ["admin"],
    template: "./src/templates/admin.html",
  }),
  new HtmlWebpackPlugin({
    filename: "contact.html",
    chunks: ["contact"],
    template: "./src/templates/contact.html",
  }),
];
```

> ✅ Har HTML file me sirf usi page ka bundle load hoga — performance bhi better!

---

## 💡 Use Cases:

| Use Case                  | Benefit                            |
| ------------------------- | ---------------------------------- |
| Multi-page websites       | Alag JS bundles for each page      |
| Admin panel + public site | Separate builds                    |
| Widgets ya reusable apps  | Har widget ka apna bundle          |
| Faster load               | Sirf zaroori code hi load hota hai |

---

## 🎯 Summary:

| Concept            | Explanation                                   |
| ------------------ | --------------------------------------------- |
| `entry` as object  | Multiple keys = multiple start files          |
| `output.filename`  | `[name].bundle.js` → har entry ka apna bundle |
| HTML plugin config | Multiple times call with `chunks: ['xyz']`    |
| Use Case           | Multi-page app / separate dashboards          |

---
