import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";

type ListProps = {
  id: string;
  message: string;
  isDone: boolean;
  changeStatus: (id: string) => void;
  undoStatus: (id: string) => void;
};

const List = ({ id, message, isDone, changeStatus, undoStatus }: ListProps) => {
  return (
    <View
      style={[
        styles.container,
        isDone ? { backgroundColor: theme.mintGray } : undefined,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isDone ? "gray" : undefined,
            textDecorationLine: isDone ? "line-through" : undefined,
          },
        ]}
      >
        {message}
      </Text>
      {isDone ? (
        <AntDesign
          name="check"
          size={24}
          color="black"
          style={{ opacity: 0.5 }}
          onPress={() => undoStatus(id)}
        />
      ) : (
        <AntDesign
          name="close"
          size={24}
          color="green"
          onPress={() => changeStatus(id)}
        />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: theme.mintGray,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 6,
  },
});
