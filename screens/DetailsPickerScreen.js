import {
  View, Text, StyleSheet,
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import ModalView from '../components/Modal'
import pickerData from '../assets/pickerData'
import Details from '../components/Details'
import { LinearGradient } from 'expo-linear-gradient';
import { YarnContext } from '../components/YarnContext';
import { useTranslation } from 'react-i18next';


const DetailsPickerScreen = ({ route, navigation }) => {
  const { image } = route.params
  const { t } = useTranslation()
  const [yarns, setYarns] = useContext(YarnContext)
  const [selectedYarnType, setSelectedYarnType] = useState('')
  const [length, onChangeLength] = useState()
  const [weight, onChangeWeight] = useState();
  const [article, onChangeArticle] = useState('')
  const [isPressed, setIsPressed] = useState(false)
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
  const [selectedOther, setSelectedOther] = useState('')
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  const [isMix, setIsMix] = useState(false)
  const [mix, setMix] = useState('')


  useEffect(() => {
    if (id)
      setCone({
        id, image, selectedYarnType, isMix, mix, length,
        selectedYarnManufacturer, selectedYarnColor, weight, article,
        selectedAlpaca, selectedAngora, selectedCamel, selectedCash,
        selectedCotton, selectedElastan, selectedKid, selectedSKid,
        selectedLamb, selectedLinen, selectedMerino, selectedPa,
        selectedSilk, selectedViscose, selectedWool, selectedYak, selectedOther
      })
  }, [id]);

  useEffect(() => {
    if (cone)
      setYarns(prevYarns =>
        [...prevYarns, cone])
  }, [cone]);

  useEffect(() => {
    if (isMix)
      setIsMix(false)
  }, [yarns]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#D2F0EE', 'transparent']}
          style={styles.gradientContainer} >
          <View style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
              <ModalView
                data={pickerData.yarnType}
                text={t('composition')}
                label={t(`${selectedYarnType}`)}
                chooseYarn={setSelectedYarnType}
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
                chooseOther={setSelectedOther}
              />

              <ModalView
                data={pickerData.manufacturer}
                label={t(`${selectedYarnManufacturer}`)}
                text={t('manufacturer')}
                chooseYarn={setSelectedYarnManufacturer}
              />

              <ModalView
                data={pickerData.color}
                label={t(`${selectedYarnColor}`)}
                text={t('color')}
                chooseYarn={setSelectedYarnColor}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Details
                image={image}
                chooseLength={onChangeLength}
                chooseWeight={onChangeWeight}
                chooseArticle={onChangeArticle}
              />
            </View>

            <View style={styles.buttonContainer}>
              {!isPressed ?
                <TouchableOpacity
                  style={styles.confirmContainer}
                  onPress={() => {
                    {
                      if (selectedYarnType, length, selectedYarnColor, selectedYarnManufacturer, weight) {
                        setId(Date.now())
                        setIsPressed(true)
                      }
                      else {
                        alert(
                          t('cone save'),
                          [{
                            text: "OK",
                          }]
                        )
                      }
                    }
                  }}
                >
                  <Text style={styles.confirmText}>{t('save')}</Text>
                </TouchableOpacity> :
                <View style={styles.confirmContainer}>
                  <Text style={styles.confirmText}>{t('save')}</Text>
                </View>
              }

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
    backgroundColor: '#C7CAB6'
  },
  buttonContainer: {
    width: 300,
    marginVertical: 20,
    alignSelf: 'center',
    justifyContent: 'center',
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
    fontWeight: 'bold'
  }

})

export default DetailsPickerScreen