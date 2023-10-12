import { StyleSheet } from "react-native";
import {Colors} from '../../../utils/colors'


export const styles = StyleSheet.create({
    container:{
        padding:10,
        top:40  ,
        alignItems:'center'   
    },
    Image:{
       top:15,


    },
    SplashText:{
        fontSize:40,
        fontWeight:'bold',
        color: Colors.black,
        textAlign:'center'
    },
    InnerSplashText:{
        color: Colors.orange,
        textDecorationLine:'underline',
        
    },
    footerText:{
        textAlign:'center',
        color:  Colors.blue,
        top:40,
        fontSize:16,
        fontWeight:'bold'
    },
    TitleContainer:{
        marginVertical:54,
        // flexDirection:'column',
        // justifyContent:'center',
        // alignItems:'center',
    }
  
})