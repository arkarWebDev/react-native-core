import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Event } from "../app/stopwatch";

type CountDownTimerProps = {
  event: Event;
};

const CountDownTimer = ({ event }: CountDownTimerProps) => {
  const { name, date: eventDate } = event;
  const [daysRemaining, setDaysRemaining] = useState<number>(0);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const now = new Date();
      const differnece = eventDate.getTime() - now.getTime();
      const days = Math.ceil(differnece / (1000 * 60 * 60 * 24));
      setDaysRemaining(days);
    };

    calculateDaysRemaining();

    const interval = setInterval(calculateDaysRemaining, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <View style={styles.container}>
      <Text style={styles.descriptionMuted}>Upcomming nearest event</Text>
      <Text style={styles.bigTitle}>{name}</Text>
      <Text style={styles.description}>
        {daysRemaining >= 0
          ? daysRemaining + " Days Remaining"
          : "Event is over"}
      </Text>
    </View>
  );
};

export default CountDownTimer;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  bigTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    marginVertical: 2,
  },
  descriptionMuted: {
    fontSize: 14,
    marginVertical: 2,
    color: "gray",
  },
});
