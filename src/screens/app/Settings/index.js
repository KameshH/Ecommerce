import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import ListItem from '../../../components/ListItem'
import { styles } from '../Profile/styles'

const Settings = () => {
  return (
    <SafeAreaView>
      <Header title="Settings"/>
    <View style={styles.container}>
      <Text style={styles.text}>Help Center</Text>
      <ListItem  style={styles.item} title="FAQ"/>
      <ListItem  style={styles.item}title="Privacy & Terms"/> 
      <ListItem style={styles.item} title="Contact Us"/>
    </View>
    </SafeAreaView>
  )
}

export default Settings