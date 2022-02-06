import axios from "axios";
import { backendURL } from "./index";

const instance = axios.create({
  baseURL: backendURL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (err) => {
    return err.message;
  }
);

export default instance;
