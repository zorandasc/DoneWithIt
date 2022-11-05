import apiClient from "./apiClient";

const endpoint = "/my/listings";

const getMyListings = () => apiClient.get(endpoint);

export default {
  getMyListings,
};
