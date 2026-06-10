// 숫자가 0부터 1초마다 올라가요
// 시작 / 정지 버튼
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Practice7() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);
  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => setIsRunning(true)} title="시작"></Button>
      <Button onPress={() => setIsRunning(false)} title="정지"></Button>
    </View>
  );
}
