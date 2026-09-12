Q) You have 4 independent REST APIs. Each takes approximately 1 second. Your current implementation uses four sequential awaits and takes around 4 seconds. How would you optimize it, and what considerations would you keep 
in mind before changing it


> ❌ "If any API can fail, use `Promise.allSettled`."

That's not always the right conclusion.

The choice depends on **whether the failure of one API should cause the overall operation to fail**.

### Better decision

| Situation                                    | Use                                                       |
| -------------------------------------------- | --------------------------------------------------------- |
| All APIs independent + all required          | `Promise.all()`                                           |
| APIs independent + want every outcome        | `Promise.allSettled()`                                    |
| One API failure should fail entire operation | `Promise.all()`                                           |
| Some APIs are optional                       | Often `Promise.allSettled()` or individual error handling |
| APIs have dependencies                       | Sequential `await` where required                         |

For example, if you need:

```text
User API       ✅ required
Orders API     ✅ required
Settings API   ❌ optional
Recommendations ❌ optional
```

You wouldn't necessarily convert everything to `allSettled`. You could handle the critical and optional requests differently.

---

## ⭐ Stronger Adobe answer

If they ask the exact question again, I'd recommend saying:

> **"Since the four APIs are independent, I would first execute them concurrently using `Promise.all()` rather than sequential `await`s. This reduces the waiting time from roughly 4 seconds to approximately the slowest API's response time, assuming the APIs can actually execute concurrently and there are no client/server constraints.**
>
> **I would choose `Promise.allSettled()` only if I need to process the outcome of every API independently and one failure should not fail the overall operation. If all four APIs are mandatory and one failure means the dashboard cannot be considered successful, `Promise.all()` with appropriate error handling would be more appropriate.**
>
> **I would also check network latency, backend bottlenecks, request limits, caching opportunities, duplicate requests, and whether any APIs actually have dependencies before making the change."**

🔥 **That sounds much more like a senior engineer.**

---


