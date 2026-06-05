import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        <Text>-</Text>
      </TouchableOpacity>
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
