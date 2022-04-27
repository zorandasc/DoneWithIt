import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      ></LottieView>
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    elevation: 100,
    position: 'absolute',
    zIndex:100,
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.light,
    opacity: 0.8

  },
});

export default ActivityIndicator;
