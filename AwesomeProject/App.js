import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProductList from "./src/screens/ProductList";
import Cart from "./src/screens/Cart";
import colors from "./src/global/colors";
const Drawer = createDrawerNavigator();

import { Menu } from "./src/screens/Menu";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <Menu {...props} />}
        initialRouteName="Product List"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Product List" component={ProductList} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
