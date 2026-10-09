[View Vanila JS implementation](https://github.com/nikkibarnwal/interview-question-answer/blob/main/java-script-topics/DebouncingThrottling.md)
#  Create custom throttle hook

```js
const useThrottle => (func, delay){
	const lastCall = useRef(0);

	return useCallback(
		(...args)=>{
			const now = Date.now();
			if(now-lastCall.current >= delay){
			  func(...args);
              lastCall.current = now;
			}
		},
		[func, delay]
	)
}

```

## React Coding Interview — Question 10: Implement a Custom `useDebounce` Hook

Difficulty: Intermediate to Senior · Topics: Custom Hooks, useState, useEffect, cleanup

### Interview question

Create a reusable `useDebounce` hook that delays updating a value until the user stops changing it for a specified duration.

For example, when a user types into a search box, the debounced value should update only after the user stops typing for 500 milliseconds.

### 1. Expected behavior

User types

React

R → Re → Rea → React

Typing

The previous timer is cancelled after each keystroke.

500 ms without typing

The debounced value becomes `"React"`, and you can use it to trigger an API request.

### 2. Implementation

```js

import { useState, useEffect } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

```

### 3. Use it in a React component

```js

import { useState } from "react";
import useDebounce from "./useDebounce";

function SearchBox() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />

      <p>Current input: {search}</p>
      <p>Debounced value: {debouncedSearch}</p>
    </div>
  );
}

export default SearchBox;

```

### 4. Explain the logic in an interview

1. `useState(value)` initializes the debounced value with the initial input value.
2. `useEffect` schedules a timer whenever `value` or `delay` changes.
3. If the user types again before the timer completes, React runs the cleanup function and cancels the previous timer.
4. If the user stops typing, the timer completes and updates `debouncedValue`.
5. The hook returns the delayed value, which can be used for API calls or expensive calculations.

### 5. Senior-level follow-up

What is the difference between `useDebounce` and `useDeferredValue`?

- `useDebounce` uses a timer to wait for a period of inactivity.
- `useDeferredValue` lets React prioritize urgent updates over less urgent rendering work. It does not guarantee a fixed delay and does not itself prevent API calls.

Your challenge: How would you use `debouncedSearch` to call an API only when the debounced value changes, while cancelling an outdated request?

Say “Next question” when you're ready for Question 11.
