import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;


//implement the updateassignment function as shown below. Pass it the assignment to be update. Encode the ID of the assignment in a URL, and sent the assignment updates in the body of an HTTP PUT request to the server.
export const updateAssignment = async (assignment: any) => {
  const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};



export const deleteAssignment = async (assignmentId: string) => { //pass the id of the assignment to be removed
 const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`); //encode it in a url
 return response.data; //send as an HTTP delete
};
