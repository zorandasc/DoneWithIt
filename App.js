import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/authContext";
import authStorage from "./app/auth/authStorage";

export default function App() {
  const [user, setUser] = useState();
  //for handling the flickering of scren on reload
  const [isReady, setIsReady] = useState(false);

  //ako rebootujemo applikaciju da se autotamski
  //korisnik ostane logovan
  const restoreUser = async () => {
    const user = await authStorage.getUserFromStore();
    if (user) setUser(user);
  };

  /*
  useEffect(() => {
    restoreToken();
  }, []);
  */
  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      ></AppLoading>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice></OfflineNotice>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator></AppNavigator> : <AuthNavigator></AuthNavigator>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
