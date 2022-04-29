import React from "react";
import { StyleSheet, Keyboard, Alert } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormFIeld, SubmitButton } from "./forms";
import messagesApi from "../api/messages";
import { schedulePushNotification } from "../hooks/useNotification";

const validationSchema = Yup.object().shape({
  message: Yup.string().label("Message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    //poslace na nas node.js na kome postiji api "/messages"
    //u okviru koje se putem exponotification-sdk, instaliranog
    //na node.je salje poruka expo serveru, a on gas salje notification
    //useru, ako korisnik salje samom sebi dobive dve notifeik
    //jednu lokalnu i jednu remote
    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send fuckin message");
    }

    //show local notificaton for sender sending messess
    await schedulePushNotification("Awesome", "Your message was sent to selller");

    resetForm();
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
        numberOfLines={3}
      ></AppFormFIeld>
      <SubmitButton title="Send"></SubmitButton>
    </AppForm>
  );
}

const styles = StyleSheet.create({});

export default ContactSellerForm;
