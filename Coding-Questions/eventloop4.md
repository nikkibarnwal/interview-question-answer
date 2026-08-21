Sure. Let's solve the **same question** in the simplest possible way.

### Question

```js
console.log("S");

Promise.resolve().then(() => {
  console.log("P1");

  process.nextTick(() => {
    console.log("N1");
  });

  Promise.resolve().then(() => {
    console.log("P2");
  });
});

process.nextTick(() => {
  console.log("N2");

  Promise.resolve().then(() => {
    console.log("P3");
  });
});

Promise.resolve().then(() => {
  console.log("P4");
});

console.log("E");
```

---

# Step 1: Execute synchronous code

Node first executes normal code.

```js
console.log("S");
```

Output:

```text
S
```

Then it registers:

```text
Promise → P1
```

Then:

```text
nextTick → N2
```

Then:

```text
Promise → P4
```

Finally:

```js
console.log("E");
```

Output:

```text
E
```

So currently:

```text
Output:
S
E
```

And queues are:

```text
NextTick Queue:
N2

Promise Queue:
P1
P4
```

---

# Step 2: Execute `N2`

`nextTick` is processed before Promise microtasks.

So:

```text
N2
```

Output:

```text
S
E
N2
```

Inside `N2` we have:

```js
Promise.resolve().then(() => {
  console.log("P3");
});
```

So `P3` is added to the **end** of the Promise queue.

Now:

```text
Promise Queue:
P1
P4
P3
```

---

# Step 3: Execute `P1`

Now Promise queue starts.

First:

```text
P1
```

Output:

```text
S
E
N2
P1
```

Inside `P1`:

```js
process.nextTick(() => {
  console.log("N1");
});
```

So `N1` is added to the nextTick queue.

Also:

```js
Promise.resolve().then(() => {
  console.log("P2");
});
```

So `P2` is added to the **end** of the Promise queue.

Queues now:

```text
NextTick:
N1

Promise:
P4
P3
P2
```

---

# Step 4: Execute `P4`

`P4` was already waiting before `P2`.

So:

```text
P4
```

Output:

```text
S
E
N2
P1
P4
```

---

# Step 5: Execute `P3`

Next:

```text
P3
```

Output:

```text
S
E
N2
P1
P4
P3
```

---

# Step 6: Execute `P2`

Next:

```text
P2
```

Output:

```text
S
E
N2
P1
P4
P3
P2
```

Now the Promise queue is empty.

---

# Step 7: Execute `N1`

`N1` was created inside `P1`.

Now it runs:

```text
N1
```

Final output:

```text
S
E
N2
P1
P4
P3
P2
N1
```

---

# ⭐ The easiest way to remember this question

Think about **when each item enters the queue**.

Initially:

```text
NextTick:
N2

Promise:
P1
P4
```

`N2` runs first:

```text
N2
```

N2 creates `P3`.

So:

```text
Promise:
P1
P4
P3
```

Then `P1` runs.

P1 creates:

```text
N1
P2
```

But `P4` and `P3` are **already waiting**.

So:

```text
Promise:
P4
P3
P2
```

Therefore:

```text
N2
P1
P4
P3
P2
N1
```

### Final answer

```text
S
E
N2
P1
P4
P3
P2
N1
```

### The one rule to remember

> **When a new Promise callback is created, it goes to the end of the existing Promise queue.**

That's why `P2` **cannot jump ahead of `P4` and `P3`**, even though `P2` was created inside `P1`.
