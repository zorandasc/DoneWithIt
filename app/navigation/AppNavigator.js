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
import useMessagesContext from "../auth/useMessagesContext";

const Tab = createBottomTabNavigator();

const convertNotifToMessage = (notification) => {
  //pohrani samo puhs notifikacije
  if (notification && notification.request.trigger.type === "push") {
    return {
      title: notification.request.trigger.remoteMessage.from,
      description: notification.request.content.body,
      image: require("../assets/mosh.jpg"),
    };
  }
  return null;
};

function AppNavigator() {
  //nas custom message hook context
  const { messages, addMessage } = useMessagesContext();
  const [notification, setNotification] = useState(false);

  //nas custom notification hook
  useNotification((notification) => {
    setNotification(notification); //prikazi notifikaciju

    const newMessage = convertNotifToMessage(notification);

    newMessage && addMessage({ id: messages.length + 1, ...newMessage }); //add to message quee
  });

  return (
    <>
      {notification && (
        <Notificator
          notification={notification}
          setNotification={setNotification}
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
