// 1~100 사이 랜덤 숫자를 컴퓨터가 정해요
// 내가 숫자를 입력하고 확인 버튼 누르면
// "너무 높아요" / "너무 낮아요" / "정답!" 힌트를 줘요
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Practice8() {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const confirm = () => {
    if (Number(text) > answer) {
      setMessage("너무 높아요");
      setText("");
    } else if (Number(text) < answer) {
      setMessage("너무 낮아요");
      setText("");
    } else {
      setMessage("정답!!");
    }
  };

  return (
    <View>
      <TextInput
        value={text.toString()}
        onChangeText={(value) => setText(value)}
        placeholder="숫자를 입력하세요"
        keyboardType="numeric"
      />
      <Button onPress={confirm} title="확인"></Button>
      <Text>{message}</Text>
    </View>
  );
}
