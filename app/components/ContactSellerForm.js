import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import colors from "../config/colors";

import { AppForm, AppFormFIeld, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  description: Yup.string().label("Description"),
});

function ContactSellerForm(props) {
  const handleSubmit = () => {
    console.log("contact");
  };
  return (
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
        numberOfLines={2}
      ></AppFormFIeld>
      <SubmitButton title="CONTACT SELLER"></SubmitButton>
    </AppForm>
  );
}

const styles = StyleSheet.create({});

export default ContactSellerForm;
