
import { View, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState, useContext, useCallback, useEffect } from 'react';
import Pick from '../components/Pick';
import pickerData from '../assets/pickerData';
import { YarnContext } from '../components/YarnContext';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import ModalMix from '../components/ModalMix';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-native-web';


export const particularitiesLabels = {
  isCarded: "Carded",
  isWorsted: "Worsted",
  isAngled: "Angled"

}
const DetailsPickerwithModal = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { image } = route.params
  const [yarns, setYarns] = useContext(YarnContext)
  const [selectedYarnType, setSelectedYarnType] = useState("Cashmere")
  const [length, onChangeLength] = useState()
  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState("Loro Piana")
  const [selectedYarnColor, setSelectedYarnColor] = useState("White")
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  //console.log(image)
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

  useEffect(() => {
    if (cone)
      setYarns(prevYarns =>
        [...prevYarns, cone])


    //console.log("Final data updated , invoke your function", yarns)
  }, [cone]);




  return (

    <KeyboardAvoidingView
      style={{ flex: 1, }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, }}>
          <LinearGradient
            colors={['#D2F0EE', 'transparent']}
            style={styles.gradientContainer} >

            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    {pickerData.yarnType.map((item, index) => (
                      <Text>{t(item.label)}</Text>
                    ))}
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
              </Pressable>
            </View>

            <View style={{ paddingBottom: 20, paddingTop: 20 }}>
              <View>

                <View style={{ marginTop: 20, }}>

                  {/*  <Pick
                    title={t('composition')}
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
                  )} */}

                  {/* <Pick
                    title={t('manufacturer')}
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
                    selectedValue={length}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedYarnWeight(itemValue)}
                  /> */}
                </View>
              </View>
              <View style={{ paddingTop: 10, }}>
                <Text >Meters in 100 gr</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChangeLength}
                  value={length}
                  placeholder="Weight"
                  placeholderTextColor={'#867D59'}
                  keyboardType="numeric"
                />
              </View>
              <View style={{ paddingTop: 10, }}>
                <Text >Whole weight of yarn</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChangeWeight}
                  value={weight}
                  placeholder="Quantity"
                  placeholderTextColor={'#867D59'}
                  keyboardType="numeric"
                />
              </View>
              {/* <View style={styles.checkboxContainer}>
                {Object.keys(particularities).map((particularity) => {
                  return (
                    <View style={{ alignItems: 'center', }} key={particularity}>
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
              </View> */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.confirmContainer}
                  onPress={() => {
                    {
                      if (selectedYarnType, length, selectedYarnColor, selectedYarnManufacturer) {

                        setCone({ id, image, selectedYarnType, isMix, mix, length, selectedYarnManufacturer, selectedYarnColor, particularities, weight })
                        //setCone(cone)




                        //console.log(cone.selectedYarnColor)
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


                    }


                  }}
                >
                  <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>

              </View>
            </View>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )

}
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,

    justifyContent: 'center',
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
    alignSelf: 'center', justifyContent: 'center',
    //justifyContent: 'space-between',
    flexDirection: 'row',
  },
  confirmContainer: {
    height: 45,
    backgroundColor: '#DCFC98',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    alignSelf: 'center'
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
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },







})
export default DetailsPickerwithModal