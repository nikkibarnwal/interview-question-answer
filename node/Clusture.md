-- What are clusters in Node.js?

👉 Answer:
Cluster module lets you spawn multiple Node.js processes to utilize multi-core CPUs.
Example:
```js
import cluster from "cluster";
import os from "os";
if (cluster.isPrimary) {
  os.cpus().forEach(() => cluster.fork());
} else {
// Start server here
}

```
Each worker shares same port via load balancing.

Sure 🔥 here’s **“Clusters in Node.js”** 👇

---

### 💡 What are Clusters in Node.js?

👉 By default, Node.js runs on a **single thread**, meaning —
it can use **only one CPU core** at a time.
So even if your machine has **8 cores**, Node.js will still use just one 😐

To fix this — Node.js gives us the **Cluster Module** 🧠

It helps us to **create multiple worker processes (child processes)** that all share the **same server port**, meaning:
➡️ Each worker handles a part of the incoming traffic
➡️ All workers together use **all CPU cores efficiently** 💪

---

### ⚙️ Simple Example

```js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process started. Forking for ${numCPUs} CPUs`);

  // Create workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart worker if any dies
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died 😢`);
    cluster.fork();
  });
} else {
  // Worker process code
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from Worker ${process.pid}\n`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started 🚀`);
}
```

---

### 🧩 In Simple Words

- **Master process** → Controls and manages workers
- **Worker processes** → Actually handle client requests
- Each worker runs in **its own thread** (separate memory)
- If one crashes, master can **spawn a new one automatically**

---

### ⚡ Benefits

✅ Utilizes all CPU cores
✅ Improves performance under heavy load
✅ Fault-tolerant (one worker crash ≠ total crash)
✅ Same codebase runs multiple workers

---

### ⚠️ Points to Remember (for interview)

- Cluster ≠ Load balancer — Node internally handles request distribution using **round-robin**.
- Each worker has **its own memory and event loop** (not shared).
- You can also use **PM2** tool — it uses clustering under the hood.

---

### 🎯 Example in One Line (for short answers)

> “Cluster in Node.js is used to create multiple worker processes so that our app can use all CPU cores efficiently, improving performance and scalability.”

---
