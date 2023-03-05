import React from "react";
import { Text, View, StyleSheet, Image, Pressable, Alert } from "react-native";
import { useSelector } from "react-redux";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);

  const handleLikes = () => {
    navigation.navigate("Likes");
  };
  const handleSettings = () => {
    // navigation.navigate("Settings");
    Alert.alert(
      "Feature not available yet",
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
  const handleOrders = () => {
    // navigation.navigate("Orders");
    Alert.alert(
      "Feature not available yet",
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
  const handleCart = () => {
    // navigation.navigate("Cart");
    Alert.alert(
      "Feature not available yet",
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
  const handleNotification = () => {
    navigation.navigate("Notifications");
  };

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out of this great experience?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "default",
        },
        {
          text: "Yes",
          onPress: () => {
            navigation.navigate("SwipeLock");
            console.log("LOGGED OUT.");
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleMouseEnter = (e) => {
    console.log("entered", e);
  };

  const handleMouseLeave = (e) => {
    console.log("left", e);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerImageWrapper}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/images/passport.png")}
            resizeMode="cover"
          />
        </View>

        <View style={styles.headerRight}>
          <View style={styles.headerContent}>
            <Text style={styles.userGreet}>Hi 👋 , {user.name} </Text>
            <Text style={styles.emailText}>{user.email} </Text>
          </View>
        </View>
      </View>

      <View style={styles.profileItems}>
        <Pressable style={styles.profileItem} onPress={handleOrders}>
          <MaterialCommunityIcons
            name="format-list-text"
            size={24}
            color={Colors.secondary}
          />
          <Text style={styles.profileItemText}>Orders</Text>
        </Pressable>

        <Pressable style={styles.profileItem} onPress={handleCart}>
          <Feather name="shopping-cart" size={24} color={Colors.secondary} />
          <Text style={styles.profileItemText}>Cart</Text>
        </Pressable>

        <Pressable style={styles.profileItem} onPress={handleLikes}>
          <Ionicons name="heart" size={24} color={Colors.secondary} />
          <Text style={styles.profileItemText}>Likes</Text>
        </Pressable>

        <Pressable style={styles.profileItem} onPress={handleSettings}>
          <Ionicons name="cog-sharp" size={24} color={Colors.secondary} />
          <Text style={styles.profileItemText}>Settings</Text>
        </Pressable>

        <Pressable style={styles.profileItem} onPress={handleNotification}>
          <Entypo name="bell" size={24} color={Colors.secondary} />
          <Text style={styles.profileItemText}>Notifications</Text>
        </Pressable>

        <Pressable style={styles.profileItem} onPress={handleLogout}>
          <AntDesign
            name="logout"
            size={24}
            color={Colors.secondary}
            style={{
              transform: [{ rotate: "180deg" }],
            }}
          />
          <Text style={styles.profileItemText}>LOGOUT</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.whiteDark,
    padding: 8,
  },
  header: {
    flexDirection: "row",
    paddingTop: 4,
    paddingHorizontal: 6,
    alignItems: "center",
  },
  headerImageWrapper: {
    overflow: "hidden",
    height: 180,
    width: 180,
    borderRadius: 95,
    borderColor: Colors.blackPrimary,
    borderWidth: 1,
    backgroundColor: "#eee",
    //elevation:3,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  headerRight: {
    marginLeft: 10,
  },
  userGreet: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.secondary,
    fontStyle: "tenor-sans",
  },
  emailText: {
    fontSize: 14,
    color: Colors.secondary,
    fontStyle: "syne",
  },
  headerContent: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 15,
    // backgroundColor: "blue",
    height: 150,
    width: 180,
    padding: 8,
  },
  profileText: {
    marginHorizontal: 10,
    marginVertical: 6,
    fontSize: 18,
    fontFamily: "syne",
    fontWeight: "600",
  },
  profileItems: {
    width: "100%",
    // padding: 4,
    // backgroundColor: "lightgreen",
  },
  profileItem: {
    height: 67,
    backgroundColor: "deeppink",
    marginVertical: 2,
    padding: 4,
    backgroundColor: Colors.white,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileItemText: {
    color: Colors.secondary,
    fontSize: 18,
    marginLeft: 12,
  },
});

export default ProfileScreen;
