import { react, useState } from "react";
import { Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import { Text ,View} from "react-native";
import {styles} from './styles'
import Arrow from "../../assets/Arrow";
import Search from "../../assets/Search";
import Back from "../../assets/Back";
import Logout from "../../assets/Logout";
import Input from "../Input";

const Header = ({title , onBackPress, onLogout , showLogout,showSearch,onSearch,keyword,showBack}) => {
  const [showSearchInput,setShowSearchInput]=useState(false)

  const onSearchClick=() =>{
    setShowSearchInput(!showSearchInput)
  }

    return(
        <View>
      <View style={styles.container}>
        {showBack ?( <Pressable onPress={onBackPress}>
            <Back style={styles.image}/>
        </Pressable>
        ):showSearch?(
          <Pressable onPress={onSearchClick}>
            <Search style={styles.imageICon}/>
        </Pressable >
          
        ):<View style={styles.imageView}/> }
       
        <Text style={styles.text}>{title}</Text>
        {showLogout?(
           <Pressable onPress={onLogout}>
           <Logout style={styles.image}/>
       </Pressable>
        ):<View style={styles.imageView}/> }
      </View>
      <View style={styles.sreachContainer}>
          {showSearchInput?(
            <Input onChangeText={onSearch} value={keyword} placeholder={'search your product!!'}/>
          ):null}
          </View>

      </View>
     
    )

}
export default Header;