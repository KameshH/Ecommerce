import React from "react"; // Import React with a capital "R"
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { styles } from './styles';
import Check from "../../assets/Check";

const Checkbox = ({ Checked, onCheck }) => {
    return (
        <TouchableOpacity hitSlop={20} onPress={()=>onCheck(!Checked)} style={styles.container}>
            {Checked && (
                <View style={styles.innerContainer}>
                    <Check style={styles.checkIcon} />
                </View>
            )}
            
         </TouchableOpacity>
        
    );
 };

export default Checkbox;
