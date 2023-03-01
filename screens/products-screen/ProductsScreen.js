import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import ProductItem from "../../components/product-item/ProductItem";
import ListHeader from "../../components/list-header/ListHeader";
import TrademarkList from "../../components/trademark-list/TrademarkList";
import Colors from "../../constants/Colors";
import { TRADEMARK_TYPES } from "../../utils";

const ProductsScreen = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const [placeholder, setPlaceHolder] = useState(
    TRADEMARK_TYPES.CONVERSE.toLocaleUpperCase()
  );
  const sneaks = useSelector((state) => state.sneakers.shoes);
  const [listTitle, setListTitle] = useState(`Converse Products`);
  const [products, setProducts] = useState(
    sneaks.filter((sneakrs) => sneakrs.typeId === TRADEMARK_TYPES.CONVERSE)
  );

  const searched = products.filter((sneakr) =>
    sneakr.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (text) => {
    setSearch(text);
  };
  const handleBack = () => {
    navigation.goBack();
  };

  const handlePressTrademark = (typeId) => {
    const filteredShoes = sneaks.filter((sneaker) => sneaker.typeId === typeId);
    const title = typeId[0].toUpperCase() + typeId.slice(1);
    setPlaceHolder(title.toUpperCase());
    setListTitle(`${title} Products`);
    setProducts(filteredShoes);
  };

  const handleSettingsPressed = () => {
    navigation.navigate("Settings");
  };
  const handleProfilePressed = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.customHeader}>
        <TouchableOpacity style={styles.headerBtnWrapper} onPress={handleBack}>
          <Ionicons
            name="menu"
            size={26}
            color={Colors.blackPrimary}
            style={styles.swipeIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerImageWrapper}
          onPress={handleProfilePressed}
        >
          <Image
            style={styles.headerImage}
            source={require("../../assets/images/passport.png")}
            resizeMethod='resize'
            resizeMode="center"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.homeTitle}> Discover </Text>
      <View style={styles.header}>
        <View style={styles.headerSearchWrapper}>
          <Feather
            name="search"
            size={23}
            color={Colors.blackPrimary}
            style={{ marginRight: 4, flex: 0.1 }}
          />
          <TextInput
            placeholder={`Search ${placeholder} Sneakers`}
            onChangeText={handleSearch}
            value={search}
            style={{ flex: 0.99 }}
          />
        </View>

        <TouchableOpacity
          style={styles.headerSettingsBtn}
          activeOpacity={0.75}
          onPress={handleSettingsPressed}
        >
          <Feather name="settings" size={24} color={Colors.blackPrimary} />
        </TouchableOpacity>
      </View>

      <TrademarkList handlePress={handlePressTrademark} />

      {searched.length > 0 ? (
        <FlatList
          style={{
            paddingHorizontal: 2,
            width: "100%",
            marginTop: 20,
            height: "70%",
            paddingVertical: 4,
          }}
          numColumns={2}
          data={searched}
          keyExtractor={(s) => s.id}
          renderItem={({ item }) => {
            return <ProductItem item={item} navigation={navigation} />;
          }}
          ListHeaderComponent={() => {
            return <ListHeader text={listTitle} />;
          }}
        />
      ) : (
        <View
          style={{
            margin: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            No Shoes of this type
          </Text>
        </View>
      )}
    </View>
  );
};

export const ProductsScreenOptions = () => {
  return {
    showTabLabel: false,
    showTabBarLabel: false,
    // headerTitle: "Products",
    // headerShown: false,
    // headerBackVisible: false,
    // headerLeft: () => {
    //   return (
    //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //       <Item  title='menu' iconName='menu'/>
    //     </HeaderButtons>
    //   )
    // }
    // tabBarActiveTintColor: 'lightblue',
    // tabBarInactiveTintColor: 'red',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 10,
    backgroundColor: Colors.primaryWhite,
  },
  customHeader: {
    paddingHorizontal: 6,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerImageWrapper: {
    overflow: "hidden",
    height: 45,
    width: 45,
    borderRadius: 45,
    borderColor: Colors.blackPrimary,
    borderWidth: 2,
    backgroundColor: "#eee",
    elevation: 3,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    transform: [{ scale: 1 }],
  },
  headerBtnWrapper: {
    width: 20,
    height: 20,
  },
  headerSettingsBtn: {
    elevation: 9,
    backgroundColor: Colors.primaryWhite,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  homeTitle: {
    fontWeight: "600",
    // lineHeight:1.25,
    color: Colors.blackPrimary,
    fontFamily: "syne",
    fontSize: 20,
    marginLeft: 4,
  },
  headerSearchWrapper: {
    width: "80%",
    height: 40,
    backgroundColor: Colors.primaryWhiteDark,
    // justifyContent:'center',
    alignItems: "center",
    borderRadius: 4,
    paddingLeft: 10,
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  tradeMarkWrapper: {},
});
export default ProductsScreen;
