import { Dimensions, StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'
import { BottomTabBar } from "@react-navigation/bottom-tabs";

const {width} = Dimensions.get('window')
// console.log('width :>>',width);
export const styles = StyleSheet.create({
   container:{
    paddingBottom:18,
    paddingTop:20,
    // marginHorizontal:4,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    
   },
   picture:{
        width:160,
        // height:210,
        // borderRadius:10,
        // top:-10
   },
   price:{
    color: Colors.black,
    top:10

    
   },
title:{
    color: Colors.lightgrey,
    top:10
}


})