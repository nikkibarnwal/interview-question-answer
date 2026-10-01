## 🚀 Node.js + Express.js Interview Cheat Sheet — 1 Line Answers

| #  | Question                       | 1-Line Interview Answer                                                                                                        | 🧠 Remember Trick                |
| -- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| 1  | What is Node.js?               | Node.js is a JavaScript runtime built on Chrome V8 that runs JS outside the browser using an event-driven, non-blocking model. | **JS + V8 + Async**              |
| 2  | Why Node.js?                   | Node.js is good for I/O-heavy and real-time applications because it handles many concurrent requests efficiently.              | **I/O + Scale**                  |
| 3  | Is Node.js single-threaded?    | JavaScript execution uses a single main thread, while libuv and the OS handle certain background operations.                   | **JS 1 Thread, Background Work** |
| 4  | What is V8?                    | V8 is Google's JavaScript engine that compiles and executes JavaScript code.                                                   | **V8 = JS Engine**               |
| 5  | What is Event Loop?            | Event Loop enables Node.js to handle asynchronous operations without blocking the main JavaScript thread.                      | **Don't Wait**                   |
| 6  | What is libuv?                 | libuv provides Node.js with the event loop, asynchronous I/O capabilities, and a thread pool for certain operations.           | **Async Engine**                 |
| 7  | Blocking vs Non-blocking?      | Blocking waits for an operation to finish, while non-blocking starts it and continues with other work.                         | **Wait vs Continue**             |
| 8  | Synchronous vs Asynchronous?   | Synchronous code waits for each operation, while asynchronous code allows other work to continue.                              | **Wait vs Parallel Work**        |
| 9  | What is Callback?              | A callback is a function passed to another function and executed after an operation completes.                                 | **Call Me Back**                 |
| 10 | Callback Hell?                 | Deeply nested callbacks make asynchronous code difficult to read and maintain.                                                 | **Nested Callbacks**             |
| 11 | What is Promise?               | A Promise represents the eventual success or failure of an asynchronous operation.                                             | **Future Result**                |
| 12 | What is async/await?           | async/await provides cleaner syntax for working with Promises and asynchronous code.                                           | **Clean Promise**                |
| 13 | What is EventEmitter?          | EventEmitter allows Node.js applications to create, listen for, and emit custom events.                                        | **on = Listen, emit = Trigger**  |
| 14 | What is npm?                   | npm is the package manager used to install and manage Node.js/JavaScript dependencies.                                         | **Install + Manage**             |
| 15 | package.json vs lock?          | package.json defines dependencies, while package-lock.json locks their exact versions and dependency tree.                     | **Need vs Exact**                |
| 16 | What is Express.js?            | Express is a lightweight Node.js framework used to build web applications and REST APIs.                                       | **Node + API**                   |
| 17 | Why Express?                   | Express simplifies Node.js development with routing, middleware, request handling, and error handling.                         | **Routing + Middleware**         |
| 18 | What is Middleware?            | Middleware is a function that accesses req, res and next and runs during the request-response lifecycle.                       | **Request Checkpoint**           |
| 19 | What is `next()`?              | `next()` passes control from the current middleware to the next middleware or route handler.                                   | **Go Next**                      |
| 20 | What if `next()` isn't called? | If middleware neither sends a response nor calls next(), the request can remain pending.                                       | **No Next = Stuck**              |
| 21 | What is Routing?               | Routing defines how an application responds to a specific HTTP method and URL.                                                 | **Method + URL**                 |
| 22 | GET?                           | GET is used to retrieve data from the server.                                                                                  | **Read**                         |
| 23 | POST?                          | POST is generally used to create a new resource or submit data.                                                                | **Create**                       |
| 24 | PUT?                           | PUT is generally used to completely replace or update a resource.                                                              | **Replace**                      |
| 25 | PATCH?                         | PATCH is used to partially update a resource.                                                                                  | **Partial Update**               |
| 26 | DELETE?                        | DELETE is used to remove a resource.                                                                                           | **Remove**                       |
| 27 | `req.params`?                  | `req.params` contains dynamic values defined in the URL path, such as `/users/:id`.                                            | **URL Path**                     |
| 28 | `req.query`?                   | `req.query` contains query-string parameters used for filtering, searching, sorting, or pagination.                            | **After ?**                      |
| 29 | `req.body`?                    | `req.body` contains data sent by the client in the request body.                                                               | **Request Data**                 |
| 30 | params vs query vs body?       | Params identify the resource, query controls the request, and body carries the submitted data.                                 | **Path + ? + Data**              |
| 31 | What is `express.json()`?      | It parses incoming JSON request bodies and makes the data available through `req.body`.                                        | **JSON → Body**                  |
| 32 | What is REST API?              | REST is an architectural style using resources, HTTP methods, stateless communication, and standard status codes.              | **Resource + HTTP**              |
| 33 | What is stateless?             | Stateless means each request contains the information required to process it without relying on previous request state.        | **Every Request Knows**          |
| 34 | What is CORS?                  | CORS controls whether a browser allows requests from one origin to access resources on another origin.                         | **Cross-Origin Permission**      |
| 35 | What is authentication?        | Authentication verifies **who the user is**.                                                                                   | **WHO?**                         |
| 36 | What is authorization?         | Authorization verifies **what an authenticated user is allowed to do**.                                                        | **WHAT CAN YOU DO?**             |
| 37 | 401 vs 403?                    | 401 means authentication is missing/invalid, while 403 means the user is authenticated but not permitted.                      | **401 = Who? / 403 = No**        |
| 38 | What is 404?                   | 404 means the requested resource could not be found.                                                                           | **Not Found**                    |
| 39 | What is 500?                   | 500 means the server encountered an unexpected internal error.                                                                 | **Server Error**                 |
| 40 | Error middleware?              | Express error middleware uses `(err, req, res, next)` to centrally handle application errors.                                  | **4 Parameters**                 |
| 41 | How handle errors?             | Use centralized error middleware with proper status codes, logging, and consistent error responses.                            | **Central Error Handler**        |
| 42 | How secure Express API?        | Use HTTPS, authentication, authorization, validation, rate limiting, secure headers, CORS, and secure secrets.                 | **HTTPS + Auth + Validate**      |
| 43 | What is rate limiting?         | Rate limiting restricts how many requests a client can make within a defined period.                                           | **Too Many → Block**             |
| 44 | Why Redis for rate limiting?   | Redis provides shared, fast, centralized state across multiple Node.js instances.                                              | **Shared Counter**               |
| 45 | How scale Node.js?             | Run multiple stateless instances behind a load balancer and use caching, database optimization, and async processing.          | **LB + Nodes + Redis**           |
| 46 | What if API is slow?           | Check logs, database queries, external APIs, network, CPU/memory, then optimize the actual bottleneck.                         | **Find Bottleneck**              |
| 47 | How handle server crash?       | Use multiple instances with health checks and automatic restart/orchestration plus centralized monitoring.                     | **Restart + Replicas**           |
| 48 | What is JWT?                   | JWT is a signed token commonly used to securely carry claims between client and server.                                        | **Signed Identity**              |
| 49 | Where store JWT?               | For browser apps, secure HttpOnly cookies are often preferred when using cookie-based authentication.                          | **HttpOnly + Secure**            |
| 50 | What is API Gateway?           | API Gateway is a single entry point that can handle routing, authentication, rate limiting, and other cross-cutting concerns.  | **Single Entry**                 |

### ⚡ 30-Second Final Revision

```text
Node.js  → V8 + Event Loop + Non-blocking
libuv    → Async I/O + Thread Pool
Express  → Routing + Middleware + APIs
Middleware → req + res + next
next()   → Go to next middleware
params   → URL path
query    → ?
body     → Request data
REST     → Resource + HTTP + Stateless
AuthN    → WHO?
AuthZ    → WHAT?
401      → Not authenticated
403      → Not authorized
404      → Not found
500      → Server error
CORS     → Cross-origin permission
Redis    → Cache / Rate Limit
JWT      → Signed token
Scale    → Load Balancer + Multiple Nodes
```

**🔥 Interview mantra:**
**“Request → Middleware → Route → Controller → Service → DB → Response”**
