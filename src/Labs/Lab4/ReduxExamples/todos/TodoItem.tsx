import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTodo } from "./todoReducer";
export default function TodoItem({todo}
    : {todo: {title: string, id: string, description: string}}
  ) {// remove dependency with parent component
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))}
        // create dispatch instance to invoke reducer functions

        id="wd-delete-todo-click"> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))} // wrap reducer functions with dispatch
        id="wd-set-todo-click"> Edit </button>
      {todo.title}
    </li>
   
  )

;}
