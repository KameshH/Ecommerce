import { react, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, TouchableOpacity,Image } from "react-native";
import { Text ,View } from "react-native";
import {styles} from './styles'
import Cancel from "./../../assets/Cancel";




const FavoriteItem = ({title , image,price ,onPress  }) => {
 
  

    return(
       
     <Pressable onPress={onPress} style={styles.container}>
        
      <View style={styles.picture}>
       {image}
       </View>
      <View style={styles.content}>
      <Text>{title}</Text>
      <Text >{price}</Text>
      </View>
      <Cancel style={styles.icon} />
     </Pressable>
    
   
  
     
    )

}
export default FavoriteItem;