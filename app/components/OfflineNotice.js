import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import AppText from "./AppText";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  //netInfo.isInternetReachable === false
  //EXPLICITNO OVDIJ POREDIMO SA FALSE, JER AOKO JE
  //netInfo.isInternetReachable=NULL !netInfo.isInternetReachable BI BILO TRUE
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet conection</AppText>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    elevation: Platform.OS === "android" ? 1 : 0,
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    height: 50,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
