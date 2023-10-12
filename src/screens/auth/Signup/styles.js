import { StyleSheet } from "react-native";
import {Colors} from '../../../utils/colors'


export const styles = StyleSheet.create({
    container:{
        // flexDirection:'row'  
        top:-10 
    },
    // innerIcon:{
    //     alignContent:'center',
    //     alignItems:'center'
    // }
    text:{
        alignItems:'center',
        flexDirection:'row',


    },
    agreetext:{
        color:Colors.blue,
        paddingHorizontal:40,
        fontSize:14

    },
    agreetextBold:{
        fontWeight:'bold'
    },
    button:{
        marginVertical:20,
        left:30
        
    },
    footerLink:{
        fontWeight:'bold',
        color :Colors.blue
    },
    footer:{
        color :Colors.blue,
        alignSelf:'center',
        paddingTop:35
    }
   
 
  
})