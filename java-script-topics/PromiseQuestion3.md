# Next: `try/catch` with async/await

Consider:

```javascript
async function getUser() {
  try {
    const response = await fetch("/api/user");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

One common mistake is assuming:

> "`try/catch` catches every HTTP error."

It doesn't necessarily.

For example, with the Fetch API:

```text id="8u4n9a"
HTTP 200 → Promise fulfilled
HTTP 404 → Promise fulfilled
HTTP 500 → Promise fulfilled
Network failure → Promise rejected
```

So you often need:

```javascript id="rjv3r8"
async function getUser() {
  try {
    const response = await fetch("/api/user");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

### Why `throw error`?

Because otherwise:

```javascript id="5eq1yq"
catch (error) {
  console.error(error);
}
```

handles the error but the function may resolve with `undefined`.

Sometimes you want the caller to know the operation failed:

```javascript id="x1c0zq"
try {
  const user = await getUser();
} catch (error) {
  // caller handles it
}
```

---

# 🎯 Your next question

What happens here?

```javascript
async function test() {
  try {
    return await Promise.reject("Error");
  } catch (error) {
    return "Recovered";
  }
}

test().then((result) => {
  console.log(result);
});
```

What will it print?

**A**

```text
Error
```

**B**

```text
Recovered
```

**C**

```text
undefined
```

**D**

```text
Unhandled Promise Rejection
```

And most importantly, explain **why the `catch` gets the rejected Promise even though we're using `return await`**.
