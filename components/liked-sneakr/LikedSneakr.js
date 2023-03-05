import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const LikedSneakr = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const { title, imageUrl, price } = item;


  const handlePressed = () => {
    navigation.navigate('Checkout',{
      sneakerId:item.id
    });
  };

  return (
    <TouchableOpacity style={styles.LikedSneakr} onPress={handlePressed}>
      <View style={styles.imageWrapper}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  LikedSneakr: {
    elevation: 5,
    backgroundColor: Colors.primaryWhiteDark,
    borderRadius: 8,
    width: 365,
    height: 100,
    padding: 8,
    marginVertical: 10,
    flexDirection:'row',
    alignItems:'center',


    // backgroundColor:'lightgreen'
  },
  price: {
    color: Colors.secondary,
    fontWeight: "600",
    fontSize: 18,
  },
  title: {
    color: Colors.blackPrimary,
    fontFamily: "syne",
    fontSize: 17,
    fontWeight: "600",
    // marginVertical:6,
    lineHeight: 28,
  },
  imageWrapper: {
    width: "30%",
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'blue',
    marginRight:6,
  },
  image: {
    width: "90%",
    height: "90%",
    zIndex: 5,
    position: "absolute",
  },
  details:{
    justifyContent:'space-between',
    alignItems:'flex-start',
  }
});

export default LikedSneakr;
