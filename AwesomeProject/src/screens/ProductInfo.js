import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "../global/colors";
import IonIcon from "react-native-vector-icons/Ionicons";

export default function ProductInfo(props, navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IonIcon name="chevron-back" color={"black"} size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Product Info</Text>
      </View>
      <Text style={{ alignSelf: "center" }}>INI INFO</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 10,
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
