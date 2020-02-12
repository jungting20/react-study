import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://external-api-server.com/';

client.defaults.headers.common.Authorization = 'Bearer a1b2c3d4';

axios.interceptors.response.use(
  response => {
    // 요청 성공 시 특정 작업 수행
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default client;
