# Q6 — Implement SSE between Node.js and React for LLM Streaming

---

## 🎤 Interview Question

> **"How would you implement SSE between a Node.js/Express backend and a React frontend for streaming an LLM response? Explain the backend and frontend flow."**

## 🎤 Simple Interview Answer

> SSE, or Server-Sent Events, is useful when the server needs to continuously send data to the client over an HTTP connection.
>
> For an LLM application, the flow would be:
>
> **React → Node.js → LLM → Node.js → SSE → React**
>
> On the backend, I would create an SSE endpoint using Express. When React makes a request, the server sets the required SSE headers and keeps the connection open.
>
> Then Node.js sends the user's prompt to the LLM service. As the LLM generates tokens, Node.js receives those tokens and sends them to the React client using the SSE connection.
>
> On the React side, I would listen to the SSE stream and receive the data continuously. I would append the incoming tokens to the current message and update the UI.
>
> I would also handle connection errors and allow the user to stop the generation if required.
>
> For performance, I wouldn't necessarily update React state for every token. I could buffer the tokens and update the state in batches to reduce unnecessary re-renders.
>
> So the main flow is:
>
> **React sends prompt → Node calls LLM → LLM streams tokens → Node forwards tokens using SSE → React receives tokens → UI displays the response progressively.**

---

## 🔄 Architecture Diagram

```text
                    User
                      ↓
                  React UI
                      ↓
                HTTP Request
                      ↓
              Node.js / Express
                      ↓
                  LLM API
                      ↓
             Streaming Tokens
                      ↓
              Node.js / Express
                      ↓
                 SSE Stream
                      ↓
                  React UI
                      ↓
            Display response
            token-by-token
```

### More detailed flow

```text
React
  |
  |  User prompt
  ↓
Node.js / Express
  |
  |  Send prompt
  ↓
LLM
  |
  |  Token 1
  |  Token 2
  |  Token 3
  ↓
Node.js
  |
  |  SSE
  ↓
React
  |
  ↓
Buffer tokens
  |
  ↓
Batch update
  |
  ↓
setState()
  |
  ↓
UI
```

---

# 💻 Simple Backend Example

You don't need to memorize the complete code unless the interviewer asks you to implement it.

```js
app.get("/api/chat", async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const stream = await getLLMStream(req.query.prompt);

  for await (const token of stream) {
    res.write(`data: ${JSON.stringify(token)}\n\n`);
  }

  res.write("data: [DONE]\n\n");
  res.end();
});
```

The important part is:

```js
res.setHeader("Content-Type", "text/event-stream");
```

and:

```js
res.write(`data: ...\n\n`);
```

The `\n\n` is important because it separates SSE events.

---

# 💻 Simple React Example

For a simple GET-based SSE endpoint, React can use `EventSource`:

```js
const eventSource = new EventSource(
  `/api/chat?prompt=${encodeURIComponent(prompt)}`,
);

eventSource.onmessage = (event) => {
  if (event.data === "[DONE]") {
    eventSource.close();
    return;
  }

  const token = JSON.parse(event.data);

  setResponse((prev) => prev + token);
};

eventSource.onerror = () => {
  eventSource.close();
};
```

### One important limitation

`EventSource` is designed around **GET requests**, so if your application needs to send a larger or structured POST body containing the prompt, conversation history, settings, etc., you may use a different SSE client approach or establish the stream through a POST-capable implementation.

You don't need to go deep into this unless the interviewer asks.

---

# 🧠 Easy Way to Remember

Remember this **6-step flow**:

```text
1. React sends prompt
        ↓
2. Node receives request
        ↓
3. Node calls LLM
        ↓
4. LLM generates tokens
        ↓
5. Node sends tokens using SSE
        ↓
6. React displays tokens
```

### One-line answer

> **"Node acts as a bridge between the LLM and React: it receives the LLM stream and forwards each chunk to the browser through an SSE connection."**

That's a very good sentence to remember.

---

# ⭐ Key Technical Terms

| Term                    | Meaning                                       |
| ----------------------- | --------------------------------------------- |
| **SSE**                 | Server pushes events to browser               |
| **Stream**              | Data arrives gradually instead of all at once |
| **Token**               | Small piece of LLM response                   |
| **`text/event-stream`** | SSE response content type                     |
| **`res.write()`**       | Sends data without closing connection         |
| **`EventSource`**       | Browser API for receiving SSE                 |
| **Buffering**           | Temporarily collecting tokens                 |
| **Batching**            | Updating UI with multiple tokens together     |

---

# 🔥 Possible Follow-up

The interviewer may now ask:

> **"Why would you choose SSE instead of WebSocket for an LLM application?"**

Your simple answer should be:

> **"For LLM streaming, communication is mainly from the server to the client. SSE is simple because it works over HTTP and provides server-to-client streaming. WebSocket is better when we need two-way real-time communication, where both client and server need to send messages continuously."**

### Easy comparison

```text
LLM Streaming
     ↓
Server → Client
     ↓
     SSE ✅


Real-time Chat / Multiplayer
     ↓
Client ↔ Server
     ↓
  WebSocket ✅
```

---

## 📌 Q7 Preview

**File:** `q07-sse-vs-websocket-for-llm.md`

> **"Why would you choose SSE over WebSocket for LLM streaming, and when would you choose WebSocket instead?"**
