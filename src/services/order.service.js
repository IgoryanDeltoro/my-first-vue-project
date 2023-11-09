import axios from '../utils/axios';

export const bookApartment = data => {
  return axios.post('/orders', data);
};

export const getOrders = () => {
  return axios.get('/orders');
};

export const removeOrder = id => {
  return axios.delete(`/orders/${id}`,);
};
