import { View, Text, TextInput, FlatList, Image, Pressable, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Checkbox from 'expo-checkbox'
import React, { useContext, useState, useCallback } from 'react'
import { YarnContext } from '../components/YarnContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

const Search = ({ navigation }) => {
  const { t, i18n } = useTranslation()
  const [yarns, setYarns] = useContext(YarnContext)
  const [value, onChangeText] = useState()
  const [checkedBoxes, setCheckedBoxes] = useState({
    isComposition: false,
    isWeight: false,
    isColor: false,
    isManufactirer: false,
    isArticle: false
  })


  const searchWeight = yarns.filter(yarn => parseInt(yarn.weight) >= value)
  const searchComposition = value ? yarns.filter((yarn) => t(`${yarn.selectedYarnType}`).toLowerCase().includes(value.toLowerCase())) : null
  const searchColor = value ? yarns.filter((yarn) => t(`${yarn.selectedYarnColor}`).toLowerCase().includes(value.toLowerCase())) : null
  const searchManufacturer = value ? yarns.filter(yarn => t(`${yarn.selectedYarnManufacturer}`).toLowerCase().includes(value.toLowerCase())) : null
  const searchArticle = value ? yarns.filter(yarn => yarn.article.includes(value)) : null


  const goToYarnPage = (cone) => {
    {
      navigation.navigate(t('yarn box'), {
        screen: 'ConePage',
        params: { coneId: cone.id }
      }),
        onChangeText(value)
    }
  }

  const checkedBoxesLabels = {
    isComposition: "composition",
    isWeight: "quantity",
    isColor: "color",
    isManufactirer: "manufacturer",
    isArticle: "article"
  }

  const onChangeChekedBoxes = useCallback((checkedBox) => (newValue) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [checkedBox]: newValue
    })
  }, [])
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: 'center' }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, }} >
          <LinearGradient
            colors={['#D2F0EE', 'transparent']}
            style={styles.gradientContainer}
          >
            <View style={{ paddingTop: 40 }}>
              <Text style={{ fontSize: 24, color: '#07544b', fontWeight: 'bold' }}>{t('search by')}</Text>
              <View style={{ justifyContent: 'space-between', paddingVertical: 15, }} >
                {Object.keys(checkedBoxes).map((checkedBox) => {
                  return (
                    <View style={{ flexDirection: 'row', marginVertical: 5, alignItems: 'flex-end' }} key={checkedBox}>
                      <Checkbox
                        style={{ marginRight: 8, }}
                        value={checkedBoxes[checkedBox]}
                        onValueChange={onChangeChekedBoxes(checkedBox)}
                        color={checkedBoxes[checkedBox] ? '#4630EB' : undefined}

                      />
                      <Text style={{ fontSize: 14, color: '#504412', fontWeight: 'bold', }}>{t(`${checkedBoxesLabels[checkedBox]}`)}</Text>
                    </View>
                  )
                })}
              </View>
            </View>
            <View
              style={styles.texInputContainer}>
              <TextInput
                multiline
                autoCorrect={false}
                spellCheck={false}
                onChangeText={(text) => { onChangeText(text) }}
                value={value}
                style={{ padding: 10, }} />
            </View>

            {value ?
              <View style={{ flex: 1, }}>
                <View >
                  <FlatList
                    data={checkedBoxes.isComposition ? searchComposition : checkedBoxes.isWeight ? searchWeight : checkedBoxes.isColor ? searchColor : checkedBoxes.isArticle ? searchArticle : searchManufacturer}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                      <View style={styles.yarnDataContainer}>
                        <View style={{ flex: 1, paddingHorizontal: 10 }}>
                          <View style={styles.titleData}>
                            <View style={{ width: '65%' }}>
                              <View style={{ alignContent: 'center' }}>
                                <Text style={styles.yarnType}>{t(`${item.selectedYarnType}`)} </Text>
                                <Text style={[styles.yarnType, { color: '#6D645A' }]}>{item.article}</Text>
                                <Text style={styles.yarnWeight}>{t(`${item.weight}`)} {t('grams')}</Text>
                              </View>
                            </View>
                            <Pressable
                              onPress={() => goToYarnPage(item)}
                              style={styles.moreInfo}
                            >
                              <Text style={{ fontSize: 14, color: '#504412', }}>{t('more info')}</Text>
                            </Pressable>
                          </View>
                          <FlatList
                            data={item.image}
                            renderItem={({ item, index }) =>
                              <Pressable >
                                <Image source={{ uri: item }} style={styles.image} />
                              </Pressable>
                            }
                            horizontal
                            showsHorizontalScrollIndicator={false}
                          />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5 }}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{t(`${item.length}`)} {t('mts')} / 100 {t('grams')}</Text>

                        </View>
                      </View>
                    }
                  />
                </View>
              </View> : null}
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )

}
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#C7CAB6'
  },
  texInputContainer: {
    backgroundColor: '#fdccA0',
    marginBottom: 20,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10
  },
  yarnDataContainer: {
    flex: 1,
    backgroundColor: '#CDE2D0',
    borderRadius: 10,
  },
  titleData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  yarnType: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#504412'
  },
  yarnWeight: {
    fontSize: 18,
    color: '#3B3629',
    fontWeight: '500',
  },
  moreInfo: {
    backgroundColor: '#DCFC98',
    padding: 10,
    borderRadius: 10
  },
  image: {
    flex: 1 / 5,
    height: 175,
    width: 175,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 10
  }
})
export default Search