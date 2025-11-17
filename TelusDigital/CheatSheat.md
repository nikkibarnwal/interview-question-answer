Perfect.
Here is your **One-Page TELUS Digital Interview Cheat Sheet** — super crisp, senior-level, aur full interview coverage.
Isko 3–4 baar padhoge → interview me har answer natural niklega.

---

# ⭐ **TELUS Digital – One Page Interview Cheat Sheet**

_(React + Node + JS + API Design + SQL/NoSQL + Behavioural)_

---

# 1️⃣ **React Essentials (Senior Level, Simple English)**

### **1. What is React?**

“React is a component-driven, declarative UI library that updates only what’s changed using Virtual DOM.”

### **2. How do you optimize React performance?**

- React.memo
- useCallback + useMemo
- Code splitting
- Suspense lazy loading
- Avoid unnecessary rerenders
- Virtualized lists
- API response batching

### **3. Context API vs Redux?**

“Context is for low-frequency global state.
Redux is for complex, high-frequency business logic with predictable updates.”

### **4. Explain Reconciliation.**

“React compares old vs new virtual DOM and updates only the minimal part of the real DOM.”

### **5. Keys in React?**

“Keys help React identify which items changed, added, removed — critical for list performance.”

---

# 2️⃣ **JavaScript (Core Topics They Always Ask)**

### **1. Closure?**

“Function remembers variables from its parent scope.”

### **2. Event Loop?**

“JS runs single threaded, async tasks go to the event loop, and callback queue schedules execution.”

### **3. Promise vs async/await?**

“Promise is a wrapper around async results.
Async/await is cleaner syntax over promises.”

### **4. Hoisting?**

“JS moves declarations to top during compilation.”

### **5. Debounce vs Throttle?**

Debounce = execute after user stops typing.
Throttle = limit execution every X ms.

---

# 3️⃣ **Node.js (Backend, API, Real Work You Do)**

### **1. How Node handles async?**

“Node is single-threaded, but async tasks go to libuv thread pool; event loop keeps JS thread free.”

### **2. Middleware?**

“Functions that run between request and response (auth, validation, logging).”

### **3. How do you secure Node APIs?**

- JWT Auth
- Rate limiting
- Input sanitization
- Helmet headers
- SQL/NoSQL injection prevention

### **4. Handling heavy CPU tasks?**

“Use Worker Threads or move to background queues.”

---

# 4️⃣ **API Design (Million-Scale Answer)**

### ⭐ **Scalable API — 4 Pillar Answer**

**Stateless + Cache + Queue + DB Scaling + Auto-Scaling**

### **Full 20-second answer:**

“I design scalable APIs with stateless servers so I can auto-scale horizontally.
CDN + Redis reduce most traffic.
Heavy tasks go to queues like Kafka/RabbitMQ so the API stays fast.
Database uses read replicas, indexing, sharding if needed.
Rate limiting, circuit breakers and monitoring keep the system stable.”

### **Bonus one-line summary:**

**“CDN → Gateway → Stateless Servers → Cache + Queue + DB → Monitoring.”**

---

# 5️⃣ **SQL + NoSQL (Expected Questions)**

### **1. SQL vs NoSQL?**

SQL → fixed schema, ACID, complex joins.
NoSQL → flexible schema, horizontal scale, high read/write throughput.

### **2. When to choose MongoDB?**

“When schema is flexible, scale is high, and we want fast document reads/writes.”

### **3. Indexes?**

“Indexes reduce scan time by pointing directly to the required data.”

### **4. Query optimization?**

- EXPLAIN plan
- Indexes
- Avoid SELECT \*
- Limit & pagination
- Proper normalization

---

# 6️⃣ **System Design (Asked in Senior Profiles)**

### **Design Authentication System**

- JWT access token
- Refresh token
- Redis blacklist
- Role-based access
- Rotating keys

### **Design Order Service**

- API Gateway
- Stateless services
- DB with replicas
- Cache
- Queue for async tasks
- Observability

---

# 7️⃣ **Behavioural (HR + Manager Round)**

### **1. Tell me about yourself.**

“9+ Years, strong in React, Node.js, JavaScript, Redux, APIs, performance, and cloud deployments.
Focus on writing clean code, solving business problems, and improving performance.
Excited for TELUS Digital because of modern tech stack and product culture.”

### **2. Tell me a time you disagreed with the team.**

“Constructive disagreement → shared data → proposed alternative → aligned → shipped with better performance.”

### **3. Individual contribution vs team contribution?**

“I always take ownership of my module (design, coding, testing), but collaborate with team for integration, standards, code reviews and deployment.”

### **4. Why TELUS Digital?**

“TELUS is a large-scale digital platform; I can work on high-traffic systems, modern tech, real customer impact, and grow in architecture-level decision-making.”

---

# 8️⃣ **Your 10-Second Elevator Pitch**

“Hi, I’m Rajendra, a Senior MERN/JS developer with strong experience in React, Node.js, scalable APIs, and both SQL & NoSQL databases. I focus on performance, clean architecture, and solving real business problems. I believe I’ll add strong value to TELUS Digital’s engineering team.”

---

# 9️⃣ ✨ **Memory Trick (To Recall Everything Easily)**

### **React → “RPOC”**

Render → Props → Optimization → Components

### **JS → “CHEPT”**

Closure → Hoisting → Event loop → Promise → Throttle/debounce

### **API Scaling → “SCQD”**

Stateless → Cache → Queue → Database scaling

### **DB → “RIPS”**

Replica → Index → Pagination → Sharding

---

# 🔥 This is your full cheat sheet.
