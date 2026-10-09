## React Coding Interview — Question : Build a Counter using `useState`

Interview question: Create a React counter component with three buttons: Increment, Decrement, and Reset.

Requirements:

- Initial count should be `0`.
- Increment increases the count by `1`.
- Decrement decreases the count by `1`.
- Reset sets the count back to `0`.

### Solution

```

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

```

### Explanation

- `useState(0)` initializes the count to `0`.
- `setCount()` updates the state and triggers a re-render.
- `prevCount` represents the previous state value.
- `onClick={increment}` passes the function to React; it doesn't execute immediately.

### Important interview point

Why use `setCount(prevCount => prevCount + 1)` instead of `setCount(count + 1)`?

The functional updater calculates the new value from the previous state. It's safer when multiple state updates are queued together.

For example:

```
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

These updates increase the count by 3, whereas calling `setCount(count + 1)` three times with the same captured `count` may increase it by only 1.

Say “Next question” for Question 3: a React coding problem on `useEffect` and API data fetching.
