import { Dimensions, StyleSheet } from "react-native";
import { Colors } from '../../utils/colors'
import { BottomTabBar } from "@react-navigation/bottom-tabs";

// const {width} = Dimensions.get('window')
// console.log('width :>>',width);
export const styles = StyleSheet.create({
   container:{

     flexDirection:'row',
     borderBottomWidth:1,
     borderColor:Colors.borderline,
     padding:20,
     paddingTop:20,
     bottom:20,
     
   
//     paddingVertical:18,
//     paddingBottom:30,
//     marginHorizontal:24,
//     marginVertical:8,

    // padding:180,
    // width:50,
//     height:250,
    

   },
   picture:{
        // width:20,
        // height:20,
     //    borderRadius:10,
     //    marginRight:20,
       
     
     //    padding:20,
     //    top:-20,
     //    bottom:20
     
   },
   content:{
        left:15,
        aligntems:'center',
     //    alignContent:'center',
        alignSelf:'center',
        
   },
   icon:{
     width:24,
     height:24,
     left:50,
     alignContent:'center',
     alignSelf:'center'
   }
//    price:{
//     color: Colors.black,
//     top:10

    
//    },
// title:{
//     color: Colors.lightgrey,
//     top:10
// }


})