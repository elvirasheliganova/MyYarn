import React, { useState, useContext } from "react";
import { View, Text, Modal, Pressable, ScrollView, StyleSheet } from 'react-native'
import { YarnContext } from './YarnContext';
import { Picker } from '@react-native-picker/picker';
import modalData from '../assets/modalData'


const ModalMix = (props) => {

  const [modalVisible, setModalVisible] = useState(true)
  const [selectedYarnType, setSelectedYarnType] = useState()
  const [selectedMerinosMix, setSelectedMerinosMix] = useState('10');
  const [selectedCashMix, setSelectedCashMix] = useState('10');
  const [selectedSilkMix, setSelectedSilkMix] = useState('10');
  const [selectedCottonMix, setSelectedCottonMix] = useState('10');
  const [selectedViscoseMix, setSelectedViscoseMix] = useState('10')
  const [isMix, setIsMix] = useState(false)
  const [yarns, setYarns] = useContext(YarnContext)
  const [id, setId] = useState()
  const mix = { selectedMerinosMix, selectedCashMix, selectedSilkMix, selectedCottonMix, selectedViscoseMix }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <ScrollView style={styles.itemsContainer}>
            {modalData.composition.map((item) => {
              return (
                <View
                  style={styles.item}
                  key={item}>
                  <Text style={{ fontWeight: '600' }}>% {item}</Text>
                  <Picker
                    style={{ height: 80, width: '100%', alignSelf: 'center', overflow: 'hidden' }}
                    onValueChange={(itemValue, itemIndex) => {
                      setId(Date.now())
                      item === "Merinos" ? setSelectedMerinosMix(itemValue) :
                        item === "Cashmere" ? setSelectedCashMix(itemValue) :
                          item === "Silk" ? setSelectedSilkMix(itemValue) :
                            item === "Cotton" ? setSelectedCottonMix(itemValue) :
                              setSelectedViscoseMix(itemValue)
                    }}
                    itemStyle={{ fontSize: 14, height: 60, fontWeight: '600', color: '#201C0C', marginTop: 5, }}>

                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="30" value="30" />
                    <Picker.Item label="40" value="40" />
                    <Picker.Item label="50" value="50" />
                    <Picker.Item label="60" value="60" />
                    <Picker.Item label="70" value="70" />
                    <Picker.Item label="80" value="80" />
                    <Picker.Item label="70" value="90" />

                  </Picker>
                </View>)
            })}
          </ScrollView>
          <Pressable
            style={styles.button}
            onPress={() => {
              props.changeMix(mix)
              setModalVisible(!modalVisible)
              setIsMix(false)
            }}
          >
            <Text
              style={styles.buttonText}
            >Done</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,

  },
  modalContainer: {
    width: '90%',
    marginTop: '47%',
    marginBottom: '30%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    borderRadius: 20,
  },
  itemsContainer: {
    width: '100%',
    paddingTop: 15,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  item: {
    margin: 10, width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
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
  }
})

export default ModalMix