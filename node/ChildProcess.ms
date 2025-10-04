Good one 👍 Ye interview me kaafi common question hai. Chalo step by step samjhte hain.

---

# 🚀 Child Process in Node.js

## 🔹 What is Child Process?

* Node.js by default **single-threaded** hota hai (ek hi thread par JavaScript execute hoti hai).
* Agar aapko **CPU-intensive task** (jaise large calculation, file compression, video processing) karna hai, to wo **event loop block** kar dega.
* **Solution** → Node.js ka `child_process` module.
* Ye hume **new processes spawn** karne deta hai, jo independently run hote hain (parallel execution).

---

## 🔹 Methods in `child_process`

Node.js child processes create karne ke 4 main tareeke hote hain:

1. **exec**

   * Command ko execute karta hai aur output buffer me return karta hai (string form me).
   * Use jab karna hai jab **output chhota ho**.

   ```js
   const { exec } = require("child_process");

   exec("ls -l", (error, stdout, stderr) => {
     if (error) {
       console.error(`Error: ${error.message}`);
       return;
     }
     if (stderr) {
       console.error(`Stderr: ${stderr}`);
       return;
     }
     console.log(`Stdout: ${stdout}`);
   });
   ```

---

2. **execFile**

   * Direct executable file run karta hai (jaise `.sh`, `.exe`).
   * Command string parse nahi karta (thoda faster hai).

   ```js
   const { execFile } = require("child_process");

   execFile("node", ["-v"], (error, stdout) => {
     if (error) throw error;
     console.log(`Node version: ${stdout}`);
   });
   ```

---

3. **spawn**

   * Command run karta hai, **data stream ke through milta hai** (na ki ek hi buffer me).
   * Best for **large output** ya **long running process**.

   ```js
   const { spawn } = require("child_process");

   const child = spawn("ping", ["google.com"]);

   child.stdout.on("data", (data) => {
     console.log(`Output: ${data}`);
   });

   child.stderr.on("data", (data) => {
     console.error(`Error: ${data}`);
   });

   child.on("close", (code) => {
     console.log(`Child process exited with code ${code}`);
   });
   ```

---

4. **fork**

   * Special case of `spawn` → specifically Node.js scripts run karne ke liye.
   * Parent aur child ke beech **communication channel** (IPC) ban jata hai → `send` aur `on("message")` se baat kar sakte hain.
   * Use jab karna ho jab **multiple Node.js workers** banane ho.

   **parent.js**

   ```js
   const { fork } = require("child_process");

   const child = fork("./child.js");

   child.on("message", (msg) => {
     console.log("Message from child:", msg);
   });

   child.send({ task: "start" });
   ```

   **child.js**

   ```js
   process.on("message", (msg) => {
     console.log("Message from parent:", msg);
     process.send({ status: "done" });
   });
   ```

---

## 🔹 Best Use Cases

* `exec` → Jab chhoti command chalani ho aur chhota output lena ho (e.g., `git status`).
* `execFile` → Jab direct binary/executable run karna ho (fast aur safe).
* `spawn` → Jab large output handle karna ho (e.g., streaming logs, ping).
* `fork` → Jab **multiple Node.js worker processes** banane ho (e.g., clustering, background computation).

---

## 🔹 Benefits

✅ CPU-intensive tasks background me run kar sakte ho
✅ Event loop block nahi hoga → server responsive rahega
✅ Multi-core CPU ka full use hota hai
✅ Parent-child IPC communication easy hai (fork ke case me)

---

👉 Simple line me:
**Child process = ek alag Node.js instance / system command run karne ka tarika, jo event loop ko block kiye bina parallel kaam karta hai.**

---
