import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timeStamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

const store = async (key, value) => {
  try {
    const item = {
      value: value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    
    if (!value) return null;
    
    const item = JSON.parse(value);

    if (isExpired(item)) {
      //MADA OVDIJE VIOLITING COMMAND QUERY SEPARATION PRICIPLE
      //NO DOBRO MOZE PROCI
      await AsyncStorage.removeItem(prefix + key); //clean cache
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
