import client from "./clientApi";

const send = (message, listingId) => {
  return client.post("/messages", {
    message,
    listingId,
  });
};

export default {
  send,
};
