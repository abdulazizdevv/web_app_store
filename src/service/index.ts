// services/api.ts
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('access_token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized');
    }

    return Promise.reject(error);
  }
);

export default request;
