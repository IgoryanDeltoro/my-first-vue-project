import axios from '../utils/axios';

export const getApartments = () => {
  return axios.get('/apartments');
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
