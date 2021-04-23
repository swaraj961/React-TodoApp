import "./App.css";
import Header from "./componets/Header";
import { Footer } from "./componets/Footer";
import { Todos } from "./componets/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./componets/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //  add
  const addNewTodos = (title, desc) => {
    console.log(`I'm Adding this to list`, title, desc);
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

    // [
    // {
    //   sno: 1,
    //   title: "go to gym",
    //   desc: "go to gym at 6AM and have breakfast at 8:30AM "

    // },
    // {
    //   sno: 2,
    //  title: "go to market",
    //   desc: "go to market at 8PM and have dinner at 8:30AM "

    // },
    // {
    //   sno: 3,
    //   title: "go to park",
    //   desc: "go to park and get back home at 7 PM "

    // },
    // ]
  );

  // when ever state change userEffect hook is being called
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  // let todos=[

  // ];
  return (
    <>
      <Header title="Todo-App" />
      <AddTodo addTodo={addNewTodos} />
      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
