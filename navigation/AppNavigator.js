import * as React from "react";
import { Platform} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

// screens
import SwipeScreen, {
  SwipeScreenOptions,
} from "../screens/swipe-screen/SwipeScreen";
import ProductsScreen, {
  ProductsScreenOptions,
} from "../screens/products-screen/ProductsScreen";

import LikedSneakersScreen, {
  LikedSneakersScreenOptions,
} from "../screens/liked-sneaker-screen/LikedSneakersScreen";

import NotificationsScreen from "../screens/notifications-screen/NotificationsScreen";

import SneakerDetailsScreen,{SneakerDetailsScreenOptions} from "../screens/sneaker-details-screen/SneakerDetailsScreen";

import SettingsScreen from "../screens/settings-screen/SettingsScreen";
import ProfileScreen from "../screens/profile-screen/ProfileScreen";

// stack
const SneakrStack = createNativeStackNavigator();

const SneakrTabStack =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const defaultTabOptions = ({route}) => {

  // console.log(route,'route!!')

  return {
    showLabel:false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused
          ? 'home'
          : 'home-outline';
        } else if (route.name === 'Likes') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={26} color={Colors.secondary} />;
    },
    // tabBarOptions:{
      tabBarActiveTintColor: 'lightgreen',
      tabBarInactiveTintColor: Colors.blackPrimary,
    // }
  };
};

const SneakrTabNavigator = () => {
  return (
    <>
      {/* <StatusBar style="light" backgroundColor={Colors.blackPrimary} /> */}
      <SneakrTabStack.Navigator screenOptions={defaultTabOptions} tabBar={{
        showLabel:false
      }} >
        <SneakrTabStack.Screen name="Home" component={ProductsScreen}  options={ProductsScreenOptions}/>
        <SneakrTabStack.Screen
          name="Likes"
          component={LikedSneakersScreen}
          options={LikedSneakersScreenOptions}
        />
        <SneakrTabStack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{}}
        />
      </SneakrTabStack.Navigator>
    </>
  );
};

const SneakrNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor={Colors.blackPrimary} />
        <SneakrStack.Navigator>
          <SneakrStack.Screen
            name="SwipeLock"
            component={SwipeScreen}
            options={SwipeScreenOptions}
          />
          <SneakrStack.Screen
            name="Products"
            component={SneakrTabNavigator}
            options={{
              headerShown:false,
            }}
          />
          <SneakrStack.Screen
            name="Checkout"
            component={SneakerDetailsScreen}
            options={SneakerDetailsScreenOptions}
          />
          <SneakrStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              // headerShown:false,
              headerStyle:{
                color:Colors.secondary,
              }
            }}
          />
          <SneakrStack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              // headerShown:false,
            }}
          />
        </SneakrStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default SneakrNavigator;
