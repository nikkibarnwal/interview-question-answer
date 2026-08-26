# React Virtualization — Interview Cheat Sheet

### 1. What is virtualization?

> **Virtualization is a performance optimization technique where we render only the items currently visible in the viewport instead of rendering the entire large dataset into the DOM.**

Example:

```text
100,000 records
      ↓
Virtualization
      ↓
Only ~10–30 DOM rows
      ↓
Scroll
      ↓
Different rows rendered/reused
```

---

## 2. Why do we need it?

Without virtualization:

```jsx
users.map((user) => <Row user={user} />);
```

If `users = 100,000`:

```text
100,000 data items
      ↓
100,000 DOM nodes
      ↓
High memory
Slow initial render
Slow reconciliation
Poor scrolling
```

With virtualization:

```text
100,000 data items
      ↓
~10–30 DOM nodes
      ↓
Much better performance
```

---

## 3. How does virtualization work?

The library calculates:

```text
Scroll position
      +
Viewport height
      +
Row height
      ↓
Visible indexes
      ↓
Render only those rows
```

For example:

```text
Total: 100,000

Viewport:
┌─────────────┐
│ User 500    │
│ User 501    │
│ User 502    │
│ ...         │
│ User 510    │
└─────────────┘

Only these rows are actually in DOM.
```

When scrolling:

```text
User 500–510
      ↓ scroll
User 510–520
      ↓ scroll
User 520–530
```

The virtualization library **updates/reuses the rendered rows** rather than keeping all 100,000 DOM nodes.

---

# 4. Basic `react-window` example

```jsx
import { FixedSizeList } from "react-window";

function UserList({ users }) {
  const Row = ({ index, style }) => {
    const user = users[index];

    return <div style={style}>{user.name}</div>;
  };

  return (
    <FixedSizeList
      height={500}
      width={400}
      itemCount={users.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}
```

### Important properties

| Property    | Meaning                               |
| ----------- | ------------------------------------- |
| `height`    | Height of viewport                    |
| `width`     | Width of viewport                     |
| `itemCount` | Total number of items                 |
| `itemSize`  | Height of each row                    |
| `index`     | Current item index                    |
| `style`     | Positioning style provided by library |

---

# 5. Why don't we use `key`?

Normal React:

```jsx
users.map((user) => <div key={user.id}>{user.name}</div>);
```

Because **we are creating the list ourselves**.

With virtualization:

```jsx
<FixedSizeList>{Row}</FixedSizeList>
```

The virtualization library controls the list rendering/reconciliation.

So:

> **The library manages the row lifecycle and keying according to its API.**

If the particular library/version provides an `itemKey` API, use a stable ID when appropriate.

---

# 6. CRUD with virtualization

Virtualization **doesn't manage CRUD**.

Your state remains the source of truth:

```jsx
const [users, setUsers] = useState([]);
```

### Create

```jsx
setUsers((prev) => [...prev, newUser]);
```

### Update

```jsx
setUsers((prev) =>
  prev.map((user) => (user.id === id ? { ...user, name: newName } : user)),
);
```

### Delete

```jsx
setUsers((prev) => prev.filter((user) => user.id !== id));
```

Then:

```text
Updated users
      ↓
Virtualized list
      ↓
Only affected/visible rows rendered
```

---

# 8. Virtualization vs Pagination

### Pagination

```text
100,000 records

Page 1 → 50 records
Page 2 → 50 records
Page 3 → 50 records
```

Usually only one page is loaded/displayed.

### Virtualization

```text
100,000 records available

         ↓

Only ~20 DOM rows
```

The whole dataset can be available in memory, but only visible rows are rendered.

---

# 9. Virtualization vs Infinite Scroll

### Virtualization

Concerned with:

> **How many DOM elements should I render?**

```text
100,000 records
       ↓
20 DOM elements
```

### Infinite scrolling

Concerned with:

> **When should I fetch more data?**

```text
Fetch 100
   ↓
Scroll near bottom
   ↓
Fetch another 100
   ↓
Scroll
   ↓
Fetch another 100
```

They can be combined.

---

# 10. Real-world architecture

For extremely large datasets:

```text
Backend
   │
   │ API
   ▼
Fetch 1000 records
   │
   ▼
Frontend state/cache
   │
   ▼
Virtualization
   │
   ▼
Only ~20 DOM rows
```

When the user gets near the end:

```text
Scroll near bottom
        ↓
Fetch next 1000
        ↓
Append to existing data
        ↓
Virtualization continues
```

This gives you:

**Infinite loading + virtualization**

which is very useful for large enterprise tables/lists.

---

# 11. Fixed vs Variable size

### Fixed-size virtualization

Every row has the same height:

```text
Row 1 → 50px
Row 2 → 50px
Row 3 → 50px
```

Easy to calculate.

```jsx
itemSize={50}
```

### Variable-size virtualization

Rows can have different heights:

```text
Row 1 → 50px
Row 2 → 80px
Row 3 → 120px
```

The virtualization library needs additional information/calculation to determine each row's position.

---

# 12. Overscan

A good interview concept.

The library may render **a few extra rows outside the viewport**.

```text
        Overscan
           ↓
   User 490
   User 491
   User 492

┌───────────────┐
│ User 493      │
│ User 494      │
│ User 495      │
│ User 496      │
│ User 497      │
└───────────────┘
           ↑
        Viewport

   User 498
   User 499
   User 500
        ↑
      Overscan
```

