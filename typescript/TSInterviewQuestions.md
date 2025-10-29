Perfect! 😎 Chalo, Typescript ke liye top **20 interview questions + short answers + easy trick/hint** style me ready karte hain, jo tu easily memorize karke interview me explain kar sake.

---

# **Typescript Interview Q&A (Rajendra Style)**

---

### **1️⃣ What is Typescript?**

**Answer:** Superset of JavaScript, adds type safety and modern features.
**Trick:** “JS + types = TS, compile-time error pakad lega.”

---

### **2️⃣ Difference between JS and TS?**

**Answer:**

- JS → dynamic, runtime errors
- TS → static, compile-time errors, better IDE support
  **Trick:** “Errors ko pehle pakad le, after coding nahi.”

---

### **3️⃣ What are Types in TS?**

**Answer:** Variables, functions, objects ke data types define karte hain (string, number, boolean, array, tuple, enum).
**Trick:** “Types → JS ka manual cheat sheet.”

---

### **4️⃣ What is a Tuple?**

**Answer:** Fixed size array with known types.

```ts
let user: [number, string] = [1, "Rajendra"];
```

**Trick:** “Tuple = array ka strict version.”

---

### **5️⃣ What is Enum?**

**Answer:** Set of named constants.

```ts
enum Status {
  Pending,
  Active,
  Completed,
}
```

**Trick:** “Readable numbers → Status.Active instead of 1.”

---

### **6️⃣ Difference between Interface and Type?**

**Answer:**

- Interface → mainly objects, extendable
- Type → object + primitive + union
  **Trick:** “Interface → blueprint, Type → flexible alias.”

---

### **7️⃣ Optional and Default Parameters in Functions**

```ts
function add(a: number, b?: number) {} // optional
function sum(a: number, b: number = 5) {} // default
```

**Trick:** “JS me missing param undefined, TS me type safe.”

---

### **8️⃣ What is a Generic?**

**Answer:** Function/class me type ko flexible rakhna.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

**Trick:** “T = type placeholder.”

---

### **9️⃣ What is Union Type?**

**Answer:** Variable multiple types le sakta hai.

```ts
let id: string | number;
```

**Trick:** “Ya ye ya wo.”

---

### **🔟 What is Intersection Type?**

**Answer:** Combine multiple types.

```ts
type C = A & B;
```

**Trick:** “A + B = C, dono ki properties.”

---

### **1️⃣1️⃣ What is Type Assertion?**

```ts
let val: any = "Hello";
let len: number = (val as string).length;
```

**Trick:** “Casting JS me nahi, TS me yes.”

---

### **1️⃣2️⃣ Access Modifiers in TS Class**

- `public` → default
- `private` → only inside class
- `protected` → inside class + subclass
  **Trick:** “Encapsulation ka magic.”

---

### **1️⃣3️⃣ What is Optional Chaining?**

```ts
let length = obj?.prop?.length;
```

**Trick:** “?. → safe navigation operator.”

---

### **1️⃣4️⃣ Nullish Coalescing**

```ts
let value = input ?? "default";
```

**Trick:** “Only null/undefined → fallback.”

---

### **1️⃣5️⃣ Difference between JS class & TS class**

**Answer:** TS class → type annotations, access modifiers, implements, abstract class.
**Trick:** “JS class ka upgraded version.”

---

### **1️⃣6️⃣ Can we use TS in React?**

**Answer:** Yes, use `.tsx` files, props/state type safe.

```ts
interface Props {
  name: string;
}
const Hello: React.FC<Props> = ({ name }) => <h1>{name}</h1>;
```

**Trick:** “Props + State → no runtime errors.”

---

### **1️⃣7️⃣ Can we use TS in Node/Express?**

**Answer:** Yes, request/response types define kar sakte hain.
**Trick:** “API request/response safe → no wrong payload.”

---

### **1️⃣8️⃣ Difference between “any” & “unknown” type**

- `any` → bypasses type check
- `unknown` → safer, must check type before use
  **Trick:** “Unknown → cautious any.”

---

### **1️⃣9️⃣ What is Declaration File (.d.ts)?**

**Answer:** Type info for JS libraries.

```ts
// lodash.d.ts
declare module "lodash";
```

**Trick:** “TS ko JS library samjhane ka manual.”

---

### **2️⃣0️⃣ How TS compiles to JS?**

**Answer:** TS → compile → JS → browser/Node run
**Trick:** “TS sirf dev tool, runtime JS hi execute hota hai.”

---

Bhai, agar tu chaahe to mai **iske saath ek “mini TS cheatsheet” bhi bana doon** jisme saare important syntax, functions, class, interface, generic ka ek hi page pe ready ho, jo tu interview me quickly revise kar sake.

Kya mai wo bana du?
