import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/v1';

const axiosClient = axios.create({
  withCredentials: true,
});

axiosClient.defaults.baseURL = BASE_URL;

export default axiosClient;
