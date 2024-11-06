import { createSlice } from "@reduxjs/toolkit";
import TodoForm from "./TodoForm";
const initialState = {
  // declare initial state of reducer
  todos: [
    // moved here from TodoList.tsx
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" }, //default todo
};
const todosSlice = createSlice({ //creating the slice 
  name: "todos", //name slice
  initialState,// configure store's initial state
  reducers: { //declare reduce functions
    addTodo: (state, action) => {
      const newTodos = [
        ...state.todos,
        { ...action.payload, id: new Date().getTime().toString() },
      ];// copy old todos, append new todo
      // in action.payload, override
      // id as timestamp      
      state.todos = newTodos; //update todos
      state.todo = { title: "" }; //clear todo
    },
    deleteTodo: (state, action) => { //delete reducer function
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
    updateTodo: (state, action) => { // rebuilding newTodos by replacing
      // old todo with new todo in
      // action.payload
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todos = newTodos;
      state.todo = { title: "" };
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;
