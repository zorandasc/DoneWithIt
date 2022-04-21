import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormFIeld, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(50).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: " ", password: " " }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFIeld
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account-circle"
          placeholder="name"
          textContentType="name"
        ></AppFormFIeld>
        <AppFormFIeld
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="email"
          textContentType="emailAddress"
        ></AppFormFIeld>
        <AppFormFIeld
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        ></AppFormFIeld>
        <SubmitButton title="Register"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default RegisterScreen;
