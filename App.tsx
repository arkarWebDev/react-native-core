import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const logMe = (text: string) => {
    console.log("Hello from React Native", text);
  };

  const showAlert = () => {
    Alert.alert("Hello from React Native", "Hello i am new description", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Exit",
        onPress: () => console.log("Exit Pressed"),
        style: "default",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => logMe("App")}>
        Hello React Native
      </Text>
      <Text style={styles.text} numberOfLines={3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,{" "}
      </Text>
      <Button title="My First Button" color={"#000"} />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "red" : "blue",
          },
          styles.btn,
        ]}
        onPress={showAlert}
      >
        <Text style={styles.btnText}>Show Alert</Text>
      </Pressable>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "red" }]}
        activeOpacity={0.6}
      >
        <Text style={styles.btnText}>I am touchableOpacity</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
  btn: {
    padding: 10,
  },
});
