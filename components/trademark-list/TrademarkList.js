import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import trademarks from "../../data/trademarks";

const TrademarkItem = ({ item, onClick }) => {
  const { imageUrl, elevate, id, typeId } = item;
  const handleClick = () => {
    onClick(id, typeId);
  };
  return (
    <TouchableOpacity
      style={{ ...styles.trademarkItem, elevation: elevate }}
      onPress={handleClick}
    >
      <Image source={imageUrl} />
    </TouchableOpacity>
  );
};

const TrademarkList = ({ handlePress }) => {
  const [trademarksList, setTrademarksLists] = useState(trademarks);

  const handleClicked = (id, typeId) => {
    // console.log(typeId,'tID');
    handlePress(typeId);
    const newTrademarks = trademarks.map((item) => {
      if (item.id === id) {
        item.elevate = 12;
      } else {
        item.elevate = 2;
      }
      return item;
    });
    setTrademarksLists(newTrademarks);
  };
  return (
    <FlatList
      horizontal
      style={{ height: 70,width:'100%' }}
      data={trademarksList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <TrademarkItem item={item} onClick={handleClicked} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  trademarkItem: {
    width: 110,
    height: 50,
    borderRadius: 13,
    backgroundColor: Colors.white,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  trademarkImg: {
    width: "100%",
    height: "100%",
  },
});
export default TrademarkList;
