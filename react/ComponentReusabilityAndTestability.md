## How do you ensure component reusability and testability in React?

---

To ensure **component reusability** and **testability** in React:

1. **Break components into small parts** – I create small, focused components that do one job (Single Responsibility Principle).
2. **Use props and children properly** – I pass data and behavior as props so the component can be reused with different data.
3. **Avoid hardcoded logic** – I keep logic outside the component or make it configurable.
4. **Keep components pure** – No side effects inside them. It makes testing easier.
5. **Write functional components** – I prefer functional components with hooks for simplicity and easier testing.
6. **Use PropTypes or TypeScript** – It helps in maintaining consistent and reusable code.
7. **Write unit tests using React Testing Library or Jest** – I test the component's output and user behavior, not internals.

---

### 🧠 **Trick to Remember (REUSE-T):**

Think of the acronym **“REUSE-T”**

- **R** – **Reusable** props
- **E** – **Extract logic** to hooks or helpers
- **U** – **Use small components** (1 job only)
- **S** – **Stateless/pure** where possible
- **E** – **Easy to test** with Testing Library/Jest
- **T** – **TypeScript or PropTypes** for safety

---
