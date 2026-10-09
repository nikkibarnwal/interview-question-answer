## React Coding Interview — Question 5: Todo List with Add and Delete

Interview question: Build a Todo List component in React that allows users to add new tasks and delete existing tasks.

### Requirements

- Add a task using an input field.
- Do not add empty tasks.
- Display all tasks.
- Delete a task by clicking its Delete button.
- Use React state to manage the list.
- Update a todo
- change button text


```js
import { useState } from 'react'

const TODOS = [
  {
    id: 1,
    text: "Drink water"
  },
  {
    id: 2,
    text: "Prepare now"
  }
]

const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);
  const [input, setInput] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleAddTodo = () => {
    const currentInput = input.trim();
    if (!currentInput) {
      console.log("Add data into input field")
      return;
    }
    if (editingTodoId !== null) {
      setTodos((prev) => (
        prev.map((todo) => {
          return todo.id === editingTodoId ?
            {
              ...todo,
              text: currentInput
            }
            : todo;
        })
      ));
      setEditingTodoId(null);
    } else {
      const newTodo = {
        id: crypto.randomUUID(),
        text: input
      }
      setTodos((prev) => [...prev, newTodo]);
    }
    setInput("");
  }

  const handleDelete = (id) => {
    setTodos(
      (prev) => prev.filter((todo) => todo.id !== id)
    )
  }

  const editTodo = (todo) => {
    setEditingTodoId(todo.id);
    setInput(todo.text);
  }

  return <>
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>
        {editingTodoId !== null ? "Update Todo" : "Add Todo"}
      </button>
    </div>
    <ul>
      {
        todos.length > 0 ? todos.map((todo) => {
          return <li key={todo.id} >{todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete </button>
            <button onClick={() => editTodo(todo)}>Update </button>
          </li>

        })
          :
          <li>Data not available</li>
      }
    </ul>
  </>
}

export default TodoList;

```


### Important interview concepts

1\. Why use the spread operator when adding a task?

```
setTodos((prevTodos) => [...prevTodos, newTodo]);
```

It creates a new array containing the existing tasks and the new task. React state should be updated immutably.

2\. Why use `filter()` to delete a task?

```
setTodos((prevTodos) =>
  prevTodos.filter((todo) => todo.id !== id)
);
```

It returns a new array excluding the selected task.

3\. Why not use the array index as the key?

Each task has a stable, unique ID. This helps React correctly identify items when tasks are deleted or reordered.

4\. Why use `trim()`?

It prevents users from adding tasks containing only spaces.
