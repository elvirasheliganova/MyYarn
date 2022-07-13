import React, { useState, useContext } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { YarnContext } from '../components/YarnContext'

const BoxRoom = ({navigation}) => {

  const [yarns, setYarns] = useContext(YarnContext)

  const goToYarnPage = (cone) => {
    navigation.navigate('ConePage', {coneId: cone.id }
    //{postId: id})
    )}
  
//console.log(yarns)

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>BoxRoom</Text>
      
      
    
      <FlatList
      
  data={yarns}
  renderItem={ ({item, index}) => (
    <TouchableOpacity style={{flex: 1/2, backgroundColor: 'lightpink'}}
      onPress={() => goToYarnPage(item)}
    >
      {/*<Image source={{uri: item.uri}}  style={{width: 100, height: 100}} />*/}
      <Text>{item.selectedYarnType}</Text>
      <Text>{item.selectedYarnWeight}</Text>
      <FlatList data={item.image} renderItem={({ item, index}) => (
        <Image source={{uri: item}} style={{ flex: 1/5, height: 200, width: 200, resizeMode: 'cover'}} />)
       }
       horizontal

       />
     
     
    </TouchableOpacity>
  )}
  />
    </View>
  )
}

export default BoxRoom