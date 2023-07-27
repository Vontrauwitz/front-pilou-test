import axios from 'axios'

const pyApi = axios.create({
  baseURL: 'http://localhost:8000/api/v1/users/',
});

export const getAllUsers = () => {
  // const res = axios.get('http://localhost:8000/api/v1/users/')
  // return axios.get('http://localhost:8000/api/v1/users/')
  return pyApi.get('/');
}

export const createUser = (user) => {
  return pyApi.post('/', user);
}
