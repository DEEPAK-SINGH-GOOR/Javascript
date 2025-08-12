<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redux Theory Notes</title>
</head>
<body>
    <!-- 
    1) What is Redux?
    => Redux is a state management library used to store and manage the entire application's data in one place.
    => It does not belong to any single component's state; it is global.
    => Alternative to Context API for larger applications.
    => Stores whole application data and follows unidirectional data flow.

    2) Four Main Pillars:
    => Action, Reducer, Store, View
       - View: React components (buttons, images, inputs, checkboxes, etc.).
       - Action: Collects data from View & API, then sends to Reducer.
       - Reducer: Processes action data and returns new state to Store.
       - Store: Manages the whole application state and provides it to Views.
    Note: One application has only one Store.
    Flow: View → Action → Reducer → Store → View

    3) How to Install Redux:
    => npm create vite@latest my-app
    => npm install @reduxjs/toolkit react-redux
    => npm run dev

    4) What is Props?
    => Props are used to send data from one component to another.
    => Helps communicate between components.
    Note: With Redux, components often access data directly from the Store instead of passing via props.

    5) What is Action?
    => An object that sends data from a React component (View) or API to the Redux Store.

    6) What is Dispatch?
    => A function in Redux used to send an action to the Store so Reducers can update the state.

    7) What is Reducer?
    => A pure function that takes the current state and an action, and returns a new state.
    
    8) What is Store?
    => The centralized container that holds the entire application’s state.
    => Created using configureStore() in Redux Toolkit.
    => One store per application.

    9) What is View?
    => The UI layer (React components) that displays data from the Store and sends actions to Redux.
    -->
        <script>
            import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../action/crudAction";
import './home.css';

export default function Home() {
  const dispatch = useDispatch();
  const { lists } = useSelector(state => state.lists);

  console.log("Redux lists state:", lists);

  useEffect(() => {
    console.log("Dispatching getItems action...");
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      {lists && lists.map(list => {
        console.log("Rendering list item:", list);
        return <div key={list.id}>{list.title}</div>;
      })}
    </div>
  );
}

//CRUD REDUCER 
const LIST_ITEM = "LIST_ITEM";

const initialState = {
  lists: [],
  item: {},
};

export default function rootReducer(state = initialState, action) {
  console.log("Reducer called with action:", action); // Logs every action
  console.log("Current state before update:", state);

  switch (action.type) {
    case LIST_ITEM:
      console.log("LIST_ITEM action detected");
      console.log("Payload received:", action.payload);

      return {
        ...state,
        lists: action.payload,
      };

    default:
      console.log("No matching action type, returning current state");
      return state;
  }
}
//INDEX.JS
import { combineReducers } from "redux";
import crudReducer from "./crudReducers";

console.log("Combining reducers...");

const rootReducer = combineReducers({
    lists: crudReducer
});

console.log("Initial combined state shape:", {
    lists: crudReducer(undefined, {}) // simulate initial state
});

export default rootReducer;

        </script>
</body>
</html>
