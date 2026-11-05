import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080", // 백엔드서버 
  timeout: 10000,
});

export default apiClient;
