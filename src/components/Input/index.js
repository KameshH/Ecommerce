import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles'
import Eye from '../../assets/Eye'

const Input=({label,placeholder,isPassword, value,onChangeText})=> {

    const [isPasswordVisible,setIsPasswordVisible]=useState(false)

    const onEyePress=()=>{
        setIsPasswordVisible(!isPasswordVisible)
    }

  return (
    <View  style={styles.Containerr}>
      <Text  style={styles.label}>{label}</Text>
    
    <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} style={styles.input} placeholder={placeholder}/>
    {isPassword &&(
    <Pressable hitSlop={50} onPress={onEyePress}>
        <Eye style={styles.eye}/>
    </Pressable>
    )}
    </View>
  )
}
export default Input