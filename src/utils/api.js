import axios from "axios";

const imgURL = "http://134.209.158.7:8080/uploads/";

const videoURL = "http://134.209.158.7:8080/uploads/banner-video/";
const whatinfarmsURL = "http://134.209.158.7:8080/uploads/what_in_farm/";
export const whatinfarmsGalleryURL = "http://134.209.158.7:8080/uploads/what_in_farm/gallery/";
export const imgURLTestimonial = "http://134.209.158.7:8080/uploads/testimonial/";
export const imgURLCertificate = "http://134.209.158.7:8080/uploads/certificates/";
export const imgURLVideo = "http://134.209.158.7:8080/uploads/video/";
export const productURL = "http://134.209.158.7:8080/uploads/products/";
export const aboutURL = "http://134.209.158.7:8080/uploads/about-us-images/";
export const categoryUrl = "http://134.209.158.7:8080/uploads/categories/";

export const imgURLMostHarvest ="http://134.209.158.7:8080/uploads/what_in_farm/"

const api = axios.create({
  baseURL: "http://134.209.158.7:8080/api",

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
