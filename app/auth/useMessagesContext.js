import { useContext } from "react";
import AuthContext from "./authContext";

//our custom context hook for hendling context stuff
export default useMessagesContext = () => {
  const { messages, setMessages } = useContext(AuthContext);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage].reverse());
  };

  const deleteMessage = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };

  return { messages, addMessage, deleteMessage };
};
