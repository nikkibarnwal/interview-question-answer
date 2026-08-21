[View Vanila JS implementation](https://github.com/nikkibarnwal/interview-question-answer/blob/main/java-script-topics/DebouncingThrottling.md)
# Create custom debounce hook
```js
const useDebounce =>(func, delay){
	const timerRef = useRef(null);

	return useCallback((...args)=>{
       clearTimeout(timerRef);
       timerRef.current = setTimeout(()=>{
          func(...args)
       }, delay)


	},[func, delay]);
}
```
---

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
