import { StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/colors'


export const styles = StyleSheet.create({
    Containerr:{
                top:-95,
                marginBottom:20
    },
    label:{
        // top:116,
        // // top:80,
        //  right:120,
        //  fontSize:14,
        //  fontWeight:'500',
        //  marginVertical:8,
        //  left:30
        // width: 44,
        height: 17,
        top: 100,   
        left: 35,
        paddingTop:1,
        color:Colors.blue
        

    },
    inputContainer:{
        borderWidth:1,
        paddingHorizontal:86,
        // borderColor:Colors.orange
      
       

    },
    input:{
        width: 303,
height: 60,
top: 112,
left: 30,
borderRadius: 10,
borderWidth: 1,
borderColor:Colors.grey,
paddingStart:10,


// width: 303px
// height: 60px
// top: 162px
// left: 35.0001220703125px
// border-radius: 14px
// border: 1px


        // borderWidth:1,
        // // paddingHorizontal:126,
        // // paddingVertical:16,
        // // right:90,
        // width:303,
        // top:116,
        // borderRadius:8,
        // height:56,
        // right:125,
      
        //  left:35
    },
    eye:{
        flexDirection:'row-reverse',
        top:70,
        left:300,
   
    }


})