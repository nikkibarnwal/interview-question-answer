Sure. Let's make this **interview-ready**, because `call`, `apply`, and `bind` are very common senior-level JavaScript questions.

# 🔥 `call()` vs `apply()` vs `bind()`

Given:

```javascript
const user1 = {
  name: "Rajendra",
};

const user2 = {
  name: "Amit",
};

function greet(city) {
  console.log(this.name, city);
}

greet.call(user1, "Delhi");

greet.call(user2, "Mumbai");

greet.apply(user1, ["Noida"]);

const boundGreet = greet.bind(user2);

boundGreet("Pune");
```

## 1. Exact Output

```text
Rajendra Delhi
Amit Mumbai
Rajendra Noida
Amit Pune
```

---

# 2. `call()`

### Syntax

```javascript
function.call(thisArg, arg1, arg2, ...)
```

`call()`:

- Immediately invokes the function.
- Explicitly sets `this`.
- Arguments are passed **individually**.

Example:

```javascript
greet.call(user1, "Delhi");
```

Conceptually:

```text
this → user1
city → "Delhi"
```

So:

```text
Rajendra Delhi
```

### Memory Trick

> **CALL = Call immediately + arguments separately**

---

# 3. `apply()`

### Syntax

```javascript
function.apply(thisArg, [arg1, arg2, ...])
```

`apply()` is very similar to `call()`.

The main difference:

```text
call  → arguments separately
apply → arguments as array/array-like
```

Example:

```javascript
greet.apply(user1, ["Noida"]);
```

Output:

```text
Rajendra Noida
```

### Memory Trick

> **APPLY = Array of parameters**

Think:

```text
CALL  → a, b, c
APPLY → [a, b, c]
```

---

# 4. `bind()`

This is the most important distinction.

```javascript
const boundGreet = greet.bind(user2);
```

`bind()` **does not immediately execute the function**.

Instead, it returns a **new function** with `this` permanently bound to `user2` for normal calls.

Then:

```javascript
boundGreet("Pune");
```

executes it.

Output:

```text
Amit Pune
```

Conceptually:

```text
greet
  ↓ bind(user2)
new function
  ↓
this → user2
```

---

# 🎯 Most Important Difference

| Method    | Executes immediately? | Arguments                                   |
| --------- | --------------------- | ------------------------------------------- |
| `call()`  | ✅ Yes                | Individual                                  |
| `apply()` | ✅ Yes                | Array                                       |
| `bind()`  | ❌ No                 | Individual when returned function is called |

### Memory Trick

> **CALL → now** > **APPLY → now + array** > **BIND → later**

---

# 🔥 Real-World Example

Suppose you have:

```javascript
const user = {
  name: "Rajendra",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};
```

If you do:

```javascript
const greet = user.greet;
greet();
```

the method has been extracted, so the original object method call relationship is lost.

You can explicitly bind it:

```javascript
const greet = user.greet.bind(user);

greet();
```

Now:

```text
Hello Rajendra
```

This is useful when passing object methods as callbacks and you need to preserve their `this` context.

---

# 🔥 Advanced: Partial Application

`bind()` can also pre-fill arguments.

```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(5)); // 10
```

Here:

```text
a = 2
b = 5
```

So:

```text
2 × 5 = 10
```

This is called **partial application**.

---

# ⚠️ Senior Interview Trap

Don't say:

> "`bind()` permanently changes the function's `this`."

More accurately:

> "`bind()` returns a new function with a bound `this` value."

The **original function is unchanged**.

```javascript
const bound = greet.bind(user2);

console.log(greet === bound);
```

Output:

```text
false
```

Because `bind()` creates a new function.

---

# 🔥 One More Important Trap: Arrow Functions

Consider:

```javascript
const greet = () => {
  console.log(this.name);
};

greet.call(user1);
```

Will `call()` change the arrow function's `this`?

**No.**

Arrow functions don't have their own `this`, so `call()`, `apply()`, and `bind()` cannot override their lexical `this`.

This is an excellent senior-level interview point.

---

# 🎯 Interview-Ready Answer

If interviewer asks:

> **"What is the difference between call, apply and bind?"**

> "`call`, `apply`, and `bind` are used to control the `this` value of a function. `call` invokes the function immediately and accepts arguments individually. `apply` also invokes it immediately but accepts arguments as an array or array-like object. `bind` doesn't execute the function immediately; it returns a new function with `this` bound to the specified object and can also pre-fill arguments. One important exception is arrow functions, because their `this` is lexical and cannot be changed using these methods."

---
