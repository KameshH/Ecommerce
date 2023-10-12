import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { styles } from './styles'
import { Products } from '../../../data/Products'
import { string } from 'yup'
import FavoriteItem from '../../../components/FavoriteItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'

const Favorites = ({ navigation }) => {
  const renderItem= ({ item })=>{
    const onProductPress = () =>{
      navigation.navigate('ProductDetails',{product: item})
    }
    return(
      <FavoriteItem onPress={onProductPress} {...item} />
    )

  }
  return (
   <SafeAreaView>
    <Header title={"Favorites"}/>
     <FlatList data={Products} renderItem={renderItem} keyExtractor={(item)=> String (item?.id)}/>
     </SafeAreaView>
  )
}

export default Favorites