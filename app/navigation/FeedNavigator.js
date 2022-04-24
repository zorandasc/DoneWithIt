import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name={routes.LISTINGS}
        component={ListingsScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
        options={{ title: "All items" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default FeedNavigator;
