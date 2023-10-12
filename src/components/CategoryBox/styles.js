import { StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'
import { BottomTabBar } from "@react-navigation/bottom-tabs";

export const styles = StyleSheet.create({
   container:{
    marginHorizontal:8,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    // paddingTop:15,
    // paddingBottom:1
    
   },
   imageContainer:{
    backgroundColor:Colors.lightgrey,
    // padding:8,
    borderRadius:10,
    // marginBottom:8,
    height:60,
    width:60,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    

   },
title:{
    color: Colors.textgrey
}


})