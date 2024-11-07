import React from 'react'   // rafc
import { TodoItem } from "./TodoItem";


export const Todos = (props) => {
  return (
    <div className="container">
        <h3 className="text-center my-4">Todos List</h3>
        {props.todos.map((todo) =>{
        return (
            <>
        <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
        <hr/></>
        )
        } )}
    </div>
  )
}

export default Todos
