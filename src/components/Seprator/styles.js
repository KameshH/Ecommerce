import { StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        left:40,
        marginVertical:10,
        
    },
    line:{
        height:1,
        width:90,
       
        backgroundColor:Colors.lightgrey

    },
    text:{
        color:Colors.blue,
        fontWeight:'500',
        marginHorizontal:8
        
    }
})