import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppText from "./AppText";

function Notificator({ notification, setNotification }) {
  return (
    <TouchableWithoutFeedback onPress={() => setNotification(false)}>
      <View style={styles.container}>
        <AppText style={styles.text}>
          {notification.request.content.title
            ? notification.request.content.title
            : "New Message"}
        </AppText>
        <AppText style={styles.text}>
          {notification.request.content.body}
        </AppText>
        <AppText style={styles.text}>
          {new Date(notification.date).toLocaleDateString()}
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
    width: "70%",
    backgroundColor: colors.primary,
    opacity: 0.7,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: colors.dark,
  },
});

export default Notificator;
