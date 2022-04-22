import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Screen;
