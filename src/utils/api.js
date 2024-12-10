// app/utils/api.js

import axios from "axios";
import { getToken } from "./auth";

const API_URL = "https://apspcl.ap.gov.in/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api.post("/auth/register", { name, email, password });
  return response.data;
};

export default api;
