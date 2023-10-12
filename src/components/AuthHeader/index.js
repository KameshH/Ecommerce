import { react } from "react";
import { Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import { Text ,View} from "react-native";
import {styles} from './styles'
import Arrow from "../../assets/Arrow";

const AuthHeader = ({title , onBackPress}) => {
    return(
        <SafeAreaView>
      <View style={styles.container}>
        <Pressable onPress={onBackPress}>
            <Arrow style={styles.image} />
        </Pressable>
        <Text style={styles.text}>{title}</Text>
      </View>
      </SafeAreaView>
    )

}
export default AuthHeader;