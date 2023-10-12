import { StyleSheet } from "react-native";
import {Colors} from '../../../utils/colors'

export const styles = StyleSheet.create({
    container:{
       padding:24,
       },
       nameEmail:{
        left:30
       },
       name:{
        fontWeight:'bold',
        fontSize:20,
        lineHeight:27,
        color:Colors.black,
        marginBottom:12
       },
       email:{
        fontWeight:'400',
        fontSize:14,
        lineHeight:15,
        color:Colors.grey,
        marginBottom:16,
       },
       Buttons:{
        left:30,
        top:250
       }
    
})