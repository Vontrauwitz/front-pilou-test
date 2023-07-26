import axios from 'axios'


export const getAllUsers = () => {
  // const res = axios.get('http://localhost:8000/api/v1/users/')
  return axios.get('http://localhost:8000/api/v1/users/')
}
