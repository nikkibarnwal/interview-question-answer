## 🔥 Question 1 — Closure + `var` + Promise

```javascript 
function test() {
  for (var i = 0; i < 3; i++) {
    Promise.resolve().then(() => {
      console.log(i);
    });
  }
}

test();

console.log("Done");
```
---
You've correctly combined three concepts:

1. `var` → one shared binding
2. Promise `.then()` → microtask
3. Synchronous code → executes before microtasks

### Let's make your explanation interview-ready


> **"`test()` executes synchronously, and because `i` is declared using `var`, there is a single function-scoped `i` binding shared by all three callbacks. Each `Promise.resolve().then()` schedules its callback as a microtask. The `for` loop completes before the microtask queue is processed, so `i` has reached 3. Then the synchronous `console.log('Done')` executes. After the call stack is empty, the microtask queue is drained, and all three callbacks read the same `i`, which is 3. Therefore the output is `Done, 3, 3, 3`."**

---

# 🔥 Question 2 — Same problem, but `let`

Now let's see if you understand *why* `let` changes the result.

```javascript id="7h5xq1"
function test() {
  for (let i = 0; i < 3; i++) {
    Promise.resolve().then(() => {
      console.log(i);
    });
  }
}

test();

console.log("Done");
```

What will be the output?
✅ **Correct — A**

```text
Done
0
1
2
```


There is just one terminology/detail I'd refine.

You said:

> "it will create the three blocks"

More precisely, JavaScript creates a **new lexical binding for the loop variable for each iteration**. You don't need to think of them as three separate `{}` blocks.

Conceptually:

```text
Iteration 1 → i = 0 → callback captures this i
Iteration 2 → i = 1 → callback captures this i
Iteration 3 → i = 2 → callback captures this i
```

So when the microtasks eventually execute:

```text
callback 1 → i = 0
callback 2 → i = 1
callback 3 → i = 2
```

That's why:

```text
Done
0
1
2
```
---
### 🔑 Remember this interview line

> **"With `let` in a `for` loop, each iteration gets a separate lexical binding, so closures created during each iteration capture their corresponding value."**

That's better than simply saying:

> "`let` is block scoped."

---
