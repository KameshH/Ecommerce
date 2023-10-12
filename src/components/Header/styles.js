import { StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    
   container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
   },
   text:{
    color:Colors.black,
    fontSize:16,
    fontWeight:'bold',
    // textAlign:'center',
    // right:111
   },
image:{
    width:24,
    height:24,
    
},
imageICon:{
    // width:24,
    // height:54,
    // flex: 1,
    // resizeMode: 'cover',
    // width: '100%',
    left:10,
    padding:15
    
},
imageView:{
    width:24,
    
},
sreachContainer:{
    paddingBottom:20,
}

})