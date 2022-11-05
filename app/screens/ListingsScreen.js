import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApiWrapper from "../hooks/useApiWrapper";

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApiWrapper(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading}></ActivityIndicator>
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Could not retrieve the listings.</AppText>
            <AppButton
              title="Retray"
              onPress={getListingsApi.request}
            ></AppButton>
          </>
        )}

        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            ></Card>
          )}
        ></FlatList>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    paddingBottom:0,
    paddingTop:5,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
