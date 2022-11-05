import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import categoryApi from "../api/categories";
import listingsApi from "../api/listings";
import useApiWrapper from "../hooks/useApiWrapper";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const getCategoriesApi = useApiWrapper(categoryApi.getCategories);

  useEffect(() => {
    getCategoriesApi.request();
  }, []);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      ></UploadScreen>
      <ScrollView>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images"></FormImagePicker>
          <AppFormField
            name="title"
            placeholder="Title"
            maxLength={255}
          ></AppFormField>
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            width={120}
          ></AppFormField>
          <AppFormPicker
            name="category"
            placeholder="Category"
            items={getCategoriesApi.data}
            width="50%"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
          ></AppFormPicker>
          <AppFormField
            name="description"
            placeholder="Description"
            multiline
            maxLength={255}
            numberOfLines={3}
          ></AppFormField>
          <SubmitButton title="Post"></SubmitButton>
        </AppForm>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    paddingBottom: 0,
    paddingTop: 5,
  },
});

export default ListingEditScreen;
