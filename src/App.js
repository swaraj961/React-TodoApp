import "./App.css";
import Header from "./componets/Header";
import { Footer } from "./componets/Footer";
import { Todos } from "./componets/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./componets/AddTodo";
import {About} from "./componets/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //  add
  const addNewTodos = (title, desc) => {
    console.log(`I'm Adding this to my todo list`, title, desc);
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myNewTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myNewTodo]);
    
    console.log(sno);
  };

  // delete

  const onDelete = (todo) => {
    console.log(`I'm on delete of `, todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(
    initTodo
  );

  // when ever state change userEffect hook is being called
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  // let todos=[

  // ];
  return (
    <>
     <Router> 
     <Header title="Todo-App" />

     <Switch>
       <Route exact path="/" render={()=>{
        return(
          <>
          <AddTodo addTodo={addNewTodos} />
         <Todos todos={todos} onDelete={onDelete} />
            </>
        );
       }}>
         
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        
         
        </Switch>
     
      <Footer />
      
     </Router>
     </>
  );
}

export default App;
