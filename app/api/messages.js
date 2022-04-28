import client from "./clientApi";

const send = (message, listingId) => {
  client.post("/messages", {
    message,
    listingId,
  });
};

export default {
  send,
};
