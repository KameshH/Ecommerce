import { StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    container:{
    //  paddingVertical:20,
       backgroundColor: Colors.darkGrey,
    
     paddingVertical:35,
     borderRadius:14,
     width: "50%",
     alignSelf:'center',
     height:70,
     marginTop:10
    // left:30
     
    },
    image:{
        alignSelf:'center',
        bottom:12
        // alignContent:'center',
        // alignItems:'center'
    }
})