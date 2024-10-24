import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import List from "../components/list";
import { useEffect, useState } from "react";
import { theme } from "../theme";
import { getData, storeData } from "../utils/storage";
import * as Haptics from "expo-haptics";

type TodoListType = {
  id: string;
  message: string;
  isDone: boolean;
};

// const staticTodos: TodoListType[] = [
//   {
//     id: "1",
//     message: "hello world",
//     isDone: false,
//   },
//   {
//     id: "2",
//     message: "hello react native",
//     isDone: false,
//   },
// ];

// const tempoArray: TodoListType[] = new Array(500)
//   .fill(null)
//   .map((item, index) => {
//     return {
//       id: String(index + 1),
//       message: String(index + 1),
//       isDone: false,
//     };
//   });

const KEY = "todo-app";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  const [inputVal, setInputVal] = useState<string>("");
  const [todos, setTodos] = useState<TodoListType[]>([]);

  const changeStatus = async (id: string) => {
    const updatedTodos = todos.map((td) =>
      td.id === id ? { ...td, isDone: true } : td
    );
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setTodos(updatedTodos);
    await storeData(updatedTodos);
  };

  const undoStatus = (id: string) => {
    Alert.alert("Undo Status", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: async () => {
          const updatedTodos = todos.map((td) =>
            td.id === id ? { ...td, isDone: false } : td
          );
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          setTodos(updatedTodos);
          await storeData(updatedTodos);
        },
      },
    ]);
  };

  const addNewTodo = async () => {
    const newTodos = [
      ...todos,
      { id: String(todos.length + 1), message: inputVal, isDone: false },
    ];
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTodos(newTodos);
    await storeData(newTodos);
    setInputVal("");
  };

  const deleteAllTodos = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setTodos([]);
    await storeData([]);
  };

  useEffect(() => {
    const getTodoData = async () => {
      const todoData = await getData(KEY);
      setTodos(todoData);
    };

    getTodoData();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 10,
          backgroundColor: "white",
        }}
      >
        <TextInput
          placeholder="time to do something..."
          onChangeText={setInputVal}
          onSubmitEditing={addNewTodo}
          style={styles.inputBox}
          value={inputVal}
        />
      </View>
      <View style={styles.listContainer}>
        {/* {todos.map((td) => (
          <List
            key={td.id}
            {...td}
            changeStatus={changeStatus}
            undoStatus={undoStatus}
          />
        ))} */}
        <FlatList
          ListEmptyComponent={
            <View>
              <Text style={styles.text}>No todo for now.</Text>
            </View>
          }
          data={todos}
          renderItem={({ item }) => {
            return (
              <List
                changeStatus={changeStatus}
                undoStatus={undoStatus}
                {...item}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <>
              {todos?.length !== 0 && (
                <Pressable
                  style={styles.dangerContainer}
                  onPress={deleteAllTodos}
                >
                  <Text style={styles.textDanger}>Delete all</Text>
                </Pressable>
              )}
            </>
          }
        />
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
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  titleText: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  inputBox: {
    borderColor: theme.mintGray,
    borderWidth: 2,
    borderRadius: 8,
    padding: 6,
    marginVertical: 2,
    width: "100%",
  },
  dangerContainer: {
    backgroundColor: "red",
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 8,
    width: "100%",
  },
  textDanger: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
