import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useContext, useCallback, useEffects } from 'react'
import { YarnContext } from '../components/YarnContext';
import { useTranslation } from 'react-i18next';

const Button = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.confirmContainer}
        onPress={{}}
      /* {() => {
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


      }} */
      >
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
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
  }



})
export default Button