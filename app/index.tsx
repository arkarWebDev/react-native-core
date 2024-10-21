import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import List from "../components/list";
import { useState } from "react";
import { Link } from "expo-router";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      message: "Wake Up",
      isDone: false,
    },
    {
      id: 2,
      message: "Go To Work",
      isDone: true,
    },
    {
      id: 3,
      message: "Go To Code",
      isDone: false,
    },
    {
      id: 4,
      message: "Go To Sleep",
      isDone: false,
    },
  ]);

  const changeStatus = (id: number) => {
    setTodos((prevState) =>
      prevState.map((td) => (td.id === id ? { ...td, isDone: true } : td))
    );
  };

  const undoStatus = (id: number) => {
    Alert.alert("Undo Status", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          setTodos((prevState) =>
            prevState.map((td) =>
              td.id === id ? { ...td, isDone: false } : td
            )
          );
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Link href={"/stopwatch"}>Go to stopwatch app</Link>
      <View style={styles.listContainer}>
        {todos.map((td) => (
          <List
            key={td.id}
            {...td}
            changeStatus={changeStatus}
            undoStatus={undoStatus}
          />
        ))}
      </View>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
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
  titleText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  listContainer: {
    flex: 1,
    gap: 5,
    marginTop: 10,
    marginHorizontal: 10,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
  btn: {
    padding: 10,
  },
});
