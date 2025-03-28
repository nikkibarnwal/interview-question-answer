# **🚀 Prototypes & Inheritance in JavaScript – "Family & DNA Concept"**  

JavaScript में **Prototypes & Inheritance** का मतलब होता है **parent-child connection**, जिससे **एक object दूसरे object की properties और methods को use कर सकता है**।  

---

## **🧬 Trick to Remember – "Family & DNA Concept"**  
Imagine एक **Family Tree** है, जिसमें **बच्चों को माता-पिता के गुण (properties & methods) मिलते हैं**, लेकिन माता-पिता को बच्चों की चीजें नहीं मिलतीं।  

| Concept | Real Life Example |
|---------|------------------|
| **Prototype** | माता-पिता का **DNA (Blueprint)** |
| **Inheritance** | बच्चे को माता-पिता से **गुण (Properties & Methods) मिलते हैं** |

---

## **✅ What is Prototype? – "DNA का Blueprint"**  
🔹 JavaScript में **हर object के पास एक hidden property होती है, जिसे "Prototype" कहते हैं**, जो बताता है कि वो object कहां से आया है।  

💡 **Prototype को देखना है?**  
```javascript
let obj = {};
console.log(obj.__proto__); // Shows the prototype of the object
```
🚀 **Concept:**  
हर object का **एक parent object** होता है, जिसे **Prototype Chain** कहते हैं। अगर कोई property/method **object में नहीं मिलती, तो JavaScript उसके parent (prototype) में जाकर देखती है**।

---

## **🧑‍🤝‍🧑 Inheritance – "बच्चे को माता-पिता से गुण मिलते हैं"**  
Inheritance मतलब एक object दूसरे object की properties और methods को **use कर सकता है**।  

💡 **Example:**  
```javascript
let parent = {
  greet: function () {
    console.log("Hello from parent!");
  }
};

let child = Object.create(parent); // Inherit from parent
child.greet(); // ✅ Output: "Hello from parent!"
```
🔹 **Key Point:**  
✅ `child` में `greet` method नहीं है, लेकिन **Prototype Chain की वजह से वो `parent` से inherit कर सकता है!**  

---

## **🔹 Prototype Chain – "बच्चे → माता-पिता → दादा"**  
Prototype Chain का मतलब है कि अगर कोई property/method किसी object में नहीं मिलती, तो **JavaScript उसके prototype में जाकर ढूंढती है**।  

💡 **Example:**  
```javascript
let grandParent = {
  surname: "Sharma"
};

let parent = Object.create(grandParent);
let child = Object.create(parent);

console.log(child.surname); // ✅ Output: "Sharma"
```
🛠 **Working:**  
1️⃣ `child` में `surname` नहीं मिला, तो  
2️⃣ `parent` में `surname` देखा, वहाँ भी नहीं मिला, तो  
3️⃣ `grandParent` में मिला, और वही return हुआ ✅  

---

## **🚀 Prototype with Functions – "Father से Gift (Method) मिलना"**  
JavaScript में हर function के पास एक **Prototype Object होता है**, जिससे हम **new properties/methods add कर सकते हैं**।  

💡 **Example:**  
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let user1 = new Person("Rahul");
user1.sayHello(); // ✅ Output: "Hello, my name is Rahul"
```
🔹 **Key Point:**  
✅ Function के **Prototype में method add किया**, जिससे **सभी instances उसे access कर सकते हैं!**  

---

## **🆚 Class-Based Inheritance (Modern Approach) – "Simpler Family System"**  
JavaScript में `class` भी Prototypal Inheritance का ही एक **modern wrapper** है।  

💡 **Example:**  
```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Child extends Parent {}

let child1 = new Child("Amit");
child1.greet(); // ✅ Output: "Hello, I am Amit"
```
🔹 **Key Point:**  
✅ `Child` को `Parent` की सारी properties & methods **automatically मिल गईं!**  

---

## **🎯 Final Summary – याद रखने का आसान तरीका**  
| Concept | Trick | Key Point |
|---------|-------|-----------|
| **Prototype** | 🧬 "DNA Blueprint" | हर object में hidden **prototype** होता है |
| **Inheritance** | 👨‍👦 "Parent-Child Relationship" | बच्चे, माता-पिता से **properties & methods use कर सकते हैं** |
| **Prototype Chain** | 🏡 "बच्चे → माता-पिता → दादा" | Property नहीं मिलने पर **JavaScript ऊपर चेक करती है** |
| **Prototype with Functions** | 🎁 "Father से Gift" | Function के **Prototype में method add कर सकते हैं** |
| **Class Inheritance** | 🏫 "Modern Family System" | `class` से आसान तरीके से inheritance होता है |

अब Prototype & Inheritance का Concept कभी नहीं भूलेगा! 😃 🚀