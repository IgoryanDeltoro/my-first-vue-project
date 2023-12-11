import axios from '../utils/axios';

export const getApartments = data => {
  return axios.get(`/apartments?page=${data}`);
};

export const getApartmentById = id => {
  return axios.get(`/apartments/${id}`);
};

export const getCities = () => {
  return axios.get('/cities');
};

export const addReview = (id, data) => {
  return axios.post(`/apartments/${id}/reviews`, data);
};
