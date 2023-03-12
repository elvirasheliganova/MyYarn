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
                      <View style={{}} >
                        <Text style={[styles.yarnTypeDataText, { color: '#504412' }]}>{t(`${item.selectedYarnType}`)}</Text>
                        <Text style={[styles.yarnTypeDataText, { color: '#6D645A', fontSize: item.article ? 18 : 14, flexWrap: 'wrap', flexDirection: 'row', }]}>{item.article ? item.article : t('noName')}</Text>
                      </View>
                      {item.selectedYarnType === 'mix' &&
                        <View style={styles.mixData}>
                          <View style={{ marginLeft: 'auto' }}>
                            {item.selectedAlpaca && <Text style={styles.yarnDataText}>{t('alpaca')} {item.selectedAlpaca}%</Text>}
                            {item.selectedAngora && <Text style={styles.yarnDataText}>{t('angora')} {item.selectedAngora}% </Text>}
                            {item.selectedCamel && <Text style={styles.yarnDataText}>{t('camel')} {item.selectedCamel}%  </Text>}
                            {item.selectedMerino && <Text style={styles.yarnDataText}>{t('merinos')} {item.selectedMerino}% </Text>}
                            {item.selectedCash && <Text style={styles.yarnDataText}>{t('cashmere')} {item.selectedCash}% </Text>}
                            {item.selectedWool && <Text style={styles.yarnDataText}>{t('wool')} {item.selectedWool}% </Text>}
                            {item.selectedLamb && <Text style={styles.yarnDataText}>{t('lamb')}{item.selectedLamb}% </Text>}
                            {item.selectedLinen && <Text style={styles.yarnDataText}>{t('linen')}{item.selectedLinen}% </Text>}
                            {item.selectedKid && <Text style={styles.yarnDataText}>{t('kid mohair')} {item.selectedKid}% </Text>}
                            {item.selectedSKid && <Text style={styles.yarnDataText}>{t('superkid mohair')} {item.selectedSKid}%</Text>}
                            {item.selectedYak && <Text style={styles.yarnDataText}>{t('yak')} {item.mix.selectedYak}% </Text>}
                            {item.selectedSilk && <Text style={styles.yarnDataText}>{t('silk')} {item.selectedSilk}% </Text>}
                            {item.selectedCotton && <Text style={styles.yarnDataText}>{t('cotton')} {item.selectedCotton}%</Text>}
                            {item.selectedViscose && <Text style={styles.yarnDataText}>{t('viscose')} {item.selectedViscose}% </Text>}
                            {item.selectedElastan && <Text style={styles.yarnDataText}>{t('elastan')} {item.selectedElastan}% </Text>}
                            {item.selectedPa && <Text style={styles.yarnDataText}>{t('pa')} {item.selectedPa}% </Text>}
                            {item.selectedOther && <Text style={styles.yarnDataText}>{t('other')} {item.selectedOther}% </Text>}
                          </View>
                        </View>}
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ marginBottom: 2, paddingLeft: 8, fontWeight: '600', color: '#504412' }}>{item.length} {t('mts')} / 100 {t('grams')} </Text>
                      <Text style={{ marginBottom: 2, fontWeight: '600', paddingLeft: 8, color: '#504412' }}>{t(`${item.selectedYarnManufacturer}`)}</Text>
                    </View>
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
    flex: 1,
    // marginRight: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#07544b',

  },
  yarnDataText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6D645A'
  },
  mixData: {
    paddingLeft: 10,
    flex: 1,
    alignItems: 'flex-start',
  }

})
export default BoxRoom