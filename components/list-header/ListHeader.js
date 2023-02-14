import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const ListHeader = ({style,textStyle,text}) => {
  return (
    <View style={{...style,...styles.wrapper}}><Text style={{...textStyle,...styles.text}}>{text}</Text></View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal:6,
    justifyContent:'center',
    alignItems:'flex-start',
    paddingVertical:2,
  },
  text:{
    fontSize:20,
    fontWeight:'600',
    fontFamily:'syne'
  }
})

export default ListHeader