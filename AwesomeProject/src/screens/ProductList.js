import { Text, View, StyleSheet } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>INI LIST</Text>
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
