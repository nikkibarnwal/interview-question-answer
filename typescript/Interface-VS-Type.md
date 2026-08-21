# Revision: Interface vs Type

## Step 1: First Understand One Thing

Most beginners think:

```text
interface == type
```

This is **partially true**.

For **simple objects**, they behave almost the same.

Example:

### Interface

```ts
interface User {
    name: string;
    age: number;
}
```

### Type

```ts
type User = {
    name: string;
    age: number;
}
```

Both are valid.

Both create the same object shape.

So if an interviewer asks:

> Can both define an object?

✅ Yes.

---

# Difference 1 (Most Important)

## Type is more flexible.

Think of `type` as a **label maker**.

It can give a name to almost anything.

### Object

```ts
type User = {
    name: string;
}
```

### Primitive

```ts
type Age = number;
```

### Union

```ts
type Status = "loading" | "success";
```

### Tuple

```ts
type Point = [number, number];
```

### Function

```ts
type Add = (a: number, b: number) => number;
```

---

## Interface

Think of `interface` as a **building blueprint**.

It mainly describes the **shape of objects**.

```ts
interface User {
    name: string;
}
```

It **cannot** directly represent:

❌ Primitive

❌ Union

❌ Tuple

---

# Difference 2

## Declaration Merging

This is exclusive to `interface`.

```ts
interface User {
    name: string;
}

interface User {
    age: number;
}
```

TypeScript automatically merges them.

Final result:

```ts
interface User {
    name: string;
    age: number;
}
```

---

### Type

```ts
type User = {
    name: string;
}

type User = {
    age: number;
}
```

❌ Compile Error

Duplicate identifier.

---

# Difference 3

## Extending

### Interface

Uses `extends`

```ts
interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}
```

Employee becomes:

```ts
{
    name: string;
    salary: number;
}
```

---

### Type

Uses `&` (Intersection)

```ts
type Person = {
    name: string;
}

type Employee = Person & {
    salary: number;
}
```

Same result.

---

# React Example

```tsx
interface ButtonProps {
    title: string;
    onClick: () => void;
}

function Button(props: ButtonProps) {
    return <button>{props.title}</button>;
}
```

This is very common in React.

---

# Node Example

```ts
interface ApiResponse {
    success: boolean;
    data: User[];
}
```

Again, interface fits naturally for API response objects.

---

# Easy Memory Trick 🎯

## Interface = Blueprint 🏠

A blueprint defines the structure of a house.

* Walls
* Doors
* Windows

It doesn't describe a number or a string.

That's why interfaces are mainly for **objects**.

---

## Type = Label 🏷️

You can put a label on almost anything.

* Number ✔
* String ✔
* Object ✔
* Function ✔
* Tuple ✔
* Union ✔

---

# Interview Decision Tree ⭐⭐⭐

If the interviewer asks:

> **When do you use `interface` and when do you use `type`?**

You can answer like this:

```text
Is it an Object?

        │
       Yes
        │
        ▼
Use interface (preferred)

        │
       No
        │
        ▼
Use type
```

But there's one small addition:

Even for objects, **type is also valid**.

Many teams prefer **interface** because it's easier to extend and supports declaration merging.

So in real projects, you'll see:

* React Props → Mostly `interface`
* API Models → Mostly `interface`
* Database Models → Mostly `interface`

And you'll see `type` for:

* Union types
* Literal types
* Tuples
* Function signatures
* Utility type combinations

---

# My Personal Rule (The one I follow)

After working on large TypeScript codebases, this is the rule I recommend:

### ✅ Use `interface` for:

* React component props
* API request/response objects
* Domain models (`User`, `Product`, `Order`)
* Class contracts

### ✅ Use `type` for:

* Union types

```ts
type Status = "loading" | "success" | "error";
```

* Tuples

```ts
type Point = [number, number];
```

* Function types

```ts
type Add = (a: number, b: number) => number;
```

* Complex type combinations

```ts
type UserWithAddress = User & Address;
```

---

# ⭐ Senior Interview Answer (Memorize This)

> "Both `interface` and `type` can describe object shapes. I generally prefer `interface` for object models, React props, and API contracts because it's designed for object structures and supports declaration merging. I use `type` when I need unions, tuples, primitive aliases, function types, or intersections."
