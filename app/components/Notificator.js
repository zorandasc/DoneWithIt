import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppText from "./AppText";

function Notificator({ notification, setNotification }) {
  return (
    <TouchableWithoutFeedback onPress={setNotification}>
      <View style={styles.container}>
        <AppText style={styles.text}>
          Title: {notification && notification.request.content.title}
        </AppText>
        <AppText style={styles.text}>
          Body: {notification && notification.request.content.body}
        </AppText>
        <AppText style={styles.text}>
          {notification && JSON.stringify(notification.request.content.data)}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    //position: "absolute",
    zIndex: 100,
    elevation: 100,
    top: Constants.statusBarHeight + 10,
    padding: 10,
    width: "100%",
    backgroundColor: colors.primary,
    opacity: 0.7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  text: {
    color: colors.white,
  },
});

export default Notificator;
