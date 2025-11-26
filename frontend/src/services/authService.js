import api from "../api/axios";

// Register
export const registerUser = async (userData) => {
  const res = await api.post("/auth/register", userData);
  localStorage.setItem("refreshToken", res.data.refreshToken);
  return res.data;
};

// Login
export const loginUser = async (userData) => {
  const res = await api.post("/auth/login", userData);
  localStorage.setItem("refreshToken", res.data.refreshToken);
  return res.data;
};

// Logout
export const logoutUser = async () => {
  await api.get("/auth/logout");
  localStorage.removeItem("refreshToken");
};

// Get Profile (Protected)
export const getChecker = async () => {
  const res = await api.get("/auth/checker");
  return res.data;
};

// Refresh Access Token
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const res = await api.get("/auth/refresh", {
    headers: { Authorization: `Bearer ${refreshToken}` },
  });
  return res.data;
};
