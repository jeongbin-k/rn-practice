// TextInput으로 메모 입력
// 확인 버튼 누르면 목록에 추가
// 목록은 FlatList로 렌더링
// 각 메모 옆에 삭제 버튼 눌르면 그 메모 삭제
import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

export default function Practice6() {
  const [text, setText] = useState("");
  const [lists, setlists] = useState<string[]>([]);

  // 삭제 함수
  const deleteMemo = (index: number) => {
    const deleteI = lists.filter((_, i) => i !== index);
    setlists(deleteI);
    // setlists(lists.filter((_, i) => i !== index));
  };

  return (
    <View>
      <TextInput
        value={text}
        placeholder="메모장 입력"
        onChangeText={(value) => setText(value)}
      />
      <Button
        onPress={() => {
          if (text.trim() === "") return;
          setlists([...lists, text]);
          setText("");
        }}
        title="확인"
      ></Button>
      <View>
        <FlatList
          data={lists}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View>
              <Text>{item}</Text>
              <Button title="삭제" onPress={() => deleteMemo(index)} />
            </View>
          )}
        />
      </View>
    </View>
  );
}
