import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import colors from "../config/colors";

import { AppForm, AppFormFIeld, SubmitButton } from "../components/forms";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  description: Yup.string().label("Description"),
});

function ContactSellerScreen({ navigation }) {
  const handleSubmit = () => {
    console.log("contact");
  };
  return (
    <Screen>
      <AppForm
        initialValues={{
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormFIeld
          name="description"
          placeholder="Message"
          maxLength={255}
          multiline
          numberOfLines={4}
        ></AppFormFIeld>
        <SubmitButton title="Send"></SubmitButton>
        <AppButton
          onPress={() => navigation.goBack()}
          title="Dismiss"
          color="secondary"
        ></AppButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ContactSellerScreen;
