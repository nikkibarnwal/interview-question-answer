## 🎯 **`z-index` Property in CSS - Simple Explanation**  

CSS में `z-index` property elements की **stacking order** (ऊपर-नीचे की position) को define करने के लिए use होती है। जब दो या ज्यादा elements एक-दूसरे के ऊपर आते हैं, तो `z-index` बताता है कि कौन-सा element ऊपर दिखेगा और कौन-सा नीचे।  

---

### 🔹 **कैसे काम करता है `z-index`?**  

- **By Default:** Elements जिस order में HTML में लिखे होते हैं, उसी order में ऊपर-नीचे दिखते हैं।  
- **Higher `z-index` value = ऊपर दिखने वाला element**  
- **Lower `z-index` value = नीचे जाने वाला element**  
- अगर किसी element का `z-index` **higher** होगा, तो वह दूसरे elements के ऊपर आएगा।  

---

### 🚀 **Easy Trick to Remember**  
🛏️ "बिस्तर में चादरें (layers) कैसे होती हैं? जो सबसे ऊपर है, वो दिखती है, नीचे वाली छिप जाती हैं!"  

---

## 🎯 **How `z-index` Works with Examples**  

### 1️⃣ **Default Stacking Order** (Without `z-index`)  
👉 अगर हम `z-index` ना दें, तो elements उनके HTML order के हिसाब से दिखेंगे।  

```css
.box {
  width: 100px;
  height: 100px;
  position: absolute;
}

.red {
  background-color: red;
  top: 50px;
  left: 50px;
}

.blue {
  background-color: blue;
  top: 70px;
  left: 70px;
}
```
🔹 **जो element बाद में लिखा गया (blue), वह red के ऊपर आएगा।**

---

### 2️⃣ **Using `z-index`** (Higher value = ऊपर)  
```css
.red {
  background-color: red;
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 2; /* Higher z-index, so it will be on top */
}

.blue {
  background-color: blue;
  position: absolute;
  top: 70px;
  left: 70px;
  z-index: 1; /* Lower z-index, so it will be below */
}
```
🔹 **अब Red box ऊपर रहेगा क्योंकि उसका `z-index` ज्यादा है!**

---

### 3️⃣ **Negative `z-index` Values**  
अगर `z-index` negative होगा, तो element **पीछे चला जाएगा**।  
```css
.red {
  background-color: red;
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: -1; /* पीछे चला जाएगा */
}
```

---

### 🎯 **Important Rules of `z-index`**
1️⃣ **`z-index` सिर्फ positioned elements पर काम करता है** (`position: relative;`, `absolute;`, `fixed;`, या `sticky;` वाली elements पर)।  
2️⃣ **Higher `z-index` वाला element ऊपर दिखाई देगा**।  
3️⃣ **अगर दो elements का `z-index` same है, तो जो HTML में बाद में लिखा गया है, वह ऊपर आएगा।**  
4️⃣ **Parent Element के `z-index` से Child Elements प्रभावित होते हैं** (Parent की priority ज्यादा होगी)।  

---

### 📌 **Quick Summary Table**  

| `z-index` Value  | Behavior |
|------------------|----------|
| **Higher (e.g., `z-index: 10;`)** | Element सबसे ऊपर दिखेगा |
| **Lower (e.g., `z-index: 1;`)** | Element नीचे रहेगा |
| **Negative (e.g., `z-index: -1;`)** | Element सबसे पीछे चला जाएगा |
| **Default (`z-index` not set)** | HTML order के हिसाब से ऊपर-नीचे दिखेगा |

---

### 🔥 **Best Way to Remember**
> 🏠 "ज़मीन पर रखे सामान की तरह, जो ऊपर रखा गया है, वो पहले दिखता है!"  
> 🎂 "Cake के Layers की तरह, सबसे ऊपर वाली Layer सबसे पहले दिखेगी!"  

अब `z-index` समझना आपके लिए आसान हो गया! 🚀😃