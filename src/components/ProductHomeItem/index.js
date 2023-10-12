import { react, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Text ,View} from "react-native";
import {styles} from './styles'
import Arrow from "../../assets/Arrow";
import Search from "../../assets/Search";
import Back from "../../assets/Back";
import Logout from "../../assets/Logout";
import Input from "../Input";
import { Image } from "react-native-svg";

const ProductHomeItem = ({title , image ,price ,onPress  }) => {
 
  

    return(
        <ScrollView Vertical >
     <Pressable onPress={onPress} style={styles.container}>
        
      <View style={styles.picture}>
       {image}
       </View>
      <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      </View>
     </Pressable>
     </ScrollView>
   
  
     
    )

}
export default ProductHomeItem;