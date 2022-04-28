import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/elements";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";
import colors from "../config/colors";
import ContactSellerForm from "../screens/ContactSellerScreen";

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
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: colors.light,
          },
          headerLeft: (props) => (
            <HeaderBackButton {...props} tintColor={colors.primary} />
          ),
        })}
      ></Stack.Screen>
      <Stack.Screen
        name={routes.CONTACT_SELLER}
        component={ContactSellerForm}
        options={{ headerShown: true, title: "" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default FeedNavigator;
