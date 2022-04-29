import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";
import useMessagesContext from "../auth/useMessagesContext";

function MessagesScreen(props) {
  const { messages, deleteMessage, addMessage } = useMessagesContext();
  const [refreshing, setRefreshing] = useState(false);

  /*
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };
*/
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Item presica", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => deleteMessage(item)}
              ></ListItemDeleteAction>
            )}
          ></ListItem>
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          addMessage({
            id: messages.length + 1,
            title: "T3",
            description: "D3",
            image: require("../assets/mosh.jpg"),
          });
        }}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
