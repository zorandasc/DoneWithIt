import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import myListingsApi from "../api/my";
import useApiWrapper from "../hooks/useApiWrapper";

function MyListings({ navigation }) {
  const getMyListingsApi = useApiWrapper(myListingsApi.getMyListings);

  useEffect(() => {
    getMyListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getMyListingsApi.loading}></ActivityIndicator>
      <Screen style={styles.screen}>
        {getMyListingsApi.error && (
          <>
            <AppText>Could not retrieve the listings.</AppText>
            <AppButton
              title="Retray"
              onPress={getMyListingsApi.request}
            ></AppButton>
          </>
        )}

        <FlatList
          data={getMyListingsApi.data}
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
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    paddingBottom: 0,
    paddingTop: 5,
    backgroundColor: colors.light,
  },
});

export default MyListings;
