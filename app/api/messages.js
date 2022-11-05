import apiClient from "./apiClient";

const endpoint = "/messages";

const getMessages = () => apiClient.get(endpoint);

const sendMessage = (message, listingId) =>
  apiClient.post(endpoint, {
    message,
    listingId,
  });

export default {
  getMessages,
  sendMessage,
};
