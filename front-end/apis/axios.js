import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080", // 백엔드서버 
  timeout: 10000, // 요청을 보낸뒤 응답을 기다리는 제한시간
});

export default apiClient;
