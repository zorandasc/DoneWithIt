import React, { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./authContext";
import authStorage from "./authStorage";

//our custom context hook for hendling context stuff
//:for geting user from context,login and logout
export default useAuthContext = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
