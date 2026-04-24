Here are **10 Killer Event Loop Practice Questions** with **expected output hidden**, so you can test your mastery using the **SUPER TRICK (SYNC → nextTick → Promise → Await → Immediate → Timeout)**.

After questions, I will give **ALL answers separately** so you can verify.

---

# 🔥 **10 Node.js Event Loop Output Questions (Practice Set)**

Use the 6-Layer Ladder Rule:

### **1.**

```js
console.log("A");

process.nextTick(() => console.log("B"));

Promise.resolve().then(() => console.log("C"));

(async () => {
  console.log("D");
  await null;
  console.log("E");
})();

console.log("F");
```

---

### **2.**

```js
console.log("1");

Promise.resolve().then(() => {
  console.log("2");
  process.nextTick(() => console.log("3"));
});

process.nextTick(() => console.log("4"));

console.log("5");
```

---

### **3.**

```js
async function test() {
  console.log("X");
  await Promise.resolve();
  await Promise.resolve();
  console.log("Y");
}
test();

Promise.resolve().then(() => console.log("Z"));
console.log("W");
```

---

### **4.**

```js
console.log("start");

setTimeout(() => console.log("T1"), 0);

setImmediate(() => console.log("I1"));

Promise.resolve().then(() => console.log("P1"));

process.nextTick(() => console.log("N1"));

console.log("end");
```

---

### **5.**

```js
Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T1"));
});

setImmediate(() => console.log("I1"));

(async () => {
  console.log("A1");
  await null;
  console.log("A2");
})();
```

---

### **6.**

```js
setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  Promise.resolve().then(() => console.log("P2"));
});

console.log("S");
```

---

### **7.**

```js
(async () => {
  console.log("AA");
  await Promise.resolve();
  console.log("BB");
  await Promise.resolve();
  console.log("CC");
})();

Promise.resolve().then(() => console.log("DD"));
console.log("EE");
```

---

### **8.**

```js
console.log(1);

setImmediate(() => console.log(2));

process.nextTick(() => console.log(3));

Promise.resolve().then(() => {
  console.log(4);
  setImmediate(() => console.log(5));
});

console.log(6);
```

---

### **9.**

```js
console.log("S");

process.nextTick(() => console.log("N1"));

Promise.resolve().then(() => {
  console.log("P1");
  process.nextTick(() => console.log("N2"));
  Promise.resolve().then(() => console.log("P2"));
});

console.log("E");
```

---

### **10.**

```js
setTimeout(() => console.log("T"), 0);

setImmediate(() => console.log("I"));

Promise.resolve().then(() => {
  console.log("P");
  setTimeout(() => console.log("T2"), 0);
});

(async () => {
  await null;
  console.log("A");
})();
```

---

# 💥 Ready for the Answers?

Here are the **final outputs for all 10 questions**:

---

# 🎯 **ANSWERS**

## **1.**

```
A
D
F
B
C
E
```

---

## **2.**

```
1
5
4
2
3
```

---

## **3.**

```
X
W
Z
Y
```

---

## **4.**

```
start
end
N1
P1
I1
T1
```

---

## **5.**

```
A1
P1
A2
I1
T1
```

---

## **6.**

```
S
P1
P2
T1
```

---

## **7.**

```
AA
EE
DD
BB
CC
```

---

## **8.**

```
1
6
3
4
2
5
```

---

## **9.**

```
S
E
N1
P1
N2
P2
```

---

## **10.**

```
P
A
I
T
T2
```

---
