import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/red-jacket2.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>redonja jacketonja</AppText>
        <AppText style={styles.price}>$500</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Moshonja"
            subTitle="5 lIstings"
            image={require("../assets/mosh.jpg")}
          ></ListItem>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;
