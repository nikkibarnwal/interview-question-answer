# Q16 — Why Not Use Memoization Everywhere?

### 📁 File

`q16-why-not-use-memoization-everywhere.md`

---

## 🎤 Interview Question

> **"If `useMemo`, `useCallback`, and `React.memo` improve performance, why shouldn't we use them everywhere?"**

## 🎤 Simple Interview Answer

> We shouldn't use them everywhere because memoization also has some **cost and complexity**.
>
> For `useMemo` and `useCallback`, React needs to store the previous value or function and check the dependencies on every render.
>
> `React.memo` also needs to compare the component's props. If the component is very small or its props change frequently, the comparison may not provide any real benefit.
>
> Also, using too much memoization can make the code harder to understand and maintain.
>
> So I would not add memoization by default. I would first identify the performance problem using tools like **React DevTools Profiler**, and then use `useMemo`, `useCallback`, or `React.memo` where they provide a measurable benefit.
>
> In short, **memoization is an optimization, not a default requirement.**

---

## 🔄 Easy Diagram

```text
Component
    ↓
Is there a performance problem?
    ↓
 ┌──┴───┐
 No     Yes
 ↓       ↓
Keep    Profile
simple    ↓
        Find bottleneck
             ↓
       Apply optimization
             ↓
        Measure again
```

---

## 🧠 Easy Way to Remember

Remember these **3 reasons**:

```text
1. Memoization has a cost
2. It adds code complexity
3. It may not help if values/props change frequently
```

So:

> **"Don't optimize everything. Profile first, then optimize where needed."**

---

## ⭐ Example

### Unnecessary `useCallback`

```jsx
const handleClick = useCallback(() => {
  console.log("Hello");
}, []);
```

If this function:

- is not passed to a child,
- isn't used in a dependency array,
- and isn't causing a performance problem,

then `useCallback` may not provide any meaningful benefit.

You can simply write:

```jsx
const handleClick = () => {
  console.log("Hello");
};
```

Keep the code simple.

---

## 🔥 Important Senior-Level Point

The interviewer may ask:

> **"How do you decide whether to use memoization?"**

Answer:

> **"I first identify the bottleneck using profiling. Then I check whether the problem is an expensive calculation, unnecessary child renders, or unstable references. Based on that, I choose `useMemo`, `useCallback`, or `React.memo`. After the change, I measure the performance again."**

That's a strong senior-level approach because you're showing **measurement-driven optimization** rather than blindly adding hooks.

---

# 📌 Next Question — Q17

### File

`Q17-react-re-render-debugging.md`

> **"Suppose a React page is re-rendering very frequently and the UI is becoming slow. How would you identify which component is causing the unnecessary re-renders and how would you fix it?"**
