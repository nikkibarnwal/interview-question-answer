
> **What is the difference between `<section>`, `<article>`, and `<div>`?**

## `<section>` vs `<article>` vs `<div>`

### 1. `<section>` — A group of related content

A **section** groups content that belongs to the same topic or area of a page.

```html
<section>
  <h2>Our Services</h2>
  <p>We provide banking services.</p>
</section>
```

Think of it as a **chapter of a book**.

**Technical term:** Thematic grouping of related content.

**Memory trick:**

> **SECTION = Same Subject**

If multiple elements are related to **one topic**, use `<section>`.

---

### 2. `<article>` — Independent content

`<article>` is used when the content can **stand on its own** or potentially be reused/distributed independently.

Examples:

* Blog post
* News article
* Product review
* Forum post
* User comment

```html
<article>
  <h2>React 19 Features</h2>
  <p>React provides several new features...</p>
</article>
```

You could take that article and display it somewhere else, and it would still make sense.

**Technical term:** Self-contained, independently distributable content.

**Memory trick:**

> **ARTICLE = Alone**

If the content can **live independently**, think `<article>`.

---

### 3. `<div>` — Generic container

`<div>` has **no semantic meaning**.

It's mainly used when you need a container for:

* CSS styling
* Layout
* Grouping elements
* JavaScript/React logic

```html
<div className="card">
  <h2>Product</h2>
  <p>₹500</p>
</div>
```

**Technical term:** Generic non-semantic container.

**Memory trick:**

> **DIV = Design / Layout**

Use `<div>` when there isn't a more meaningful semantic element.

---

## Easy comparison

| Element     | Meaning             | Memory Trick      |
| ----------- | ------------------- | ----------------- |
| `<section>` | Related content     | **Same Subject**  |
| `<article>` | Independent content | **Alone**         |
| `<div>`     | Generic container   | **Design/Layout** |

### Interview answer

If interviewer asks:

> **What's the difference between section, article and div?**

You can say:

> "`section` is used to group related content under a common topic. `article` is used for self-contained content that can stand independently, such as a blog post or news article. `div` is a generic non-semantic container mainly used for layout and styling when no semantic element is appropriate."

That's a strong **30-second interview answer**.

---

## 🔥 One important NatWest follow-up

They may ask:

> **Is semantic HTML important for accessibility? How?**

Remember:

**Semantic HTML → Meaning → Browser/Screen Reader understands structure → Accessibility**

Examples:

```html
<nav>       → Navigation
<main>      → Main content
<button>    → Action
<header>    → Header
<footer>    → Footer
```

This is better than:

```html
<div onclick="...">Click me</div>
```

For an action, a real `<button>` gives **built-in keyboard accessibility and correct semantics**.

### 🧠 Master memory trick

> **Semantic HTML = Give HTML the correct NAME according to its JOB.**

`button` → button's job
`nav` → navigation's job
`main` → main content's job
`article` → independent content's job
`section` → related content's job
`div` → generic container when no meaningful semantic element fits.

---

### Next question — HTML5

**What is the difference between `<button>` and `<input type="button">`? And why would you prefer `<button>` in a React application?**
