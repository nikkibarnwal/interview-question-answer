/**
 Interview question: Create a custom React hook called usePrevious that returns the previous value of a state variable or prop.
For example, if the count changes from 0 to 1, the hook should return 0 as the previous value.
Requirements
- Create a reusable usePrevious hook.
- Store the previous value without triggering additional renders.
- Display both the current and previous count.

 */


Let's understand `usePrevious` step by step, in simple Hinglish, with an interview-ready explanation.

## 1. What is `usePrevious`?

React doesn't provide a built-in `usePrevious` hook. We create a custom hook to remember the previous value of a state or prop.

For example:

| Render          | Current count | Previous count |
| --------------- | ------------- | -------------- |
| Initial         | 0             | `undefined`    |
| After 1st click | 1             | 0              |
| After 2nd click | 2             | 1              |
| After 3rd click | 3             | 2              |

The goal is to show the current value and the value from the previous render.

## 2. Implementation

 ```js
import { useRef, useEffect } from "react"
export const usePrevious = (value) => {
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = value;
  }, [value])

  return prevRef.current;
}

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Implement usePrevious here
  const previousValue = usePrevious(count);

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {previousValue ?? 0}</h3>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

## 3. How does it work?

Let's understand the three important lines.

Step 1: `useRef()` stores a value

```
const ref = useRef();
```

Think of `ref.current` as a small box where React can keep a value between renders.

Unlike `useState`, changing `ref.current` does not trigger a re-render.

Step 2: `useEffect()` stores the current value after rendering

```
useEffect(() => {
  ref.current = value;
}, [value]);
```

Whenever `value` changes, the effect runs after the render commits and saves that value in the ref.

Step 3: Return the stored value

```
return ref.current;
```

The hook returns whatever value was stored previously, before the current effect updates the ref.

## 4. Understand the render lifecycle

1\. State changes

Count changes from 0 to 1

2\. Component renders

count = 1, ref.current = 0

Previous Count: 0

3\. Effect executes

ref.current = 1

On the next render, the ref will contain 1 until the effect updates it again.

The key point is that the effect runs after the render commits, so the current render reads the value saved by the previous effect.

## 5. Senior-level interview questions

Q1. Why use `useRef` instead of `useState`?

Because we want to store the previous value without triggering an extra render when we update the stored value.

Q2. Why update the ref inside `useEffect`?

So the ref is updated after the current render commits. If we overwrite it during render, we can lose the previous value before reading it.

Q3. What does `usePrevious(count)` return on the initial render?

`undefined`, because the ref has not been assigned a value yet. That's why the example uses `previousCount ?? "None"`.

Q4. Can this hook work with props?

Yes. It can accept any value, such as a prop, a string, an object reference, or a number.

### Remember this interview answer

> I implement `usePrevious` using `useRef` and `useEffect`. The ref persists between renders without causing additional renders. During rendering, I read the previously stored value, and after the render commits, the effect updates the ref with the current value. This allows me to access the previous value on the next render.

Next question: We can move to `useDebounce` vs `useDeferredValue`, another common topic in senior React interviews.
