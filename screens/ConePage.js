import { View, Text, FlatList, Image, TextInput, Pressable, ImageBackground, Alert } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { YarnContext } from '../components/YarnContext'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
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
  const [newWeight, onChangeNewWeight] = useState(null)
  const [isGauge, setIsGauge] = useState(false)
  const [gaugeImage, setGaugeImage] = useState()
  const [edit, setEdit] = useState(false)

  const saveData = async () => {
    await AsyncStorage.setItem('yarns', JSON.stringify(yarns)) 
  }

 useEffect(() => {
if(yarn.gauge ) setIsGauge(true)
else setIsGauge(false)
}, []) 

   
 // setYarns(newYarns)
  
  

 
const onPress =()  => {

  
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
        <View style={{marginHorizontal: 15, paddingHorizontal: 15, paddingVertical: 10, marginTop: 5,
            backgroundColor: '#D7DCCA80'
            //'#EFECE7'
            , 
            borderRadius: 10, 
            shadowColor: '# 8C9284',
           shadowOffset: {width: -2, height: -4},
           shadowOpacity: 0.1,
            //shadowRadius: 3, 
             }}>
              {console.log(yarn)}
              
                <View style={{ flexDirection:'row',  backgroundColor:  '#DCFC98', justifyContent: 'space-between', 
                //borderWidth:  1 , 
                
                //borderColor: 'silver', 
                borderRadius: 10, 
                //shadowColor: '# 8C9284',
     //shadowOffset: {width: 2, height: 4},
     //shadowOpacity: 0.1,
     //shadowRadius: 2,  
    padding: 5}}>
                <View style={{  }}>
                  <Text style={{fontSize: 18, fontWeight: '600' }}>{yarn.selectedYarnType} </Text>
                </View>
                <View style={{  flexDirection:'row', alignItems: 'flex-end',  }}>
                 { yarn.mix  && yarn.mix.selectedCashMix ? <Text style={{fontSize: 14, fontWeight: '600' }}>Cash {yarn.mix.selectedCashMix} </Text> : null}
                  { yarn.mix  && yarn.mix.selectedMerinosMix ? <Text style={{fontSize: 14, fontWeight: '600' }}> Merinos {yarn.mix.selectedMerinosMix} </Text> : null}
                  { yarn.mix  && yarn.mix.selectedSilkMix ? <Text style={{fontSize: 14, fontWeight: '600' }}> Silk {yarn.mix.selectedSilkMix} </Text> : null} 
                 
                  
                </View>
                
              </View>
              <View style={{marginTop: 5, flexDirection:'row', alignItems: 'flex-end',  justifyContent: 'space-between',  paddingHorizontal: 5}}>
                <Text style={{fontSize: 14,  fontWeight: '600'}}>{yarn.selectedYarnWeight} mts per 100 grams</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>Weight </Text>
               
              </View>
              <View style={{marginTop: 5, flexDirection:'row', alignItems: 'flex-end',  justifyContent: 'space-between',  paddingHorizontal: 5}}>
                <Text style={{fontSize: 14,  fontWeight: '600'}}>{yarn.selectedYarnManufacturer} </Text>
                <Text style={{fontSize: 14, color: 'grey'}}>Manufactured by </Text>
                
              </View>
             {yarn.weight ?  <View style={{marginTop: 5, flexDirection:'row', alignItems: 'flex-end',  justifyContent: 'space-between',  paddingHorizontal: 5}}>
                <View style={{flexDirection: 'row',  alignItems: 'flex-end', }}>
                { edit ? <>
                 <TextInput
              style={{  height: 25,
                backgroundColor: '#BFC3AE',
                //margin: 10,
                width: 45,
                borderRadius: 5,
                padding: 5,
                fontSize: 14,
                fontWeight: 'bold'}}
                textAlign = {'left'}
              onChangeText={ (value) => onChangeNewWeight(value)}
              value={newWeight}
              placeholder="500 "
              placeholderTextColor={'#867D59'}
        
              keyboardType="numeric"
              />
              <View style={{ height: 25, justifyContent: 'center'}}>
                <Text>grams</Text>
              </View>
              <Pressable 
                    style={{width: 25, height: 25, marginLeft: 10, borderRadius: 15, backgroundColor:  '#fdccA0',  justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => {
                      setEdit(false)
                      yarn.weight = newWeight
                    }}
                     >
                    <Feather name="check" size={25} color="black" />
                  </Pressable>
              </>  :
                <Text style={{fontSize: 14,  fontWeight: '600'}}>{yarn.weight} grams </Text>  }
                  { !edit ? <Pressable 
                    style={{width: 25, height: 25, marginLeft: 10, borderRadius: 15, backgroundColor: '#DCFC98',  justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => setEdit(true)}
                     >
                    <Feather name="edit-3" size={20} color="black" />
                  </Pressable> : null}
                </View>
                <Text style={{fontSize: 14, color: 'grey'}}>Cone weight </Text>
               
                
              </View> : null}

              <View style={{marginTop: 5, flexDirection:'row', alignItems: 'flex-end', justifyContent: 'space-between',  paddingHorizontal: 5 }}>
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
            
                style={{ marginRight: 20, 
            
                }}>
                  <Image source={{uri: item}} style={{  height:  250, width: 250,  borderRadius: 10, resizeMode: 'cover'}} />
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
              <View style={{ marginBottom: 20, flexDirection:'row', justifyContent: 'space-between', backgroundColor:  '#DCFC98', 
                //borderWidth:  1 , 
                
                //borderColor: 'silver', 
                borderRadius: 10, 
                //shadowColor: '# 8C9284',
     //shadowOffset: {width: 2, height: 4},
     //shadowOpacity: 0.1,
     //shadowRadius: 2,  
    padding: 5}}>
              
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
              placeholder="32r x 20s"
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
              placeholder="3mm"
              placeholderTextColor={'#867D59'}
        
              keyboardType="numeric"
              />
              </View>
              </View> : 
              <>
              <View style={{ marginTop: 10}}>
              <Text style={{marginBottom: 5, color: '#312d09', fontSize: 14, fontWeight:'bold'}}>Yarn gauge is {yarn.gauge} </Text>
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
                backgroundColor: '#d4e3d9'
                //'#D9D4D0'
                ,
                marginLeft: 10,
                borderWidth: gaugeImage ?  0 : 1 , 
                
                borderColor: 'silver', borderRadius: 10, justifyContent: 'center', alignItems: 'center',  }}>
                  {gaugeImage ? <ImageBackground source={{uri: gaugeImage }} style={{flex: 1, alignSelf: 'flex-start', shadowColor: '# 8C9284',
     shadowOffset: {width: -2, height: -4},
     shadowOpacity: 0.1,
     shadowRadius: 3, }} imageStyle={{ height: 130, width: 130, borderRadius: 10, resizeMode: 'cover',   }} >
        {   !yarn.gaugeImage ?   <Pressable style={{width: 15, height: 15 , 
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
          </Pressable> : null}
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
            onPress= {() => {
              if (gauge && needles && good && gaugeImage) {yarn.gauge = gauge
                yarn.needles = needles
                yarn.good = good
               yarn.gaugeImage = gaugeImage
                setIsGauge(true)
              
                var index = yarns.indexOf(yarn)
                if (index !== -1) {
                  yarns[index] = yarn;
              }
              setYarns(yarns)
              saveData()}
              else {
                Alert.alert(
                  "No full gauge data",
                  "Please enter gauge, needles, photo and what your yarn is good for",
                  [
                    
                    { text: "OK",
                     //onPress: () => console.log("OK Pressed") 
                    }
                  ]
                );
              }}}>
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