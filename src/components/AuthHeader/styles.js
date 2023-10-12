import { StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        top:10,
        marginBottom:54,

    },
    text:{
        fontSize:26,
        fontWeight:'500',
        color:Colors.blue,
        paddingHorizontal:16,
        top:15,
        right:-25

    },
    image:{
        width:18,
        height:18,
        color:Colors.blue,
        padding:15,
        top:15,
        right:-20

    }


})