import React, { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Animated, Image,Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

import SplashImg from "../../assets/images/splash-image.png";
//import SneakrNavigator from "../../navigation/AppNavigator";

const SplashScreen = () => {
  //safearea
  // const edges = useSafeAreaInsets();
  return (
    <View style={styles.splashScreen}>

    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {

    position: "absolute",

    left: 0,

    right: 0,

    bottom: 0,

    top: 0,

    backgroundColor: Colors.secondary,
    
  },
  splashImg: {
    width: 100,
    height: 100,
  },
  animatedView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SplashScreen;
