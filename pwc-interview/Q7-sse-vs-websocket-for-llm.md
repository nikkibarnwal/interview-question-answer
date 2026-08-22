# Q7 — SSE vs WebSocket for LLM Streaming

### 📁 File

`q07-sse-vs-websocket-for-llm.md`

---

## 🎤 Interview Question

> **"Why would you choose SSE over WebSocket for LLM streaming, and when would you choose WebSocket instead?"**

## 🎤 Simple Interview Answer

> I would choose **SSE for LLM streaming** when the main requirement is to send data from the server to the client.
>
> In an LLM application, the user sends a prompt to the server, and then the LLM generates the response. The server mainly needs to **stream the generated tokens back to the browser**.
>
> SSE is a good fit because it works over HTTP, is simple to implement, and provides server-to-client streaming.
>
> I would choose **WebSocket** when I need two-way real-time communication, where both the client and server need to continuously send messages.
>
> For example, a real-time chat application, multiplayer game, live collaboration tool, or real-time tracking system could use WebSocket.
>
> So, for a typical LLM response streaming use case, I would prefer **SSE**, while for bidirectional real-time communication, I would choose **WebSocket**.

---

## 🔄 Easy Diagram

### SSE

```text id="sseflow"
        Client
          |
          | Request
          ↓
        Server
          |
          | Data
          ↓
        Client

     Server → Client
```

### WebSocket

```text id="wsflow"
        Client
          ↕
       WebSocket
          ↕
        Server

     Client ↔ Server
```

---

## 📊 Simple Comparison

|                    | SSE                 | WebSocket           |
| ------------------ | ------------------- | ------------------- |
| Communication      | **Server → Client** | **Client ↔ Server** |
| Protocol           | HTTP                | WebSocket           |
| LLM streaming      | ✅ Good fit         | ✅ Possible         |
| Real-time chat     | ⚠️ Limited          | ✅ Good fit         |
| Live collaboration | ⚠️                  | ✅                  |
| Implementation     | Simpler             | More complex        |
| Browser support    | Good                | Good                |

### 🧠 Easy Way to Remember

Just remember:

> **SSE = One-way streaming**

> **WebSocket = Two-way communication**

```text id="remember"
LLM Token Streaming
        ↓
Server → Client
        ↓
       SSE


Real-time Communication
        ↓
Client ↔ Server
        ↓
    WebSocket
```

---

## ⭐ Important Senior-Level Point

If the interviewer says:

> **"Can we use WebSocket for LLM streaming?"**

Don't say **No**.

Say:

> **"Yes, WebSocket can also be used for LLM streaming. But if the main requirement is server-to-client streaming, SSE is simpler and is usually a good fit. If the application also needs continuous bidirectional communication, WebSocket would be more appropriate."**

That's a much stronger answer because you're explaining the **trade-off** rather than saying one technology is always better.

---

# 🔥 Possible Follow-up

> **"If SSE uses a normal HTTP connection, how does the server keep sending multiple responses without closing the connection?"**

The key concept you'll need is:

**`Content-Type: text/event-stream` + keep the connection open + `res.write()` multiple times.**

---

### 📌 Next Question

**Q8 — File:** `q08-react-state-management-large-application.md`

> **"How would you design state management for a large React application? When would you use Redux, Context API, or local state?"**
