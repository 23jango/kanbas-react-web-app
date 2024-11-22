import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// implements all the course related communication between the user interface and the server.-- basically this file is a connection between front and back end

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

//eletes an existing course from the server and returns the status response from the server.
export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};

//updates an existing course in the server, returns status response
export const updateCourse = async (course: any) => {
const { data } = await axios.put(`${course._id}`, course);
return data;
// const { data } = await axios.put(`/api/courses/${course._id}`, course);
//  return data;
}

//retrieves modules for a given course and sends infor from backend server to user interface
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

//for modules
//posts a new module from the user interface to the server
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`, module );//Encode the course's ID in the URL so the server can know what course the module belongs to.

  return response.data;
};

//retrieves assignment for a given course and sends info from backend server to user interface
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

//for assignments
//posts a new assignment from the user interface to the server
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`, assignment );//Encode the course's ID in the URL so the server can know what course the assignment belongs to.

  return response.data;
};



