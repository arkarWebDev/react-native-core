import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { pushNotificationsAsync } from "../utils/push-notifications-async";
import * as Notifications from "expo-notifications";

const Creation = () => {
  const pushNotification = async () => {
    const result = await pushNotificationsAsync();
    if (result === "granted") {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "I am the first notification from the Expo Go!",
        },
        trigger: {
          seconds: 5,
        },
      });
    } else {
      Alert.alert(
        "Permission Denied",
        "You need to enable notifications in the app stttings to use this feature"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={pushNotification}>
        <Text style={styles.label}>Push Notification</Text>
      </Pressable>
    </View>
  );
};

export default Creation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#000",
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
