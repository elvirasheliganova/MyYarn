import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { YarnContext } from './YarnContext';
import ModalMix from './ModalMix'
import {Picker} from '@react-native-picker/picker';
import pickerData from "../assets/pickerData";

const PickMix = (title, data, onValueChange, selectedValue) => {

  const [selectedYarnType, setSelectedYarnType] = useState()
  const [isMix, setIsMix] = useState(false)
  const [id, setId] = useState()
  const [mix, setMix] = useState()
  const [yarns, setYarns] = useContext(YarnContext)

  return (
    <View>
      <View style={{ justifyContent: 'center', backgroundColor: '#d5e9e3',
    //'#C3DCD180',  
    marginHorizontal: 10, marginBottom: 10 ,borderRadius: 10, padding: 20, 
    shadowColor: '# 8C9284',
    shadowOffset: {width: 2, height:-1},
    shadowOpacity: 0.4,
    shadowRadius: 3, }}>
    <View style= {{alignSelf: 'flex-start', }}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#403818'}}>{title}</Text>
    </View>
   
      
  {/*   <Picker
     
      selectedValue={selectedYarnType}
      style={{ height: 40, width: '110%', alignSelf: 'center', overflow: 'hidden'}}
      onValueChange={(itemValue, itemIndex) =>
       { setSelectedYarnType(itemValue)
        setId(yarns.length + 1)
        //console.log(selectedYarnType, mix)
        if(selectedYarnType && itemValue === "Mix" ) {setIsMix(true)}
      }
    
      }
      itemStyle={{fontSize: 16, height: 50, fontWeight: 'bold', color: '#201C0C' }}>
        
      
      <Picker.Item label="Cashmere" value="Cashmere" />
      <Picker.Item label="Merinos" value="Merinos" />
      <Picker.Item label="Mix" value="Mix" />
      <Picker.Item label="Yack" value="Yack" />
      <Picker.Item label="Mohair" value="Mohair" />
      <Picker.Item label="Cotton" value="Cotton" />
      <Picker.Item label="Linen" value="Linen" />
      <Picker.Item label="Alpaca" value="Alpaca" />
      <Picker.Item label="Silk" value="Silk" />
    </Picker> */}

  </View>

 
    </View>
  )
}

export default PickMix