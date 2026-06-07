import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function Index() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        placeholder="오늘 할일을 입력해주세요."
      />
      <Button
        title="제출"
        onPress={() => {
          setSubmitted(text);
        }}
      ></Button>
      <Text>{submitted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
