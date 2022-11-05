import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContex from "./context";
import authStorage from "./storage";

//conect global context and secure stirage
//lokalni login/logout and token storage/remove
export default useAuthContext = () => {
  const { user, setUser } = useContext(AuthContex);

  const logIn = (authToken) => {
    //od api dobijemo token
    const user = jwtDecode(authToken);
    //stoujemo user u context
    setUser(user);
    //storujemo token u securestore
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    //obrisemo usera iz contexta
    setUser(null);
    //obrisemo token iz ssecure storaga
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
