import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import {Picker} from '@react-native-picker/picker';
import { YarnContext } from './YarnContext';
import { Entypo } from '@expo/vector-icons';

const DetailsPicker = ({ route}) => {
  const {image} = route.params
  const [selectedYarnType, setSelectedYarnType] = useState()
  const [selectedYarnWeight, setSelectedYarnWeight] = useState()
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  const [yarns, setYarns] = useContext(YarnContext)
  
  //const saveCone = () => setCone({image, selectedYarnType, selectedYarnWeight })

   //console.log(image)
   console.log(yarns)
   //console.log(cone)
   //console.log(id)


   //const saveYarns = () => setYarns(prevYarns => 
   
   // [...prevYarns, cone])

  
   

  return (
    
    <>
    <View style={{flex: 1/3,  justifyContent: 'center', backgroundColor: 'lightyellow', margin: 15, borderRadius: 10 }}>
    <View style= {{alignSelf: 'center'}}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Choose Yarn Type</Text>
    </View>
    
    <Picker
      selectedValue={selectedYarnType}
      style={{ height: 100, width: 300, alignSelf: 'center'}}
      onValueChange={(itemValue, itemIndex) =>
       { setSelectedYarnType(itemValue)
        setId(yarns.length + 1)
      }
    
      }
      itemStyle={{fontSize: 16, height: 120}}>
      <Picker.Item label="Cashmere" value="Cashmere" />
      <Picker.Item label="Merinos" value="Merinos" />
      <Picker.Item label="Yack" value="Yack" />
      <Picker.Item label="Mohair" value="Mohair" />
    </Picker>
  </View>
  <View style={{flex: 1/3,   justifyContent: 'center', backgroundColor: 'lightyellow', margin: 15, borderRadius: 10   }}>
    <View style= {{alignSelf: 'center'}}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Choose Yarn Weight</Text>
    </View>
    <Picker
      selectedValue={selectedYarnWeight}
      style={{ height: 100, width: 300, alignSelf: 'center'}}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedYarnWeight(itemValue)
      }
      itemStyle={{fontSize: 16, height: 120}}>
      <Picker.Item label="1/15" value="1/15" />
      <Picker.Item label="2/28" value="2/28" />
      <Picker.Item label="300" value="300" />
      <Picker.Item label="750" value="750" />
    </Picker>
    </View>
    <View style={{flex: 1/3,  justifyContent: 'center', backgroundColor: 'lightyellow', margin: 15, borderRadius: 10 }}>
      <View style= {{alignSelf: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Manufacturer</Text>
      </View>
      <Picker
        selectedValue={selectedYarnWeight}
        style={{ height: 100, width: 300, alignSelf: 'center' }}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedYarnWeight(itemValue)
        }
        itemStyle={{fontSize: 16, height: 120}}>
        <Picker.Item label="Loro Piana" value="Loro Piana" />
        <Picker.Item label="Cariaggi" value="Cariaggi" />
        <Picker.Item label="New Mill" value="New Mill" />
      
      </Picker>
      
  </View>
  <View style={{ flex: 1/4, width: 300,   marginVertical: 10,  alignSelf: 'center', justifyContent: 'space-between'}}>
    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10}}>
      <TouchableOpacity
              style={{flexDirection: 'row', width: 100, height: 25,  backgroundColor: 'pink', borderRadius: 5, justifyContent: 'center',  alignItems: 'center', }}
              onPress={() => {}}
      >
          <Entypo name="plus" size={20} color="black" />
          <Text>Add Gauge </Text>
      </TouchableOpacity>
      <TouchableOpacity
              style={{flexDirection: 'row', width: 100, height: 25,  backgroundColor: 'pink', borderRadius: 5, justifyContent: 'center',  alignItems: 'center', }}
              onPress={() => {}}
      >
          <Entypo name="plus" size={20} color="black" />
          <Text>Add Ideas</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
          style={{width: 300, height: 25, backgroundColor: 'pink', borderRadius: 5, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', }}
          onPress= {() => {
            setCone({image, selectedYarnType, selectedYarnWeight, id})
          }}
    >
      <Text style={{fontSize: 16}}>Save Cone</Text>
    </TouchableOpacity>
    
      <TouchableOpacity
            style={{width: 300, height: 25,  backgroundColor: 'pink', borderRadius: 5, justifyContent: 'center',  alignItems: 'center',  }}
            onPress={() =>
            {  setYarns(prevYarns => 
              [...prevYarns, cone])
            }}
      >
        <Text style={{fontSize: 16}}>Save Yarn</Text>
      </TouchableOpacity>
      
    </View>
       
      
  </>
  )
 
}

export default DetailsPicker