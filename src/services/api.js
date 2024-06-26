import axios from "axios";

const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export const fetchImages = (query, page) => {
  return axios.get(`${API_URL}/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query,
      page,
      per_page: 6,
    },
  });
};

export const fetchImageDetails = (id) => {
  return axios.get(`${API_URL}/photos/${id}`, {
    params: {
      client_id: ACCESS_KEY,
    },
  });
};
