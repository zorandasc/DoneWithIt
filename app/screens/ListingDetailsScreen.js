import React, { useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import getImage from "../utility/getImage";
import useApiWrapper from "../hooks/useApiWrapper";
import userApi from "../api/user";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  const getUserApi = useApiWrapper(userApi.getUser);

  useEffect(() => {
    getUserApi.request(listing.userId);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "iso" ? 0 : 120}
      style={styles.container}
    >
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={getImage(listing.userId)}
            title={getUserApi.data.name}
            subTitle={getUserApi.data.listings + " listings"}
          ></ListItem>
        </View>
        <ContactSellerForm listing={listing}></ContactSellerForm>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 1,
  },
});

export default ListingDetailsScreen;
