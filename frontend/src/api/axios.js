import axios from "axios";
import { refreshAccessToken } from "../services/authService";

const BASE_URL = "http://localhost:5001/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // ✅ cookie পাঠানোর জন্য
});

// Axios interceptor → auto-refresh access token
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshAccessToken();
        return api.request(originalRequest);
      } catch {
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);

export default api;
