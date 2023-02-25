import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';

const NotificationsScreen = () => {
  return (
  

      <View style={styles.screen}>
        <Text>
          Notifications Screen
        </Text>
      </View>
    
  )
}



const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'lightblue',
    color:Colors.blackPrimary,
    paddingTop: 60,
    paddingHorizontal:2,
    
  },
  text:{
    color:'#000',
  }
})

export default NotificationsScreen;