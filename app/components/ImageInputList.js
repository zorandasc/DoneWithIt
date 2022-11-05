import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri,i) => (
            <View key={uri+i} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)}></ImageInput>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    elevation: 20,
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
