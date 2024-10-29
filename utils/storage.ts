import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {
    return null;
  }
};

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return null;
  }
};
