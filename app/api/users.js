import apiClient from "./apiClient";

const endpoint = "/users";

const register = (userInfo) => apiClient.post(endpoint, userInfo);

const getUsers = () => apiClient.get(endpoint);

const deleteUser = () => {};

export default { register };
