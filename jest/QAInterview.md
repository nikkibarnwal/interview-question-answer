Absolutely! Here's a tailored list of **🔥 advanced Jest interview questions and answers** for a **5 years experienced front-end React developer**, especially focused on **React Testing Library + Jest**.

---

## ✅ **1. What is the difference between `beforeEach`, `beforeAll`, `afterEach`, and `afterAll` in Jest?**

### 👉 **Answer:**
These are **lifecycle methods** in Jest to run setup/cleanup logic:

| Method         | When It Runs                     | Use Case                           |
|----------------|----------------------------------|------------------------------------|
| `beforeEach`   | Before **each test**             | Reset mocks, render component etc. |
| `beforeAll`    | Once before **all tests**        | Expensive setup (e.g. DB connect)  |
| `afterEach`    | After **each test**              | Cleanups after every test          |
| `afterAll`     | Once after **all tests**         | Close DB, cleanup after all tests  |

```js
beforeEach(() => {
  render(<MyComponent />);
});
```

---

## ✅ **2. How do you mock API calls in Jest?**

### 👉 **Answer:**
You can use `jest.mock()` or `msw` (Mock Service Worker) to mock APIs.

### ✅ Using `jest.mock()`:
```js
jest.mock('./api', () => ({
  fetchData: jest.fn(() => Promise.resolve({ name: "John" }))
}));
```

### ✅ Or mocking `fetch`:
```js
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'John' }),
  })
);
```

---

## ✅ **3. How do you test `useEffect` that fetches data?**

### 👉 **Answer:**
Use `findBy...` queries because data is loaded asynchronously.

```js
test("fetches and displays data", async () => {
  render(<UserProfile />);
  const userName = await screen.findByText("John");
  expect(userName).toBeInTheDocument();
});
```

---

## ✅ **4. What are jest matchers? Name some commonly used ones.**

### 👉 **Answer:**
**Matchers** are functions used in `expect()` to check results.

### ✅ Common Matchers:
```js
expect(value).toBe(true);
expect(value).toEqual({ name: "John" });
expect(string).toMatch(/regex/);
expect(array).toContain("item");
expect(fn).toHaveBeenCalledTimes(1);
expect(element).toBeInTheDocument(); // from @testing-library/jest-dom
```

---

## ✅ **5. How do you test form inputs in React?**

### 👉 **Answer:**
Use `userEvent.type()` or `fireEvent.change()` to simulate user input.

```js
const input = screen.getByPlaceholderText("Enter name");
await userEvent.type(input, "John");

expect(input).toHaveValue("John");
```

---

## ✅ **6. What is the difference between `.toBe()` and `.toEqual()`?**

### 👉 **Answer:**

| Matcher     | Use Case                          |
|-------------|-----------------------------------|
| `toBe()`    | Strict equality (`===`)           |
| `toEqual()` | Deep comparison for objects/arrays|

```js
expect(1 + 1).toBe(2); // ✅
expect({ a: 1 }).toEqual({ a: 1 }); // ✅
```

---

## ✅ **7. How do you mock `window` or `localStorage` in Jest?**

### 👉 **Answer:**

```js
beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
});

test("sets item in localStorage", () => {
  localStorage.setItem("token", "123");
  expect(localStorage.setItem).toHaveBeenCalledWith("token", "123");
});
```

---

## ✅ **8. What is the difference between `jest.fn()` and `jest.spyOn()`?**

### 👉 **Answer:**

| Function       | Purpose                                |
|----------------|----------------------------------------|
| `jest.fn()`    | Create a mock function from scratch     |
| `jest.spyOn()` | Spy on existing object method (and mock it) |

```js
const mockFn = jest.fn(); // Standalone mock

jest.spyOn(console, "log"); // Spy on console.log
```

---

## ✅ **9. How to test conditional rendering in React?**

### 👉 **Answer:**

Check if element appears based on props/state:

```js
test("shows logout button when logged in", () => {
  render(<Navbar isLoggedIn={true} />);
  expect(screen.getByText("Logout")).toBeInTheDocument();
});
```

---

## ✅ **10. How to test components using `context` or `redux`?**

### 👉 **Answer:**

Wrap your component with **provider** in the test:

```js
render(
  <AuthContext.Provider value={{ user: "John" }}>
    <Profile />
  </AuthContext.Provider>
);
```

For Redux:
```js
render(
  <Provider store={mockStore}>
    <MyComponent />
  </Provider>
);
```

---

## ✅ Bonus Tip: Common Interview One-Liners 👇

- 🧠 `"Jest is a testing framework, React Testing Library is for DOM testing."`  
- 🧠 `"userEvent simulates real user interactions; fireEvent is low-level."`  
- 🧠 `"Use getBy when element is immediately present; findBy for async; queryBy for optional."`  
- 🧠 `"Mock external dependencies to isolate unit tests."`  
- 🧠 `"Avoid testing implementation details – test from the user's perspective."`

---
