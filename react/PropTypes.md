## what is PropTypes?

**PropTypes** is a tool in React that helps **check the type of props** passed to a component. It helps catch bugs early by warning us if we pass the wrong type of data.

We use it to **make components safe and predictable**, especially when a team is working on a large project.

It’s like saying: “Hey, this component expects a number, not a string!”

---

### 🧠 **Trick to Remember:**

Think of **"PROP = Predict Right Object/Primitive"**

- **P** – Prevent bugs
- **R** – Runtime type checking
- **O** – Optional or required props
- **P** – PropTypes tells React what type to expect

---

### 💡 **Example:**

```jsx
import React from "react";
import PropTypes from "prop-types";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// PropTypes declaration
Welcome.propTypes = {
  name: PropTypes.string.isRequired, // name must be a string and required
};
```

#### 🧪 What it does:

- If someone uses `<Welcome name={123} />`, React will show a warning:
  ❗ **"Invalid prop `name` of type `number` supplied to `Welcome`, expected `string`."**

---

### 📌 Use When:

- Working on **team projects**
- Avoiding bugs when **passing props**
- Making components more **understandable and self-documenting**

---

If you’re using **TypeScript**, you usually don’t need PropTypes because TypeScript handles type checking at compile-time.
