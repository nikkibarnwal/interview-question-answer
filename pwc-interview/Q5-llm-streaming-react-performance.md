### 🔥 PwC Interview Question #4

[SSE](https://github.com/nikkibarnwal/interview-question-answer/pwc-interview/Q3-LCP-INP-SSE.md)

## Q4

> **"Suppose your React application receives an LLM response token-by-token through SSE. If the server sends hundreds of updates per second, React could potentially re-render hundreds of times. How would you design the UI to handle this efficiently?"**

### 🎤 Answer

> If the server sends hundreds of updates per second, I wouldn't update React state for every token because it can cause too many re-renders and make the UI slow or unresponsive.
>
> Instead, I would **buffer the incoming tokens** and update React state in batches.
>
> I can use `useRef` to store the incoming tokens because updating a ref does not cause a React re-render.
>
> For example, the flow would be:
>
> **SSE → receive tokens → store in buffer → batch the updates → update React state → render UI**
>
> This reduces the number of React renders.
>
> I would also keep the streaming state close to the component that needs it, so that the entire application doesn't re-render whenever a new token arrives.
>
> If the chat contains a large number of messages, I would use **virtualization** so that React only renders the messages currently visible on the screen.
>
> I can also use `React.memo` for suitable child components to avoid unnecessary re-renders.
>
> Finally, I would use **React DevTools Profiler and browser performance tools** to measure the rendering performance and identify any remaining bottlenecks.
>
> So, the main approach is: **buffer the tokens, batch state updates, keep state local, use virtualization when needed, and profile the application.**

### 🧠 Easy way to remember

Just remember these **5 points**:

```text
1. Don't update state for every token
2. Buffer tokens using useRef
3. Batch state updates
4. Reduce unnecessary renders
5. Profile the performance
```

If the interviewer asks **"Why use `useRef`?"**, say:

> "`useRef` lets me store the incoming tokens without causing a re-render every time the value changes."

That's enough for the first answer. Don't overcomplicate it.

---

### 🔥 One important senior-level point

If they ask:

> **"How exactly would you batch the updates?"**

You can say:

> "I can collect tokens for a short interval or until the next animation frame, and then update React state once with the accumulated content. This reduces the number of state updates and renders."

You don't need to immediately write complicated code unless they ask for implementation.

---

### One important correction

Don't say:

> "I'll use `useCallback` to prevent all these renders."

`useCallback` **doesn't prevent a component from rendering by itself**. It mainly helps maintain function identity when passing callbacks to memoized children or when dependencies matter.

For this problem, the strongest concepts are:

**buffering + batching + state isolation + virtualization + profiling.**
