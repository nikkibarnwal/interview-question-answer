Ahh bhai, ye **dynamic object type** ka question hai — Typescript me iska solution **index signature** ya **Record utility type** se hota hai. Chalo step by step samjhate hain. 😎

---

## **1️⃣ Index Signature (Custom type)**

Agar tu chahta hai ki **key koi bhi string ho** aur **value koi bhi type ho**, to aise likh sakte ho:

```ts
type MyObject = {
  [key: string]: any;
};

const obj: MyObject = {
  name: "Rajendra",
  age: 30,
  isActive: true,
};
```

- `[key: string]` → key **string type** ka hoga (numeric keys bhi string me convert ho jate hain)
- `any` → value koi bhi type ho sakta hai
- **Optional improvement:** `unknown` type use karke thoda safer banaya ja sakta hai:

```ts
type MyObject = {
  [key: string]: unknown;
};
```

---

## **2️⃣ Record Utility Type**

Typescript me built-in `Record<K, V>` type hota hai jo same kaam karta hai:

```ts
const obj: Record<string, any> = {
  name: "Rajendra",
  age: 30,
  isActive: true,
};
```

- `Record<string, any>` → key string, value any
- Agar chaho to key ka type limit kar sakte ho (example: `'name' | 'age'`), aur value bhi type safe ho sakta hai.

---

## **3️⃣ Example with value type generic**

Agar tu chahta hai **value ka type generic ho**:

```ts
type MyObject<T> = {
  [key: string]: T;
};

const obj1: MyObject<number> = {
  a: 10,
  b: 20,
};

// const obj2: MyObject<number> = { name: "Rajendra" }; // ❌ Error
```

- Trick: “Index signature → key flexible, value fixed type”
- Generics se value type safe ban jata hai.

---

💡 **Interview trick:**

- Agar question me bola: _“Key bhi flexible, value bhi flexible”_ → `[key: string]: any` ya `Record<string, any>`
- Agar question me bola: _“Value type fixed”_ → `[key: string]: T` (generic)

---

Ahh bhai, ab samjha! 😎 Tu chahta hai ki **key ka type bhi flexible ho**, matlab **string | number | symbol**, aur value bhi koi bhi type ho. Typescript me iske liye **index signature** aur **generic type** ka combination use hota hai.

---

## **1️⃣ Key type string | number | symbol, value any**

```ts
type MyObject = {
  [key: string]: any; // string keys
  [key: number]: any; // number keys
  [key: symbol]: any; // symbol keys
};

const obj: MyObject = {
  name: "Rajendra",
  123: "numeric key",
  [Symbol("id")]: 999,
};
```

- Trick: JS me object keys internally **string ya symbol** hi hote hain. Number keys convert ho jate hain string me.
- `[key: number]: any` optional hai, sirf readability ke liye.

---

## **2️⃣ Generic version for value type**

```ts
type MyObject<K extends string | number | symbol, V> = {
  [key in K]: V;
};

const obj: MyObject<string | number, string> = {
  name: "Rajendra",
  123: "Numeric key",
};
```

- `K` → allowed key types (string | number | symbol)
- `V` → value ka type (generic)

---

## **3️⃣ Record alternative**

`Record` built-in type me key **string | number | symbol** ho sakta hai:

```ts
const obj: Record<string | number | symbol, any> = {
  name: "Rajendra",
  123: "Numeric key",
  [Symbol("id")]: 999,
};
```

- Trick: `Record` ka syntax short aur readable hai.

---

💡 **Interview tip:**

- Agar question: _“Key koi bhi type, value koi bhi type”_ → `[key: string | number | symbol]: any`
- Agar question: _“Key flexible, value type fixed”_ → `[key: string | number | symbol]: V` (generic)
- Ya phir `Record<string | number | symbol, V>`

---

Agar tu chaahe to mai ek **super generic TS object template** bana doon jisme **key aur value dono fully flexible** ho aur tu direct interview me bol sake + examples dikha sake.

Kya mai wo bana doon?
