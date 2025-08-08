HTTP aur HTTPS

---

## **HTTP (HyperText Transfer Protocol)**

- Ye ek **protocol** hai jo browser aur server ke beech **data exchange** karne ke liye use hota hai.
- **By default** port **80** pe kaam karta hai.
- Isme **data encrypt nahi hota** — yani koi bhi hacker agar network sniff kare to data read kar sakta hai.
- Mostly **old sites** ya internal network me use hota tha.

**Easy Remember Trick**:
**"HTTP = Hotel me baat karna bina room ka darwaza band kiye"** → koi bhi sun sakta hai.

---

## **HTTPS (HyperText Transfer Protocol Secure)**

- Ye HTTP ka **secure version** hai.
- Isme **SSL/TLS certificate** use hota hai jo data ko **encrypt** karta hai.
- **By default** port **443** pe kaam karta hai.
- Even agar koi hacker data intercept kare, to uske paas **encrypted gibberish** ayega.
- Search engines (Google) HTTPS websites ko ranking me preference dete hain.

**Easy Remember Trick**:
**"HTTPS = Hotel me baat karna room ka darwaza band karke + security guard bahar"** → privacy + security.

---

## **Key Difference Table**

| Feature              | HTTP (Unsecure) | HTTPS (Secure)   |
| -------------------- | --------------- | ---------------- |
| Encryption           | ❌ No           | ✅ Yes           |
| Port                 | 80              | 443              |
| Certificate Required | ❌ No           | ✅ Yes (SSL/TLS) |
| Security             | Low             | High             |
| SEO Boost            | ❌ No           | ✅ Yes           |

---

## **Example**

```plaintext
HTTP:
http://example.com/login
(username aur password plain text me send hote hain — hacker read kar sakta hai)

HTTPS:
https://example.com/login
(username aur password encrypted hote hain — hacker ko kuch samajh nahi aayega)
```

---
