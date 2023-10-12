import { react } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import {styles} from './styles'
import Google from "../../assets/Google";

const GoogleIcon = () => {
    return(
        <TouchableOpacity  style={styles.container}>
           <Google style={styles.image}/>
        </TouchableOpacity>
    )

}
export default GoogleIcon;