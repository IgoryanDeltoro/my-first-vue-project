import axios from '../utils/axios';

export const login = payload => {
    return axios.post('users/login', payload);
  };
  
  export const register = payload => {
    return axios.post('users/register', payload);
  };
  
  export const logout = () => {
    return axios.post('users/logout');
  };