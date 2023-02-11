import {
  View, Text, TextInput, StyleSheet,
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
  TouchableOpacity, Pressable, Alert
} from 'react-native'
import React, { useState, useContext, useCallback, useEffect } from 'react';
import ModalView from './Modal'
import pickerData from '../assets/pickerData'
import Details from '../components/Details'
import Button from '../components/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { YarnContext } from '../components/YarnContext';
import { useTranslation } from 'react-i18next';


const Home = ({ route, navigation }) => {
  const { image } = route.params
  const { t } = useTranslation()
  const [yarns, setYarns] = useContext(YarnContext)
  const [selectedYarnType, setSelectedYarnType] = useState()
  const [length, onChangeLength] = useState()
  const [weight, onChangeWeight] = useState();
  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState()
  const [selectedYarnColor, setSelectedYarnColor] = useState()
  const [selectedMerino, setSelectedMerino] = useState('')
  const [selectedCash, setSelectedCash] = useState('')
  const [selectedCotton, setSelectedCotton] = useState('')
  const [selectedSilk, setSelectedSilk] = useState('')
  const [selectedViscose, setSelectedViscose] = useState('')
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  const [isMix, setIsMix] = useState(false)
  const [mix, setMix] = useState('')


  useEffect(() => {
    if (mix)
      //console.log(mix)
      setCone({
        id, image, selectedYarnType, isMix,
        mix,
        length,
        selectedYarnManufacturer, selectedYarnColor,
        // particularities, 
        weight
      })


    // console.log("Final data updated , invoke your function", yarns)
  }, [mix]);
  useEffect(() => {
    if (cone)
      setYarns(prevYarns =>
        [...prevYarns, cone])


    // console.log("Final data updated , invoke your function", yarns)
  }, [cone]);

  useEffect(() => {
    if (isMix)
      setIsMix(false)



  }, [yarns]);
  //
  console.warn(cone)
  // console.warn(mix)
  //console.log(selectedMerino, selectedCash, selectedCotton)
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#D2F0EE', 'transparent']}
          style={styles.gradientContainer} >
          <View style={{
            justifyContent: 'space-between',
            flex: 1,
            //backgroundColor: 'pink'
          }}>
            <View style={{ flex: 1 }}>

              <ModalView
                data={pickerData.yarnType}
                text={t('composition')}
                chooseYarn={setSelectedYarnType}
                //chooseId={setId}
                chooseMix={setIsMix}
                changeMix={(mix) => setMix(mix)}
                chooseMerino={setSelectedMerino}
                chooseCash={setSelectedCash}
                chooseSilk={setSelectedSilk}
                chooseCotton={setSelectedCotton}
                chooseViscose={setSelectedViscose}
              //selectedMerino={selectedMerino}





              // 


              />


              <ModalView
                data={pickerData.manufacturer}
                text={t('manufacturer')}
                chooseYarn={setSelectedYarnManufacturer}
              //chooseId={setId} 
              />

              <ModalView
                data={pickerData.color}
                text={t('color')}
                chooseYarn={setSelectedYarnColor}
              //chooseId={setId} 
              />
            </View>

            <Details
              image={image}
              chooseLength={onChangeLength}
              chooseWeight={onChangeWeight}
              /* selectedYarnType={selectedYarnType}
              selectedYarnManufacturer={selectedYarnManufacturer}
              selectedYarnColor={selectedYarnColor} */ />
            {/*  <Button 
            id={id}
            image={image}
            selectedYarnType={selectedYarnType}
            selectedYarnManufacturer={selectedYarnManufacturer}
            selectedYarnColor={selectedYarnColor}
            length={length}
            weight={weight}
            /> */}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.confirmContainer}
                onPress={() => {
                  {

                    !mix ? setId(Date.now()) : null
                    setMix({ selectedMerino, selectedCash })
                    //setMix('')

                    //if (selectedYarnType)
                    //length, 
                    //selectedYarnColor,
                    //selectedYarnManufacturer

                    //console.log(mix)
                    //console.log(selectedMerino)

                    //setCone(cone)




                    //console.log(cone.selectedYarnColor)


                    /*      else {
                           Alert.alert(
                             "No full yarn data",
                             "Please choose  Yarn Type, Manufacturer, Color and Weight",
                             [{
                               text: "OK",
                             }]
                           );
                         } */


                  }


                }}
              >
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>

            </View>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  )

}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: '#C7CAB6'
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

export default Home