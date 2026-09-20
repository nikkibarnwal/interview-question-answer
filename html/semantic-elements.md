---

## Question 1 — Semantic HTML5

> What is semantic HTML? Why is it important in a large-scale React application?


### Interview-ready answer

> **Semantic HTML means using HTML elements according to their meaning and purpose rather than using generic elements everywhere.**
>
> For example, instead of using `<div>` for everything, we use elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
>
> Semantic HTML is important because:
>
> * It improves **accessibility** by helping screen readers and assistive technologies understand the page structure.
> * It improves **SEO** because search engines can better understand the content structure.
> * It improves **code readability and maintainability** for developers.
> * It provides better **default browser behavior** in some cases.
>
> In a React application, I would use semantic elements while building reusable components so that the component structure remains accessible and meaningful.

### Example

Instead of:

```html
<div class="header">
  <div class="navigation">...</div>
</div>

<div class="content">
  ...
</div>

<div class="footer">
  ...
</div>
```

Prefer:

```html
<header>
  <nav>
    ...
  </nav>
</header>

<main>
  <section>
    ...
  </section>
</main>

<footer>
  ...
</footer>
```

### ⭐ Important follow-up

An interviewer may immediately ask:

> **What is the difference between `<section>`, `<article>`, and `<div>`?**

Answer this one yourself.
