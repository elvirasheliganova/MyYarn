import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { YarnContext } from '../components/YarnContext';

const Details = (props) => {
  const { t } = useTranslation();
  const { image } = props
  // console.log(props.image)
  const [yarns, setYarns] = useContext(YarnContext)
  const [selectedYarnType, setSelectedYarnType] = useState("Cashmere")
  const [length, onChangeLength] = useState()
  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState("Loro Piana")
  const [selectedYarnColor, setSelectedYarnColor] = useState("White")
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  const [mix, setMix] = useState()
  const [isMix, setIsMix] = useState(false)
  const [weight, onChangeWeight] = useState();
  return (
    <View style={{ flex: 1, }}>
      {/* <View>

         <View style={{ marginTop: 20, }}>

          <Pick
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
              /> 
        </View>
      </View>*/}
      <View style={{
        flex: 1, justifyContent: 'space-around',
        //backgroundColor: 'yellow'
      }}>
        <View style={{ paddingTop: 10, }}>

          <TextInput
            style={styles.textInput}
            onChangeText={(value) => props.chooseLength(value)}
            value={length}
            placeholder={t('weight')}
            placeholderTextColor={'#746B45'}
            keyboardType="numeric"
          />
        </View>
        <View style={{ paddingTop: 10, }}>

          <TextInput
            style={styles.textInput}
            onChangeText={(value) => props.chooseWeight(value)}
            value={weight}
            placeholder={t('quantity')}
            placeholderTextColor={'#746B45'}
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

      </View>
    </View>
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
    backgroundColor:
      //'#BFC3AE'
      //'#F3B3FD',
      'pink',
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
    marginBottom: 20,
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
export default Details