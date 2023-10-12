import { StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    container:{
        borderColor: Colors.grey,
        borderWidth:1,
        borderRadius:4,
        width:25,
        height:25,
        left:30
     
    },
    checkIcon:{
        // backgroundColor:Colors.grey,
        
       
        justifyContent:'center',
        // alignItems:'center',
        //  width:12,
        // height:9


    },
    innerContainer:{
        backgroundColor:Colors.grey,
        justifyContent:'center',
        alignItems:'center',
          width:23,
         height:23,
       
        
        

    }
})