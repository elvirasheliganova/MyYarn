import React, { useState, useContext, useEffect } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import { YarnContext } from '../components/YarnContext'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BoxRoom = ({ navigation }) => {

  const [yarns, setYarns] = useContext(YarnContext)
  const [loading, setLoading] = useState(true);

  const startLoading = () => {

  };

  useEffect(() => {
    yarns && setLoading(false),

      []
  })

  const goToYarnPage = (cone) => {
    navigation.navigate('ConePage', { coneId: cone.id, cone: cone }
      //{postId: id})
    )
  }
  const removeYarn = (cone) => {
    const coneIndex = yarns.findIndex((yarn) => yarn.id === cone.id)
    {
      setYarns(prevYarns =>
        [...prevYarns.slice(0, coneIndex), ...prevYarns.slice(coneIndex + 1)])
      //[prevYarns.filter(yarn => yarn.id !== cone.id)]) 
      //console.log(coneIndex)
    }
  }
  //



  return (

    <View style={{ flex: 1, alignItems: 'center', }}>

      <LinearGradient
        // Background Linear Gradient
        colors={['#D2F0EE', 'transparent']}
        style={{
          flex: 1, width: '100%', paddingHorizontal: 20,


          backgroundColor: '#C7CAB6'
        }}

      >
        {loading ? <ActivityIndicator /> :



          <FlatList

            data={yarns}

            renderItem={({ item, index }) => (




              <View style={{ backgroundColor: '#D7DCCA80', marginVertical: 10, borderRadius: 10, }}>
                <Pressable
                  key={item.id}
                  style={{


                  }}
                  onPress={() => goToYarnPage(item)}
                >
                  {/*<Image source={{uri: item.uri}}  style={{width: 100, height: 100}} />*/}
                  <Pressable style={{
                    width: 30, height: 30,
                    //backgroundColor: '#C7CAB6', 
                    borderRadius: 5,
                    position: 'absolute',
                    left: 310,
                    top: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                    onPress={() => {
                      removeYarn(item)
                    }
                    }>
                    <MaterialCommunityIcons name="close-box-outline" size={24} color='#6D645A' />


                  </Pressable>

                  <Pressable style={{ margin: 10, padding: 5, height: 280, width: 280, }}>
                    <Image source={{ uri: item.image[0] }} style={{ borderRadius: 10, height: '100%', width: '100%', resizeMode: 'cover' }} />
                  </Pressable>
                  {/*  {console.log(item)} */}

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
                  <View style={{ width: '100%', paddingHorizontal: 15, paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#d2d9c0', borderRadius: 5, padding: 2, marginBottom: 5, alignItems: 'flex-end', justifyContent: 'space-between' }}>
                      <Text style={{ marginRight: 25, fontSize: 18, fontWeight: 'bold', color: '#07544b', }}>{item.selectedYarnType}</Text>
                      {item.selectedYarnType === 'Mix' &&
                        <View style={{ flexDirection: 'row' }}>
                          {item.mix.selectedMerinosMix && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>Merino {item.mix.selectedMerinosMix} </Text>}
                          {item.mix.selectedCashMix && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>Cash {item.mix.selectedCashMix} </Text>}
                          {item.mix.selectedSilkMix && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>Silk {item.mix.selectedSilkMix}</Text>}
                        </View>}
                    </View>

                    <Text style={{ marginRight: 5, marginBottom: 2, fontWeight: '600', color: '#372310' }}>{item.selectedYarnWeight} m</Text>
                    <Text style={{ marginRight: 5, marginBottom: 2, fontWeight: '600', color: '#372310' }}>{item.selectedYarnManufacturer}</Text>

                  </View>

                </Pressable>
              </View>

            )}

            extraData={yarns}
            showsVerticalScrollIndicator={false}
          />}
      </LinearGradient>
    </View>

  )
}

export default BoxRoom