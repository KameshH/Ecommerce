import {  Text, Image, View, Pressable , ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Button from '../../../components/Buttons'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/Input'
import Checkbox from '../../../components/Checkbox'
import Seprator from '../../../components/Seprator'
import GoogleIcon from '../../../components/GoogleIcon'
import { SafeAreaView } from 'react-native-safe-area-context'



const Signup = ({navigation}) => {
    const [Checked,setChecked]= useState(false)

    const OnsignIn=()=>{
        navigation.navigate('Signin')
    }
    const onBack =()=>{
      navigation.goBack()
    }
  return (
    <SafeAreaView>
   
      <View style={styles.container}>
        <AuthHeader  onBackPress={onBack} title='Sign Up'/>
        <Input  label='Name' placeholder="Kamesh"/>
        <Input  label='Email' placeholder="example@gmail.com"/>
        <Input isPassword label='Password' placeholder="********"/>
        <View style={styles.text}>
        <Checkbox Checked={Checked} onCheck={setChecked}/>
        <Text style={styles.agreetext}>I agree with <Text style={styles.agreetextBold}>Terms</Text> & <Text style={styles.agreetextBold}>Privacy</Text></Text>
        </View>
        <Button style={styles.button} title="Sign Up"/>
       <Seprator text="Or sign up with"/>
       <GoogleIcon/>
       <Text style={styles.footer}>
       Already have an account? <Text onPress={OnsignIn}  style={styles.footerLink}>Sign In</Text>
       </Text>
      </View>
    
      </SafeAreaView>

  )
}

export default Signup;