import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import CustomHeaderButton from "../../components/custom-header-button/CustomHeaderButton";
import Colors from "../../constants/Colors";

const ProductsScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.screen}>
      <View style={styles.customHeader}>
        <TouchableOpacity style={styles.headerBtnWrapper} onPress={handleBack}>
          <Ionicons
            name="menu"
            size={26}
            color={Colors.blackPrimary}
            style={styles.swipeIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerImageWrapper}>
          <Image  style={styles.headerImage} source={require('../../assets/images/headerImage.png')}/>
        </TouchableOpacity>

      </View>
      <Text>Products Screen</Text>
    </View>
  );
};

export const ProductsScreenOptions = () => {
  return {
    // headerTitle: "Products",
    headerShown:false,
    // headerBackVisible: false,
    // headerLeft: () => {
    //   return (
    //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //       <Item  title='menu' iconName='menu'/>
    //     </HeaderButtons>
    //   )
    // }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop:60,
    paddingBottom:10,
    backgroundColor:Colors.primaryWhite,
  },
  customHeader: {
    paddingHorizontal:6,
    height: 60,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:Colors.primaryWhiteDark,
  },
  headerImageWrapper:{
    overflow:'hidden',
    height:45,
    width:45,
    borderRadius:45,
    borderColor:Colors.blackPrimary,
    borderWidth:2,
  },
  headerImage:{
    width:'100%',
    height:'100%',
    transform:[{scale:1}]
  },
  headerBtnWrapper:{
    width:20,
    height:20,
  },
  headerBtn:{
  }

});
export default ProductsScreen;
