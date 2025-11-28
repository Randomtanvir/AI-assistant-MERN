import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // ✅ cookie পাঠানোর জন্য
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    // Skip refresh route to prevent loop
    if (originalRequest.url.includes("/auth/refresh")) {
      return Promise.reject(err);
    }

    // Access token expired
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        localStorage.removeItem("token");
        // window.location.href = "/login";
        return Promise.reject(err);
      }

      try {
        const res = await api.post("/auth/refresh", null, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        localStorage.setItem("token", res.data.newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${res.data.newAccessToken}`;
        return api(originalRequest);
      } catch {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
