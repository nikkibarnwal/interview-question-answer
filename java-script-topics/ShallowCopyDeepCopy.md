# **🔹 Shallow Copy vs Deep Copy in JavaScript – आसान भाषा में 🚀**

👉 जब हम एक object या array को **copy** करते हैं, तो यह दो तरीके से हो सकता है:  
1️⃣ **Shallow Copy (ऊपरी सतह की कॉपी)** – केवल top-level properties copy होती हैं, nested objects reference ही रहते हैं।  
2️⃣ **Deep Copy (गहरी कॉपी)** – पूरी object structure को copy किया जाता है, including nested objects।

✅ **Shallow Copy → सिर्फ ऊपर-ऊपर copy**  
✅ **Deep Copy → पूरा object copy, कोई reference नहीं बचता**

---

## **🔹 1. Shallow Copy (ऊपरी सतह की कॉपी)**

👉 **Shallow Copy में nested objects का reference copy होता है।**  
👉 **अगर original object के अंदर किसी nested object को modify करें, तो copied object में भी change होगा!**

### **Example: Shallow Copy using `Object.assign()`**

```javascript
const original = {
  name: "Amit",
  address: {
    city: "Delhi",
    pincode: 110001,
  },
};

const copy = Object.assign({}, original);

copy.name = "Rahul"; // ✅ Top-level change (कोई problem नहीं)
copy.address.city = "Mumbai"; // ⚠ Nested object change हो गया

console.log(original.address.city); // ❌ "Mumbai" (original भी बदल गया!)
console.log(copy.address.city); // ✅ "Mumbai"
```

👉 **Nested object (`address`) का reference copy हुआ, इसलिए original object भी change हो गया।**  
👉 **यह shallow copy है, क्योंकि यह केवल top-level properties की copy करता है।**

### **Shallow Copy Methods**

| Method                     | Shallow Copy करता है? | Nested Objects Safe? |
| -------------------------- | --------------------- | -------------------- |
| `Object.assign({}, obj)`   | ✅ हाँ                | ❌ नहीं              |
| `spread operator {...obj}` | ✅ हाँ                | ❌ नहीं              |

---

## **🔹 2. Deep Copy (गहरी कॉपी) – पूरा object copy होता है**

👉 **Deep Copy में nested objects का नया copy बनता है, इसलिए original object change नहीं होता।**  
👉 **इसमें कोई reference नहीं बचता।**

### **Example: Deep Copy using `JSON.parse(JSON.stringify())`**

```javascript
const original = {
  name: "Amit",
  address: {
    city: "Delhi",
    pincode: 110001,
  },
};

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Mumbai"; // ✅ Only deepCopy object change होगा

console.log(original.address.city); // ✅ "Delhi" (original सुरक्षित है)
console.log(deepCopy.address.city); // ✅ "Mumbai"
```

👉 **यह deep copy है, क्योंकि यह nested objects का reference नहीं रखता।**

---

### **🔹 Deep Copy Methods**

| Method                            | Deep Copy करता है? | कब Use करें?            |
| --------------------------------- | ------------------ | ----------------------- |
| `JSON.parse(JSON.stringify(obj))` | ✅ हाँ             | Simple objects & arrays |
| `structuredClone(obj)`            | ✅ हाँ             | Modern browsers में     |
| `lodash.cloneDeep(obj)`           | ✅ हाँ             | Complex objects         |

---

## **🔹 3. `structuredClone()` – Best Deep Copy Method**

👉 Modern JavaScript में, `structuredClone()` method directly deep copy बना सकता है।

```javascript
const original = { name: "Amit", address: { city: "Delhi" } };
const deepCopy = structuredClone(original);

deepCopy.address.city = "Mumbai";

console.log(original.address.city); // ✅ "Delhi" (original safe है)
console.log(deepCopy.address.city); // ✅ "Mumbai"
```

✅ यह method deep copy करता है, और `JSON.parse(JSON.stringify(obj))` से भी बेहतर है।

---

## **🔹 Shallow vs Deep Copy – Side-by-Side Comparison**

| Feature                   | Shallow Copy                             | Deep Copy                 |
| ------------------------- | ---------------------------------------- | ------------------------- |
| **Top-Level Copy**        | ✅ हाँ                                   | ✅ हाँ                    |
| **Nested Object Copy**    | ❌ नहीं (reference रहता है)              | ✅ हाँ (पूरा copy)        |
| **Original object safe?** | ❌ नहीं                                  | ✅ हाँ                    |
| **Use Cases**             | Simple objects, performance optimization | जब पूरी object copy चाहिए |

---

## **🎯 Best Practices**

✅ **अगर object simple है (nested नहीं), तो `Object.assign()` या `{...obj}` use करें।**  
✅ **अगर nested objects हैं, तो `structuredClone(obj)` या `lodash.cloneDeep(obj)` use करें।**  
✅ **`JSON.parse(JSON.stringify(obj))` fast है, लेकिन functions, `undefined`, और circular references को handle नहीं कर सकता।**

💡 **Simple Trick:**  
👉 **अगर nested object change करने से original भी बदल जाता है → Shallow Copy हुई है।**  
👉 **अगर original object सुरक्षित रहता है → Deep Copy हुई है।** 🚀

अगर और example चाहिए, तो बताइए! 😊
