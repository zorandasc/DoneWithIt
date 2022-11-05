import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.100.6:9000/api",
  },
  staging: {
    apiUrl: "https://donewithit.onrender.com/api",
  },
  prod: {
    apiUrl: "https://donewithit.onrender.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
