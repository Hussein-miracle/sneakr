import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, Platform } from "react-native";
import { combineReducers, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as Device from 'expo-device';
import * as SplashScreen from "expo-splash-screen";
import * as Permissions from "expo-permissions";
import * as Notifier from "expo-notifications";

import { setNotificationToken } from "./store/actions/shoes.actions";

// import CustomSplashScreen from './screens/splash-screen/SplashScreen';
import SneakrNavigator from "./navigation/AppNavigator";
import shoesReducer from "./store/reducers/shoes.reducer";
import authReducer from "./store/reducers/auth.reducer";
import cartReducer from "./store/reducers/cart.reducer";
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const customFonts = {
  syne: require("./assets/fonts/Syne-Regular-400.ttf"),
  "tenor-sans": require("./assets/fonts/Tenor-Sans-400.ttf"),
};

const rootReducer = combineReducers({
  sneakers: shoesReducer,
  auth: authReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

Notifier.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  },
});

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SneakrNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
