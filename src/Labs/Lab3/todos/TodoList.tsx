import ToDoItem from "./ToDoItem";
import Todos from "./Todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
       { Todos.map(todo => {
           return(<ToDoItem todo={todo}/>);
         })}
     </ul><hr/>
   </>
 );
}
export default TodoList;