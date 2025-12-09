import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  timeout: 20000, // 20 seconds instead of 5 due to free hosting
  withCredentials: true,
});

export default axiosInstance;
