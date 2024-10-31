import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todoReducer";
export default function TodoItem({ todo }) {// remove dependency with parent component
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

// import { useDispatch } from "react-redux";
// import { deleteTodo, setTodo } from "./todoReducer";
 
// export default function TodoItem({ todo }: { todo: { id: string; title: string }; }) {
//   const dispatch = useDispatch();
 
//   return (
// <li key={todo.id} className="list-group-item">
// <div className="d-flex flex-row-reverse align-items-center">
// <button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click"
//           className="btn btn-danger mx-1">Delete</button>
// <button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click"
//           className="btn btn-primary mx-1">Edit</button>
// <div className="flex-grow-1 text-left">{todo.title}</div>
// </div>
// </li>
//   );
}