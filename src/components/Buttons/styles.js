import { StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    container:{
     paddingVertical:20,
    //  paddingHorizontal:5,
     backgroundColor:'#4F63AC',
     borderRadius:8,
     width: 303,
    // left:40,
    // alignContent:'center',
    // alignItems:'center',
    // alignSelf:'center',
     
    },
    title:{
        color: Colors.white,
        textAlign:'center',
        fontSize: 16,
        fontWeight:'bold',
    }
})