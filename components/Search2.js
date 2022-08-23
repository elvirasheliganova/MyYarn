import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable} from 'react-native'
import Checkbox from 'expo-checkbox'
import React, {useRef, useContext, useState} from 'react'
import { YarnContext } from './YarnContext';
import { LinearGradient } from 'expo-linear-gradient';

const Search2 = ({navigation}) => {
  const [yarns, setYarns] = useContext(YarnContext)
  const [value, onChangeText] = useState()
  const [isComposition, setIsComposition] = useState(false);
  const [isWeight, setIsWeight] = useState(false)
  const [isColor, setIsColor] = useState(false)
  const [isManufactirer, setIsManufacturer] = useState(false)

  const goToYarnPage = (cone) => {
    navigation.navigate('BoxRoom',{
      screen: 'ConePage',
    params: {coneId: cone.id} })
    }
    //{postId: id})
    
  
  //console.log(yarns)
  //searchData = yarns.filter(yarn => yarn.selectedYarnType.includes(value))
  const searchComposition = yarns.filter(yarn => yarn.selectedYarnType.includes(value))
  const searchWeight = yarns.filter(yarn => yarn.selectedYarnWeight.includes(value))
  const searchColor = yarns.filter(yarn => yarn.selectedYarnColor.includes(value))
  const searchManufacturer = yarns.filter(yarn => yarn.selectedYarnManufacturer.includes(value))

 // const yarn = yarns.find(yarn => yarn.id === item.id)

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
      <View style={{paddingTop: value ? 50 : 100,  height: value ? 150 : 250, }}>
        <Text style={{fontSize: 24, color: '#07544b', fontWeight:'bold'}}>Search by </Text>
        <View style={{flexDirection:'row', justifyContent: 'space-between', paddingVertical: 15,  marginTop: 15}} >
        <View style={{ flexDirection: 'row', }}>
        <Checkbox
          style={{marginRight: 3}}
          value={isComposition}
          onValueChange={setIsComposition}
          color={isComposition ? '#4630EB' : undefined}
        />
        <Text style={{fontSize:12, color: '#07544b', fontWeight: 'bold'}}>Composition</Text>
      </View>
      <View style={{ flexDirection: 'row'}}>
        <Checkbox
          style={{marginRight: 3}}
          value={isWeight}
          onValueChange={setIsWeight}
          color={isWeight ? '#4630EB' : undefined}
        />
        <Text style={{fontSize:12, color: '#07544b', fontWeight: 'bold'}}>Weght</Text>
      </View>
      <View style={{ flexDirection: 'row'}}>
        <Checkbox
          style={{marginRight: 3}}
          value={isColor}
          onValueChange={setIsColor}
          color={isColor ? '#4630EB' : undefined}
        />
        <Text style={{fontSize:12, color: '#07544b', fontWeight: 'bold'}}>Color</Text>
        </View>
        <View style={{ flexDirection: 'row'}}>
        <Checkbox
          style={{marginRight: 3}}
          value={isManufactirer}
          onValueChange={setIsManufacturer}
          color={isManufactirer ? '#4630EB' : undefined}
        />
        <Text style={{fontSize:12, color: '#07544b', fontWeight: 'bold'}}>Manufacturer</Text>
        </View>
       
      </View>
        
      </View>
      <View
      style={{
        backgroundColor: '#fdccA0',
        marginBottom: 20,
       height: 40,
       justifyContent: 'center',
       // borderColor: '#000000',
        //borderWidth: 1,
        borderRadius: 10
      }}>
      <TextInput 
        multiline
       // numberOfLines={4}
        onChangeText={(text) => {onChangeText(text)}}
        value={value}
        style={{padding: 10,}} />
        
        </View>
        
         {value ? <View style={{ flex: 1,
         //'#D7DCCA'
          
          }}>
            <View style={{ }}>
            
            <FlatList
            data={isComposition ? searchComposition : isWeight ? searchWeight : isColor ? searchColor: searchManufacturer }
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => 
            <View style={{flex: 1, marginVertical: 5,  backgroundColor:  '#D7DCCA80'
            //'#c4d2c9'
            , borderRadius: 10,  padding: 10,}}>
              <View 
            
              >
                <View  style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <View style={{ width: '65%',
                   
                    }}>
                    <View style={{ flexDirection: 'row', alignContent: 'center',   }}>
                      <Text style={{fontSize: 18, fontWeight: '700', color: '#3B3629' }}>{item.selectedYarnType} </Text>
                      <Text style={{fontSize: 18,  color: '#3B3629', fontWeight: '500', }}> {item.weight}gr </Text>
                     
                     
                    </View>
                   
                    
                    
                  </View>
                 
                  <Pressable
                onPress={() => goToYarnPage(item)}
                style={{backgroundColor: '#DCFC98', padding: 10, borderRadius: 5}}
                >
                    <Text style={{fontSize: 16}}>More Info</Text>
                  </Pressable>
                </View>
              <FlatList 
            data={item.image}  
            renderItem={({item, index}) => 
                <Pressable
                
                >
                  <Image source={{uri: item}} style={{ flex: 1/5, height: 175, width: 175, resizeMode: 'cover', borderRadius: 10,  marginRight: 10, marginVertical: 10}}  />
                </Pressable>
            } 
              horizontal
              showsHorizontalScrollIndicator={false}
              />
             { console.log(item.isWorsted)}
              </View>
              <View style={{ flexDirection: 'row',  alignItems: 'center' }}>
                      <View style={{backgroundColor: '#C0D3C7', borderRadius: 8, padding: 5, marginHorizontal: 5, height: 30}}>
                        <Text style={{fontSize: 14}}>{item.selectedYarnWeight}m </Text>
                      </View>
                      <View style={{backgroundColor: '#C0D3C7', borderRadius: 8, padding: 5, marginHorizontal: 5,  height: 30}}>
                        <Text style={{fontSize: 14}}>{item.selectedYarnManufacturer} </Text>
                      </View>
                      {item.isWorsted === true ? 
                      <View style={{backgroundColor: '#C0D3C7', borderRadius: 8, padding: 5, marginHorizontal: 5,  height: 30}}>
                      <Text style={{fontSize: 14}}>Worsted</Text> 
                    </View>
                    : null
                      }
                      {item.isCarded === true ? 
                      <View style={{backgroundColor: '#C0D3C7', borderRadius: 8, padding: 5, marginHorizontal: 5,  height: 30}}>
                      <Text style={{fontSize: 14}}>Carded</Text> 
                    </View>
                    : null
                      }
                      {item.isAngled === true ? 
                      <View style={{backgroundColor: '#C0D3C7'
                       //'#D2E5DC'
                       , borderRadius: 8, padding: 5, marginHorizontal: 5,  height: 30}}>
                      <Text style={{fontSize: 14}}>Angled</Text> 
                    </View>
                    : null
                      }
                      
                     
               
                      
                    </View>
            </View>
          }
            />
          
            </View> 
            
          </View>: null}
          </LinearGradient>
       
    </View>
  )
  
}

export default Search2
