import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Practice9() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  // 공통 계산 함수
  const calculate = (operator: string) => {
    // 입력값을 숫자로 변환
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // 공백 입력이나 숫자가 아닌 경우 예외 처리
    if (isNaN(n1) || !num1 || isNaN(n2) || !num2) {
      setResult("올바른 숫자를 입력해주세요.");
      return;
    }

    let calcResult = 0;

    switch (operator) {
      case "+":
        calcResult = n1 + n2;
        break;
      case "-":
        calcResult = n1 - n2;
        break;
      case "*":
        calcResult = n1 * n2;
        break;
      case "/":
        // 0으로 나누기 예외 처리
        if (n2 === 0) {
          setResult("0으로 나눌 수 없습니다.");
          return;
        }
        calcResult = n1 / n2;
        break;
      default:
        return;
    }

    // 결과를 문자열로 변환하여 저장
    setResult(calcResult.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={num1}
        onChangeText={setNum1}
        placeholder="첫 번째 숫자"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        value={num2}
        onChangeText={setNum2}
        placeholder="두 번째 숫자"
        keyboardType="numeric"
        style={styles.input}
      />

      {/* 버튼 클릭 시 각각의 연산자를 인자로 넘겨줍니다 */}
      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => calculate("+")} />
        <Button title="-" onPress={() => calculate("-")} />
        <Button title="*" onPress={() => calculate("*")} />
        <Button title="/" onPress={() => calculate("/")} />
      </View>

      <Text style={styles.resultText}>결과: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8, fontSize: 18 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  resultText: {
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
});
