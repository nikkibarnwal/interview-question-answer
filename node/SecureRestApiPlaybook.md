Perfect 👍 Let me give you a **one-page REST API Security Playbook** – like a quick checklist you can revise before interviews or even use in real projects.

---

# 🔐 REST API Security Playbook (One-Page Checklist)

### ✅ **1. Authentication**

- [ ] Use **JWT** (short-lived access + refresh token).
- [ ] For external apps → **OAuth2 / OpenID Connect**.
- [ ] Store secrets in **env variables / Vault** (not in code).

---

### ✅ **2. Authorization**

- [ ] Apply **RBAC** (Role-based) or **ABAC** (Attribute-based).
- [ ] Protect sensitive routes with middleware (e.g., `adminOnly`).

---

### ✅ **3. Transport Security**

- [ ] Enforce **HTTPS only** (TLS 1.2+).
- [ ] Redirect HTTP → HTTPS.
- [ ] Use strong TLS certificates (Let’s Encrypt, AWS ACM).

---

### ✅ **4. Rate Limiting & Throttling**

- [ ] `express-rate-limit` (basic).
- [ ] **Redis-backed limiter** for distributed apps.
- [ ] Block brute-force login attempts.

---

### ✅ **5. Security Headers**

- [ ] Use **Helmet** in Express.
- [ ] Disable `x-powered-by: Express`.
- [ ] Set CORS policy (`Access-Control-Allow-Origin`).

---

### ✅ **6. CSRF Protection**

- [ ] If using cookies → enable **CSRF tokens** (`csurf`).
- [ ] Set cookies as `HttpOnly`, `Secure`, `SameSite=Strict`.
- [ ] If using JWT → usually CSRF not needed.

---

### ✅ **7. Input Validation & Sanitization**

- [ ] Validate using **Joi/Zod/Yup**.
- [ ] Escape user input (to avoid XSS).
- [ ] Use parameterized queries (to avoid SQL Injection).

---

### ✅ **8. Logging & Monitoring**

- [ ] Log failed login attempts.
- [ ] Monitor suspicious traffic (multiple requests from same IP).
- [ ] Use tools like **Winston / ELK / Datadog**.

---

### ✅ **9. Dependency & Code Security**

- [ ] Run `npm audit fix` regularly.
- [ ] Use **Snyk** or **Dependabot**.
- [ ] Don’t use deprecated libraries.

---

### ✅ **10. Data Security**

- [ ] Hash passwords with **bcrypt/scrypt/argon2**.
- [ ] Encrypt sensitive fields (e.g., `crypto` or KMS).
- [ ] Mask sensitive logs (no plain passwords/tokens).

---

# 📝 Quick Revision Mnemonic

👉 **“ARTH-CCILD”** (sounds like _Earth-Child_)

- **A** → Authentication
- **R** → Rate limiting
- **T** → Transport (HTTPS)
- **H** → Helmet (Headers)
- **C** → CSRF
- **C** → CORS
- **I** → Input Validation
- **L** → Logging
- **D** → Data security

---

⚡ With this checklist, you can **instantly recall all major security layers** in interviews.
