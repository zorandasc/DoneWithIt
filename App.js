import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <OfflineNotice></OfflineNotice>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </>
  );
}
