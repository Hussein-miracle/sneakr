import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const WIDTH = Dimensions.get("window").width;

const CartItem = ({ item }) => {
  const { imageUrl, title, price, quantity } = item;

  return (
    <View style={styles.cartItem}>
      <View style={styles.imageWrapper}>
        <View style={styles.imageBg}></View>
        <Image source={imageUrl} style={styles.image} />
      </View>

      <View style={styles.cartItemContent}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            color: Colors.secondary,
          }}
        >
          ${price}
        </Text>

        <View style={styles.actions}>
          <View style={styles.mutateQtyBtnWrapper}>
            <TouchableOpacity style={styles.mutateQtyBtn}>
              <Feather name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ margin: 6 }}>{quantity}x</Text>
            <TouchableOpacity style={styles.mutateQtyBtn}>
              <Feather name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <FontAwesome name="remove" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    height: 120,
    width: 0.95 * WIDTH,
    marginVertical: 6,
    borderRadius: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
  imageWrapper: {
    width: "48%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBg: {
    borderRadius: 20,
    backgroundColor: Colors.primaryWhiteDark,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "85%",
    height: "85%",
    zIndex: 5,
    position: "absolute",
  },
  cartItemContent: {
    backgroundColor: Colors.primaryWhite,
    height: "100%",
    width: "52%",
    justifyContent: "space-between",
    // alignItems:'flex-end'
    paddingHorizontal: 4,
  },
  mutateQtyBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 0.8,
    margin: 4,
    borderRadius: 6,
  },
  mutateQtyBtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CartItem;
