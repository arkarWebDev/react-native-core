// import { Stack } from "expo-router";
// import React from "react";

// const Layout = () => {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ title: "Todo App" }} />
//       <Stack.Screen name="stopwatch" options={{ title: "Stopwatch App" }} />
//       <Stack.Screen
//         name="creation"
//         options={{
//           title: "Student App",
//           presentation: "modal",
//           animation: "slide_from_bottom",
//         }}
//       />
//     </Stack>
//   );
// };

// export default Layout;

import { Tabs } from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: "Stopwatch",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircleo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="creation"
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="addfolder" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
