console.log([] == false);   
console.log([] === false);   

console.log(null == undefined);   
console.log(null === undefined);    

Answer 
```text
true
false
true
false
```

Let's understand each one.

---

## 1. `[] == false` → `true`

This is the tricky one:

```javascript
console.log([] == false);
```

`==` performs **type coercion**.

Because one side is an object (`[]`) and the other is a boolean (`false`), JavaScript converts the boolean to a number:

```text
false → 0
```

So conceptually we get:

```javascript
[] == 0
```

Now JavaScript converts the empty array to a primitive value.

```text
[] → ""
```

Then:

```text
"" → 0
```

So effectively:

```javascript
0 == 0
```

Therefore:

```text
true
```

### Flow to remember

```text
[] == false
   ↓
[] == 0
   ↓
"" == 0
   ↓
0 == 0
   ↓
true
```

---

# 2. `[] === false` → `false`

Now:

```javascript
console.log([] === false);
```

`===` **doesn't perform this implicit type coercion**.

Types are:

```text
[]      → object
false   → boolean
```

Different types → `false`.

```text
false
```

---

# 3. `null == undefined` → `true`

This is a special rule in JavaScript.

```javascript
null == undefined
```

returns:

```text
true
```

But don't generalize this to other values.

For example:

```javascript
null == 0        // false
null == false    // false
undefined == 0   // false
```

---

# 4. `null === undefined` → `false`

With strict equality:

```javascript
null === undefined
```

Types differ:

```text
null       → null
undefined  → undefined
```

Therefore:

```text
false
```

---

# 🧠 Interview Cheat Sheet

Remember these:

```javascript
5 == "5"          // true
5 === "5"         // false

[] == false       // true
[] === false      // false

null == undefined // true
null === undefined // false

null == 0         // false
undefined == 0    // false
```

### Senior-level interview answer

If interviewer asks:

> **"Why does JavaScript have these surprising equality results?"**

Say:

> **"`==` performs implicit type coercion according to JavaScript's abstract equality comparison rules, while `===` compares without implicit type conversion. Because of these coercion rules, expressions such as `[] == false` can evaluate to true. In production code, I generally prefer strict equality (`===`) because it makes comparisons more predictable."**

That's a solid answer.

---
