import React, { useState, useContext, useEffect } from 'react'
import { View, Text, FlatList, Image, Pressable, ActivityIndicator, StyleSheet } from 'react-native'
import { YarnContext } from '../components/YarnContext'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';



const BoxRoom = ({ navigation }) => {


  const { t } = useTranslation()
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
              <View style={{ backgroundColor: '#EBFFFF', marginVertical: 10, borderRadius: 10, }} key={item.id} >
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
                      <Text style={styles.yarnTypeDataText}>{t(`${item.selectedYarnType}`)}</Text>
                      {item.selectedYarnType === 'mix' &&
                        <View style={styles.mixData}>
                          <View style={{ marginLeft: 'auto' }}>
                            {item.selectedAlpaca && <Text style={styles.yarnDataText}>{t('alpaca')} {item.selectedAlpaca}%</Text>}
                            {item.selectedAngora && <Text style={styles.yarnDataText}>{t('angora')} {item.selectedAngora}% </Text>}
                            {item.selectedCamel && <Text style={styles.yarnDataText}> {t('camel')} {item.selectedCamel}%  </Text>}
                            {item.selectedMerino && <Text style={styles.yarnDataText}>{t('merino')} {item.selectedMerino}% </Text>}
                            {item.selectedCash && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('cashemere')} {item.selectedCash}% </Text>}
                            {item.selectedWool && <Text style={styles.yarnDataText}>{t('wool')} {item.mix.selectedWool}% </Text>}
                            {item.selectedLamb && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('lamb')}{item.selectedLamb}% </Text>}
                            {item.selectedLinen && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('linen')}{item.selectedLinen}% </Text>}
                            {item.selectedKid && <Text style={styles.yarnDataText}>{t('kid mohair')} {item.selectedKid}% </Text>}
                            {item.selectedSKid && <Text style={styles.yarnDataText}>{t('superkid mohair')} {item.selectedSKid}%</Text>}
                            {item.selectedYak && <Text style={styles.yarnDataText}>{t('yak')} {item.mix.selectedYak}% </Text>}
                            {item.selectedCotton && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('silk')} {item.selectedSilk}% </Text>}
                            {item.selectedSilk && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('cotton')} {item.selectedCotton}%</Text>}
                            {item.selectedViscose && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('viscose')} {item.selectedViscose}% </Text>}
                            {item.selectedElastan && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('elastan')} {item.selectedElastan}% </Text>}
                            {item.selectedPa && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('pa')} {item.selectedPa}% </Text>}
                            {item.selectedOther && <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#07544b' }}>{t('other')} {item.selectedOther}% </Text>}
                          </View>
                        </View>}

                    </View>
                    <Text style={{ marginRight: 5, marginBottom: 2, paddingLeft: 8, fontWeight: '600', color: '#504412' }}>{item.length} {t('mts')} / 100 {t('grams')} </Text>
                    <Text style={{ marginRight: 5, marginBottom: 2, fontWeight: '600', paddingLeft: 8, color: '#504412' }}>{t(`${item.selectedYarnManufacturer}`)}</Text>
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
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  yarnTypeData: {
    flexDirection: 'row',
    backgroundColor: '#d2d9c0',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  yarnTypeDataText: {
    marginRight: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#07544b',

  },
  yarnDataText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#07544b',

  },
  mixData: {

    flex: 1,
    alignItems: 'flex-start',

  }

})
export default BoxRoom