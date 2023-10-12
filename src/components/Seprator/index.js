import { react } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Text , View} from "react-native";
import {styles} from './styles'

const Seprator = ({text}) => {
    return(
        <View style={styles.container}>
            <View style={styles.line}/>
            <Text style={styles.text}>{text}</Text>
           < View style={styles.line}/>
        </View>
    )

}
export default Seprator;