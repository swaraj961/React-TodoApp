import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-container row align-items-center">
      <div className="col-10">
        <h3>{todo.title}</h3>
        <h6>{todo.desc}</h6>
      </div>
      <button
        className="btn -sm btn-danger col-1"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
};
