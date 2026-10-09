## React Coding Interview — Question 8: Build a Modal using React

Difficulty: Intermediate · Topics: useState, conditional rendering, event handling, component design

Interview question: Create a reusable modal component that opens when the user clicks a button and closes when they click the Close button or the backdrop.

### Requirements

- Open the modal on button click.
- Close it using the Close button.
- Close it when clicking outside the modal content.
- Do not close it when clicking inside the modal.

### Solution

```js

import { useState } from "react";

function Modal({ onClose }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "8px",
        }}
      >
        <h2 id="modal-title">Welcome!</h2>
        <p>This is a reusable modal component.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default App;

```

### How it works

1\. Conditional rendering

```
{isOpen && <Modal onClose={() => setIsOpen(false)} />}
```

React renders the modal only when `isOpen` is `true`.

2\. Event bubbling and backdrop handling

```
if (event.target === event.currentTarget) {
  onClose();
}
```

- `event.target` is the element that was clicked.
- `event.currentTarget` is the element whose handler is running.

When they are equal, the user clicked directly on the backdrop. Clicking the modal content doesn't close it.

3\. Reusability

The modal receives `onClose` as a prop instead of managing its own visibility. The parent controls whether it is rendered.

### Senior-level follow-up questions

1. How would you close the modal when the user presses `Escape`?
2. How would you prevent background scrolling while the modal is open?
3. Why might a production modal use React Portals?
4. How would you manage focus and accessibility for keyboard users?

Important: This is a basic interview implementation. A production modal should also handle keyboard access, focus management, and focus restoration.

Say “Next question” for Question 9.
