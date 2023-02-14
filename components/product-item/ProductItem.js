import React, { useState } from "react";
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

const ProductItem = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const { title, imageUrl, price, rating } = item;
  const ratingsArr = Array.from({ length: 5 }, () => {
    return {};
  });
  const ratingsMap = ratingsArr.map((item, index) => {
    if (index < rating) {
      item.filled = true;
    } else {
      item.filled = false;
    }
    item.id = index;
    return item;
  });

  const handleLiked = () => {
    setLiked(!liked);
    console.log('Pressed!');
  };
  return (
    <View style={styles.productItem}>
      <TouchableOpacity style={styles.likeBtnWrapper} onPress={handleLiked}>
        <Ionicons
          name={liked ? "heart" : "heart-outline"}
          size={20}
          color={liked ? "red" : Colors.blackPrimary}
        />
      </TouchableOpacity>
      <View style={styles.imageWrapper}>
        <View style={styles.imageBg}></View>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <FlatList style={{
        position:'relative',
        bottom:0,left:0
      }} horizontal data={ratingsMap} keyExtractor={(item) => item.id}  renderItem={({item}) => {
        return <Ionicons name={ item.filled ? 'star' : 'star-outline' } size={20} color={Colors.tertiary} />
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    elevation: 9,
    backgroundColor: Colors.white,
    width: 180,
    height: 240,
    borderRadius: 8,
    padding: 14,
    margin: 7,
    position: "relative",
    justifyContent:'space-between'
  },
  likeBtnWrapper: {
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "green",
  },
  price: {
    color: Colors.secondary,
    fontWeight:'400',
    fontSize:16,
  },
  ratings: {
    flexDirection: "row",
  },
  title: {
    color: Colors.blackPrimary,
    fontFamily: "syne",
    fontSize: 17,
    fontWeight: "500",
    // marginVertical:6,
    lineHeight:25,
  },
  imageWrapper: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBg: {
    width: 90,
    height: 90,
    borderRadius: 60,
    // backgroundColor:'lightgreen',
    backgroundColor: Colors.primaryWhiteDark,
  },
  image: {
    width: "80%",
    height: "80%",
    zIndex: 5,
    position: "absolute",
  },
});

export default ProductItem;
