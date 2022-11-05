import apiClient from "./apiClient";

const endpoint = "/user";

const getUser = (id) => apiClient.get(endpoint + "/" + id);

export default { getUser };
