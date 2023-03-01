import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
const ProfileScreen = () => {
  const user = useSelector((state) => state.auth.user);
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
            <Text style={styles.userGreet}>Hi , {user.name} </Text>
            <Text style={styles.emailText}>{user.email} </Text>
          </View>
        </View>
      </View>
      <Text style={styles.profileText}>Account</Text>

      <View>
        <View>
          <Text>Orders</Text>
        </View>
        <View>
          <Text>Likes</Text>
        </View>
        <View>
          <Text>Settings</Text>
        </View>
        <View>
          <Text>Notifications</Text>
        </View>
        <View>
          <Text>LOGOUT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryWhiteDark,
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
    fontSize: 18,
    fontWeight: "600",
    color: Colors.secondary,
    fontStyle: "tenor-sans",
  },
  emailText: {
    color: Colors.secondary,
  },
  headerContent: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 15,
    backgroundColor:'blue',
    height:150,
    width:180,
    padding:8,
  },
  profileText: {
    marginHorizontal: 10,
    marginVertical: 12,
    fontSize: 16,
    fontFamily: "syne",
  },
});

export default ProfileScreen;
