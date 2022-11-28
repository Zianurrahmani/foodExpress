import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
  StyleSheet,
  SafeAreaView,
  //   AsyncStorage,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../global/colors";

import { Items } from "../global/Database";

const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get("window").width;

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        getDataFromDB();
      });

      return unsubscribe;
    }, [route])
  );

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Product List");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        position: "relative",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: colors.white,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Image
            source={product.productImage}
            style={{ width: width, height: 500 }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack("Home")}
            style={{
              position: "absolute",
              flex: 1,
              alignSelf: "flex-start",
              marginLeft: 20,
              opacity: 0.8,
            }}
          >
            <Entypo
              name="chevron-left"
              style={{
                fontSize: 18,
                color: "grey",
                padding: 12,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Entypo
              name="shopping-cart"
              style={{
                fontSize: 18,
                color: colors.primary,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: colors.black,
              }}
            >
              Shopping
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: colors.black,
                maxWidth: "84%",
              }}
            >
              {product.productName}
            </Text>
            <Ionicons
              name="link-outline"
              style={{
                fontSize: 24,
                color: colors.primary,
                backgroundColor: colors.primary + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: colors.black,
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              maxHeight: 44,
              marginBottom: 18,
            }}
          >
            {product.description}
          </Text>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                maxWidth: "100%",
                color: colors.black,
                marginBottom: 4,
              }}
            >
              Rp {product.productPrice}.00
            </Text>
            <Text>
              Tax Rate 2%~ Rp {product.productPrice / 20} (Rp.
              {product.productPrice + product.productPrice / 20})
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: colors.primary,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              letterSpacing: 1,
              color: colors.white,
              textTransform: "uppercase",
            }}
          >
            {product.isAvailable ? "Add to cart" : "Not Avialable"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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

export default ProductInfo;
