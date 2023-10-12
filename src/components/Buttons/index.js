import { react } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import {styles} from './styles'

const Button = ({title , onPress, style }) => {
    return(
        <TouchableOpacity  onPress={onPress} style={[styles.container,style]}>
            <Text style={styles.title}> {title} </Text>
        </TouchableOpacity>
    )

}
export default Button;