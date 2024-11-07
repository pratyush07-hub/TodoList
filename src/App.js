import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from 'react';   // hook ---> to update

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete todo", todo);
    setTodos(todos.filter((e)=> {
      return e!==todo;
    }))
  }
  const addTodo = (title, desc) =>{
    console.log("I am adding this Todo", title, desc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }
  const [todos, setTodos] = useState([   // to update
    {
      sno: 1,
      title: "Go to Shopping",
      desc: "You need to buy these items: oil, vegetables, rice, thoothpaste"
    },
    {
      sno: 2,
      title: "Go to gym",
      desc: "You need to do some exercises"
    },
  ]);
  return (
    <>
    <Header title="TodosList" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
