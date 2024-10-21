import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Creation = () => {
  return (
    <View style={styles.container}>
      <Text>Creation</Text>
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
});
