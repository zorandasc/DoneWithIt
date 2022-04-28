import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import expoPushTokens from "../api/expoPushTokens";

export default useNotifications = (notificationHandler) => {
  const notificationListener = useRef();

  useEffect(() => {
    registerForPushNotifications();
    // This listener is fired whenever a notification is
    //received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener(notificationHandler);
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
    };
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      //generisis token notofication
      const token = (await Notifications.getExpoPushTokenAsync()).data;

      //pohrani ga na nas backend server
      expoPushTokens.register(token);
    } catch (error) {
      console.log("Error geting push token", error);
    }
  };
};
