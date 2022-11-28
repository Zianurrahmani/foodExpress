import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import colors from "../global/colors";
import IonIcon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";

import { Items } from "../global/Database";

const ProductList = ({ navigation }) => {
  const [foods, setFoods] = useState([]);
  const [baverages, setBaverages] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = () => {
    let foodList = [];
    let baveragesList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == "Foods") {
        foodList.push(Items[index]);
      } else if (Items[index].category == "Baverages") {
        baveragesList.push(Items[index]);
      }
    }

    setFoods(foodList);
    setBaverages(baveragesList);
  };

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "48%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            borderRadius: 10,
            backgroundColor: "grey",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Image
            source={data.productImage}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "cover",
            }}
          />
          {data.isOff ? (
            <View
              style={{
                position: "absolute",
                width: "20%",
                height: "24%",
                backgroundColor: colors.primary,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: colors.white,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
        </View>
        <Text
          style={{
            fontSize: 12,
            color: colors.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>
        {data.isAvailable ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: colors.primary,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: colors.secondary1,
              }}
            >
              Available
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: "red",
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              Unavailable
            </Text>
          </View>
        )}
        <Text>Rp {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            fontSize: 18,
            padding: 4,
            backgroundColor: colors.white,
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <IonIcon name="ios-menu" color={"grey"} size={30} />
        </TouchableOpacity>
        <Image
          source={require("../img/16-164360_calorie-intake-food-symbol-with-transparent-background.png")}
          style={{ width: 50, height: 50 }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={{
            fontSize: 18,
            padding: 4,
            backgroundColor: colors.white,
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 10,
          }}
        >
          <IonIcon name="cart-outline" color={"grey"} size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: colors.black,
              fontWeight: "500",
              letterSpacing: 1,
              marginBottom: 10,
            }}
          >
            Food Express
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.black,
              fontWeight: "400",
              letterSpacing: 1,
              lineHeight: 24,
            }}
          >
            Choose your own meal.
            {"\n"}This apps offers both Foods and Baverages
          </Text>
        </View>
        <View
          style={{
            height: 60,
            paddingTop: 10,
            marginHorizontal: 20,
            paddingBottom: 10,
            paddingLeft: 15,
            backgroundColor: "#F5F5F7",
            borderRadius: 30,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <IonIcon size={20} name="search" />
          <TextInput
            style={{ fontSize: 18, marginLeft: 5 }}
            placeholder="Search for anything"
          />
        </View>
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Foods
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                4
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: colors.secondary1,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {foods.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Baverages
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.black,
                  fontWeight: "400",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                2
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: colors.secondary1,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {baverages.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
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
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductList;
