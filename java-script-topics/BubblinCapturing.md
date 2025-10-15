Let’s understand **Event Bubbling** and **Event Capturing** in **JavaScript** — in your interview-friendly **Hindi + English mix** style 👇

---

## 🔹 Basic Concept

When you click on a child element inside multiple nested elements (like `<div><p><span></span></p></div>`),
the **event** doesn’t just happen on that single element — it travels through the DOM in a specific order.

---

## 🔸 Event Flow ke 3 Phase hote hain:

1. **Capturing Phase** → Event goes **from top to bottom** (document → parent → child)
2. **Target Phase** → Event reaches the **target element** (the one you clicked)
3. **Bubbling Phase** → Event goes **from bottom to top** (child → parent → document)

---

## 🧠 Simple Example

HTML:

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

JS:

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

Now when you click the button 👇
**Output:**

```
Child clicked
Parent clicked
```

👉 This is called **Event Bubbling** (default behavior in JS).
Event goes **from child → parent**.

---

## 🔸 Event Capturing (a.k.a. Trickling Phase)

If you want the event to be caught **while going down**, use the **third parameter** in `addEventListener`.

```js
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent capturing");
  },
  true
); // 👈 'true' means capturing phase

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

Now output will be:

```
Parent capturing
Child clicked
```

👉 Here event caught **top → bottom** (document → parent → child).

---

## 🧩 Summary Table

| Phase     | Description                       | addEventListener Option |
| --------- | --------------------------------- | ----------------------- |
| Capturing | Top to bottom (document → target) | `true`                  |
| Target    | Event reaches target element      | —                       |
| Bubbling  | Bottom to top (target → document) | `false` (default)       |

---

## ⚡ Interview Trick to Remember

> 🔹 **Bubbling = Bubble goes UP** (child → parent)
> 🔹 **Capturing = Camera goes DOWN** (document → target)

---

## 🧱 Real Use Case

- **Event Bubbling** → Used in **Event Delegation**
  (like when you attach one listener on parent to handle clicks on multiple children).

  ```js
  document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log("List item clicked:", e.target.textContent);
    }
  });
  ```

- **Capturing** → Rarely used, but helpful when you need to intercept event **before** it reaches child.

---

## 🛑 Stop Bubbling Example

If you want to stop the event from going up:

```js
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked, bubbling stopped");
});
```

---

![alt text](<ChatGPT Image Oct 15, 2025, 07_05_23 AM.png>)
