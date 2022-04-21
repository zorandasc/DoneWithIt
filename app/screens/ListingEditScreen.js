import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormFIeld,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: " ",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFIeld
          name="title"
          maxLength={255}
          placeholder="Title"
        ></AppFormFIeld>
        <AppFormFIeld
          name="price"
          maxLength={8}
          placeholder="Price"
          keyboardType="numeric"
        ></AppFormFIeld>
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
        ></AppFormPicker>
        <AppFormFIeld
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        ></AppFormFIeld>
        <SubmitButton title="POST"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
