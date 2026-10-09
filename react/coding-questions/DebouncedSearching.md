## 2. Debouncing — Wait until the user stops typing

Problem: If the user types `Rajendra`, the search handler may run eight times, once per keystroke. When searching a backend API, that could trigger eight requests.

Solution: Wait, for example, 300 milliseconds after the last keystroke before applying the search.

```js

import { useEffect, useState } from "react";

function UserSearch({ users }) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(
      debouncedSearch.toLowerCase()
    )
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users..."
      />

      {filteredUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserSearch;

```

How it works:

1. The user types into the input.
2. Each keystroke resets the timer through effect cleanup.
3. If the user stops typing for 300 ms, `debouncedSearch` updates.
4. Filtering runs with the settled search value.

Senior interview point: Debouncing reduces how often an operation runs; it doesn't make the filtering calculation itself faster. For a local array, use it when repeated filtering is costly. For API search, it can reduce unnecessary network requests.
