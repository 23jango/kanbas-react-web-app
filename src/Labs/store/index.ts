import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/HelloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/CounterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import todoReducer from "../Lab4/ReduxExamples/todos/todoReducer";

const store = configureStore({
  reducer: { helloReducer, counterReducer, addReducer, todosReducer: todoReducer},
});
export default store;