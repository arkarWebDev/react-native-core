import React from "react";
import { Event } from "../app/stopwatch";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { format } from "date-fns";
import { theme } from "../theme";
import Feather from "@expo/vector-icons/Feather";
type EventItemProps = {
  event: Event;
  deleteEvent: (id: string) => void;
};

const EventItem = ({ event, deleteEvent }: EventItemProps) => {
  const { name, date, id } = event;

  const deleteEventHandler = () => {
    deleteEvent(id);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.date}>{format(date, "yyyy-MM-dd")}</Text>
      </View>
      <Pressable hitSlop={20} onPress={deleteEventHandler}>
        <Feather name="trash" size={26} color="red" />
      </Pressable>
    </View>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: theme.mintGray,
    borderBottomWidth: 1,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  date: {
    fontSize: 16,
    marginBottom: 6,
    color: "gray",
  },
});
