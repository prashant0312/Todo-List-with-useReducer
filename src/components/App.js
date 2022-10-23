import React, { useReducer } from "react";
import { todoReducer } from "../reducers/todo";
import "../styles/App.css";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {state &&
        state.map((ele) => {
          return <Todo ele={ele} key={ele.id} dispatch={dispatch} />;
        })}
    </div>
  );
};

export default App;
