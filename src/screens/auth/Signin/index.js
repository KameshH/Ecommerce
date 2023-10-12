import {  Text, View,  } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Button from '../../../components/Buttons'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/Input'
import Seprator from '../../../components/Seprator'
import GoogleIcon from '../../../components/GoogleIcon'
import { SafeAreaView } from 'react-native-safe-area-context'



const Signin = ({navigation}) => {
    // const [Checked,setChecked]= useState(false)

    const OnsignIn=()=>{
        navigation.navigate('Signup')
    }
    const onBack=()=>{
      navigation.goBack()
    }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title='Sign In'/>
        <Input  label='Email' placeholder="example@gmail.com"/>
        <Input isPassword label='Password' placeholder="********"/>
        <Button style={styles.button} title="Sign In"/>
       <Seprator text="Or sign up with"/>
       <GoogleIcon/>
       <Text style={styles.footer}>
       Don’t have an account? <Text onPress={OnsignIn}  style={styles.footerLink}> Sign Up </Text>
       </Text>
      </View>
      </SafeAreaView>

  )
}

export default Signin;