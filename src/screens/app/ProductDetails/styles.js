import { Dimensions, StyleSheet } from "react-native";
import {Colors} from '../../../utils/colors'

const {height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        
        // borderWidth:1,

    },
    image: {
       left:100,
       top:-10,
       paddingTop:30
      
    },
    txt:{
        textAlign:'center',
        marginTop:40,
        fontSize:24,
        fontWeight:'500'
       
       
    },
    content:{
        backgroundColor:Colors.white,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        marginTop:-10
    },
    price:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    description:{
        color:Colors.lightBlack,
        fontWeight:'500',
        lineHeight:19,
        top:20,
        padding:20
    },
    foot:{
        top:90,
        padding:14,
        // height:60,
        // width:329

        

    },
    bookmark:{
        backgroundColor:Colors.lightgrey,
        width:60,
        height:60,
        padding:18,
        borderRadius:8
    },
    bookmarkIcon:{
        
    },
    buttonIcon:{
        left:80,
        width:250,
        height:60,
        bottom:60
    },
    backIcon:{
        backgroundColor:Colors.lightgrey,
        padding:18,
        borderRadius:8,
        bottom:450,
        left:10
        
    },
    back:{
        
    },
})