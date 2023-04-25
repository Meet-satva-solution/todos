import "./App.css";
import Header from "./MyComponent/header";
import { Todos } from "./MyComponent/todos";
import { footer as Footer } from "./MyComponent/footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponent/addTodo";

function App() {
  const addTodo = (value) => {
    let sno = todos[todos.length - 1]?.sno + 1;
    value.sno = sno ? sno : 1;
    setTodos([...todos, value]);
  };
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "To buy some vegetables from the Market",
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "Need to so some job done",
    },
    {
      sno: 3,
      title: "Go to the temple",
      desc: "No need for description",
    },
  ]);
  useEffect(() => {}, [todos]);

  return (
    <>
      <Header title="My New Todo List"></Header>
      <Todos todo={todos} onDelete={onDelete}></Todos>
      <AddTodo addTodo={addTodo}></AddTodo>
      <Footer></Footer>
    </>
  );
}

export default App;
