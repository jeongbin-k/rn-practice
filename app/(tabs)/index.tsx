import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function Index() {
  const [text, setText] = useState("");
  const [submitted, setSubmmited] = useState("");

  return (
    <View style={styles.container}>
      {/* TextInput으로 입력받고 */}
      {/* 버튼 누르면 submitted에 저장해서 보여줘요 */}
      <TextInput
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        placeholder="텍스틀 입력해주세요."
      />
      <Button
        title="제출"
        onPress={() => {
          setSubmmited(text);
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
  count: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
