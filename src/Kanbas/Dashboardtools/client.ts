import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;


//Pass it the enrolled course to be update. Encode the ID of the module in a URL, and sent the module updates in the body of an HTTP PUT request to the server.
export const updateEnrollment = async (course: any) => {
  const { data } = await axios.put(`${ENROLLMENTS_API}/${course._id}`, course);
  return data;
};


export const unEnroll = async (courseId: string) => {//Pass it the ID of the module to be removed, encode it in a URL,
 const response = await axios.delete(`${ENROLLMENTS_API}/${courseId}`);
 return response.data;// sent it as an HTTP DELETE to the server.
};

//gets all enrollments for a user
export const getEnrollmentsForUser = async (userId: any) => {
  try {
    const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return data; // Return the list of enrollments
  } catch (error) {
    console.error("Error fetching enrollments for user:", error);
    throw error;
  }
};

// export function getEnrollmentsForUser(_id: any) {
//   const { enrollments } = Database;
//   return enrollments.filter((enrollment) => enrollment.user === userId);
// }
export const createEnrollment = async (course: any) => {
  const { data } = await axios.post(ENROLLMENTS_API, course);
  return data;
};
