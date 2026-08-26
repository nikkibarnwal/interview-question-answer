# Q27 — React `key` Prop and List Rendering

### 📁 File

`q27-react-key-prop-list-rendering.md`

---

## 🎤 Interview Question

> **"Why is the `key` prop important when rendering lists in React? What problems can occur if we use the array index as the key?"**

## 🎤 Simple Interview Answer

> The `key` prop gives each list item a **stable identity** so React can identify which item was added, removed, or moved during reconciliation.
>
> React uses the key to compare the previous list with the new list and decide which DOM elements need to be updated.
>
> Ideally, I use a **unique and stable ID from the data**, such as `user.id` or `product.id`.
>
> Using the array index as a key can cause problems when items are inserted, deleted, or reordered because the index changes. React may then associate the wrong component instance with the data.
>
> This becomes especially problematic when list items contain local state, input fields, or other internal component state.
>
> So, I prefer a stable unique ID as the key and use the index only when the list is static and never changes order.

---

# 🔄 Easy Diagram

### Good Key

```text id="q27-good"
Data

ID     Name
101    Raj
102    Amit
103    John

       ↓

key={user.id}

       ↓

React can identify
each item correctly
```

### Index Key

```text id="q27-index"
Index     Name
  0       Raj
  1       Amit
  2       John
```

If Raj is removed:

```text id="q27-after"
Index     Name
  0       Amit
  1       John
```

Now the indexes have changed.

React may think:

```text id="q27-problem"
Old key 0 → Raj
New key 0 → Amit

Old key 1 → Amit
New key 1 → John
```

So component identity can be associated with the wrong data.

---

# 🧠 Simple Example

Suppose we have:

```jsx id="q27-example"
const users = [
  { id: 101, name: "Raj" },
  { id: 102, name: "Amit" },
  { id: 103, name: "John" },
];
```

### ❌ Avoid this when the list can change

```jsx id="q27-bad-code"
users.map((user, index) => <User key={index} user={user} />);
```

### ✅ Better

```jsx id="q27-good-code"
users.map((user) => <User key={user.id} user={user} />);
```

Now React has a stable identity:

```text id="q27-identity"
101 → Raj
102 → Amit
103 → John
```

Even if the order changes:

```text id="q27-reorder"
103 → John
101 → Raj
102 → Amit
```

the keys remain:

```text
103
101
102
```

So React can correctly understand that the **same items moved**.

---

# 🔥 Why Does This Matter?

Consider a child component:

```jsx id="q27-state"
function User({ user }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {user.name}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}
```

Suppose:

```text
Raj   → isEditing = true
Amit  → isEditing = false
John  → isEditing = false
```

Now Raj is removed.

With index keys, React may reuse the existing component instances based on their positions.

That can lead to state appearing attached to the **wrong user**.

```text id="q27-state-problem"
Before:

key 0 → Raj  → editing = true
key 1 → Amit → editing = false
key 2 → John → editing = false


Remove Raj:

key 0 → Amit
key 1 → John

Potential problem:
Amit may receive the component
instance that previously belonged to Raj.
```

This is why index keys are dangerous for **dynamic lists**.

---

# ⭐ What Does `key` Actually Do?

A common misconception is:

> ❌ "`key` is used to access the item inside the component."

No.

`key` is mainly used by React's **reconciliation algorithm** to identify list elements between renders.

Also:

```jsx
<User key={user.id} user={user} />
```

does **not** mean you can do:

```jsx
function User(props) {
  console.log(props.key); // undefined
}
```

`key` is a special React prop and isn't passed to the component as a normal prop.

If you need the ID inside the component:

```jsx
<User key={user.id} userId={user.id} user={user} />
```

---

# 🧠 Easy Way to Remember

Remember:

> **`key` = stable identity**

```text id="q27-memory"
React needs to know:

"Is this the same item
as before?"

        ↓

Stable key

        ↓

Correct reconciliation
```

### Good keys

```text
user.id
product.id
database ID
UUID
```

### Risky keys

```text
array index
random number
Math.random()
```

Especially avoid:

```jsx id="q27-random"
key={Math.random()}
```

because a new key is generated on every render, causing React to treat the item as a new element.

---

# ⭐ Senior-Level Interview Point

The interviewer may ask:

> **"Can we always use array index as the key?"**

Answer:

> **"I would use the index only when the list is static, the order never changes, and items are not inserted or removed. For dynamic lists, I prefer a stable unique ID from the data."**

---

# 🎯 Short Interview Answer

If you need a quick answer:

> **"`key` gives React a stable identity for list items and helps React efficiently reconcile changes such as additions, removals, and reordering. I prefer using a unique stable ID from the data. Using array indexes can cause incorrect component reuse when items are inserted, removed, or reordered, especially when list items have local state."**

---

## 🔥 Important Connection With Your Virtualization Question

Since we discussed **React virtualization** earlier, remember:

```text id="q27-virtual"
Virtualized List
      ↓
Rows are created/reused
      ↓
Stable identity is important
      ↓
Use appropriate keys
```

For libraries such as `react-window`, the virtualization library may manage the rendered row identity differently, so you should follow the library's API rather than assuming a normal `.map()` key pattern.

---

### 📌 Next Question — Q28

**File:** `q28-react-reconciliation.md`

> **"How does React reconciliation work? What happens when the state or props of a component change?"**
