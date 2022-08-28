import { View, Text, FlatList, Image, TextInput, Pressable, ImageBackground } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { YarnContext } from '../components/YarnContext'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ConePage = ({ route}) => {

  const [yarns, setYarns] = useContext(YarnContext)
  //const [cone, setCone] = useContext(YarnContext)
  const {coneId, cone} = route.params
  
  //
  

  const yarn = yarns.find(yarn => yarn.id === coneId)
  

  const [gauge, onChangeGauge] = useState(null);
  const [needles, onChangeNeedles] = useState(null);
  const [good, onChangeGood] = useState(null);
  const [isGauge, setIsGauge] = useState(false)
  const [gaugeImage, setGaugeImage] = useState()

  const saveData = async () => {
    await AsyncStorage.setItem('yarns', JSON.stringify(yarns)) 
  }

 useEffect(() => {
if(yarn.gauge ) setIsGauge(true)
else setIsGauge(false)
}, []) 

   
 // setYarns(newYarns)
  
  

 
const onPress =()  => {

  yarn.gauge = gauge
  yarn.needles = needles
  yarn.good = good
 yarn.gaugeImage = gaugeImage
  setIsGauge(true)

  var index = yarns.indexOf(yarn)
  if (index !== -1) {
    yarns[index] = yarn;
}
setYarns(yarns)
saveData()
   /*setCone(prevCone => 
    [...prevCone, gauge, needles, good, gaugeImage ]) 
   
  setYarns(prevYarns => 
      [...prevYarns, cone])
   */
  //saveData()   
     
    
    
  //console.log(yarn.gaugeImage)
}
const pickImage3 = async () => {
    
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4,3],
    quality: 1,
  })
  //setGallery([...gallery, result.uri])
  //console.log(image)
  //console.log(gallery[0].type)
 
  
  

 
    //setImage(result.uri)
  { setGaugeImage(result.uri)
   // console.log(gaugeImage)
  }
  
}
 { 
  
  //yarn = yarn.push('1')
 //console.log (yarn.gauge)
 }

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        // Background Linear Gradient
        
        colors={['#D2F0EE', 'transparent']}
        style={{flex: 1,
          
          
          backgroundColor: '#C7CAB6'}}
          
      >
        <View style={{}}>
        <View style={{marginHorizontal: 15, paddingHorizontal: 15, paddingVertical: 10, marginTop: 10,
            backgroundColor: '#D7DCCA80'
            //'#EFECE7'
            , 
            borderRadius: 10, 
            shadowColor: '# 8C9284',
           shadowOffset: {width: -2, height: -4},
           shadowOpacity: 0.1,
            //shadowRadius: 3, 
             }}>
              <View style={{ flexDirection:'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600' }}>{yarn.selectedYarnType} </Text>
               
               
                
              </View>
              <View style={{marginTop: 5, flexDirection:'row', alignItems: 'flex-end',  justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14,  fontWeight: '600'}}>{yarn.selectedYarnWeight} mts per 100 grams</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>Weight </Text>
               
              </View>
              <View style={{marginTop: 5, flexDirection:'row', alignItems: 'flex-end',  justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14,  fontWeight: '600'}}>{yarn.selectedYarnManufacturer} </Text>
                <Text style={{fontSize: 14, color: 'grey'}}>Manufactured by </Text>
                
              </View>
              <View style={{marginTop: 5, flexDirection:'row', alignItems: 'flex-end',  justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14,  fontWeight: '600'}}>{yarn.weight} grams </Text>
                <Text style={{fontSize: 14, color: 'grey'}}>Cone weight </Text>
                
              </View>
              <View style={{marginTop: 5, flexDirection:'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                { yarn.isWorsted ? <Text style={{fontSize: 14,  fontWeight: '600'}}>Worsted</Text> : null}
                { yarn.isCarded ? <Text style={{fontSize: 14,  fontWeight: '600'}}>Carded</Text> : null}
                { yarn.isAngled ? <Text style={{fontSize: 14,  fontWeight: '600'}}>Angled </Text> : null}
                { yarn.isWorsted || yarn.isCarded || yarn.isAngled ? <Text style={{fontSize: 14, color: 'grey', marginLeft: 100}}>Particularity</Text> : null}
                
              </View>
            </View>
            <View style={{marginHorizontal: 20, marginVertical: 15,
            shadowColor: '# 8C9284',
            shadowOffset: {width: -2, height: -4},
            shadowOpacity: 0.1,
            shadowRadius: 3,   }}>
              <FlatList data={yarn.image} renderItem={({ item, index}) => (
            
                <View
            
                style={{ marginRight: 20  
            //backgroundColor: 'lightblue'
                }}>
                  <Image source={{uri: item}} style={{  height:  260, width: 260,  borderRadius: 10, resizeMode: 'cover'}} />
                </View>
                ) 
              }
                horizontal
                showsHorizontalScrollIndicator={false}
     
              />
            </View>
            

            

            <View style={{backgroundColor: '#c4d2c9', marginHorizontal: 15, padding: 10, borderRadius: 10}}>
           
            <>
            <View style={{flexDirection: 'row',    justifyContent: 'space-between', 
            //backgroundColor: 'grey', 
             alignItems: 'flex-start'}}>
              <View style={{ 
                //backgroundColor: 'pink', 
                }}>
              <View style={{ marginBottom: 20, 
                //backgroundColor: 'lightgreen' 
                }}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Gauge</Text>
              </View>
              { isGauge === false ? 
              <View style={{}}>
              <View style={{flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between',
            }}>
                <View>
                  <Text style={{color: '#312d09', fontSize: 14, fontWeight: 'bold'}}> Yarn gauge is </Text>
                </View>
                  <TextInput
              style={{  height: 25,
                backgroundColor: '#BFC3AE',
                width: 95,
                marginLeft: 5,

                //margin: 10,
                borderRadius: 5,
                padding: 5,
                marginBottom: 5,
                fontSize: 14,
                fontWeight: 'bold'}}
                textAlign = {'center'}
              onChangeText={ (value) => onChangeGauge(value)}
              
              value={gauge}
              placeholder="gauge"
              placeholderTextColor={'#867D59'}
        
              keyboardType="numeric"
                />
              
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', }}>
                  <View>
                    <Text  style={{color: '#312d09', fontSize: 14, fontWeight:'bold'}}> on needles </Text>
                  </View>
                  <TextInput
              style={{  height: 25,
                backgroundColor: '#BFC3AE',
                //margin: 10,
                width: 95,
                borderRadius: 5,
                padding: 5,
                fontSize: 14,
                fontWeight: 'bold'}}
                textAlign = {'center'}
              onChangeText={ (value) => onChangeNeedles(value)}
              value={needles}
              placeholder="needles"
              placeholderTextColor={'#867D59'}
        
              keyboardType="numeric"
              />
              </View>
              </View> : 
              <>
              <View style={{ marginTop: 10}}>
              <Text style={{marginBottom: 5, color: '#312d09', fontSize: 14, fontWeight:'bold'}}>Yarn gauge: {yarn.gauge} </Text>
              <Text style={{color: '#312d09', fontSize: 14, fontWeight:'bold'}}>on needles {yarn.needles}</Text>
              
              
            </View>
            
          </> } 
              </View>

                <Pressable  onPress={() =>{ 
                  pickImage3()
                   
                  }} 
              style={{ height:  130 , width: 130, 
                shadowColor: '# 8C9284',
     shadowOffset: {width: -2, height: -4},
     shadowOpacity: 0.1,
     shadowRadius: 3, 
                backgroundColor: '#D9D4D0',
                marginLeft: 10,
                borderWidth: gaugeImage ?  0 : 2 , 
                borderStyle:  'dashed', 
                borderColor: 'grey', borderRadius: 10, justifyContent: 'center', alignItems: 'center',  }}>
                  {gaugeImage ? <ImageBackground source={{uri: gaugeImage }} style={{flex: 1, alignSelf: 'flex-start', shadowColor: '# 8C9284',
     shadowOffset: {width: -2, height: -4},
     shadowOpacity: 0.1,
     shadowRadius: 3, }} imageStyle={{ height: 130, width: 130, borderRadius: 10, resizeMode: 'cover',   }} >
              <Pressable style={{width: 15, height: 15 , 
            backgroundColor: '#C7CAB6', 
            borderRadius: 5,
            position: 'absolute',
            left: 110,
            top: 3,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress = {() => setGaugeImage()}>
             <MaterialCommunityIcons name="close-box-outline" size={14} color='#fdccA0' />
          </Pressable>
                </ImageBackground> :
                    <MaterialCommunityIcons name="file-image-plus-outline" size={30} color="grey" /> }
                </Pressable> 
            </View>
            
            <View style={ {flexDirection: 'row', marginLeft: 25, alignItems:'center' }}>
              <View>
              
              
              </View>
            
             
              
            </View>

            <View style={ {flexDirection: 'row',  marginTop: 10, alignItems: 'center', justifyContent: 'space-between' }}>
             {isGauge === false  ? <>
             <View>
                <Text style={{color: '#312d09', fontSize: 14, fontWeight:'bold'}}>Is goog for </Text>
            
              </View>
              <TextInput
              style={{  height: 25,
                backgroundColor: '#BFC3AE',
                
                width: 230,
                borderRadius: 5,
                padding: 5,
                fontSize: 14,
                fontWeight: 'bold'
                
              }}
              textAlign = {'center'}
              onChangeText={onChangeGood}
              value={good}
              placeholder="arans/stockinet/openwork "
              placeholderTextColor={'#867D59'}
        
              keyboardType="numeric"
              />
              </> : <View>
                <Text style={{color: '#312d09', fontSize: 14, fontWeight:'bold'}}>Is goog for {yarn.good}</Text>
            
              </View> }

            </View>
            

            <Pressable style={{  backgroundColor: '#fdccA0', padding: 8, width: 130, borderRadius: 5, marginTop: 10, alignSelf: 'flex-end', alignItems: 'center'}}
            onPress={ onPress}>
              <Text style={{color: '#312d09', fontSize: 16, fontWeight:'bold'}}>Save Gauge</Text>

            </Pressable>
            </> 
            
           

            

          
          </View>
           
         
        </View>
      
      
      
      
      </LinearGradient>
    
    </View>

  )
}

export default ConePage