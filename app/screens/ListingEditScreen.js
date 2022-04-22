import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormFIeld,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    name: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  {
    label: "Cars",
    value: 2,
    name: "car",
    backgroundColor: "#fd9644",
  },
  {
    label: "Cameras",
    value: 3,
    name: "camera",
    backgroundColor: "#fed330",
  },
  {
    label: "Games",
    value: 4,
    name: "cards",
    backgroundColor: "#26de81",
  },
  {
    label: "Clothing",
    value: 5,
    name: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  {
    label: "Sports",
    value: 6,
    name: "basketball",
    backgroundColor: "#45aaf2",
  },
  {
    label: "Movies & Music",
    value: 7,
    name: "headphones",
    backgroundColor: "#4b7bec",
  },
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
          width={120}
        ></AppFormFIeld>
        <AppFormPicker
          name="category"
          items={categories}
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
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
