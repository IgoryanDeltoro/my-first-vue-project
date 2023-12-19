import axios from '../utils/axios';

export const getApartments = data => {
  let queryString = [];

  if (data?.page) queryString.push(`page=${data.page}`);
  if (data?.limit) queryString.push(`limit=${data.limit}`);
  if (data?.city) queryString.push(`city=${data.city}`);
  if (data?.price) queryString.push(`price=${data.price}`);
  if (data?.rating) queryString.push(`rating=${data.rating}`);

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
