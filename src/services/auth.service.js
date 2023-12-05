import axios from '../utils/axios';

export const login = data => {
  return axios.post('users/login', data);
};

export const register = data => {
  return axios.post('users/register', data);
};

export const logout = () => {
  return axios.post('users/logout');
};

export const updateUserProfile = data => {
  return axios.patch('users/avatars', data);
};
