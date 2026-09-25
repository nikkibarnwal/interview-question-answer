
# 1. HTTP Methods

REST API mein commonly ye methods use hote hain:

| Method      | Purpose                                              | Example              |
| ----------- | ---------------------------------------------------- | -------------------- |
| **GET**     | Data retrieve karna                                  | Get users            |
| **POST**    | New resource create karna                            | Create user          |
| **PUT**     | Complete resource update/replace                     | Update complete user |
| **PATCH**   | Partial update                                       | Update only email    |
| **DELETE**  | Resource delete karna                                | Delete user          |
| **HEAD**    | GET jaisa, but response body nahi                    | Check resource       |
| **OPTIONS** | Server ke supported methods/origin rules check karna | CORS preflight       |

---

## GET

Data **retrieve** karne ke liye.

```http
GET /users
```

```http
GET /users/101
```

Example:

```js
app.get("/users", getUsers);
```

### Important

GET generally:

* Data fetch karta hai
* Request body normally use nahi karta
* **Safe** hota hai — server resource ko modify nahi karna chahiye
* **Idempotent** hota hai

---

# POST

New resource **create** karne ke liye.

```http
POST /users
```

Body:

```json
{
  "name": "Raj",
  "email": "raj@example.com"
}
```

Response:

```http
201 Created
```

Example:

```js
app.post("/users", createUser);
```

### Important

POST generally **not idempotent** hota hai.

Agar same request 2 baar bheji:

```text
POST → User 1 created
POST → User 2 created
```

---

# PUT

Existing resource ko **completely replace/update** karne ke liye.

```http
PUT /users/101
```

```json
{
  "name": "Rajendra",
  "email": "raj@example.com",
  "role": "admin"
}
```

Conceptually PUT ka meaning:

> "Resource ko is complete representation se replace karo."

### PUT is idempotent

Same request 5 baar bhejne par final state same rehni chahiye.

---

# PATCH

Resource ka **partial update**.

```http
PATCH /users/101
```

```json
{
  "email": "newemail@example.com"
}
```

Sirf email update hoga.

```text
PUT
→ Complete resource

PATCH
→ Partial resource
```

### Interview trap

**PATCH necessarily idempotent nahi hota.**

Example:

```http
PATCH /account
{
  "balance": "+100"
}
```

Agar repeatedly apply kiya jaye, result change ho sakta hai.

---

# DELETE

Resource delete karne ke liye.

```http
DELETE /users/101
```

Example:

```js
app.delete("/users/:id", deleteUser);
```

Successful deletion:

```http
204 No Content
```

Usually response body nahi hota.

DELETE generally **idempotent** hota hai.

---

# 2. Idempotent kya hota hai?

🔥 Interview mein frequently poocha jaata hai.

Simple definition:

> Same request ko multiple times execute karne par server ka final intended state same rehna idempotency hai.

Generally:

```text
GET     → Idempotent
PUT     → Idempotent
DELETE  → Idempotent
HEAD    → Idempotent
OPTIONS → Idempotent

POST    → Not generally idempotent
PATCH   → Depends on operation
```

### Example

```http
PUT /users/10
{
  "name": "Raj"
}
```

10 baar bhejo:

```text
User name = Raj
```

Final state same.

But:

```http
POST /orders
```

10 baar bhejne par 10 orders create ho sakte hain.

---

# 3. HTTP Status Codes

Sabse important codes ko categories mein yaad karo:

```text
1xx → Informational
2xx → Success
3xx → Redirection
4xx → Client Error
5xx → Server Error
```

---

# 🟢 2xx — Success

## 200 OK

Request successful.

Common:

```http
GET /users
→ 200 OK
```

Also PUT/PATCH successfully process hone par 200 aa sakta hai.

---

## 201 Created

New resource successfully create hua.

```http
POST /users
→ 201 Created
```

Interview mein:

> **POST successfully creates a resource → 201 is commonly appropriate.**

---

## 202 Accepted

Request accept kar li gayi but processing **abhi complete nahi hui**.

Very useful async scenario:

```text
POST /reports
     ↓
202 Accepted
     ↓
Background processing
```

Example:

> "Generate large report" request accept ho gayi, but report background mein generate hogi.

---

## 204 No Content

Request successful, but response body nahi hai.

Common:

```http
DELETE /users/10
→ 204 No Content
```

---

# 🟡 3xx — Redirection

## 301 Moved Permanently

Resource permanently new URL par move ho gaya.

```text
old.com/page
     ↓
new.com/page
```

---

## 302 Found

Temporary redirection.

---

## 304 Not Modified

Client ke cached version mein change nahi hua.

Browser caching scenarios mein useful.

---

# 🔴 4xx — Client Error

Ye bahut important hai.

## 400 Bad Request

Request malformed/invalid hai.

Example:

```json
{
  "email": "abc"
}
```

Expected valid email but invalid format.

```http
400 Bad Request
```

Use when request itself is invalid.

---

# 401 Unauthorized

Actually meaning:

> **Authentication required or authentication failed.**

Example:

```text
No JWT
   ↓
401
```

or:

```text
Invalid/expired credentials
   ↓
401
```

### Easy memory

**401 = "Who are you?"**

---

# 403 Forbidden

User authenticated hai, but usko permission nahi hai.

Example:

