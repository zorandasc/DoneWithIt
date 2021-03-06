import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors: colors,
  text: {
    fontSize: 18,
    color: colors.dark,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
};
