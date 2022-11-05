import apiClient from "./apiClient";

const endpoint = "/categories";

const getCategories = () => apiClient.get(endpoint);

export default {
  getCategories,
};
