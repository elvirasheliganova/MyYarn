import React, { useState, useContext } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import { YarnContext } from '../components/YarnContext'
import { LinearGradient } from 'expo-linear-gradient';

const BoxRoom = ({navigation}) => {

  const [yarns, setYarns] = useContext(YarnContext)

  const goToYarnPage = (cone) => {
    navigation.navigate('ConePage', {coneId: cone.id }
    //{postId: id})
    )}
  
//console.log(yarns)

  return (
    <View style={{flex: 1, alignItems: 'center', }}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#D2F0EE', 'transparent']}
        style={{flex: 1,width: '100%', paddingHorizontal: 20,
          
          
          backgroundColor: '#C7CAB6'}}
          
      >
      
      
    
      <FlatList
      
  data={yarns}
  renderItem={ ({item, index}) => (
    <Pressable style={{ 
      
      borderRadius: 10,
      backgroundColor: '#D7DCCA80',
      marginVertical: 10 }}
    onPress={() => goToYarnPage(item)}
    >
      {/*<Image source={{uri: item.uri}}  style={{width: 100, height: 100}} />*/}
      
     
        <Pressable style={{margin:10, padding: 5, }}>
        <Image source={{uri: item.image[0]}} style={{  height:  200, width: 200,  borderRadius: 10, resizeMode: 'cover'}} />
        </Pressable>
      
       {/* <FlatList data={item.image} renderItem={({ item, index}) => (
        
       <Pressable 
       
       style={{margin:10, padding: 5, 
       //backgroundColor: 'lightblue'
      }}>
            <Image source={{uri: item}} style={{  height:  200, width: 200,  borderRadius: 10, resizeMode: 'cover'}} />
       </Pressable>
        ) 
       }
       horizontal

      />*/}
      <View style={{width: '100%', paddingHorizontal: 15, paddingBottom: 10}}>
        <Text style={{marginRight: 5, fontSize: 18, fontWeight: 'bold', marginBottom: 5, }}>{item.selectedYarnType}</Text>
        {item.selectedYarnType === 'Mix' && 
        <View style={{backgroundColor: 'lightgrey',width: '40%', borderRadius: 5, padding: 2,  marginBottom: 5}}>
          { item.mix.selectedMerinosMix && <Text style={{fontSize: 12}}>Merino {item.mix.selectedMerinosMix}%</Text>}
          {item.mix.selectedCashMix && <Text style={{fontSize: 12}}>Cash {item.mix.selectedCashMix}%</Text>}
          {item.mix.selectedSilkMix && <Text style={{fontSize: 12}}>Silk {item.mix.selectedSilkMix}%</Text>}
        </View>}
        <Text style={{marginRight: 5,  marginBottom: 2, fontWeight: '600'}}>{item.selectedYarnWeight} m</Text>
        <Text style={{marginRight: 5,  marginBottom: 2, fontWeight: '600'}}>{item.selectedYarnManufacturer}</Text>
        
      </View>
     
    </Pressable>
  )}
  
  />
  </LinearGradient>
    </View>
  )
}

export default BoxRoom