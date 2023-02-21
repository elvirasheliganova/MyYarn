import { View, Text, StyleSheet, Pressable, Modal, Button, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useCallback, useEffect } from 'react';
import Checkbox from 'expo-checkbox'
import pickerData from '../assets/pickerData';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import { YarnContext } from '../components/YarnContext';
import { Picker } from '@react-native-picker/picker';
import modalData from '../assets/modalData'
import RNPickerSelect from 'react-native-picker-select-updated';
import { t } from "i18next";

import { AntDesign } from '@expo/vector-icons';
import { placeholder } from 'i18n-js';





const ModalView = (props) => {

  const [yarns, setYarns] = useContext(YarnContext)
  //const [selectedYarnType, setSelectedYarnType] = useState()
  const [length, onChangeLength] = useState()
  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState()
  const [selectedYarnColor, setSelectedYarnColor] = useState()
  // const [id, setId] = useState()
  const [cone, setCone] = useState()


  //const { data, text, chooseYarn } = props

  const [modalVisible, setModalVisible] = useState(false);
  const [mixModalVisible, setMixModalVisible] = useState(false);
  //  const [checkVisible, setCheckVisible] = useState(false)
  const [isMix, setIsMix] = useState(false)
  const [pickerVisible, setPickerVisible] = useState(true)
  const { t } = useTranslation();
  const { chooseYarn } = props
  const { chooseId } = props
  const { chooseMix } = props
  const { changeMix } = props

  const { selectedMerino } = props
  const { } = props
  const { } = props
  const { } = props

  //const mix = { selectedMerinosMix, selectedCashMix, selectedSilkMix, selectedCottonMix, selectedViscoseMix }

  const onOpen2ndModal = useCallback((item) => {

    // closes the 1st modal
    setModalVisible(false)
    // open the 2nd modal
    setTimeout(
      () => {
        setMixModalVisible(true);
      },
      // any small number will do, maybe animation duration
      100,
    )
  }

    , []);


  const placeholder = {
    label: t('choose'),
    value: '',
    color: '#9EA0A4',
  }

  return (


    <View style={[styles.centeredView, {
      // backgroundColor: 'green'
    }]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ScrollView style={{}}>
          <View style={styles.modalView}>

            {props.data.map((item, index) =>
            (<Pressable
              key={index}
              onPress={() => {

                chooseYarn(item.value)

                // console.log(item.value)
                if (item.value === "mix") {
                  chooseMix(true)

                  onOpen2ndModal()
                }
                setModalVisible(!modalVisible)
                //   if (item === "yarnType") { chooseId(Date.now()) }
              }}
            >
              <View style={{ borderColor: 'lightgrey', borderBottomWidth: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, marginVertical: 5, }}>{t(`${item.value}`)}</Text>


              </View>
            </Pressable>
            )
            )}
            {/*   <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>

        </ScrollView>
      </Modal>
      {mixModalVisible ? <Modal
        animationType="slide"
        transparent={true}
        visible={mixModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          //setMixModalVisible(!mixModalVisible);
        }}>
        <View style={styles.container2nd}>
          <View style={styles.modalContainer2nd}>
            <ScrollView style={styles.itemsContainer2nd}

            >
              {modalData.composition.map((item) => {
                return (
                  <View
                    style={styles.item2nd}
                    key={item}>
                    <Text style={{ fontWeight: '600' }}>% {t(item)}</Text>


                    <RNPickerSelect

                      style={styles.pickerSelectStyles}
                      //selectedValue={item}
                      //useNativeAndroidPickerStyle={false}
                      placeholder={placeholder}
                      //console.warn(value)
                      //setPickerVisible(false)
                      /*  //setId(Date.now())
                       //itemValue != '0' &&
                       //</View>item === 'merinos' ? console.log(item, 'hi') */
                      items={modalData.percentage}
                      onValueChange={(value) =>
                        item === "alpaca" ? props.chooseAlpaca(value) :
                          item === "angora" ? props.chooseAngora(value) :
                            item === "camel" ? props.chooseCamel(value) :
                              item === "cashmere" ? props.chooseCash(value) :
                                item === "wool" ? props.chooseWool(value) :
                                  item === "merinos" ? props.chooseMerino(value) :
                                    item === "lamb" ? props.chooseLamb(value) :
                                      item === "superkid mohair" ? props.chooseSKid(value) :
                                        item === "kid mohair" ? props.chooseKid(value) :
                                          item === "yak" ? props.chooseYak(value) :
                                            item === "linen" ? props.chooseLinen(value) :
                                              item === "silk" ? props.chooseSilk(value) :
                                                item === "cotton" ? props.chooseCotton(value) :
                                                  item === 'viscose' ? props.chooseViscose(value) :
                                                    item === "pa" ? props.choosePa(value) :
                                                      item === "elastan" ? props.chooseElastan(value) :
                                                        item === "sintetyc" ? props.chooseSintetic(value) :
                                                          null
                      }



                      itemStyle={{ fontSize: 14, height: 60, fontWeight: '600', color: '#201C0C', marginTop: 5, }}
                    >
                      {/*             {console.warn(pickerVisible)}
                      {
                        modalData.percentage.map((item, index) => {
                          return (

                            <Picker.Item label={t(item)} value={item} key={{ index }} />)






                        })
                      } */}



                    </RNPickerSelect>


                  </View>)
              })}
            </ScrollView>
            <Pressable
              style={[styles.button, { height: 40 }]}
              onPress={() => {

                //changeMix(mix)
                //
                setMixModalVisible(!mixModalVisible)
                setIsMix(false)
              }}
            >
              <Text
                style={styles.buttonText}
              >{t('done')}</Text>
            </Pressable>
          </View>
        </View>
      </Modal> : null}
      {/* {mixModalVisible ?
        <ModalMix2
          changeMix={changeMix}
          chooseMerinosMix={() => chooseMerinosMix}
          chooseCashMix={chooseCashMix}
          chooseSilkMix={chooseSilkMix}
          chooseCottonMix={chooseCottonMix}
          chooseViscoseMix={chooseViscoseMix}

        /> : null

      } */}

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20 }}>
          <Text style={styles.textStyle}>{props.text}</Text>
          <Text style={[styles.textStyle, { fontSize: 16, }]}>{props.label}</Text>
        </View>
        {!props.label ? <AntDesign name="arrowright" size={24} color="black" /> : null}
      </Pressable>
    </View>

  )
}
const styles = StyleSheet.create({


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
    marginTop: 30,
    //backgroundColor: 'pink'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    //alignItems: 'center',
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
    height: '80%',
    backgroundColor: '#BFC3AE',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {

  },
  buttonOpen: {
    backgroundColor: '#fdccA0',
    //backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    //height: 40,
    //backgroundColor: '#BFC3AE',
    //margin: 10,
    color: '#504412',
    borderRadius: 10,
    //padding: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container2nd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginHorizontal: 10


  },
  modalContainer2nd: {
    width: '100%',
    marginTop: '27%',
    paddingVertical: 5,
    marginBottom: '30%',
    height: '80%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    //paddingBottom: 15,
    borderRadius: 20,
  },
  itemsContainer2nd: {

    width: '100%',

    paddingTop: 10,
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',

    overflow: 'hidden',
    // backgroundColor: 'pink',
    /*    shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.1,
       shadowRadius: 4,
       elevation: 5, */
  },
  item2nd: {
    margin: 10,

    width: '100%',
    backgroundColor: 'white',
    alignContent: 'center',
    borderRadius: 10,
    paddingTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    /*   shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
  
      shadowOpacity: 025,
      shadowRadius: 4,
      elevation: 5 */
  },
  pickerSelectStyles: {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,

      marginVertical: 10,
      alignSelf: 'center',
      //paddingHorizontal: 25,
      width: '100%',
      textAlign: 'center',
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 10,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      marginVertical: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
    }
  }
  /*button: {
   width: 80,
   borderRadius: 8,
   padding: 10,
   margin: 10,
   elevation: 2,
   backgroundColor: 'lightgrey',
 },
 buttonText: {
   color: 'black',
   fontWeight: 'bold',
   textAlign: 'center',
 } */








})


export default ModalView


/*  
(
  <Modal 
  visible={mixModalVisible}>
    <View style={styles.modalView}>
      <Text>Modal 2 content</Text>
      <Button
        title="Close 2nd modal"
        onPress={() => setMixModalVisible(false)}
      /> 
    </View>
  </Modal>
 : null) */