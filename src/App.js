import './App.css';
import Header from './MyComponent/header';
import {Todos} from './MyComponent/todos';
import {footer as Footer} from './MyComponent/footer';
import React, {useState} from 'react';

function App() {
  const onDelete =(todo) => {
    console.log('onDelete called with todo', todo);
    setTodos(todos.filter((e)=> {
      return e!== todo
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the Market',
      desc: 'To buy some vegetables from the Market'
    },
    {
      sno:2,
      title: 'Go to the Mall',
      desc: 'Need to so some job done'
    },
    {
      sno:3,
      title: 'Go to the temple',
      desc: 'No need for description'
    }
  ]);
  return (
    <>
    <Header title="My New Todo List"></Header>
     <Todos todo={todos} onDelete={onDelete}></Todos>
    <Footer></Footer>
    </>
  );
}

export default App;
