import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {styles} from './styles'
import Header from '../../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Categories } from '../../../data/Categories'
import { string } from 'yup'
import CategoryBox from '../../../components/CategoryBox'
import { Products } from '../../../data/Products'
import ProductHomeItem from '../../../components/ProductHomeItem'

const Home = ({navigation }) => {

  const [selectedCategory,setSelectedCategory]=useState();
  const [filteredProducts,setFilteredProducts]=useState(Products);
  const [keyword,setKeyword]=useState();


  useEffect(()=>{
    if (selectedCategory &&!keyword) {
      const updatedProducts = Products.filter((product)=>product?.category===selectedCategory)  
      setFilteredProducts(updatedProducts)
    }
    else if (selectedCategory && keyword) {
      const updatedProducts = Products.filter((product)=>product?.category===selectedCategory&&product?.title?.toLowerCase().includes(keyword?.toLowerCase()))  
      setFilteredProducts(updatedProducts)
    }
    else if (!selectedCategory && keyword) {
      const updatedProducts = Products.filter((product)=>product?.title?.toLowerCase().includes(keyword?.toLowerCase()))  
      setFilteredProducts(updatedProducts)
    }
    else if (!keyword&&!selectedCategory){
      setFilteredProducts(Products)
    }
  },[selectedCategory,keyword])
  const renderCategoryItem = ({item , index}) =>{
    return(
       <CategoryBox 
       onPress={()=>setSelectedCategory(item?.id)}
       isSelected={item?.id===selectedCategory}
       isFirst={index===0} 
       title={item?.title} 
       image={item?.image}/>  
    )
  }

  const renderProductsItem =({item})=>{
    const onProductPress = (product) =>{
      navigation.navigate('ProductDetails',{product})
    }
    return(
     
      <ProductHomeItem onPress={()=>onProductPress(item)} {...item}/>
     
   )
  }
  return (
   
      <View style={styles.container}>
    <Header onSearch={setKeyword} keyword={keyword} showSearch title={'Find All You Need'} />
    <SafeAreaView>
    <FlatList style={styles.list} horizontal data={Categories} renderItem={renderCategoryItem} keyExtractor={(item,index)=> string(index)}/>
    </SafeAreaView>
    
  <FlatList  numColumns={2} style={styles.Productlist} data={filteredProducts} renderItem={renderProductsItem} keyExtractor={(item)=> string(item.id)} />
  
  </View>
 
    
  )
}

export default Home