React mein **Concurrent Rendering** ko simple Hinglish mein samjho:

### What is Concurrent Rendering?

> **Concurrent rendering means React can start rendering an update, pause it, prioritize another more important update, and then resume or discard the previous rendering work.**

Old React mein rendering mostly **synchronous/blocking** thi:

```text
State Update
    ↓
Render
    ↓
Commit
    ↓
UI
```

Agar rendering expensive hai, browser thread block ho sakta tha.

Concurrent rendering mein:

```text
Update A starts
      ↓
React renders A
      ↓
"Important update B आया"
      ↓
Pause A
      ↓
Render B
      ↓
Commit B
      ↓
Resume/Discard A
```

### Real-life example

Suppose e-commerce/BJs application mein search hai:

```text
User types: "membership"
```

Har keystroke par large list render karna expensive ho sakta hai.

React ke concurrent features ki help se:

```text
Typing → HIGH priority
List filtering/rendering → LOWER priority
```

React user interaction ko responsive rakh sakta hai.

---

## React 18 mein kaise use karte hain?

### 1. `startTransition`

```javascript
import { startTransition } from "react";

function handleSearch(value) {
  setSearchText(value);

  startTransition(() => {
    setFilteredData(filterData(value));
  });
}
```

Yahan:

```text
setSearchText()
      ↓
Urgent update

startTransition()
      ↓
Non-urgent update
```

React urgent update ko priority dega.

---

### 2. `useTransition`

```javascript
const [isPending, startTransition] = useTransition();

function handleChange(value) {
  setInput(value);

  startTransition(() => {
    setResults(search(value));
  });
}
```

UI:

```jsx
{isPending && <Spinner />}
```

Useful when expensive UI update ho raha ho aur aap user ko responsive experience dena chahte ho.

---

### 3. `useDeferredValue`

Agar input value immediately update honi chahiye but expensive result thoda delay ho sakta hai:

```javascript
const [search, setSearch] = useState("");

const deferredSearch = useDeferredValue(search);
```

```text
search
  ↓
Immediate

deferredSearch
  ↓
Can lag behind
  ↓
Expensive component
```

---

# Important interview point 🚨

**Concurrent Rendering ka matlab parallel rendering nahi hai.**

Ye mat bolna:

> "React multiple components ko simultaneously render karta hai."

Better:

> **"Concurrent rendering doesn't mean React renders things simultaneously on multiple threads. It means React can interrupt, prioritize, pause and resume rendering work so that urgent updates remain responsive."**

### Interview-ready answer

> **"Concurrent rendering is a React capability where rendering work can be interruptible. React can start rendering a low-priority update, pause it when a higher-priority update comes in, handle the important update first, and then resume or discard the previous work. React 18 introduced APIs like `startTransition`, `useTransition`, and `useDeferredValue` that allow developers to mark certain updates as non-urgent. The main goal is to keep the UI responsive during expensive rendering."**

### Easy trick 🧠

**Concurrent = Interrupt + Prioritize + Resume/Discard**

Bas ye 4 words yaad rakho.
