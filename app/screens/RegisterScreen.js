import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormFIeld,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import users from "../api/users";
import useAuthContext from "../auth/useAuthContext";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(50).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const { logIn } = useAuthContext();
  const registerApi = useApi(users.register);
  const loginApi = useApi(users.login);

  const [error, setError] = useState(null);

  const handleSubmit = async (userInfo) => {
    //register to backend
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexspected error ocured fucker.");
        console.log(result);
      }
      return;
    }
    setError(null);

    //automatic login to backend
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );

    //automatic login to frontend, odnsono
    //save token and set user to context
    logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator
        visible={registerApi.loading || loginApi.loading}
      ></ActivityIndicator>
      <Screen>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={error ? error : ""}
            visible={error}
          ></ErrorMessage>
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
    </>
  );
}

const styles = StyleSheet.create({});

export default RegisterScreen;
