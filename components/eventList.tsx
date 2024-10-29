import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Event } from "../app/stopwatch";
import EventItem from "./eventItem";

type EventListProps = {
  events: Event[];
  deleteEvent: (id: string) => void;
};
const EventList = ({ events, deleteEvent }: EventListProps) => {
  const sortedEvents = events.sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event list</Text>
      <FlatList
        data={sortedEvents}
        renderItem={({ item }) => (
          <EventItem event={item} deleteEvent={deleteEvent} />
        )}
      />
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
