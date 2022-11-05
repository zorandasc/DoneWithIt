import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import useApiWrapper from "../hooks/useApiWrapper";
import messagesApi from "../api/messages";
import getImage from "../utility/getImage";

const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const getMessagesApi = useApiWrapper(messagesApi.getMessages);

  useEffect(() => {
    getMessagesApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getMessagesApi.loading}></ActivityIndicator>
      <Screen>
        <FlatList
          data={getMessagesApi.data}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => {
            //console.log(item.fromUser.id);
            return (
              <ListItem
                title={`${item.fromUser.name}-${new Date(
                  item.dateTime
                ).toDateString()}`}
                subTitle={item.content}
                image={getImage(item.fromUser.id)}
                onPress={() => console.log("Messages selected", item)}
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}
              ></ListItem>
            );
          }}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => getMessagesApi.request()}
        ></FlatList>
      </Screen>
    </>
  );
};

export default MessagesScreen;
