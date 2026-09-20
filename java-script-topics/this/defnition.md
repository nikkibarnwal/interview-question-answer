## 1. Understand

`this` is determined by **how a function is called**, with an important exception: **arrow functions don't have their own `this`; they capture it lexically
from the surrounding scope.**

### Basic example

```javascript
const user = {
  name: "Rajendra",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```text
Rajendra
```

Here:

```javascript
user.greet();
```

The function is called as a **method of `user`**, so:

```javascript
this === user;
```

---

# 🔴 The Important Rule

Don't ask:

> "Where was this function written?"

For normal functions, ask:

> **"How was this function called?"**

Compare:

```javascript
const user = {
  name: "Rajendra",

  greet() {
    console.log(this.name);
  },
};

user.greet(); // Rajendra

const fn = user.greet;
fn(); // depends on strict mode
```

The function is the same, but the **call-site changed**.

---

# 2. Four Important `this` Rules

### Rule 1 — Object method

```javascript
const user = {
  name: "Rajendra",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

```text
this → user
```

---

### Rule 2 — Regular function

```javascript
function greet() {
  console.log(this);
}

greet();
```

In modern JavaScript modules / strict mode:

```text
this → undefined
```

In non-strict browser-style scripts, behavior can differ.

For interviews, mention the **strict-mode distinction** rather than claiming one universal result.

---

### Rule 3 — Explicit binding

JavaScript provides:

```javascript
call();
apply();
bind();
```

Example:

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "Rajendra",
};

greet.call(user);
```

Output:

```text
Rajendra
```

Here we explicitly tell JavaScript:

```text
this → user
```

---

### Rule 4 — Arrow functions

This is extremely important.

Arrow functions **do not have their own `this`**.

```javascript
const user = {
  name: "Rajendra",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

Don't expect:

```text
Rajendra
```

The arrow function gets `this` lexically from its surrounding scope.

---

# 🔥 React Connection

This matters a lot when discussing callbacks.

Consider:

```javascript
class User {
  name = "Rajendra";

  greet() {
    console.log(this.name);
  }

  start() {
    setTimeout(this.greet, 1000);
  }
}
```

Potentially:

```text
this → lost
```

because:

```javascript
setTimeout(this.greet, 1000);
```

passes the function separately rather than calling it as:

```javascript
this.greet();
```

One solution:

```javascript
setTimeout(() => {
  this.greet();
}, 1000);
```

The arrow captures the surrounding `this`.

---

# 🧠 Memory Trick

### Normal function

> **"Who called me?" → `this`**

### Arrow function

> **"I don't have my own `this`; I borrow it."**

Hindi:

> **Normal function → call kisne kiya?** > **Arrow function → parent scope se `this` liya.**

---

# 🎯 Senior Interview Answer

If asked:

> **"What is `this` in JavaScript?"**

Say:

> "`this` is a special runtime binding whose value for a normal function is primarily determined by how the function is invoked. For example,
> when a function is called as an object method, `this` refers to that object. It can also be explicitly controlled using call, apply or bind.
> Arrow functions are different because they don't create their own `this`; they lexically capture it from their surrounding scope."

---
