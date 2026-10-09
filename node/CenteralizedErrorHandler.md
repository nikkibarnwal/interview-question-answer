👍 Let's move to Question 2 — Node.js (Senior Developer).

## Question 2: Implement an API error-handling mechanism in Express.js

Interview scenario:

You are building a Node.js application using Express. Multiple API routes can throw errors, and you don't want to write `try-catch` blocks with the same error-response logic in every controller.

Your task is to implement centralized error handling.

### Requirements

1. Create an Express route that fetches a user.
2. If the user is not found, return HTTP `404`.
3. If an unexpected error occurs, return HTTP `500`.
4. Use centralized error-handling middleware.
5. Avoid repeating error-handling logic in every controller.

### Starter code

```js
const express = require("express");

const app = express();

app.get("/users/:id", async (req, res, next) => {
  // Your implementation here
});

// Your centralized error-handling middleware here

app.listen(3000);
```

Your task: Complete the code.

Try solving it yourself first. Consider how you will pass an error from the route to the centralized middleware using `next(error)`.

Write your solution, and I'll review it like a senior developer, explain any improvements, and provide the interview-ready version.



## 2. Senior-level solution

This version works with Express 4 and Express 5.

```js
const express = require("express");

const app = express();

app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await findById(req.params.id);

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Successfully fetched user",
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

// Centralized error-handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? "Something went wrong"
        : err.message,
  });
});

app.listen(3000);
```

Assumption: `findById()` is your database function. In a real MongoDB application, you would typically use `User.findById(req.params.id)`.

### 3. Remember this interview concept

The error-handling flow is:

Route / Controller

`next(error)`

Centralized error middleware

HTTP 404 or HTTP 500 response

Senior developer tip: In a larger application, you can create a reusable `asyncHandler` wrapper to avoid writing `try-catch` in every Express 4 controller. With Express 5, rejected promises from async route handlers are forwarded automatically.
