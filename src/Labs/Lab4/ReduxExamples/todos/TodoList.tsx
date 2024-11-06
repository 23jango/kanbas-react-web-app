import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux"; //import this to retrieve data from reducer

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  //initialize to do useState with two to do things

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm /> 
        {/* remove unnecessary attributes */}
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />        
          // remove unnecessary attributes,
          // but still pass the todo
        ))}
      </ul>
      <hr/>
    </div>
);
}
