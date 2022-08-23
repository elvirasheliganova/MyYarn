import React, { useState, useContext} from "react";
import { View, Text, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native' 
import { YarnContext } from './YarnContext';
import {Picker} from '@react-native-picker/picker';

const ModalMix = (props) => {

  const [modalVisible, setModalVisible] = useState(true)
  const [selectedYarnType, setSelectedYarnType] = useState()
  const [selectedMerinosMix, setSelectedMerinosMix] = useState();
  const [selectedCashMix, setSelectedCashMix] = useState();
  const [selectedSilkMix, setSelectedSilkMix] = useState();
  
  const [isMix, setIsMix] = useState(false)
  const [cone, setCone] = useState()
  const [yarns, setYarns] = useContext(YarnContext)
  const [id, setId] = useState()

  const mix = {selectedMerinosMix, selectedCashMix, selectedSilkMix}

  
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
    <View style={{flex: 1,
justifyContent: 'center',
alignItems: 'center',
marginTop: 22,}}>
      <View style={{margin: 10, width: '90%',
backgroundColor: 'white',
borderRadius: 20,
padding: 15,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,}}>
       {/*} <Text style={{marginBottom: 15,
textAlign: 'center',}}>Hello World!</Text>*/}

<View style={{margin: 10, width: '90%',
backgroundColor: 'white',
borderRadius: 20,
paddingHorizontal: 15,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5}}>
<Text>% Merinos</Text>
<Picker
  selectedValue={selectedYarnType}
  style={{ height: 100, width: '110%', alignSelf: 'center', overflow: 'hidden'}}
  onValueChange={(itemValue, itemIndex) =>
   { setSelectedMerinosMix(itemValue)
    setId(yarns.length + 1)
   // console.log(selectedMerinosMix, mix)
    
  }

  }
  itemStyle={{fontSize: 14, height: 80, fontWeight: '600', color: '#201C0C' }}>
  
  
  <Picker.Item label="10" value="10" />
  <Picker.Item label="20" value="20" />
  <Picker.Item label="30" value="30" />
  <Picker.Item label="50" value="50" />
  <Picker.Item label="70" value="70" />
  
  
</Picker>
</View>
<View style={{margin: 10, width: '90%',
backgroundColor: 'white',
borderRadius: 20,
paddingHorizontal: 15,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5}}>
<Text>% Cashmere</Text>
<Picker
  selectedValue={selectedYarnType}
  style={{ height: 100, width: '110%', alignSelf: 'center', overflow: 'hidden'}}
  onValueChange={(itemValue, itemIndex) =>
   { setSelectedCashMix(itemValue)
    setId(yarns.length + 1)
    //console.log(selectedMerinosMix, mix)
    
  }

  }
  itemStyle={{fontSize: 14, height: 80, fontWeight: '600', color: '#201C0C' }}>
  
  <Picker.Item label="50" value="50" />
  <Picker.Item label="70" value="70" />
  <Picker.Item label="10" value="10" />
  
</Picker>
</View>
<View style={{margin: 10, width: '90%',
backgroundColor: 'white',
borderRadius: 20,
paddingHorizontal: 15,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5}}>
<Text>% Silk</Text>
<Picker
  selectedValue={selectedYarnType}
  style={{ height: 100, width: '110%', alignSelf: 'center', overflow: 'hidden'}}
  onValueChange={(itemValue, itemIndex) =>
   { setSelectedSilkMix(itemValue)
    
    //console.log(selectedMerinosMix, mix)
    
  }

  }
  itemStyle={{fontSize: 14, height: 80, fontWeight: '600', color: '#201C0C' }}>
  
  <Picker.Item label="50" value="50" />
  <Picker.Item label="70" value="70" />
  <Picker.Item label="10" value="10" />
  
</Picker>
</View>
        <Pressable
          style={ { width: 80, borderRadius: 20, 
            padding: 10,
            elevation: 2,backgroundColor: '#2196F3',}}
          onPress={() => {setModalVisible(!modalVisible) 
           
        
          
         
        }
        }
        
          >
            
          <Text style={{color: 'white',
fontWeight: 'bold',
textAlign: 'center',}}>Sure</Text>
        </Pressable>

        <Pressable
          style={ { width: 80, borderRadius: 20, 
            padding: 10,
            elevation: 2,backgroundColor: '#2196F3',}}
          onPress={
            () => props.changeMix(mix)
           
            
          
        }
          >
            
          <Text style={{color: 'white',
fontWeight: 'bold',
textAlign: 'center',}}>Mix</Text>
        </Pressable>
      </View>
      
    </View>
    
  </Modal>
  )
}

export default ModalMix