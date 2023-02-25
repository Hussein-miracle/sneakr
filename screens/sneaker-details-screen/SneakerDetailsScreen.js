import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { SimpleLineIcons } from "@expo/vector-icons";
import CustomHeaderButton from "../../components/custom-header-button/CustomHeaderButton";
import Colors from "../../constants/Colors";

const SneakerDetailsScreen = () => {
  return (
    <View>
      <Text>SneakerDetailsScreen</Text>
    </View>
  );
};

export const SneakerDetailsScreenOptions = ({route,navigation}) => {
  const count = route?.params ?? 0;
  return {
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            IconComponent={SimpleLineIcons}
            iconName="bag"
            iconSize={24}
          >

          </Item>
          <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 30,
                backgroundColor: Colors.secondary,
                justifyContent: "center",
                alignItems: "center",
                ...StyleSheet.absoluteFillObject,
                left:25,
                bottom:36,
                // top:36,
              }}
            >
              <Text style={{ color: Colors.primaryWhite, fontSize: 12 }}>
                { count}
              </Text>
            </View>
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 60,
  },
});
export default SneakerDetailsScreen;
