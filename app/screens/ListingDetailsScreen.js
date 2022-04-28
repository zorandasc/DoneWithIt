import React from "react";
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "iso" ? 0 : 40}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: listing.images[0].url }}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Moshonja"
            subTitle="5 lIstings"
            image={require("../assets/mosh.jpg")}
          ></ListItem>
        </View>
        <ContactSellerForm listing={listing}></ContactSellerForm>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom:10
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
