import client from "./clientApi";

//saljemo token na nas backend
const register = (pushToken) => {
  //ovako smo dovinisal nas api na node.je backendu
  client.post("/expoPushTokens", { token: pushToken });
};

export default {
  register,
};
