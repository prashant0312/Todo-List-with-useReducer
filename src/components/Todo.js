import React from "react";

const Todo = ({ ele, dispatch }) => {
  function deleteTodo(id) {
    dispatch({
      type: "Delete",
      payload: {
        id: id
      }
    });
  }

  return (
    
    <div className="todo">
      <div className="todo-title">{ele.title}</div>
    
      <button className="todo-delete" onClick={() => deleteTodo(ele.id)}>
        Delete
      </button>
    </div>
  );
};

export { Todo };
