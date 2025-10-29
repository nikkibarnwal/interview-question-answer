Bilkul bhai! Ab le aate hain ek aur important concept:  
**"How does Node.js handle child processes?"** 👶⚙️

Hindi-English mix mein, real-world analogy ke saath — jaise ab tak karte aaye hain 😎  
Taki ek baar padh lo, toh dimag mein chipak jaye! 💥

---

## ❓ **What is a Child Process in Node.js?**

> Node.js is **single-threaded** by default.  
> But kya karein agar hume **heavy kaam** karna ho? 😰

### ✅ Solution:

> Create a **Child Process** — matlab ek **chhota worker** jise kaam de do  
> Taki main app slow na ho 🔥

---

## 🍽️ Analogy: Chef & Assistant 👨‍🍳👨‍🍳

> Socho tum head chef ho, aur tumhe 3 dishes banani hain  
> Tum khud sab karoge to **slow** ho jaoge

✅ Toh tumne bula liya ek **assistant chef** (child process)  
✅ Tumne usse bola: "Bhai tu soup bana, main pasta bana raha hoon"

> **That's how child_process works in Node.js!**

---

## 🔧 Node.js provides 4 ways to create child processes:

| Method       | Description                               |
| ------------ | ----------------------------------------- |
| `exec()`     | Command run karta hai, output buffer mein |
| `spawn()`    | Stream-based command run                  |
| `fork()`     | Specially for running JS files (IPC)      |
| `execFile()` | Directly executes a file                  |

---

## ✅ Example 1: Using `exec()`

```js
const { exec } = require("child_process");

exec("ls -l", (err, stdout, stderr) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("Output:", stdout);
});
```

> ⚠️ Limitation: `exec` output ko memory buffer mein store karta hai — **large output ke liye risky** 💣

---

## ✅ Example 2: Using `spawn()` (stream-based)

```js
const { spawn } = require("child_process");

const child = spawn("ls", ["-l"]);

child.stdout.on("data", (data) => {
  console.log(`Output: ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`Error: ${data}`);
});
```

> ✅ Good for **large data output** — because it uses **streams**

---

## ✅ Example 3: Using `fork()` (run a separate Node.js file)

```js
// main.js
const { fork } = require("child_process");
const child = fork("child.js");

child.on("message", (msg) => {
  console.log("Message from child:", msg);
});

child.send({ hello: "world" });

// child.js
process.on("message", (msg) => {
  console.log("Parent says:", msg);
  process.send({ reply: "hi parent!" });
});
```

> ✅ Best for creating **multi-process Node apps**  
> ✅ Easy communication using `.send()` / `on('message')`

---

## 🧠 When to Use What?

| Method       | Use When                                    |
| ------------ | ------------------------------------------- |
| `exec()`     | Simple command & small output               |
| `spawn()`    | Large output, streaming needed              |
| `fork()`     | Node.js child script with message passing   |
| `execFile()` | Run binary or script directly without shell |

---

## 🎯 Summary Table:

| Concept       | Explanation                  | Analogy                      |
| ------------- | ---------------------------- | ---------------------------- |
| Child Process | Separate Node thread         | Assistant Chef 👨‍🍳            |
| exec()        | Easy, buffer-based           | Soup bana, bata ke de do     |
| spawn()       | Stream-based, more efficient | Soup thoda-thoda bhejta rahe |
| fork()        | Node-to-Node messaging       | Do chef baat kar rahe hain   |

---

## 💡 Easy Trick to Remember:

> **Child Process = “Assistant jo kaam me help kare bina main chef ko busy kiye”**  
> ✔ exec = One-shot job  
> ✔ spawn = Long job with progress  
> ✔ fork = Chat karne wala assistant

---
