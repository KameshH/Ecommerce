import { View, Text, ScrollView, Image, SafeAreaView, Pressable, Linking,  } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { Products } from '../../../data/Products';
import Button from '../../../components/Buttons';
import Bookmark from '../../../assets/Tabs/Bookmark';
import Back from '../../../assets/Back';


const ProductDetails = ({ route , navigation }) => {
  const { product } = route?.params || {};
  console.log(product);
const onBackPress =()=>{
  navigation.goBack();
}
const onContact=()=>{
  const phone ='7871263462'
  Linking.openURL(`tel: ${phone}`);
  
  const email ='support@gmail.com'
  Linking.openURL(`mailto: ${email}`);
}

  return (
    <SafeAreaView>
    <ScrollView style={styles.container} >
    <View style={styles.image}>{product?.image}</View>
    <View  style={styles.content}>
    <Text style={styles.txt}>{product?.title}</Text>
    <Text style={styles.price}>{product?.price}</Text>
    <Text style={styles.description}>{product?.description}</Text>
    </View>    
    <Pressable onPress={onBackPress} style={styles.back} >
        <Back style={styles.backIcon}/>
      </Pressable> 
    </ScrollView>
    <View style={styles.foot}>
      <Pressable style={styles.bookmark} >
        <Bookmark style={styles.bookmarkIcon}/>
      </Pressable>
      <Button onPress={onContact} style={styles.buttonIcon}  title={'Contact Seller'}/>
    </View>
    </SafeAreaView>
  )
}

export default ProductDetails



