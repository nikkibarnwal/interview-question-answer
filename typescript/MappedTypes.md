Bhai, **mapped types** ek **powerful concept** hain TypeScript ke andar — ye allow karte hain **existing types ko dynamically modify** karne ke liye 😎

Aise samajh:
👉 Mapped types = “loop over properties of a type and transform them.”
(jaise JS me `for...in` object ke keys pe loop karta hai, waise hi mapped types type level pe loop karte hain)

---

## 🔹 **1️⃣ Basic Example**

Maan le ek type hai:

```ts
type User = {
  name: string;
  age: number;
  active: boolean;
};
```

Agar hum chahte hain ki **User ke har property ko optional** bana dein, to normally hum likhte:

```ts
type OptionalUser = {
  name?: string;
  age?: number;
  active?: boolean;
};
```

👉 Lekin mapped types se ye automatic ho sakta hai:

```ts
type OptionalUser = {
  [K in keyof User]?: User[K];
};
```

### Breakdown:

- `keyof User` → `"name" | "age" | "active"`
- `K in keyof User` → har ek key ke liye iterate
- `User[K]` → us key ka type fetch karna
- `?:` → optional banana

**Trick:**

> “Mapped types = type-level for loop over keys”

---

## 🔹 **2️⃣ Readonly Example**

```ts
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

- Ye saare properties ko readonly kar dega.
- Matlab unhe update nahi kar sakte.

---

## 🔹 **3️⃣ Remove Optional**

Agar tu har field ko required banana chahe:

```ts
type RequiredUser = {
  [K in keyof User]-?: User[K];
};
```

👉 `-?` se optional modifier remove hota hai.

---

## 🔹 **4️⃣ Built-in Mapped Types**

TypeScript already kuch mapped types provide karta hai:

| Utility Type   | Meaning                  |
| -------------- | ------------------------ |
| `Partial<T>`   | Sab properties optional  |
| `Required<T>`  | Sab required             |
| `Readonly<T>`  | Sab readonly             |
| `Pick<T, K>`   | Sirf selected properties |
| `Record<K, T>` | Key-value mapping        |

Example:

```ts
type PartialUser = Partial<User>; // all optional
type ReadonlyUser = Readonly<User>; // all readonly
type OnlyName = Pick<User, "name">; // only name property
type MyRecord = Record<string, number>; // dynamic object
```

---

## 🔹 **5️⃣ Advanced Example: Changing Type of Properties**

```ts
type Booleanize<T> = {
  [K in keyof T]: boolean;
};

type UserFlags = Booleanize<User>;
```

Output:

```ts
type UserFlags = {
  name: boolean;
  age: boolean;
  active: boolean;
};
```

**Trick:**

> “Mapped types se type transformation possible hota hai — ek type ko modify karke naya type banana.”

---

## 🔹 **6️⃣ Real-world Example**

Imagine React me props ka type banana:

```ts
type ComponentProps = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
};

type OptionalProps = Partial<ComponentProps>; // easy reuse
```

Ab OptionalProps me sab field optional ho jayenge — ye hota hai mapped type ka real use!

---

💡 **Interview Trick Summary:**

| Question               | Short Answer                                                |
| ---------------------- | ----------------------------------------------------------- |
| What are mapped types? | TypeScript feature to iterate and transform existing types. |
| Why use them?          | Code reuse, DRY, and dynamic type generation.               |
| Built-in examples?     | Partial, Required, Readonly, Pick, Record.                  |

---

Agar tu chaahe, mai **mapped types + utility types** ka ek visual diagram bana du (jaise tree structure me “User → OptionalUser → ReadonlyUser” transformation dikhaun) jisse interview me explain karna aur easy ho jaye.
Kya bana du bhai?
