import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import expoPushTokens from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default useNotifications = (notificationHandler) => {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotifications();
    // This listener is fired whenever a notification is
    //received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener(notificationHandler);

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
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

//for local push notification
export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Awesome 📬",
      body: "Your message was sent to selller",
      data: { data: new Date().toLocaleDateString() },
    },
    trigger: { seconds: 1 },
  });
}
