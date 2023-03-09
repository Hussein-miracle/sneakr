import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../../components/cart-item/CartItem";
import Colors from "../../constants/Colors";

const WIDTH = Dimensions.get("window").width;
const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems, "cartItems");

  const totalAmount =  useSelector((state) => state.cart.totalAmount);

  return (
    <View style={styles.screen}>
      <FlatList
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => {
          return <CartItem item={item} />;
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      />

      <View style={styles.orderDetails}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginVertical: 10,
            backgroundColor: "#eee",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              height: "100%",
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Total Order
            </Text>
            <Text
              style={{
                fontWeight:'400',
                fontSize: 18,
              }}
            >
              Free shipping
            </Text>
          </View>

          <View
            style={{
              height: "100%",
              alignSelf: "flex-end",
              // justifyContent:'center',
              paddingTop: 10,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                verticalAlign: "middle",
                fontSize: 22,
              }}
            >
              {totalAmount} $
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.orderBtn}>
          <Text style={styles.orderBtnText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: 60,
    backgroundColor: Colors.white,
  },
  orderDetails: {
    borderTopColor: "#000",
    borderTopWidth: 1,
    // borderStyle:''
    width: "100%",
    height: 150,
    paddingHorizontal: 10,
    // alignItems: "center",
    // backgroundColor:'#888'
  },
  orderBtn: {
    backgroundColor: Colors.secondary,
    paddingVertical: 4,
    paddingHorizontal: 6,
    // width: "90%",
    height: 50,
    borderRadius: 8,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  orderBtnText: {
    color: Colors.primaryWhite,
    textAlign: "center",
    fontSize: 20,
  },
});
export default CartScreen;
