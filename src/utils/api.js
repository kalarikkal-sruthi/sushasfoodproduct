import axios from "axios";

const imgURL = "https://ms.myfezto.com/uploads/";

const videoURL = "https://ms.myfezto.com/uploads/banner-video/";
const whatinfarmsURL = "https://ms.myfezto.com/uploads/what_in_farm/";
export const whatinfarmsGalleryURL = "https://ms.myfezto.com/uploads/what_in_farm/gallery/";
export const imgURLTestimonial = "https://ms.myfezto.com/uploads/testimonial/";
export const imgURLCertificate = "https://ms.myfezto.com/uploads/certificates/";
export const imgURLVideo = "https://ms.myfezto.com/uploads/video/";
export const productURL = "https://ms.myfezto.com/uploads/products/";
export const aboutURL = "https://ms.myfezto.com/uploads/about-us-images/";
export const categoryUrl = "https://ms.myfezto.com/uploads/categories/";

export const imgURLMostHarvest ="https://ms.myfezto.com/uploads/what_in_farm/"

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

export { api, imgURL, videoURL, whatinfarmsURL };
