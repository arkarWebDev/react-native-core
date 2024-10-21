import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Records = () => {
  return (
    <View style={styles.container}>
      <Text>Records</Text>
    </View>
  );
};

export default Records;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
