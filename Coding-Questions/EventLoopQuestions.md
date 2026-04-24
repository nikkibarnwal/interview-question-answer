🔥 **Here are 10 MORE super-advanced Node.js Event Loop output questions** — exactly the level asked in Senior MERN / Node.js interviews.

➡ Answers will be provided separately if you want to check later.
➡ Use the Super Trick:
**SYNC → nextTick → Promise → Await → setImmediate → setTimeout**

---

# ⚡ **11.**

```js
console.log("A");

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  process.nextTick(() => console.log("N1"));
});

(async () => {
  console.log("A1");
  await null;
  console.log("A2");
})();

process.nextTick(() => console.log("N2"));

console.log("B");
```

---

# ⚡ **12.**

```js
Promise.resolve()
  .then(() => {
    console.log("P1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("P2");
  });

(async () => {
  await Promise.resolve();
  console.log("A1");
})();

console.log("S");
```

---

# ⚡ **13.**

```js
console.log("X");

setImmediate(() => {
  console.log("I1");
  process.nextTick(() => console.log("N2"));
});

process.nextTick(() => console.log("N1"));

Promise.resolve().then(() => {
  console.log("P1");
  setImmediate(() => console.log("I2"));
});

console.log("Y");
```

---

# ⚡ **14.**

```js
(async () => {
  console.log("A");
  await Promise.resolve();
  console.log("B");

  Promise.resolve().then(() => console.log("C"));

  await null;
  console.log("D");
})();

Promise.resolve().then(() => console.log("E"));

console.log("F");
```

---

# ⚡ **15.**

```js
setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  return Promise.resolve().then(() => console.log("P2"));
});

console.log("S");

(async () => {
  await null;
  console.log("A1");
})();
```

---

# ⚡ **16.**

```js
console.log("Start");

setImmediate(() => console.log("I1"));

Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T1"), 0);
});

process.nextTick(() => console.log("N1"));

(async () => {
  await null;
  console.log("A1");
})();

console.log("End");
```

---

# ⚡ **17.**

```js
Promise.resolve().then(() => {
  console.log("P1");
  setImmediate(() => console.log("I1"));
  process.nextTick(() => console.log("N1"));
});

(async () => {
  await null;
  console.log("A1");
})();

console.log("S");
```

---

# ⚡ **18.**

```js
console.log(1);

process.nextTick(() => console.log(2));

(async () => {
  console.log(3);
  await null;
  console.log(4);
  await Promise.resolve();
  console.log(5);
})();

Promise.resolve().then(() => console.log(6));

console.log(7);
```

---

# ⚡ **19.**

```js
console.log("Q");

Promise.resolve().then(() => {
  console.log("P1");
  return Promise.resolve().then(() => console.log("P2"));
});

(async () => {
  console.log("A1");
  await null;
  console.log("A2");
})();

process.nextTick(() => console.log("N1"));

console.log("R");
```

---

# ⚡ **20.**

```js
setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  process.nextTick(() => console.log("N1"));
  Promise.resolve().then(() => console.log("P2"));
});

(async () => {
  await null;
  console.log("A1");
})();

setImmediate(() => console.log("I1"));

console.log("S");
```

---
