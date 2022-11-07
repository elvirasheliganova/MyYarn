import React, { useState, useContext, useEffect } from 'react'
import { View, Text, FlatList, Image, Pressable, ActivityIndicator, StyleSheet } from 'react-native'
import { YarnContext } from '../components/YarnContext'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BoxRoom = ({ navigation }) => {

  const [yarns, setYarns] = useContext(YarnContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    yarns && setLoading(false), []
  })

  const goToYarnPage = (cone) => {
    navigation.navigate('ConePage', { coneId: cone.id, cone: cone })

  }
  const removeYarn = (cone) => {
    const coneIndex = yarns.findIndex((yarn) => yarn.id === cone.id)
    {
      setYarns(prevYarns =>
        [...prevYarns.slice(0, coneIndex), ...prevYarns.slice(coneIndex + 1)])
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <LinearGradient
        colors={['#D2F0EE', 'transparent']}
        style={styles.gradientContainer}
      >
        {loading ?
          <ActivityIndicator /> :
          <FlatList
            data={yarns}
            renderItem={({ item, index }) => (
              <View style={{ backgroundColor: '#D7DCCA80', marginVertical: 10, borderRadius: 10, }} key={item.id}>
                <Pressable

                  onPress={() => { goToYarnPage(item) }}

                >
                  <Pressable style={styles.delete}
                    onPress={() => {
                      removeYarn(item)
                    }}
                  >
                    <MaterialCommunityIcons name="close-box-outline" size={24} color='#6D645A' />
                  </Pressable>
                  <Pressable style={{ margin: 10, padding: 5, height: 280, width: 280, }}>
                    <Image source={{ uri: item.image[0] }} style={styles.image} />
                  </Pressable>
                  <View style={styles.detailsData}>
                    <View style={styles.yarnTypeData}>
                      <Text style={styles.yarnTypeDataText}>{item.selectedYarnType}</Text>
                      {item.selectedYarnType === 'Mix' &&
                        <View style={styles.mixData}>
                          {item.mix.selectedMerinosMix && <Text style={styles.yarnDataText}>Merino {item.mix.selectedMerinosMix} </Text>}
                          {item.mix.selectedCashMix && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>Cash {item.mix.selectedCashMix} </Text>}
                          {item.mix.selectedCottonMix && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>Silk {item.mix.selectedSilkMix} </Text>}
                          {item.mix.selectedSilkMix && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>Cotton {item.mix.selectedCottonMix} </Text>}
                          {item.mix.selectedViscoseMix && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>Viscose {item.mix.selectedViscoseMix} </Text>}
                        </View>
                      }
                    </View>
                    <Text style={{ marginRight: 5, marginBottom: 2, fontWeight: '600', color: '#372310' }}>{item.selectedYarnWeight} m</Text>
                    <Text style={{ marginRight: 5, marginBottom: 2, fontWeight: '600', color: '#372310' }}>{item.selectedYarnManufacturer}</Text>
                  </View>
                </Pressable>
              </View>

            )}
            showsVerticalScrollIndicator={false}
          />
        }
      </LinearGradient>
    </View>

  )
}
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#C7CAB6'
  },
  delete: {
    width: 30,
    height: 30,
    borderRadius: 5,
    position: 'absolute',
    left: 300,
    top: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  detailsData: {
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 10
  },
  yarnTypeData: {
    flexDirection: 'row',
    backgroundColor: '#d2d9c0',
    borderRadius: 5,
    padding: 2,
    marginBottom: 5,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  yarnTypeDataText: {
    marginRight: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#07544b',
  },
  yarnDataText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#07544b'
  },
  mixData: {
    flexDirection: 'row',
    maxWidth: '60%',
    flexWrap: 'wrap'
  }

})
export default BoxRoom