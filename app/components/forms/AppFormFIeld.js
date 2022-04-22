import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormFIeld({ name, width, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
      ></AppTextInput>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}

export default AppFormFIeld;
