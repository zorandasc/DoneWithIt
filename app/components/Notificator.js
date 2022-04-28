import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppText from "./AppText";

function Notificator({ notification, setNotification }) {
  //AKO IM TITLE ONDA JE LOKALNI NOTIFICATION
  //AKO NEMA ONDA JE REMOTE I TITLEW JE NEW MESSAGAE
  return (
    <TouchableWithoutFeedback onPress={setNotification}>
      {notification.request.content.title ? (
        <View style={styles.container}>
          <AppText style={styles.text}>
            {notification.request.content.title}
          </AppText>
          <AppText style={styles.text}>
            {notification.request.content.body}
          </AppText>
          <AppText style={styles.text}>
            {notification.request.content.data.data}
          </AppText>
        </View>
      ) : (
        <View style={styles.container}>
          <AppText style={styles.text}>New Message:</AppText>
          <AppText style={styles.text}>
            {notification.request.content.body}
          </AppText>
          <AppText style={styles.text}>
            {new Date().toLocaleDateString()}
          </AppText>
        </View>
      )}
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
    color: colors.dark,
  },
});

export default Notificator;
