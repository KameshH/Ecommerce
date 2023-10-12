import {  Text, Image, View, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Picture from '../../../assets/Picture'
import Button from '../../../components/Buttons'



const Splash = ({navigation}) => {
  const onSignup=()=>{
    navigation.navigate('Signup')

  }
  const onSignin=()=>{
    navigation.navigate('Signin')

  }
  return (
      <View style={styles.container}>
        <Picture style={styles.Image}/>
        <View style={styles.TitleContainer}>
      <Text style={styles.SplashText}> You’ll Find</Text>
      <Text style={[styles.SplashText, styles.InnerSplashText]}>All you need</Text>
      <Text style={styles.SplashText}>Here!</Text>
      </View>
      <Button onPress={onSignup} title='Sign Up'/>

      <Pressable onPress={onSignin} hitSlop={20} > 
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
      </View>

  )
}

export default Splash;