Why?

If we render only exactly what's visible, fast scrolling could temporarily show blank areas.

Overscan provides a **buffer** for smoother scrolling.

---

# 13. Important performance benefit

### Normal list

```text
100,000 records
       ↓
100,000 DOM nodes
```

### Virtualized list

```text
100,000 records
       ↓
~20–30 DOM nodes
```

So virtualization primarily reduces:

- DOM size
- Memory usage
- Rendering work
- Layout/paint work
- Initial rendering cost

---

# 14. Common libraries

Popular React virtualization libraries include:

- `react-window`
- `react-virtualized`
- `@tanstack/react-virtual`

---

# 15. Common interview questions

### Q1. What is virtualization?

> Rendering only visible items instead of the entire large dataset to reduce DOM and improve performance.

### Q2. Does virtualization reduce the size of the dataset?

> **No.** It reduces the number of DOM elements being rendered.

### Q3. Does virtualization mean pagination?

> **No.** Pagination controls how much data is fetched/displayed, while virtualization controls how many DOM elements are rendered.

### Q4. How does scrolling work?

> The virtualization library calculates which indexes should be visible based on scroll position and viewport size, then renders/reuses those rows.

### Q5. Does it create new DOM elements every time we scroll?

> Not necessarily. Good virtualization implementations reuse/recycle rendered elements and update them for the newly visible indexes.

### Q6. How do you handle CRUD?

> CRUD is handled by the application's state/API layer. Virtualization only controls rendering.

### Q7. Should I use index as the ID?

> No. Use a stable unique ID for CRUD and business operations.

### Q8. What is overscan?

> Rendering a small number of items outside the viewport to avoid blank areas during fast scrolling.

### Q9. Virtualization vs infinite scroll?

> Virtualization controls **DOM rendering**; infinite scroll controls **data fetching**. They can be used together.

### Q10. When should I use virtualization?

> When rendering a large list/table where the number of DOM elements could significantly affect performance.

---

# ⭐ 30-Second Interview Answer

If the interviewer asks **"Explain React virtualization"**, give this:

> **"Virtualization is a performance optimization technique for large lists or tables. Instead of rendering all records into the DOM, we render only the items currently visible in the viewport, plus a small overscan buffer. As the user scrolls, the virtualization library calculates the new visible indexes and reuses or updates the rendered rows. This significantly reduces DOM nodes, memory usage, and rendering work. Libraries like react-window and TanStack Virtual provide this functionality. Virtualization handles rendering optimization, while CRUD and data fetching are still managed by our application state or API layer."**

### Remember this one line:

**Pagination → how much data to fetch**
**Virtualization → how much data to render in DOM**
**Infinite scroll → when to fetch more data**

where are deciding how many rows will be render by virtualization?

Yes. **You actually don't directly tell virtualization "render 30 rows."** The library calculates it based mainly on the **viewport size + item size**, and optionally an **overscan/buffer**.

Let's use your `react-window` example.

```jsx
<FixedSizeList height={500} width={400} itemCount={100000} itemSize={50}>
  {Row}
</FixedSizeList>
```

### Step 1 — Calculate visible rows

You provided:

```text
height = 500px
itemSize = 50px
```

So:

```text
500 / 50 = 10 rows
```

Therefore, approximately **10 rows are visible in the viewport**.

```text
┌──────────────────────┐
│ Row 1     50px       │
├──────────────────────┤
│ Row 2     50px       │
├──────────────────────┤
│ Row 3     50px       │
├──────────────────────┤
│ ...                  │
├──────────────────────┤
│ Row 10    50px       │
└──────────────────────┘
        500px
```

But the library may render **more than 10** because of overscan/buffering.

---

### Step 2 — Overscan

Conceptually:

```text
Visible rows = 10

        Overscan
           ↓
       Row 1
       Row 2
       Row 3

┌─────────────────┐
│ Row 4           │
│ Row 5           │
│ Row 6           │
│ Row 7           │
│ Row 8           │
│ Row 9           │
│ Row 10          │
│ Row 11          │
│ Row 12          │
└─────────────────┘

       Row 13
       Row 14
           ↑
        Overscan
```

So the actual DOM might contain something like **14–16 rows**, even though only 10 are visible.

The exact number depends on the library/version and its overscan configuration.

---

## What controls the number of rows?

There are mainly **3 things**:

| Configuration |                  Example | Effect                    |
| ------------- | -----------------------: | ------------------------- |
| `height`      |                  `500px` | Determines viewport size  |
| `itemSize`    |                   `50px` | Determines row height     |
| Overscan      | library/config dependent | Adds extra rows as buffer |

So if:

```jsx
height={1000}
itemSize={50}
```

then:

```text
1000 / 50 = 20 visible rows
```

Whereas:

```jsx
height={500}
itemSize={25}
```

gives:

```text
500 / 25 = 20 visible rows
```

---

### ⭐ Interview answer

If interviewer asks:

> **"How does virtualization decide how many rows to render?"**

Say:

> **"We don't normally specify an exact number of rows. The virtualization library calculates it from the viewport height and item size. For example, if the viewport is 500px high and each row is 50px, around 10 rows are visible. The library usually renders some additional rows using overscan to provide smooth scrolling. As the scroll position changes, it recalculates the visible range and renders or reuses those rows."**

That's the key concept to remember:

**Viewport size + Row size + Overscan → Number of DOM rows.**
