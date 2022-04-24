import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import AccountScreeen from "./app/screens/AccountScreeen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  );
}
