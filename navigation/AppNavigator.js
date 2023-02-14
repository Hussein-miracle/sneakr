import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

// screens
import HomeScreen, {
  HomeScreenOptions,
} from "../screens/home-screen/HomeScreen";
import ProductsScreen, {
  ProductsScreenOptions,
} from "../screens/products-screen/ProductsScreen";

// stack
const SneakrStack = createNativeStackNavigator();

const SneakrNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={Colors.blackPrimary} />
      <SneakrStack.Navigator>
        <SneakrStack.Screen
          name="Home"
          component={HomeScreen}
          options={HomeScreenOptions}
        />
        <SneakrStack.Screen
          name="Products"
          component={ProductsScreen}
          options={ProductsScreenOptions}
        />
      </SneakrStack.Navigator>
    </NavigationContainer>
  );
};

export default SneakrNavigator;
