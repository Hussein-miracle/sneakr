import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";
import * as Notifier from "expo-notifications";

import ProductItem from "../../components/product-item/ProductItem";
import ListHeader from "../../components/list-header/ListHeader";
import TrademarkList from "../../components/trademark-list/TrademarkList";
import Colors from "../../constants/Colors";
import { TRADEMARK_TYPES } from "../../utils";

import {
  addNotification,
  setNotificationToken,
} from "../../store/actions/shoes.actions";

const registerForPushNotificationsAsync = async () => {
  let token;

  try {
    if (Platform.OS === "android") {
      await Notifier.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifier.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    // if (Device.isDevice) {
    const { status: existingStatus } = await Notifier.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifier.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert("Failed to get push token for push notification!");
      return;
    }
    const response = await Notifier.getExpoPushTokenAsync();
    token = response.data;
    console.log(token);
    // } else {a
    //   alert("Must use physical device for Push Notifications");
    // }

    return token;
  } catch (err) {
    console.log(err, "err getting token");
  }
};

const ProductsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const backgroundSubcription = useRef();
  const foregroundSubcription = useRef();
  const [placeholder, setPlaceHolder] = useState(
    TRADEMARK_TYPES.CONVERSE.toLocaleUpperCase()
  );
  const sneaks = useSelector((state) => state.sneakers.shoes);
  const cartItems = useSelector((s) => s.cart.cartItems);

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
    // navigation.navigate("Settings");
    Alert.alert(
      "Feature not available yet 🥺.",
      "Please be patient with us feature coming soon ✨ or not 👀.",
      [
        {
          text: "Okay",
          style: "default",
          onPress: null,
        },
      ]
    );
  };
  const handleProfilePressed = () => {
    navigation.navigate("Profile");
  };

  useEffect(() => {
    const tk = registerForPushNotificationsAsync();
    dispatch(setNotificationToken(tk));
  }, []);

  useEffect(() => {
    backgroundSubcription.current =
      Notifier.addNotificationResponseReceivedListener((response) => {
        console.log(response, "bg noti response");
      });

    foregroundSubcription.current = Notifier.addNotificationReceivedListener(
      (notification) => {
        console.log(notification, "fg noti");
      }
    );

    return () => {
      backgroundSubcription.current.remove();
      foregroundSubcription.current.remove();
    };
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.customHeader}>
        <TouchableOpacity style={styles.headerBtnWrapper} onPress={handleBack}>
          <Ionicons
            name="lock-open"
            size={28}
            color={Colors.blackPrimary}
            style={styles.swipeIcon}
          />
          {/* <Ionicons
            name="menu"
            size={26}
            color={Colors.blackPrimary}
            style={styles.swipeIcon}
          /> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerImageWrapper}
          onPress={handleProfilePressed}
        >
          <Image
            style={styles.headerImage}
            source={require("../../assets/images/passport.png")}
            resizeMethod="resize"
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
            return <ProductItem item={item} navigation={navigation} count={cartItems.length} />;
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
            No Sneakers of this type
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
