
## 4. Virtualization — Render only visible list items

Problem: Even after filtering, rendering thousands of DOM elements can slow down scrolling, increase memory usage, and make the UI less responsive.

Solution: Use virtualization (also called windowing) to render only the visible rows plus a small overscan buffer.

For example, with 100,000 users, the browser might render around 20–40 rows at a time instead of all 100,000.

Install `react-window`:

```
npm install react-window@1
```

Example using the `react-window` v1 API:

```js

import { FixedSizeList } from "react-window";

function VirtualizedUserList({ users }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {users[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width="100%"
      itemCount={users.length}
      itemSize={40}
      overscanCount={5}
    >
      {Row}
    </FixedSizeList>
  );
}

export default VirtualizedUserList;

```

How it works:

- `height={400}` sets the visible list viewport.
- `itemSize={40}` specifies the height of each row.
- `itemCount` tells the library how many items exist.
- `overscanCount={5}` renders a few extra rows outside the visible area to improve scrolling.

Virtualization reduces the number of mounted DOM nodes, but it does not reduce the size of the data already held in memory. For very large datasets, combine it with server-side pagination or infinite loading.

## How should a Senior React Developer choose?

| Technique              | Main problem solved                      | When to use                            |
| ---------------------- | ---------------------------------------- | -------------------------------------- |
| `useMemo`              | Repeated expensive calculations          | Expensive filtering or transformations |
| Debouncing             | Too many operations or API calls         | Search inputs and autocomplete         |
| Server-side pagination | Too much data transferred to the browser | Large database-backed lists            |
| Virtualization         | Too many DOM elements                    | Long lists with thousands of rows      |

These techniques solve different problems, so you can combine them.

For your senior-level interview, a strong answer would be:

> “First, I identify the bottleneck using browser performance tools and React Profiler. If filtering is expensive, I consider `useMemo`. If search triggers too many API requests, I debounce the input. For large datasets, I move filtering and pagination to the backend. If rendering thousands of rows remains expensive, I use virtualization. I choose optimizations based on measured performance rather than adding them everywhere.”

Next React coding question: Implement a custom `useDebounce` hook that can be reused across multiple components.
