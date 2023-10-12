import { react, useState } from "react";
import { Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import { Text ,View} from "react-native";
import {styles} from './styles'
// import Arrow from "../../assets/Arrow";
// import Search from "../../assets/Search";
// import Back from "../../assets/Back";
// import Logout from "../../assets/Logout";
// import Input from "../Input";
// import { Image } from "react-native-svg";
import { Colors } from "../../utils/colors";

const CategoryBox = ({title , image ,onPress , isFirst , isSelected }) => {
 
  

    return(
     <Pressable onPress={onPress} style={[styles.container , isFirst?{marginLeft:16}:{}]}>
      <View  style={[styles.imageContainer,isSelected?{backgroundColor:Colors.black}:{}]}>
       {image}
      </View>
      <Text style={[styles.title,isSelected?{color:Colors.blue ,fontWeight:'500'}:{}]}>{title}</Text>
     </Pressable>
     
    )

}
export default CategoryBox;