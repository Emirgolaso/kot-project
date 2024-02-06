import axios from 'axios';

const REACT_APP_SERVER_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsersApi = async () => {
  const response = await axios.get(REACT_APP_SERVER_URL);
  return response.data;
};

export const addNewStudentApi = async (newStudent) => {
  const response = await axios.post(REACT_APP_SERVER_URL, newStudent);
  return response.data;
};
