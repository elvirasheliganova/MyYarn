import { View, Text, StyleSheet, Pressable, Modal, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import { YarnContext } from './YarnContext';
import modalData from '../assets/modalData'
import RNPickerSelect from 'react-native-picker-select-updated';
import { AntDesign } from '@expo/vector-icons';

const ModalView = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [mixModalVisible, setMixModalVisible] = useState(false);
  const [isMix, setIsMix] = useState(false)
  const { t } = useTranslation();
  const { chooseYarn } = props
  const { chooseMix } = props

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

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.modalView}>

            {props.data.map((item, index) =>
            (<Pressable
              key={index}
              onPress={() => {
                chooseYarn(item.value)

                if (item.value === "mix") {
                  chooseMix(true)
                  onOpen2ndModal()
                }
                setModalVisible(!modalVisible)
              }}
            >
              <View style={{ borderColor: 'lightgrey', borderBottomWidth: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, marginVertical: 5, }}>
                  {t(`${item.value}`)}
                </Text>
              </View>
            </Pressable>
            )
            )}
          </View>

        </ScrollView>
      </Modal>
      {mixModalVisible ? <Modal
        animationType="slide"
        transparent={true}
        visible={mixModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.container2nd}>
          <View style={styles.modalContainer2nd}>
            <ScrollView
              style={styles.itemsContainer2nd}
              showsVerticalScrollIndicator={false}
            >
              {modalData.mixComposition.map((item) => {
                return (
                  <View
                    style={styles.item2nd}
                    key={item}>
                    <Text style={{ fontWeight: '600' }}>% {t(item)}</Text>
                    <RNPickerSelect
                      style={styles.pickerSelectStyles}
                      placeholder={placeholder}
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
                                                        item === "synthetic" ? props.chooseSynthetic(value) :
                                                          item === "other" ? props.chooseOther(value) :
                                                            null}
                      itemStyle={{ fontSize: 14, height: 60, fontWeight: '600', color: '#201C0C', marginTop: 5, }}
                    >
                    </RNPickerSelect>
                  </View>)
              })}
            </ScrollView>
            <Pressable
              style={[styles.button, { height: 40 }]}
              onPress={() => {
                setMixModalVisible(!mixModalVisible)
                setIsMix(false)
              }}
            >
              <Text>
                {t('done')}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal> : null}

      <Pressable
        style={[styles.button, styles.buttonOpen,]}
        onPress={() => setModalVisible(true)}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20 }}>
          <Text style={[styles.textStyle, { color: !props.label ? '#504412' : '#746B45', fontSize: 18, }]}>{props.text}</Text>
          <Text style={[styles.textStyle, { fontSize: 18, flexWrap: 'wrap', width: '50%', textAlign: 'right', height: '100%', color: '#504412' }]}>{props.label}</Text>
        </View>
        {!props.label ? <AntDesign name="arrowright" size={24} color="black" /> : null}
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    backgroundColor: '#BFC3AE',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonOpen: {
    backgroundColor: '#fdccA0',
  },
  textStyle: {
    borderRadius: 10,
    fontWeight: 'bold'
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
    borderRadius: 20,
  },
  itemsContainer2nd: {
    width: '100%',
    paddingTop: 10,
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    overflow: 'hidden',
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
  },
  pickerSelectStyles: {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      marginVertical: 10,
      alignSelf: 'center',
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