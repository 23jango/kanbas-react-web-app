import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// implements all the course related communication between the user interface and the server.-- basically this file is a connection between front and back end


export const getCourseById = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}`);
  console.log(courseId, "from client!!");
  return response.data;
};

//uses routes function to help w this - sends only users enrolled in course
export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
 };
 

//uses the axios instance with credentials as showns below. (from courses.routes)
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
 };
 

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

//eletes an existing course from the server and returns the status response from the server.
export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

//updates an existing course in the server, returns status response
export const updateCourse = async (course: any) => {
const { data } = await axiosWithCredentials.put(`${course._id}`, course);
return data;
// const { data } = await axios.put(`/api/courses/${course._id}`, course);
//  return data;
}

//retrieves modules for a given course and sends infor from backend server to user interface
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

//for modules
//posts a new module from the user interface to the server
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`, module );//Encode the course's ID in the URL so the server can know what course the module belongs to.

  return response.data;
};

//retrieves assignment for a given course and sends info from backend server to user interface
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

//for assignments
//posts a new assignment from the user interface to the server
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`, assignment );//Encode the course's ID in the URL so the server can know what course the assignment belongs to.

  return response.data;
};



