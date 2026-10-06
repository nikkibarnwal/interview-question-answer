The key is: **function ko pata kaise chalega ki arguments kab khatam ho gaye?**

For your examples:

```js
fn(2)              // 2
fn(2)(3)           // 5
fn(2)(3)(4)        // 9
fn(2)(3)(4)(5)     // 14
```

There is one important issue: **JavaScript mein `fn(2)` ke baad automatically pata nahi chalega ki aur argument aayega ya nahi.**

Isliye usually interview mein **termination condition** di jaati hai.

### Approach 1 — `valueOf()` / `Symbol.toPrimitive`

Agar interviewer exactly ye syntax chahta hai:

```js
fn(2)           // 2
fn(2)(3)        // 5
fn(2)(3)(4)     // 9
```

toh tricky part ye hai ki `fn(2)` ko **number bhi behave karna hai aur function bhi**.

```js
function fn(a) {
  let sum = a;

  function inner(b) {
    sum += b;
    return inner;
  }

  inner.valueOf = function () {
    return sum;
  };

  inner.toString = function () {
    return String(sum);
  };

  return inner;
}
```

Lekin:

```js
console.log(fn(2));
```

will return a function object, not directly `2` in every context.

So interview mein **better and cleaner approach** is termination condition.

---

# Approach 2 — Termination ke liye `()` use karo

Ye sabse easy interview-friendly currying implementation hai:

```js
function sum(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }

    return sum(a + b);
  };
}
```

Usage:

```js
sum(2)();        // 2
sum(2)(3)();     // 5
sum(2)(3)(4)();  // 9
sum(2)(3)(4)(5)(); // 14
```

### Kaise kaam kar raha hai?

First:

```js
sum(2)
```

`a = 2`

It returns another function:

```js
function(b) {
   ...
}
```

Then:

```js
sum(2)(3)
```

Now:

```text
a = 2
b = 3
```

So:

```js
sum(2 + 3)
```

becomes:

```js
sum(5)
```

Then:

```js
sum(5)(4)
```

becomes:

```js
sum(9)
```

Then:

```js
sum(9)(5)
```

becomes:

```js
sum(14)
```

Finally:

```js
()
```

means:

> "Ab aur arguments nahi hain, final result return karo."

---

## 🔥 But interviewer may specifically ask: `fn(2)(3)(4)`

without final `()`.

Then use the **function-object trick**:

```js
function fn(initial) {
  let sum = initial;

  function inner(value) {
    sum += value;
    return inner;
  }

  inner.valueOf = () => sum;
  inner.toString = () => String(sum);

  return inner;
}
```

Now:

```js
console.log(+fn(2));          // 2
console.log(+fn(2)(3));       // 5
console.log(+fn(2)(3)(4));    // 9
console.log(+fn(2)(3)(4)(5)); // 14
```

The `+` forces JavaScript to convert the function object to a primitive, so `valueOf()` returns the current sum.

---

# ⭐ Interview mein agar "n number of arguments" bola jaye

Agar question actually ye hai:

```js
fn(2)(3)(4)(5)(6)...
```

**unlimited chaining**, then remember this pattern:

```text
Function return function
        ↓
accumulate value
        ↓
return same function
        ↓
repeat
        ↓
termination condition
```

**Easy trick:**

> **"Currying = argument lo → result accumulate karo → same function return karo."**

Aur ek important point interview mein bolna:

> **Currying converts a function that takes multiple arguments into a sequence of functions where each function takes an argument and returns another function.**

For your example:

```text
fn(2)
 ↓
2

fn(2)(3)
 ↓
2 + 3 = 5

fn(2)(3)(4)
 ↓
5 + 4 = 9

fn(2)(3)(4)(5)
 ↓
9 + 5 = 14
```

**Adobe interview ke liye main tumhe isi topic ka next common question bhi practice karwaunga: `sum(1)(2)(3)...(n)` with `toString/valueOf` — ye thoda tricky aur frequently asked pattern hai.**
