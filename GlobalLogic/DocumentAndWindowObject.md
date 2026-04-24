Here is a **simple, clear, interview-friendly** explanation:

---

# **Difference Between `window` and `document` Object**

## **1. What they represent**

- **window:**
  The **top-level browser object**.
  It represents the **entire browser tab**.

- **document:**
  Represents the **webpage loaded inside the window** (the DOM).

---

## **2. Who owns what**

- **window** contains the **document**.
- **document** contains all **HTML elements**.

Example:

```
window
  → document
       → html, body, div, buttons…
```

---

## **3. Global Properties**

- Many global functions like `setTimeout`, `alert`, `localStorage` belong to **window**.
- All page content, like `getElementById`, `querySelector`, belong to **document**.

---

## **4. Usage Purpose**

- **window** → browser-level tasks
  Examples:

  - open a new tab
  - handle screen size
  - manage timers
  - storage, history, location

- **document** → DOM-level tasks
  Examples:

  - select elements
  - update text
  - add/remove HTML
  - handle events on elements

---

## **5. Example**

```js
window.alert("Hello"); // window-level

document.getElementById("btn"); // DOM-level
```

---

# **Simple One-Line Summary:**

**`window` is the browser tab itself; `document` is the HTML page inside it.**

---
