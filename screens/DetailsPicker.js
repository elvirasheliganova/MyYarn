import { View, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useContext, useCallback } from 'react';
import Pick from '../components/Pick';
import pickerData from '../assets/pickerData';
import { YarnContext } from '../components/YarnContext';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import ModalMix from '../components/ModalMix';

export const particularitiesLabels = {
  isCarded: "Carded",
  isWorsted: "Worsted",
  isAngled: "Angled"
}
const DetailsPicker = ({ route, navigation }) => {
  const { image } = route.params
  const [yarns, setYarns] = useContext(YarnContext)
  const [selectedYarnType, setSelectedYarnType] = useState()
  const [selectedYarnWeight, setSelectedYarnWeight] = useState()
  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState()
  const [selectedYarnColor, setSelectedYarnColor] = useState()
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  //const [pickerSelection, setPickerSelection] = useState()
  const [particularities, setParticularities] = useState(
    {
      isCarded: false,
      isWorsted: false,
      isAngled: false
    }
  )
  const [mix, setMix] = useState()
  const [isMix, setIsMix] = useState(false)
  const [weight, onChangeWeight] = useState(null);

  const onParticularityChange = useCallback((particularity) => (newValue) => {
    setParticularities({
      ...particularities,
      [particularity]: newValue
    })
  }, [particularities])


  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <LinearGradient
            colors={['#D2F0EE', 'transparent']}
            style={styles.gradientContainer} >
            <View style={{ paddingBottom: 20, paddingTop: 20 }}>
              <View>
                <View style={{ marginTop: 20, }}>
                  <Pick
                    title={'Yarn Type'}
                    data={pickerData.yarnType}
                    selectedValue={selectedYarnType}
                    onValueChange={(itemValue, itemIndex) => {
                      setSelectedYarnType(itemValue)
                      setId(Date.now())
                      if (selectedYarnType && itemValue === "Mix") { setIsMix(true) }
                    }} />
                  {isMix && (
                    <View style={styles.modalContainer} >
                      <ModalMix changeMix={(mix) => setMix(mix)} />
                    </View>
                  )}
                  <Pick
                    title={'Manufacturer'}
                    data={pickerData.manufacturer}
                    selectedValue={selectedYarnManufacturer}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedYarnManufacturer(itemValue)}
                  />
                  <Pick
                    title={'Color'}
                    data={pickerData.color}
                    selectedValue={selectedYarnColor}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedYarnColor(itemValue)}
                  />
                  <Pick
                    title={'Weight'}
                    data={pickerData.weight}
                    selectedValue={selectedYarnWeight}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedYarnWeight(itemValue)}
                  />
                </View>
              </View>
              <View style={{ paddingTop: 10, }}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChangeWeight}
                  value={weight}
                  placeholder="Quantity"
                  placeholderTextColor={'#867D59'}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.checkboxContainer}>
                {Object.keys(particularities).map((particularity) => {
                  return (
                    <View style={{ alignItems: 'center', }}>
                      <Checkbox
                        style={{}}
                        value={particularities[particularity]}
                        onValueChange={onParticularityChange(particularity)}
                        color={particularities[particularity] ? '#4630EB' : undefined}
                      />
                      <Text style={{ fontWeight: '600', color: '#42370B' }}>{particularitiesLabels[particularity]}</Text>
                    </View>
                  )
                })}
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.confirmContainer}
                  onPress={() => {
                    if (selectedYarnType, selectedYarnWeight, selectedYarnColor, selectedYarnManufacturer) {


                      setCone({ id, image, selectedYarnType, isMix, mix, selectedYarnWeight, selectedYarnManufacturer, selectedYarnColor, particularities, weight })
                    }
                    else {
                      Alert.alert(
                        "No full yarn data",
                        "Please choose  Yarn Type, Manufacturer, Color and Weight",
                        [{
                          text: "OK",
                        }]
                      );
                    }
                  }}
                >
                  <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveYarnContainer}
                  onPress={() => {
                    if (cone) {
                      setYarns(prevYarns =>
                        [...prevYarns, cone])
                      Alert.alert(
                        "You've saved New Cone! ",
                        "Choose what's next",
                        [
                          {
                            text: "Add more cones",
                            onPress: () => navigation.navigate('Cone Images'),
                          },
                          { text: "Go to YarnBox", onPress: () => navigation.navigate('Yarn Box') }
                        ]
                      );
                    }
                    else {
                      Alert.alert(
                        "Please confirm ",
                        "Please confirm cone data",
                        [{
                          text: "OK",
                        }]
                      );
                    }
                  }}
                >
                  <Text style={styles.saveYarnText}>Save Yarn</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )

}
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#C7CAB6'
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    backgroundColor: '#BFC3AE',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 20,
    //backgroundColor: 'pink',
    width: '75%'
  },
  buttonContainer: {
    width: 300,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  confirmContainer: {
    height: 45,
    backgroundColor: '#DCFC98',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  confirmText: {
    fontSize: 16,
    color: '#42370B',
    //'#413918',
    fontWeight: 'bold'
  },
  saveYarnContainer: {
    height: 45,
    backgroundColor: '#fdccA0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  saveYarnText: {
    fontSize: 16,
    color: '#42370B',
    fontWeight: 'bold'
  }





})
export default DetailsPicker