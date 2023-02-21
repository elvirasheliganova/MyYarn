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
  const [selectedYarnType, setSelectedYarnType] = useState('')
  const [length, onChangeLength] = useState()
  const [weight, onChangeWeight] = useState();
  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState('')
  const [selectedYarnColor, setSelectedYarnColor] = useState('')
  const [selectedAlpaca, setSelectedAlpaca] = useState('')
  const [selectedAngora, setSelectedAngora] = useState('')
  const [selectedCamel, setSelectedCamel] = useState('')
  const [selectedWool, setSelectedWool] = useState('')
  const [selectedCash, setSelectedCash] = useState('')
  const [selectedMerino, setSelectedMerino] = useState('')
  const [selectedLamb, setSelectedLamb] = useState('')
  const [selectedSKid, setSelectedSKid] = useState('')
  const [selectedKid, setSelectedKid] = useState('')
  const [selectedYak, setSelectedYak] = useState('')
  const [selectedLinen, setSelectedLinen] = useState('')
  const [selectedCotton, setSelectedCotton] = useState('')
  const [selectedSilk, setSelectedSilk] = useState('')
  const [selectedViscose, setSelectedViscose] = useState('')
  const [selectedElastan, setSelectedElastan] = useState('')
  const [selectedPa, setSelectedPa] = useState('')
  const [selectedSintetyc, setSelectedSintetyc] = useState('')
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  const [isMix, setIsMix] = useState(false)
  const [mix, setMix] = useState('')


  useEffect(() => {
    if (mix)
      // console.log(mix)
      setCone({
        id, image, selectedYarnType, isMix,
        mix,
        length,
        selectedYarnManufacturer, selectedYarnColor,
        // particularities, 
        weight
      })

    /*  if (mix)
       setYarns(prevCone =>
         [...prevCone,  mix]) */

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
  //console.warn(cone)
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
            // justifyContent: 'center',
            flex: 1,
            // backgroundColor: 'lightpink',

          }}>
            <View style={{
              flex: 1,
              // backgroundColor: 'blue'
            }}>
              {/* {selectedYarnType ? <View><Text>{selectedYarnType}</Text></View> : null} */}
              <ModalView
                data={pickerData.yarnType}
                text={t('composition')}
                label={t(`${selectedYarnType}`)}
                chooseYarn={setSelectedYarnType}
                //chooseId={setId}
                chooseMix={setIsMix}
                changeMix={(mix) => setMix(mix)}
                chooseAlpaca={setSelectedAlpaca}
                chooseAngora={setSelectedAngora}
                chooseCamel={setSelectedCamel}
                chooseCash={setSelectedCash}
                chooseWool={setSelectedWool}
                chooseMerino={setSelectedMerino}
                chooseLamb={setSelectedLamb}
                chooseSKid={setSelectedSKid}
                chooseKid={setSelectedKid}
                chooseYak={setSelectedYak}
                chooseLinen={setSelectedLinen}
                chooseSilk={setSelectedSilk}
                chooseCotton={setSelectedCotton}
                chooseViscose={setSelectedViscose}
                chooseElastan={setSelectedElastan}
                choosePa={setSelectedPa}
                chooseSintetyc={setSelectedSintetyc}
              />

              <ModalView
                data={pickerData.manufacturer}
                label={t(`${selectedYarnManufacturer}`)}
                text={t('manufacturer')}
                chooseYarn={setSelectedYarnManufacturer}
              //chooseId={setId} 
              />

              <ModalView
                data={pickerData.color}
                label={t(`${selectedYarnColor}`)}
                text={t('color')}
                chooseYarn={setSelectedYarnColor}
              //chooseId={setId} 
              />
            </View>
            <View style={{
              flex: 1,
              //backgroundColor: 'grey',
              //justifyContent: 'center'
            }}>
              <Details
                image={image}
                chooseLength={onChangeLength}
                chooseWeight={onChangeWeight}
              /* selectedYarnType={selectedYarnType}
              selectedYarnManufacturer={selectedYarnManufacturer}
              selectedYarnColor={selectedYarnColor} */ />
            </View>
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
                    if (selectedYarnType, length, selectedYarnColor, selectedYarnManufacturer) {

                      setCone({ id, image, selectedYarnType, isMix, mix, length, selectedYarnManufacturer, selectedYarnColor, weight })
                      //setCone(cone)




                      //console.log(cone.selectedYarnColor)
                    }
                    /*  : {
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
                <Text style={styles.confirmText}>{t('save')}</Text>
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

    //justifyContent: 'center',
    backgroundColor: '#C7CAB6'
  },
  buttonContainer: {
    width: 300,
    marginVertical: 20,
    alignSelf: 'center', justifyContent: 'center',
    //justifyContent: 'space-between',
    flexDirection: 'row',
  },
  confirmContainer: {
    height: 45,
    backgroundColor: '#DCFC98',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    alignSelf: 'center'
  },
  confirmText: {
    fontSize: 18,
    color: '#504412',
    // color: '#07544b',
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

    // color: '#42370B',
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