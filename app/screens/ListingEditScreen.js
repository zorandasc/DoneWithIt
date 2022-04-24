import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormFIeld,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image.?"),
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

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Coud not save new linsting");
    }

    resetForm()
  };

  return (
    <Screen>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      ></UploadScreen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: " ",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images"></AppFormImagePicker>
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
