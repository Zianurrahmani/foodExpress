import { Text, View, StyleSheet } from "react-native";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text>INI CART</Text>
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
