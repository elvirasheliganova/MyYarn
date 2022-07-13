import { View, Text, TextInput, FlatList, Image, TouchableOpacity} from 'react-native'
import React, {useRef, useContext, useState} from 'react'
import { YarnContext } from './YarnContext';

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
    <View >
      <Text>Search by Yarn Type</Text>
      <View
      style={{
        backgroundColor: 'pink',
       height: 50,
        borderColor: '#000000',
        borderWidth: 1,
      }}>
      <TextInput 
        multiline
        numberOfLines={4}
        onChangeText={(text) => {onChangeText(text)}}
        value={value}
        style={{padding: 10}} />
        </View>
        
          <View style={{ backgroundColor: 'lightgreen', height: 500, borderColor: '#000000',
        borderWidth: 1}}>
          <Text>React Examples</Text>
          <FlatL
          data={searchData}
          renderItem={({item, index}) => 
          <TouchableOpacity 
          onPress={() => goToYarnPage(item)}
           >
         
          <Text>{item.selectedYarnType}</Text>
          <FlatList 
          data={item.image}  renderItem={({item, index}) => 
            <Image source={{uri: item}} style={{ flex: 1/5, height: 200, width: 200, resizeMode: 'cover'}}  />
          } />
          </TouchableOpacity>
        }
          />
        
          </View>
       
    </View>
  )
  
}

export default Search
