Perfect 👌 Here’s the **Child Process in Node.js – Cheat Sheet** in markdown format for your interview revision:

---

# 📝 Child Process in Node.js – Cheat Sheet

## 🔹 What is Child Process?

- Node.js is **single-threaded**, but heavy CPU tasks block the event loop.
- `child_process` module allows creating **independent processes**.
- Runs in **parallel** → keeps app responsive.

---

## 🔹 Methods

### 1. **exec**

- Runs a command, buffers output (string).
- ❌ Not good for large output.

```js
const { exec } = require("child_process");
exec("ls -l", (err, stdout) => console.log(stdout));
```

✅ Best for: small shell commands (`git status`, `ls`)

---

### 2. **execFile**

- Runs executable file directly.
- Faster + safer (no shell parsing).

```js
const { execFile } = require("child_process");
execFile("node", ["-v"], (err, stdout) => console.log(stdout));
```

✅ Best for: running `.exe`, `.sh`, or direct programs

---

### 3. **spawn**

- Runs command and streams output (`stdout`, `stderr`).
- Handles **large output / long running tasks**.

```js
const { spawn } = require("child_process");
const child = spawn("ping", ["google.com"]);
child.stdout.on("data", (d) => console.log(`Output: ${d}`));
```

✅ Best for: big data (logs, ping, video encoding)

---

### 4. **fork**

- Special case of `spawn` → runs a Node.js script.
- Provides **IPC channel** (`send`, `on("message")`).

```js
// parent.js
const { fork } = require("child_process");
const child = fork("./child.js");
child.on("message", (msg) => console.log(msg));
child.send({ task: "start" });
```

✅ Best for: multiple Node.js workers, clustering, background tasks

---

## 🔹 One-Liner Differences

| Method       | Output Handling   | Runs Executable | Use Case                |
| ------------ | ----------------- | --------------- | ----------------------- |
| **exec**     | Buffered (string) | Yes (via shell) | Small commands          |
| **execFile** | Buffered (string) | Direct binary   | Run `.exe`, `.sh`       |
| **spawn**    | Stream (chunks)   | Yes             | Large/continuous output |
| **fork**     | Stream + IPC      | Only Node.js    | Multi-process Node apps |

---

## 🔹 Benefits

- 🚀 Parallel execution (multi-core usage)
- 🔄 Non-blocking event loop
- 📡 Easy parent-child communication (`fork`)
- ⚡ Better performance for heavy tasks

---
