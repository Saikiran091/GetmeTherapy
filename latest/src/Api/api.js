import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json'
    // You can add more headers as needed, e.g., Authorization token
  }
});

export const login = (username, password) => {
  return axiosInstance.post('auth/login', {
    username,
    password,
    expiresInMins: 30 // optional, defaults to 60
  });
};

export const signup = (email, password) => {
  return axiosInstance.post('auth/signup', {
    email,
    password
  });
};


