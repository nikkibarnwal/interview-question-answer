### 1. What is Node.js?

**🧠 Hinglish:**
Node.js ek **JavaScript runtime environment** hai jo browser ke bahar JavaScript run karta hai. Ye **Chrome ke V8 engine** par built hai.

Node.js ka main benefit hai ki ye **non-blocking, asynchronous I/O** use karta hai, isliye multiple requests efficiently handle kar sakta hai.

**🎯 Interview Answer:**

> “Node.js is a JavaScript runtime environment built on Chrome's V8 engine. It allows us to run JavaScript on the server side. It uses an event-driven and non-blocking I/O model, which makes it suitable for scalable and I/O-intensive applications.”

**🪄 Remember Trick:**

> **Node = JS outside browser + V8 + Non-blocking + Event-driven**

**💡 Example:**

```js
const http = require("http");

http.createServer((req, res) => {
  res.end("Hello");
}).listen(3000);
```

---

# 2. Is Node.js single-threaded?

**🧠 Hinglish:**
Interview mein sirf **"Yes"** mat bolna.

Node.js ka **JavaScript execution primarily single-threaded** hota hai, but internally Node.js **libuv**, OS capabilities aur thread pool ka use karta hai for certain operations.

For example:

* File system
* DNS
* Crypto
* Some CPU-intensive operations

**🎯 Interview Answer:**

> “Node.js uses a single-threaded event loop for executing JavaScript code, but it can use background threads through libuv for certain I/O and CPU-intensive operations.”

**🪄 Remember Trick:**

> **JS = Single Thread**
> **Background work = libuv / OS**
