import React, { useState } from "react";
import { FlatList, Image, StyleSheet, View ,TouchableOpacity} from "react-native";
import Colors from "../../constants/Colors";
import trademarks from "../../data/trademarks";

const TrademarkItem = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  const { imageUrl } = item;
  const handleClicked = () => {
    setClicked(!clicked);
  }
  return (
    <TouchableOpacity style={{...styles.trademarkItem,elevation: clicked ? 9 : 1,}} onPress={handleClicked}>
      <Image source={imageUrl} />
    </TouchableOpacity>
  );
};

const TrademarkList = () => {
  return (
    <FlatList
      horizontal
      style={{ height: 60 }}
      data={trademarks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <TrademarkItem item={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  trademarkItem: {
    width: 70,
    height: 40,
    borderRadius: 6,
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  trademarkImg: {
    width: "100%",
    height: "100%",
  },
});
export default TrademarkList;
