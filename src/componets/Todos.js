import React from "react";
import { TodoItem } from "./Todo";
export const Todos = (props) => {
  const containerStyle={
    minHeight :"80vh",
    marginButtom: "2rem"

  }
  return (
    <div className="container" style={containerStyle}>
      <h3 className="text-center my-3">Todo- lists</h3>
  
      {props.todos.length===0 ? "No todos to display" : 
      props.todos.map((todo) => {
        return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
          </>
        )   
      })
      
      }

      
    </div>
  );
};
