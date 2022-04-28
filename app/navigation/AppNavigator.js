import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import Notificator from "../components/Notificator";
import useNotification from "../hooks/useNotification";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const [notification, setNotification] = useState(false);

  useNotification((notification) => {
    setNotification(notification);
  });

  return (
    <>
      {notification && (
        <Notificator
          notification={notification}
          setNotification={() => setNotification(false)}
        ></Notificator>
      )}
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="DoneWithIt"
          component={FeedNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              ></MaterialCommunityIcons>
            ),
          }}
        />
        <Tab.Screen
          name={routes.LISTING_EDIT}
          component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewListingButton
                onPress={() => navigation.navigate("ListingEdit")}
              ></NewListingButton>
            ),
          })}
        />
        <Tab.Screen
          name={routes.ACCOUNTS}
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              ></MaterialCommunityIcons>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default AppNavigator;
