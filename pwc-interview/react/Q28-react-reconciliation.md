# Q28 — React Reconciliation

### 📁 File

`q28-react-reconciliation.md`

---

## 🎤 Interview Question

> **"How does React reconciliation work? What happens when the state or props of a component change?"**

## 🎤 Simple Interview Answer

> **Reconciliation** is the process React uses to determine what needs to change in the actual DOM when the component state or props change.
>
> When state or props change, React creates a new **element tree** and compares it with the previous tree.
>
> React then identifies the differences and updates only the required parts of the DOM instead of rebuilding the entire page.
>
> React uses things like **element type and `key`** to understand whether an element is the same as before or should be replaced.
>
> This process helps React update the UI efficiently.

---

# 🔄 Easy Diagram

```text id="q28-flow"
State / Props Change
        ↓
Component Re-renders
        ↓
New React Element Tree
        ↓
Compare with Previous Tree
        ↓
    Reconciliation
        ↓
Find Differences
        ↓
Update Required DOM
        ↓
Browser Paint
```

---

# 🧠 Simple Example

Suppose we have:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
    </div>
  );
}
```

Initially:

```text
div
├── h1 → Counter
└── p  → 0
```

After:

```js
setCount(1);
```

React creates a new element tree:

```text
div
├── h1 → Counter
└── p  → 1
```

React compares:

```text
Old: <p>0</p>
New: <p>1</p>
```

It sees that only the text inside `<p>` changed.

So React doesn't recreate the entire:

```text
div
h1
p
```

Instead, it updates the required DOM part.

```text
<p>0</p>
   ↓
<p>1</p>
```

---

# ⭐ What Happens When State Changes?

Suppose:

```jsx
setCount(count + 1);
```

The flow is:

```text id="q28-state"
setCount()
    ↓
React schedules update
    ↓
Component function runs again
    ↓
New React elements created
    ↓
React compares old vs new
    ↓
Reconciliation
    ↓
Required DOM changes
```

### Important:

The component function **runs again**, but that does **not mean the entire DOM is recreated**.

That's an important interview point.

---

# ⭐ What Happens With Props?

Suppose:

```jsx
<Child name={name} />
```

Parent changes:

```text id="q28-props"
Parent state/props change
        ↓
Parent renders
        ↓
Child receives new props
        ↓
Child may render
        ↓
React reconciles its output
        ↓
Only required DOM changes
```

If the child uses:

```jsx
const Child = React.memo(...)
```

and its props haven't changed, React may skip the child render.

---

# 🔥 Role of `key`

This connects directly to our previous question.

Suppose:

```jsx
users.map((user) => <User key={user.id} user={user} />);
```

React uses the key to understand the identity of each item.

Example:

```text id="q28-key"
Before:

101 → Raj
102 → Amit
103 → John


After:

103 → John
101 → Raj
102 → Amit
```

React can understand:

```text
101 → same item, moved
102 → same item, moved
103 → same item, moved
```

Because their keys are stable.

---

# 🧠 Element Type Also Matters

Consider:

```jsx
<div>Hello</div>
```

changing to:

```jsx
<span>Hello</span>
```

The element type changed:

```text
div
 ↓
span
```

React treats this differently from simply changing:

```jsx
<div>Hello</div>
```

to:

```jsx
<div>Hi</div>
```

In the second case, the element type is still `div`, so React can update its content.

---

# 📊 Simple Rules to Remember

For interview purposes, remember these:

```text id="q28-rules"
1. State/props change
        ↓
   Component renders again

2. React creates new element tree
        ↓
   Compare with previous tree

3. Same type?
        ↓
   Update existing element

4. Different type?
        ↓
   Replace element/subtree

5. List?
        ↓
   Use stable keys to identify items
```

---

# ⚠️ Important Interview Correction

Don't say:

> ❌ "React compares the old DOM with the new DOM."

A better answer is:

> **"React creates a new React element tree and compares it with the previous tree during reconciliation. It then determines the required DOM updates."**

The **DOM is not the primary thing React compares**.

---

# 🎯 Short Interview Answer

If PwC asks for a quick answer:

> **"Reconciliation is React's process of comparing the previous React element tree with the new one after state or props change. React identifies what has changed and updates only the necessary parts of the DOM. It uses element types and keys, especially for lists, to determine whether elements can be reused or need to be replaced."**

---

## 🔥 Senior-Level Follow-up

The interviewer may now ask:

> **"What is the difference between reconciliation and the Virtual DOM?"**

### 📌 Next File

`Q29-virtual-dom-vs-reconciliation.md`
