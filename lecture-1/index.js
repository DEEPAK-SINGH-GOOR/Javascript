import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./crudAction";

export default function App() {
  const [todo, setTodo] = useState({ name: "", description: "" });

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (!todo.name || !todo.description) return;

    dispatch(
      addTodo({
        id: Date.now(),
        name: todo.name,
        description: todo.description,
      })
    );

    setTodo({ name: "", description: "" });
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div id="app">
      <h2>Redux CRUD</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos &&
          todos.map((t) => (
            <li key={t.id}>
              <strong>{t.name}</strong> — {t.description}
              <button onClick={() => handleRemoveTodo(t.id)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
                    }



// update
// reducers.js
import todoReducer from "./components/Home/crudReducer";

export default todoReducer;
{
  todos: [...]
                    }
