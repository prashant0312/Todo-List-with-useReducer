import React, { useState } from "react";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addTodo(e) {
    e.preventDefault();
    dispatch({
      type: "Add",
      payload: {
        title: input,
        id: Date.now()
      }
    });
  }

  return (
    <>
      <form id="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="enter title"
          id="todo-input"
          value={input}
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export { AddTodo };
