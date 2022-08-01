import { View, Text, TextInput, FlatList, Image, TouchableOpacity} from 'react-native'
import React, {useRef, useContext, useState} from 'react'
import { YarnContext } from './YarnContext';
import { LinearGradient } from 'expo-linear-gradient';

const Search = ({navigation}) => {
  const [yarns, setYarns] = useContext(YarnContext)
  const [value, onChangeText] = useState()

  const goToYarnPage = (cone) => {
    navigation.navigate('BoxRoom',{
      screen: 'ConePage',
    params: {coneId: cone.id} })
    }
    //{postId: id})
    
  
  //console.log(yarns)
  const searchData = yarns.filter(yarn => yarn.selectedYarnType.includes(value))
  //console.log(value)
  //console.log(searchData)

  
    
     
      
  //console.log(image)
  //console.log(yarns)

  
  
  return (
    <View style={{flex: 1, justifyContent: 'center'}} >
       <LinearGradient
        // Background Linear Gradient
        colors={['#D2F0EE', 'transparent']}
        style={{flex: 1,
          
          paddingHorizontal: 25, 
          backgroundColor: '#C7CAB6'}}
          
      >
      <View style={{paddingTop: 50,  height: 100}}>
        <Text style={{fontSize: 24}}>Search by Yarn Type</Text>
      </View>
      <View
      style={{
        backgroundColor: '#fdccA0',
        marginBottom: 20,
       height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10
      }}>
      <TextInput 
        multiline
        numberOfLines={4}
        onChangeText={(text) => {onChangeText(text)}}
        value={value}
        style={{padding: 10}} />
        </View>
        
          <View style={{  backgroundColor:  '#D7DCCA', height: 500, borderColor: '#000000',
        borderWidth: 1, borderRadius: 10, padding: 10}}>
          <Text>In Your BoxRoom You Have</Text>
          <FlatList
          data={searchData}
          renderItem={({item, index}) => 
          <TouchableOpacity 
          onPress={() => goToYarnPage(item)}
           >
          <Text>{item.selectedYarnType}</Text>
          <Text>{item.selectedYarnWeight}</Text>
          <Text>{item.selectedYarnManufacturer}</Text>
          <FlatList 
          data={item.image}  renderItem={({item, index}) => 
            <Image source={{uri: item}} style={{ flex: 1/5, height: 200, width: 200, resizeMode: 'cover', borderRadius: 10}}  />
          } />
          </TouchableOpacity>
        }
          />
        
          </View>
          </LinearGradient>
       
    </View>
  )
  
}

export default Search