```text
User logged in
       ↓
DELETE /users/10
       ↓
User role = normal-user
       ↓
403 Forbidden
```

### Easy memory

**403 = "I know who you are, but you can't do this."**

🔥 Very important:

```text
401 → Authentication problem
403 → Authorization/permission problem
```

---

# 404 Not Found

Requested resource nahi mila.

```http
GET /users/999
```

Agar user exist nahi karta:

```http
404 Not Found
```

---

# 405 Method Not Allowed

Endpoint exist karta hai but requested HTTP method allowed nahi hai.

Example:

```http
POST /users/123
```

but endpoint only supports:

```text
GET /users/123
DELETE /users/123
```

Then:

```http
405 Method Not Allowed
```

---

# 409 Conflict

Request current resource state ke saath conflict kar rahi hai.

Example:

```text
POST /users

email = raj@example.com
```

Agar email already registered hai:

```http
409 Conflict
```

Another common example:

```text
Duplicate resource
Concurrent update conflict
```

---

# 422 Unprocessable Content

Request syntactically valid hai but provided data business/semantic validation pass nahi karta.

Example:

```json
{
  "age": -10
}
```

JSON valid hai, but value invalid hai.

```http
422 Unprocessable Content
```

**Note:** APIs often use either `400` or `422` for validation failures depending on their API convention. Interview mein apni convention clearly explain karna best hai.

---

# 429 Too Many Requests

Client ne allowed rate se zyada requests bhej di.

```text
Client
 ↓
1000 requests/sec
 ↓
Rate limiter
 ↓
429 Too Many Requests
```

Rate limiting ke saath commonly use hota hai.

---

# 🔥 5xx — Server Error

## 500 Internal Server Error

Server ke andar unexpected error.

Example:

```text
Unhandled exception
Database unexpected failure
Bug
```

```http
500 Internal Server Error
```

---

## 501 Not Implemented

Server requested functionality support nahi karta.

Less commonly used in normal REST APIs.

---

## 502 Bad Gateway

Server acting as gateway/proxy ko upstream server se invalid response mila.

Example:

```text
Client
  ↓
API Gateway
  ↓
Backend Service ❌
```

Gateway ko invalid response mila:

```http
502 Bad Gateway
```

---

## 503 Service Unavailable

Service temporarily available nahi hai.

Possible reasons:

```text
Server overloaded
Maintenance
Service unavailable
Dependency unavailable
```

---

## 504 Gateway Timeout

Gateway/proxy ko upstream server se time par response nahi mila.

```text
Client
  ↓
Gateway
  ↓
Backend
  ↓
........ timeout
  ↓
504
```

### 502 vs 504

```text
502 → Upstream gave bad/invalid response

504 → Upstream did not respond in time
```

---

# 🎯 Most Important Status Codes — Interview Cheat Sheet

Isko yaad kar lo:

```text
200 → Success

201 → Resource created

202 → Accepted, processing later

204 → Success, no response body

301 → Permanently moved

304 → Not modified / cache

400 → Bad request

401 → Authentication required/failed

403 → Authenticated but forbidden

404 → Resource not found

405 → Method not allowed

409 → Conflict

422 → Validation/semantic error

429 → Too many requests

500 → Internal server error

502 → Bad gateway

503 → Service unavailable

504 → Gateway timeout
```

---

# 🔥 Interview Scenarios

### Q1. User login nahi hai aur protected API call kar raha hai?

```text
401
```

### Q2. User login hai but admin API access kar raha hai?

```text
403
```

### Q3. User create kar diya successfully?

```text
201
```

### Q4. User delete kar diya aur body return nahi karni?

```text
204
```

### Q5. Same email already exists?

```text
409
```

### Q6. API rate limit exceed?

```text
429
```

### Q7. Backend service down hai aur gateway request forward nahi kar paa raha?

Often:

```text
502 / 503
```

Exact choice architecture/context par depend karega.

### Q8. Gateway ne backend se response ka wait kiya but timeout ho gaya?

```text
504
```

### Q9. Server mein unexpected exception?

```text
500
```

---

# ⭐ Ek important REST API example

Suppose banking application mein:

```http
POST /api/payments
```

### Successful payment

```http
201 Created
```

### Invalid request

```http
400 Bad Request
```

### User authenticated nahi hai

```http
401 Unauthorized
```

### User payment operation ke liye authorized nahi hai

```http
403 Forbidden
```

### Duplicate payment/request conflict

```http
409 Conflict
```

### Too many requests

```http
429 Too Many Requests
```

### Server unexpected failure

```http
500 Internal Server Error
```

### Payment processing asynchronous hai

```http
202 Accepted
```

Ye scenarios interview mein **status code yaad karne se zyada useful** hain.

---

## 🧠 Final memory trick

Bas ye 5 categories yaad rakho:

```text
2xx → "Mera kaam successful hai"

3xx → "Kahin aur/cache related hai"

4xx → "Client/request side problem hai"

5xx → "Server/dependency side problem hai"
```

Aur sabse important:

```text
401 = Who are you?
403 = I know you, but you can't do it.
404 = Resource doesn't exist.
409 = Current state conflicts.
429 = Too many requests.
500 = Server failed.
502 = Bad upstream response.
504 = Upstream timeout.
```

Ab **MongoDB** par move karte hain.
