import axios from '../utils/axios';

export const getApartments = data => {
  let queryString = [];

  for (let query in data) {
    if (data[query]) queryString.push(`${query}=${data[query]}`);
  }
  const params = queryString.reduce(
    (acc, el, idx) => (idx === 0 ? acc + `?${el}` : acc + `&${el}`),
    ''
  );

  return axios.get(`/apartments${params}`);
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
