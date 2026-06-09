import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Todo = {
  text: string;
  done: boolean;
};
export default function Practice5() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // 토글 함수 추가 (체크/언체크)
  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        style={styles.input}
      />
      <Button
        onPress={() => {
          const dummy = Array.from({ length: 100 }, (_, i) => ({
            text: `할일 ${i + 1}`,
            done: false,
          }));
          setTodos([...todos, ...dummy]);
        }}
        title="확인"
      ></Button>
      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => toggleTodo(index)}
              style={styles.todoItem}
            >
              <View
                style={[styles.checkbox, item.done && styles.checkboxDone]}
              />
              <Text style={styles.todoText}>{item.text}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  listContainer: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
  },
  todoText: {
    fontSize: 18,
    marginVertical: 4,
    color: "#fff",
  },
  todoItem: {
    width: 200,
    flexDirection: "row", // 체크박스 + 텍스트 가로 배치
    alignItems: "center",
    marginVertical: 4,
    gap: 8,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#fff",
  },
  checkboxDone: {
    backgroundColor: "#89e3b1", // 체크되면 채워짐
  },
});
