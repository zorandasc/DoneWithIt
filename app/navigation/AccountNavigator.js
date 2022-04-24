import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreeen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name={routes.MESSAGES}
        component={MessagesScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AccountNavigator;
