import axios from "axios";

const imgURL = "https://ms.myfezto.com/uploads/products/";
const videoURL = "https://ms.myfezto.com/uploads/banner-video/";
const api = axios.create({
  baseURL: "https://ms.myfezto.com/api",

  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api, imgURL, videoURL };
