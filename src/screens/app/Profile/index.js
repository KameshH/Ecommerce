import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {styles} from './styles'
import Header from '../../../components/Header'
import ListItem from '../../../components/ListItem'
import Buttons from '../../../components/Buttons'

const Profile = ({navigation}) => {
  const num = 10; 
  const onLogout =()=>{
    console.log('loging out')

   
    
  }
  const onSettingsPress =()=>{
    navigation.navigate('Settings')
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Header title="Profile" showLogout onLogout={onLogout}  />
      </View>
    <View  style={styles.nameEmail}>
      <Text style={styles.name}>User Name</Text>
      <Text style={styles.email}>User Email</Text>
    </View>
    <ListItem title="My Listing" subtitle={`you have ${num} listing`}/>
    <ListItem onPress={onSettingsPress} title="Setting" subtitle="Account, FAQ, Contact"/>
    <Buttons style={styles.Buttons} title="Add a new listing"/>
    </SafeAreaView>
  )
}

export default Profile



