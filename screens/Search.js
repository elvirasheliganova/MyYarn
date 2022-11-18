import { View, Text, TextInput, FlatList, Image, Pressable, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'
import React, { useContext, useState, useCallback } from 'react'
import { YarnContext } from '../components/YarnContext';
import { LinearGradient } from 'expo-linear-gradient';
import SearchDataBox from '../components/SearchDataBox';

const Search = ({ navigation }) => {
  const [yarns, setYarns] = useContext(YarnContext)
  const [value, onChangeText] = useState()
  const [checkedBoxes, setCheckedBoxes] = useState({
    isComposition: false,
    isWeight: false,
    isColor: false,
    isManufactirer: false
  })
  const searchComposition = yarns.filter(yarn => yarn.selectedYarnType.includes(value))
  const searchWeight = yarns.filter(yarn => parseInt(yarn.weight) >= value)
  const searchColor = yarns.filter(yarn => yarn.selectedYarnColor.includes(value))
  const searchManufacturer = yarns.filter(yarn => yarn.selectedYarnManufacturer.includes(value))

  const goToYarnPage = (cone) => {
    {
      navigation.navigate('Yarn Box', {
        screen: 'ConePage',
        params: { coneId: cone.id }
      }),
        onChangeText(value)
    }
  }

  const checkedBoxesLabels = {
    isComposition: "Composition",
    isWeight: "Quantity",
    isColor: "Color",
    isManufactirer: "Manufacturer"
  }

  const onChangeChekedBoxes = useCallback((checkedBox) => (newValue) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [checkedBox]: newValue
    })
  }, [])
  return (

    <View style={{ flex: 1, justifyContent: 'center' }} >
      <LinearGradient
        colors={['#D2F0EE', 'transparent']}
        style={styles.gradientContainer}
      >
        <View style={{ paddingTop: value ? 50 : 100, height: value ? 150 : 250, }}>
          <Text style={{ fontSize: 24, color: '#07544b', fontWeight: 'bold' }}>Search by </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, marginTop: 15 }} >
            {Object.keys(checkedBoxes).map((checkedBox) => {
              return (
                <View style={{ flexDirection: 'row', }} key={checkedBox}>
                  <Checkbox
                    style={{ marginRight: 3 }}
                    value={checkedBoxes[checkedBox]}
                    onValueChange={onChangeChekedBoxes(checkedBox)}
                    color={checkedBoxes[checkedBox] ? '#4630EB' : undefined}

                  />
                  <Text style={{ fontSize: 12, color: '#42370B', fontWeight: 'bold' }}>{checkedBoxesLabels[checkedBox]}</Text>
                </View>
              )
            })}
          </View>
        </View>
        <View
          style={styles.texInputContainer}>
          <TextInput
            multiline
            onChangeText={(text) => { onChangeText(text) }}
            value={value}
            style={{ padding: 10, }} />
        </View>

        {value ?
          <View style={{ flex: 1, }}>
            <View style={{}}>
              <FlatList
                // data={Object.keys(checkedBoxes)[0] ? searchComposition : Object.keys(checkedBoxes)[1] ? searchWeight : Object.keys(checkedBoxes)[2] ? searchColor : searchManufacturer}
                data={checkedBoxes.isComposition ? searchComposition : checkedBoxes.isWeight ? searchWeight : checkedBoxes.isColor ? searchColor : searchManufacturer}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                  <View style={styles.yarnDataContainer}>
                    <View>
                      <View style={styles.titleData}>
                        <View style={{ width: '65%' }}>
                          <View style={{ flexDirection: 'row', alignContent: 'center', }}>
                            <Text style={styles.yarnType}>{item.selectedYarnType} </Text>
                            <Text style={styles.yarnWeight}> {item.weight}gr </Text>
                          </View>
                        </View>
                        <Pressable
                          onPress={() => goToYarnPage(item)}
                          style={styles.moreInfo}
                        >
                          <Text style={{ fontSize: 16 }}>More Info</Text>
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
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <SearchDataBox data={`${item.selectedYarnWeight} m`} />
                      <SearchDataBox data={item.selectedYarnManufacturer} />
                      {item.particularities.isWorsted === true ?
                        <SearchDataBox data={'Worsted'} />
                        : null
                      }
                      {item.particularities.isCarded === true ?
                        <SearchDataBox data={'Carded'} />
                        : null
                      }
                      {item.particularities.isAngled === true ?
                        <SearchDataBox data={'Angled'} />
                        : null
                      }
                    </View>
                  </View>
                }
              />
            </View>
          </View> : null}
      </LinearGradient>
    </View>
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
    marginVertical: 5,
    backgroundColor: '#D7DCCA80',
    borderRadius: 10,
    padding: 10,
  },
  titleData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  yarnType: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3B3629'
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
