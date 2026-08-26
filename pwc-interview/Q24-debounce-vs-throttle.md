# Q24 — Debounce vs Throttle

### 📁 File

`q24-debounce-vs-throttle.md`

---

## 🎤 Interview Question

> **"What is the difference between debounce and throttle? Where would you use each in a React application?"**

## 🎤 Simple Interview Answer

> Both **debounce** and **throttle** are techniques used to control how frequently a function is executed when an event happens repeatedly.
>
> **Debounce** waits until the user stops triggering the event for a specific amount of time, and then executes the function.
>
> **Throttle** allows the function to execute at most once during a specific time interval, even if the event keeps happening.
>
> I would use **debounce** for search boxes, where I want to call the API after the user stops typing.
>
> I would use **throttle** for events that happen continuously, such as scrolling, mouse movement, or window resizing, where I want regular updates but don't want to execute the function for every event.
>
> So the simple difference is:
>
> **Debounce → wait until activity stops.**
>
> **Throttle → execute at a controlled frequency while activity continues.**

---

# 🔄 Easy Diagram

### Debounce

```text id="q24-debounce"
User typing:

R ─ R ─ R ─ R ───── STOP
                      ↓
                  Wait 300ms
                      ↓
                    API
```

Every new event resets the timer.

```text id="q24-debounce2"
Event
 ↓
Start timer
 ↓
New event
 ↓
Reset timer
 ↓
New event
 ↓
Reset timer
 ↓
STOP
 ↓
Timer completes
 ↓
Execute
```

---

### Throttle

```text id="q24-throttle"
Scroll events:

Event → Event → Event → Event → Event
  ↓
Execute
  ↓
Wait 300ms
  ↓
Execute
  ↓
Wait 300ms
  ↓
Execute
```

It limits how frequently the function can execute.

---

# 🧠 Easy Way to Remember

### Debounce

> **"Wait until the user stops."**

```text
Typing → Typing → Typing → STOP → API
```

### Throttle

> **"Run at a fixed/controlled interval."**

```text
Event → Execute
         ↓
       Wait
         ↓
Event → Execute
         ↓
       Wait
```

---

# 🔥 React Examples

## 1. Debounce — Search

Suppose the user types:

```text id="q24-search"
React
```

Without debounce:

```text id="q24-search-bad"
R       → API ❌
Re      → API ❌
Rea     → API ❌
Reac    → API ❌
React   → API ❌
```

With debounce:

```text id="q24-search-good"
R
Re
Rea
Reac
React
 ↓
User stops typing
 ↓
Wait 300ms
 ↓
API call ✅
```

This reduces unnecessary API calls.

---

## 2. Throttle — Scroll

Imagine the user scrolls:

```text id="q24-scroll"
Scroll
Scroll
Scroll
Scroll
Scroll
Scroll
Scroll
...
```

Without throttle, the handler may execute for every event.

With throttle:

```text id="q24-scroll-throttle"
Scroll events
     ↓
Throttle
     ↓
Execute
     ↓
Wait 100ms
     ↓
Execute
     ↓
Wait 100ms
     ↓
Execute
```

This is useful for things like:

- Infinite scrolling
- Scroll position tracking
- Sticky header logic
- Mouse movement
- Window resize

---

# ⭐ Simple Code

### Debounce

```js id="q24-debounce-code"
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

### Throttle

```js id="q24-throttle-code"
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
```

You don't necessarily need to write these unless the interviewer asks for implementation.

---

# ⭐ Important Interview Scenario

### Interviewer:

> **"For a search box, would you use debounce or throttle?"**

Answer:

> **"I would normally use debounce because I want to wait until the user stops typing before making the API request. This avoids sending a request for every keystroke."**

### Another:

> **"For scroll events?"**

Answer:

> **"I would generally use throttle because I want to handle the event periodically while the user is continuously scrolling."**

---

# ⚠️ One Important Point

Don't say:

> ❌ "Debounce executes only once."

That's not always true.

It means:

> **"It executes after the event has stopped for the specified delay."**

If the user starts typing again later, it can execute again.

Similarly, throttle doesn't mean:

> ❌ "It executes only once."

It means:

> **"It limits how frequently the function can execute."**

---

# 🎯 Short Interview Answer

> **"Debounce waits until the events stop for a specified delay before executing the function, so it's useful for search input and API calls. Throttle limits how often a function can execute while events continue, so it's useful for scroll, resize, and mouse movement. In simple terms, debounce is 'wait until activity stops', while throttle is 'run at a controlled frequency'."**

---

## 🔥 Next Question — Q25

### 📁 File

`Q25-react-list-performance-virtualization.md`

> **"Suppose your React application needs to display 50,000 records in a table. How would you optimize the UI and avoid rendering all 50,000 records at once?"**
