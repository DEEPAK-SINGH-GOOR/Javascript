import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { PersistGate } from "redux-persist/integration/react";

// ---------------- Reducer ----------------
const initialState = { todos: [] };

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
}

// ---------------- Root Reducer ----------------
const rootReducer = combineReducers({
  counter: todoReducer
});

// ---------------- Persist Config ----------------
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ---------------- Store & Persistor ----------------
const store = configureStore({
  reducer: persistedReducer
});
const persistor = persistStore(store);

// ---------------- App Component ----------------
function App() {
  const User = {
    firstName: "",
    lastName: "",
    rollNo: "",
    email: "",
    contact: "",
  };

  const [todo, setTodo] = useState(User);
  const [edit, setEdit] = useState(null);

  const dispatch = useDispatch();
  const todos = useSelector(state => state.counter.todos);

  function handleAdd() {
    if (edit) {
      dispatch({ type: "EDIT_TODO", payload: { ...todo, id: edit } });
      setEdit(null);
    } else {
      dispatch({ type: "ADD_TODO", payload: { ...todo, id: Date.now() } });
    }
    setTodo(User);
  }

  function handleRemove(id) {
    dispatch({ type: "REMOVE_TODO", payload: id });
  }

  function handleEdit(item) {
    setTodo(item);
    setEdit(item.id);
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="First Name"
        value={todo.firstName}
        onChange={e => setTodo({ ...todo, firstName: e.target.value })}
      />
      <input
        placeholder="Last Name"
        value={todo.lastName}
        onChange={e => setTodo({ ...todo, lastName: e.target.value })}
      />
      <input
        placeholder="Roll No"
        value={todo.rollNo}
        onChange={e => setTodo({ ...todo, rollNo: e.target.value })}
      />
      <input
        placeholder="Email"
        value={todo.email}
        onChange={e => setTodo({ ...todo, email: e.target.value })}
      />
      <input
        placeholder="Contact"
        value={todo.contact}
        onChange={e => setTodo({ ...todo, contact: e.target.value })}
      />
      <button onClick={handleAdd}>{edit ? "Update" : "Add"}</button>

      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.firstName} {item.lastName} - {item.email} - {item.contact}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------- Render ----------------
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
