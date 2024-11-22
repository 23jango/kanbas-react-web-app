import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

//create an asynchronous version. Let's add client functions to client.ts to fetch the assignment object from the server and update its title
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

// use axios so that we can manipulate remote arrays on the server from the user interface and update a user interface to reflect the changes in the remote array. We'll implement several client functions in client.ts that use axios to communicate with the server and we'll use them from a new component that will render the remote array in the user interface.

const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

//a remove function that sends a delte request to the server
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
}
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};



//OLD
//function that requests creating a new todo - the old way to do things
export const createTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};

//NEW
//only returns the one array thats created- post means create!
export const postTodo = async (todo: any) => {
  const response = await axios.post(`${TODOS_API}`, todo);
  return response.data;
};

export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);//Note the second argument in the axios.put() method containing the updated todo object instance sent to the server. 
  return response.data; //response contains status
};



