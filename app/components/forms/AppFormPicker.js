import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

function AppFormPicker({
  items,
  name,
  placeholder,
  numberOfColumns,
  PickerItemComponent,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        width={width}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}

export default AppFormPicker;
