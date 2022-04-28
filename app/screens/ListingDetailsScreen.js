import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/colors";
import routes from "../navigation/routes";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
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
        <AppButton
          onPress={() => navigation.navigate(routes.CONTACT_SELLER)}
          title="Contact Seller"
        ></AppButton>
      </View>
    </View>
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
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
