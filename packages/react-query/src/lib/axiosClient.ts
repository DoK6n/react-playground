import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const axiosClient = axios.create({
  withCredentials: true,
});

axiosClient.defaults.baseURL = BASE_URL;

export default axiosClient;
