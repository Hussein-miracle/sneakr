import React, { useCallback, useEffect, useRef, useState ,useLayoutEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import STYLES from "./AnimationStyles";

const SwipeScreen = ({ navigation }) => {
  const [completedSwipe, setCompletedSwipe] = useState(false);

  const X = useSharedValue(0);

  const handleNextScreen = (completed) => {
    if (completedSwipe !== completed) {
      // console.log(completed,'completed');
      setCompletedSwipe(completed);
      navigation.navigate("Products");
      X.value = 0;
    }
  };
  const animationGestureHandler = useAnimatedGestureHandler({
    onStart: (e, ctx) => {
      
      ctx.completed = completedSwipe;
      runOnJS(setCompletedSwipe)(false)
      if (X.value < STYLES.HORIZONTAL_SWIPE_RANGE / 2) {
        X.value = 0;
      }
    },
    onActive: (e, ctx) => {
      // console.log(ctx,'context');
      // console.log(e, "gestrue event active");
      // if (e.translationX > 0) {
      // }
      let newValue = 0;
      if (ctx.completed) {
        newValue = e.translationX + STYLES.HORIZONTAL_SWIPE_RANGE;
      } else {
        newValue = e.translationX;
      }

      if (newValue > 0 && newValue <= STYLES.HORIZONTAL_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: (e) => {
      // console.log(e, "gestrue event end");
      if (X.value < STYLES.SWIPER_WIDTH / 2 - STYLES.BUTTON_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleNextScreen)(false);
      } else {
        X.value = withSpring(STYLES.HORIZONTAL_SWIPE_RANGE);
        runOnJS(handleNextScreen)(true);
      }
    },
  });

  const textInterpolateXInputs = [0, STYLES.HORIZONTAL_SWIPE_RANGE];
  const animatedStyles = {
    animatedIcon: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: X.value }],
      };
    }),
    animatedText: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: interpolate(X.value, textInterpolateXInputs, [
              0,
              STYLES.BUTTON_DIMENSIONS / 2 -
                STYLES.SWIPEABLE_DIMENSIONS_WRT_WIDTH,
              Extrapolate.CLAMP,
            ]),
          },
        ],
        opacity: interpolate(
          X.value,
          textInterpolateXInputs,
          [0.8, 0],
          Extrapolate.CLAMP
        ),
      };
    }),
  };


  // useLayoutEffect(() => {
  //   navigation.setOptions({ tabBarVisible: false })
  // },[])

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);

  
  return (
    <View style={styles.screen}>
      <GestureHandlerRootView style={{ ...styles.image, ...styles.screen }}>
        <Text style={styles.logoText}>Sneakr.</Text>
        <Image
          source={require("../../assets/images/splash-image.png")}
          style={styles.image}
        />
        <PanGestureHandler onGestureEvent={animationGestureHandler}>
          <Animated.View style={styles.swiper}>
            <Animated.View
              style={[styles.swipeIconWrapper, animatedStyles.animatedIcon]}
            >
              <Ionicons
                name="md-arrow-forward-circle"
                size={26}
                color={Colors.white}
                style={styles.swipeIcon}
              />
            </Animated.View>
            <Animated.Text
              style={[styles.swiperText, animatedStyles.animatedText]}
            >
              Swipe to access
            </Animated.Text>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
};

export const SwipeScreenOptions = ({}) => {
  return {
    headerTitle: "  ",
    headerShown: false,
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    tabBarVisible:false,
    tabBarStyle:{
      display:'none'
    },
    tabBarLabelShown: false,

  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    transform: [{ scaleY: 1.005 }],
  },
  swiper: {
    position: "absolute",
    borderColor: Colors.primaryWhite,
    borderWidth: 2,
    zIndex: 5,
    bottom: 60,
    height: STYLES.SWIPER_HEIGHT,
    width: STYLES.SWIPER_WIDTH,
    borderRadius: STYLES.SWIPER_HEIGHT,
    padding: STYLES.PADDING,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  swiperText: {
    fontSize: 18,
    // fontStyle:''
    fontWeight: "600",
    color: Colors.white,
  },
  logoText: {
    fontWeight: "600",
    position: "absolute",
    zIndex: 6,
    color: Colors.white,
    fontSize: 38,
    zIndex: 10,
    fontFamily: "syne",
  },
  swipeIcon: {
    transform: [{ scale: 1.85 }],
  },
  swipeIconWrapper: {
    zIndex: 10,
    // width,
    width: STYLES.BUTTON_DIMENSIONS,
    height: STYLES.BUTTON_DIMENSIONS,
    borderRadius: STYLES.BUTTON_DIMENSIONS,
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SwipeScreen;
