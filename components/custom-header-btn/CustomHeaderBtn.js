import React from "react";
import { Platform } from "react-native";
import { HeaderButton, Item } from "react-navigation-header-buttons";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const CustomHeaderBtn = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={EvilIcons}
      iconSize={22}
      color={Colors.blackPrimary}
    />
  );
};

export default CustomHeaderBtn;
