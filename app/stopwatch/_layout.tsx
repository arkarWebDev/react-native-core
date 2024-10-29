import { Link, Stack } from "expo-router";
import React from "react";

import Octicons from "@expo/vector-icons/Octicons";
import { Pressable } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Event Countdown App",
          headerRight: () => (
            <Link href="/stopwatch/record" asChild>
              <Pressable hitSlop={20}>
                <Octicons name="history" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="record" options={{ title: "Records" }} />
    </Stack>
  );
};

export default Layout;
