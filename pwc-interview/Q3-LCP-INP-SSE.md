### 1. LCP = Largest Contentful Paint

LCP is a **Core Web Vital** that measures how quickly the main/large content of a page becomes visible.

For example:

```text
User opens website
       ↓
Page starts loading
       ↓
Header / spinner / small content
       ↓
Large heading / image / main content appears
       ↓
        LCP
```

**Simple interview definition:**

> "LCP measures how quickly the largest meaningful piece of content becomes visible to the user."

Lower is better.

---

### 2. INP = Interaction to Next Paint

INP measures how responsive the page is when the user interacts with it.

For example:

```text
User clicks "Buy Membership"
          ↓
React handles click
          ↓
UI updates
          ↓
Browser paints the result
```

If the UI takes a long time to respond, INP becomes worse.

**Simple interview definition:**

> "INP measures how quickly the application responds visually to user interactions such as clicks, taps, or keyboard input."

So:

| Term    | Simple meaning                                  |
| ------- | ----------------------------------------------- |
| **LCP** | How quickly important content appears           |
| **INP** | How quickly the UI responds to user interaction |
| **CLS** | How much the page layout unexpectedly moves     |

You don't need to go deeply into Web Vitals initially. For this interview, just understand the concepts and how your React optimization can improve them.

---

# 3. SSE = Server-Sent Events

And **this one is very important for your PwC JD.**

SSE means **Server-Sent Events**.

It is a way for the **server to continuously send updates to the browser over a single HTTP connection**.

For example, an LLM generating:

```text
Hello
Hello, how
Hello, how are
Hello, how are you?
```

Instead of waiting until the complete response is ready:

```text
Request
   ↓
Node.js
   ↓
LLM
   ↓
Wait 5 seconds
   ↓
Complete response
   ↓
React
```

we can stream it:

```text
React
  ↓
Node.js
  ↓
LLM

Token 1 ─────→ React
Token 2 ─────→ React
Token 3 ─────→ React
Token 4 ─────→ React
...
```

That's why **SSE is particularly relevant to GenAI/LLM applications**.

### SSE vs WebSocket

| SSE                                | WebSocket                                      |
| ---------------------------------- | ---------------------------------------------- |
| Server → Client                    | Two-way communication                          |
| Uses HTTP                          | Persistent WebSocket connection                |
| Good for streaming updates         | Good for real-time bidirectional communication |
| LLM streaming is a common use case | Chat, multiplayer, live collaboration etc.     |

A simple interview answer:

> **"SSE allows the server to continuously push events to the client over an HTTP connection. It's useful when we primarily need server-to-client streaming, such as streaming an LLM response."**

---
