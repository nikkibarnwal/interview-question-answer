Here is the **minimal CSS + HTML** using **pure Flexbox** to place
✔ 4 boxes in **4 corners**
✔ 1 box in the **center**

Super clean & interview-perfect 👇🔥

---

# ✅ **Minimal Flexbox Layout (4 corners + center)**

### ✔ HTML

```html
<div class="container">
  <div class="box top-left"></div>
  <div class="box top-right"></div>
  <div class="box bottom-left"></div>
  <div class="box bottom-right"></div>
  <div class="box center"></div>
</div>
```

---

### ✔ CSS

```css
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 60px;
  height: 60px;
  background: black;
  position: absolute;
}

/* Corners */
.top-left {
  top: 0;
  left: 0;
}
.top-right {
  top: 0;
  right: 0;
}
.bottom-left {
  bottom: 0;
  left: 0;
}
.bottom-right {
  bottom: 0;
  right: 0;
}

/* Center */
.center {
  position: static;
} /* center because parent is flexbox */
```

---

# 🎯 How it works?

- **Parent = full screen**
- `display: flex` + `justify-content:center` + `align-items:center` → **center box auto centered**
- Corner boxes are **absolutely positioned** to corners
- Flexbox center + absolute corners combo = clean & minimal

---
