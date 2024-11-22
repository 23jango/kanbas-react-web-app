import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true }); //default axios does not support cookies, use axios.create to create an instance of the library that includes cookies for credentials 
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

//retrieves current users courses using the new findCoursesForEnrolledUser endpoint
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

// The client function signin shown below posts a credentials object containing the username and password expected by the server. If the credentials are found, the response should contain the logged in user.
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

//a function to retrieve the account information from the server route implemented 
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};


//signup client that posts the new user to the Web API as shown below.
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

//send user updates to the server to be saved to the database.
export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

//client function that can post the signout route
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

