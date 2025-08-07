**Service Worker**

---

## 🔹 ** Service Worker – "Offline Superhero & Caching Manager"**

### 📘 **Definition (Easy Language):**

Service Worker ek **proxy-like script** hai jo browser aur network ke बीच में बैठता है. Ye aapke web app ke liye **offline access, push notifications, caching** jaise features ko manage karta hai.

### 🤹‍♂️ **Use Case Example:**

- Progressive Web App (PWA) banana
- App ko **offline mode** mein bhi chalana
- Background sync
- Push notifications

### 💡 **Trick to Remember:**

> **"Service Worker = Service provider (like waiter) between browser and network"**
> Socho: Jaise waiter order leke aata hai, waise hi Service Worker data serve karta hai – chaahe network ho ya cache.

### 📌 **Important Points:**

- Ye browser ke background mein register hota hai.
- Request intercept kar sakta hai (fetch events)
- Cache control karta hai (offline support)
- HTTPS पर ही काम करता है (security reason)
- Independent from web page (tab band ho jaye tab bhi run kar sakta hai)

---

## 📊 **Web Worker vs Service Worker – Difference at a Glance:**

| Feature        | Web Worker               | Service Worker                             |
| -------------- | ------------------------ | ------------------------------------------ |
| Purpose        | Background JS processing | Caching, offline support, background tasks |
| DOM Access     | ❌ No                    | ❌ No                                      |
| Life Cycle     | Active till page is open | Runs even after page close (background)    |
| Use Case       | Heavy computation        | Offline access, caching, push notification |
| Communication  | postMessage()            | Events like fetch, install, activate       |
| Requires HTTPS | ❌ No                    | ✅ Yes (except localhost)                  |

---

## 🔁 **Real Life Example to Remember:**

> 📦 **Service Worker**: Socho ek **waiter** hai jo customer (browser) ke aur kitchen (server) ke बीच में बैठा hai – jab internet nahi hota to woh fridge (cache) se food de deta hai.

---

## 🎯 Interview Tip:

> ❓Q: Can you access DOM inside Web Worker or Service Worker?
> ✅A: **No**, neither of them can directly access DOM.
