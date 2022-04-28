import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import colors from "../config/colors";

import { AppForm, AppFormFIeld, SubmitButton } from "./forms";

const validationSchema = Yup.object().shape({
  message: Yup.string().label("Message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    console.log(message);
  };
  return (
    <AppForm
      initialValues={{
        message: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormFIeld
        name="message"
        placeholder="Message"
        maxLength={255}
        multiline
        numberOfLines={1}
      ></AppFormFIeld>
      <SubmitButton title="Send"></SubmitButton>
    </AppForm>
  );
}

const styles = StyleSheet.create({});

export default ContactSellerForm;
