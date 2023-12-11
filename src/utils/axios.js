import axios from 'axios';
import store from '../store/index';

const axiosInstance = axios.create({
  baseURL: 'https://booking-cli.onrender.com/booking',
  // baseURL: 'http://localhost:4000/booking/',
});

axiosInstance.interceptors.request.use(
  config => {
    const { token } = store.state.auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
