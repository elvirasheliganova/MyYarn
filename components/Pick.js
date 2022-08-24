import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable, TextInput, FlatList } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import pickerData from "../assets/pickerData";

const Pick = ({title, data, onValueChange, selectedValue}) => {

  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState()
  //console.log(data)
  return (
    <View style={{ justifyContent: 'center', backgroundColor: '#d5e9e3', marginBottom: 10 , marginHorizontal: 10,  borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey',  padding: 20, 
     //shadowColor: '# 8C9284',
     //shadowOffset: {width: -2, height: -4},
    // shadowOpacity: 0.1,
     //shadowRadius: 3, 
     }}>
      <View style= {{alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#403818'}}>{title}</Text>
      </View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: '110%', alignSelf: 'center' }}
        onValueChange={onValueChange
        }
        itemStyle={{fontSize: 16, height: 40, fontWeight: 'bold', color: '#201C0C', }}>

        {data.map((item, index) => (
          <Picker.Item label={item.label} value={item.value} key={index} />
        ))}
        
      
      </Picker>
      
  </View>
  )
}

export default Pick