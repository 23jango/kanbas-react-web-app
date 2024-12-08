import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

//Pass it the module to be update. Encode the ID of the module in a URL, and sent the module updates in the body of an HTTP PUT request to the server.
export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return data;
};


export const deleteModule = async (moduleId: string) => {//Pass it the ID of the module to be removed, encode it in a URL,
 const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
 return response.data;// sent it as an HTTP DELETE to the server.
};
