import { react } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Text , View} from "react-native";
import {styles} from './styles'
import ArrowRight from "./../../assets/ArrowRight";

const ListItem = ({title,subtitle,onPress,style }) => {
    return(
        <Pressable onPress={onPress} style={[styles.container, style]}>
            <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
           <View style={styles.Arrow}>
            <ArrowRight/>
           </View>
        </Pressable>
    )

}
export default ListItem;