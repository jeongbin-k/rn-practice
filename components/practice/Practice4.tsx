import { useState } from "react";
import {
  Button,
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
export default function Pratice4() {
  const [text, setText] = useState("");
  // todos 구조를 string[] → 객체 배열로 변경
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
        style={styles.input}
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        placeholder="할 일을 입력해주세요."
      />
      <Button
        onPress={() => {
          if (text.trim() === "") return;
          setTodos([...todos, { text: text, done: false }]);
          setText("");
        }}
        title="확인"
      ></Button>
      <View style={styles.listContainer}>
        {todos.map((todo, index) => (
          <Pressable
            key={index}
            onPress={() => toggleTodo(index)}
            style={styles.todoItem}
          >
            <View style={[styles.checkbox, todo.done && styles.checkboxDone]} />
            <Text style={styles.todoText}>{todo.text}</Text>
          </Pressable>
        ))}
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
    flexDirection: "row", // 체크박스 + 텍스트 가로 배치
    alignItems: "center",
    marginVertical: 4,
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#fff",
  },
  checkboxDone: {
    backgroundColor: "#88ddab", // 체크되면 채워짐
  },
});
