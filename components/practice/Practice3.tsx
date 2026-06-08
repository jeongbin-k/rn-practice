import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function Practice3() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        placeholder="오늘 할일을 입력하세요."
        style={styles.input}
      />
      <Button
        onPress={() => {
          if (text.trim() === "") return;
          setTodos([...todos, text]);
          setText("");
        }}
        title="확인"
      ></Button>
      <View style={styles.listContainer}>
        {todos.map((todo, index) => (
          <Text key={index} style={styles.todoText}>
            {todo}
          </Text>
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
    marginTop: 20,
  },
  todoText: {
    fontSize: 18,
    marginVertical: 4,
  },
});
