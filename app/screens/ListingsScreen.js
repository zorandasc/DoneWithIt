import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Red jacket",
    price: 100,
    image: require("../assets/red-jacket2.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    price: 500,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          ></Card>
        )}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default ListingsScreen;
