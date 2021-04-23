import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
          <h3>{todo.title}</h3>
          <h6>{todo.desc}</h6>
            <button className="btn -sm btn-danger"onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
