import axios from "axios";

const imgURL = "https://admin.sushasfoodproducts.com/uploads/";

const videoURL = "https://admin.sushasfoodproducts.com/uploads/banner-video/";
const whatinfarmsURL = "https://admin.sushasfoodproducts.com/uploads/what_in_farm/";
export const whatinfarmsGalleryURL = "https://admin.sushasfoodproducts.com/uploads/what_in_farm/gallery/";
export const imgURLTestimonial = "https://admin.sushasfoodproducts.com/uploads/testimonial/";
export const imgURLCertificate = "https://admin.sushasfoodproducts.com/uploads/certificates/";
export const imgURLVideo = "https://admin.sushasfoodproducts.com/uploads/video/";
export const productURL = "https://admin.sushasfoodproducts.com/uploads/products/";
export const aboutURL = "https://admin.sushasfoodproducts.com/about-us-images/";
export const categoryUrl = "https://admin.sushasfoodproducts.com/uploads/categories/";

export const imgURLMostHarvest ="https://admin.sushasfoodproducts.com/uploads/what_in_farm/"

const api = axios.create({
  baseURL: "https://admin.sushasfoodproducts.com/api",

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
