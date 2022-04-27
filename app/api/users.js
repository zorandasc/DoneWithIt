import client from "./clientApi";

const login = (email, password) => client.post("/auth", { email, password });

const register = (userInfo) => client.post("/users", userInfo);

export default {
  login,
  register,
};
