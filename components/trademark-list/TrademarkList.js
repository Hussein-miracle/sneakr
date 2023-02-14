import React, { useState } from "react";
import { FlatList, Image, StyleSheet, View ,TouchableOpacity} from "react-native";
import Colors from "../../constants/Colors";
import trademarks from "../../data/trademarks";




const TrademarkItem = ({ item , onClick}) => {
  const { imageUrl ,elevate , id} = item;

  return (
    <TouchableOpacity style={{...styles.trademarkItem,elevation: elevate}} onPress={() =>  onClick(id)}>
      <Image source={imageUrl} />
    </TouchableOpacity>
  );
};

const TrademarkList = () => {
  const [trademarksList,setTrademarksLists] = useState(trademarks);
  const handleClicked = (id) => {
    const newTrademarks =  trademarks.map((item) => {
      if(item.id === id){
        item.elevate = 9;
      }else{
        item.elevate = 1;
      }
      return item;
    })
    setTrademarksLists(newTrademarks);
  }
  return (
    <FlatList
      horizontal
      style={{ height: 60 }}
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
    width: 65,
    height: 40,
    borderRadius: 13,
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
