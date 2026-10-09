Fetch API Data Using useEffect

## React Coding Interview — Question 3: Fetch API Data Using `useEffect`

Interview question: Create a React component that fetches a list of users from an API and displays their names. Handle loading and error states.

### Requirements

- Fetch users when the component mounts.
- Display a loading message while fetching.
- Display user names when the API succeeds.
- Display an error message if the API fails.

### Solution

```js

import { useState, useEffect } from "react"

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const stringiFyOptions = JSON.stringify(options);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {

      try {
        setLoading(true);
        setError(null);
        const parsedOptions = JSON.parse(stringiFyOptions);
        const response = await fetch(url, { ...parsedOptions, signal: controller.signal });
        if (!response.ok) {
          throw new Error("We got some error");
        }
        const res = await response.json();
        if (!controller.signal.aborted) {
          setData(res);
        }
      } catch (e) {
        if (!controller.signal.aborted) {
          setError(e.message)
        }
      }
      finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    fetchData();
    return () => controller.abort();
  }, [url, stringiFyOptions]);

  return { data, loading, error };
}



const UserList = () => {
  const { data: users, error, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <span>Loading... </span>
  }
  if (error) {
    return <span>{error}</span>
  }

  return <>
    <ul>
      {
        users.length > 0 ? users.map((user) => {
          return <li key={user.id}>{user.name}</li>
        })
          :
          <li>Data not available</li>
      }
    </ul>
  </>
}


export default UserList;

```

### Understand the important points

1. `useEffect(..., [])` — runs the effect after the initial mount, rather than after every render.
2. `async/await` — lets us wait for the API response.
3. `try/catch/finally` — handles success, errors, and loading completion.
4. `response.ok` — checks HTTP status because `fetch()` does not reject automatically for HTTP errors such as `404` or `500`.
5. `key={user.id}` — helps React identify list items efficiently during reconciliation.

## Why use Serializing options
```
const stringiFyOptions = JSON.stringify(options);
```

This can help stabilize the dependency when callers pass a new options object on each render. However, `JSON.stringify` has limitations with 
some values, such as functions, `undefined` properties, and circular references.


### Interview follow-up: What is a potential issue?

If the component unmounts while the API request is still running, the request continues unless we cancel it. We can use `AbortController` to cancel the request during cleanup.

Remember: In React development Strict Mode, effects may run an extra setup-and-cleanup cycle to help detect bugs.


- Why `AbortController`? To cancel obsolete requests when the component unmounts or the URL/options change.
- Why check `response.ok`? Because HTTP errors like `404` and `500` do not automatically reject a `fetch()` promise.
- Why `response.json()`? It asynchronously reads and parses the response body.
- Why serialize options? To avoid unnecessary effect reruns when equivalent options are recreated as objects on every render.

One further improvement: if this hook needs to support APIs returning objects as well as arrays, consider initializing `data` to `null` rather than `[]`, or 
document that the hook expects array responses.


