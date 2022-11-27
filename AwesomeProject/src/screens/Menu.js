import { Text, View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer } from "react-native-paper";

import Icon from "react-native-vector-icons/Ionicons";
import colors from "../global/colors";

export function Menu(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../img/img_avatar.png")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Zian</Title>
                <Caption style={styles.caption}>User</Caption>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            style={{ marginTop: 10 }}
            icon={({ color, size }) => (
              <Icon name="menu" color={color} size={size} />
            )}
            label="Menu List"
            onPress={() => {
              props.navigation.navigate("Product List");
            }}
          />
          <DrawerItem
            style={{ marginTop: 10 }}
            icon={({ color, size }) => (
              <Icon name="restaurant" color={color} size={size} />
            )}
            label="My Order"
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          style={{ color: "red" }}
          icon={({ size }) => (
            <Icon name="ios-exit-outline" color={"red"} size={size} />
          )}
          label="Sign Out"
        >
          Sign Out
        </DrawerItem>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    textTransform: "capitalize",
  },
  drawerSection: {
    marginTop: 20,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    color: "red",
  },
});
