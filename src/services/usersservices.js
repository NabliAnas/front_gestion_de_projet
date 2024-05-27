import { alexsys } from "./envirenment";
const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "multipart/form-data"
};
const getusers = async () => {
  try {
    const response = await alexsys.get('/users/',{headers});
    return response.data;
  } catch (error) {
    console.error('Error fetching users list:', error);
    throw new Error('Failed to fetch users list');
  }
}; 
const updateuser = async (iduser, id_role) => {
  try {
    console.log(id_role);
    const response = await alexsys.put(`/users/${iduser}/`,id_role,{ headers });
    return response.data;
  } catch (error) {
    console.error('Error updating user role:', error);
    throw new Error('Failed to update user');
  }
};
const deleteuser = async (clientId) => {
  try {
    console.log(5556);
    await alexsys.delete(`/users/delete/${clientId}/`,{headers});
  } catch (error) {
    console.error('Error deleting client:', error);
    throw new Error('Failed to delete user');
  }
};
const getprofile = async () => {
  try {
    const response = await alexsys.get(`/user/profile/`,{headers});
    return response.data;
  } catch (error) {
    console.error('Error getuser:', error);
    throw new Error('Failed get user');
  }
};
const updateprofile = async (userdata) => {
  try {
    const response = await alexsys.put(`/profile/`,userdata,{headers});
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw new Error('Error updating profile');
  }
};
export { getusers, updateuser, deleteuser ,getprofile,updateprofile};
