import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import {Picker} from '@react-native-picker/picker';
import { YarnContext } from './YarnContext';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';

const DetailsPicker = ({ route,navigation}) => {
  const {image} = route.params
  const [selectedYarnType, setSelectedYarnType] = useState()
  const [selectedYarnWeight, setSelectedYarnWeight] = useState()
  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState()
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  const [yarns, setYarns] = useContext(YarnContext)
  
  const [isCarded, setCarded] = useState(false)
  const [isWorsted, setWorsted] = useState(false)
  const [isAngled, setAngled] = useState(false)
 
  const [mix, setMix] = useState()
  const [isMix, setIsMix] = useState(false)
  const [modalVisible, setModalVisible] = useState(true)
  const [selectedMerinosMix, setSelectedMerinosMix] = useState();
  const [selectedCashMix, setSelectedCashMix] = useState();
  const [selectedSilkMix, setSelectedSilkMix] = useState();
  
  //const saveCone = () => setCone({image, selectedYarnType, selectedYarnWeight })

   //console.log(image)
   //console.log(route.params)
   
   //console.log(yarns)
   //.log(cone)


   //const saveYarns = () => setYarns(prevYarns => 
   
   // [...prevYarns, cone])

   console.log(yarns)
   

  return (
    
    <>
     <LinearGradient
        // Background Linear Gradient
        colors={['#D2F0EE', 'transparent']}
        style={{flex: 1,
          
          
          backgroundColor: '#C7CAB6'}}
          
      >
    <View style={{flex: 1/5, justifyContent: 'center', backgroundColor: '#d5e9e3',
    //'#C3DCD180',  
    marginHorizontal: 10, marginBottom: 10 ,marginTop: 40, borderRadius: 10, padding: 20, 
    shadowColor: '# 8C9284',
    shadowOffset: {width: 2, height:-1},
    shadowOpacity: 0.4,
    shadowRadius: 3, }}>
    <View style= {{alignSelf: 'flex-start', }}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#403818'}}>Yarn Type</Text>
    </View>
    
    <Picker
      selectedValue={selectedYarnType}
      style={{ height: 100, width: '110%', alignSelf: 'center', overflow: 'hidden'}}
      onValueChange={(itemValue, itemIndex) =>
       { setSelectedYarnType(itemValue)
        setId(yarns.length + 1)
        //console.log(selectedYarnType, mix)
        if(selectedYarnType && itemValue === "Mix" ) {setIsMix(true)}
      }
    
      }
      itemStyle={{fontSize: 16, height: 120, fontWeight: 'bold', color: '#201C0C' }}>
      
      <Picker.Item label="Cashmere" value="Cashmere" />
      <Picker.Item label="Merinos" value="Merinos" />
      <Picker.Item label="Mix" value="Mix" />
      <Picker.Item label="Yack" value="Yack" />
      <Picker.Item label="Mohair" value="Mohair" />
      <Picker.Item label="Cotton" value="Cotton" />
      <Picker.Item label="Linen" value="Linen" />
      <Picker.Item label="Alpaca" value="Alpaca" />
      <Picker.Item label="Silk" value="Silk" />
    </Picker>
  </View>
  
  <View style={{flex: 1/5,   justifyContent: 'center', backgroundColor:  '#d5e9e3', marginHorizontal: 10, marginBottom: 10, borderRadius: 10,  padding: 20, 
    shadowColor: '# 8C9284',
    shadowOffset: {width: -2, height: -4},
    shadowOpacity: 0.2,
    shadowRadius: 3,   }}>
    <View style= {{alignSelf: 'flex-start'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#403818'}}>Yarn Weight</Text>
    </View>



    {isMix &&  (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,}}>
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
                
              setMix({selectedMerinosMix, selectedCashMix, selectedSilkMix})
              
              console.log(mix)
            }
            }
              >
              <Text style={{color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',}}>Sure</Text>
            </Pressable>
          </View>
          
        </View>
        
      </Modal>
{/*   <Pressable style={ {borderRadius: 20,
                padding: 10,
                elevation: 2,  backgroundColor: '#F194FF',}} onPress={() => setModalVisible(true)}>
        <Text style={{ color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',}}>Show Modal</Text>
      </Pressable>    */} 
    </View>) }



    <Picker
      selectedValue={selectedYarnWeight}
      style={{ height: 100, width: '110%', alignSelf: 'center'}}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedYarnWeight(itemValue)
      }
      itemStyle={{fontSize: 16, height: 120, fontWeight: 'bold', color: '#201C0C'}}>
      <Picker.Item label="1/15" value="1/15" />
      <Picker.Item label="2/28" value="2/28" />
      <Picker.Item label="300" value="300" />
      <Picker.Item label="550" value="550" />
      <Picker.Item label="650" value="650" />
      <Picker.Item label="800" value="800" />
    </Picker>
    </View>
    <View style={{flex: 1/5,  justifyContent: 'center', backgroundColor: '#d5e9e3', marginHorizontal: 10,  borderRadius: 10,  padding: 20, 
     shadowColor: '# 8C9284',
     shadowOffset: {width: -2, height: -4},
     shadowOpacity: 0.1,
     shadowRadius: 3,  }}>
      <View style= {{alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#403818'}}>Manufacturer</Text>
      </View>
      <Picker
        selectedValue={selectedYarnManufacturer}
        style={{ height: 100, width: '110%', alignSelf: 'center' }}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedYarnManufacturer(itemValue)
        }
        itemStyle={{fontSize: 16, height: 120, fontWeight: 'bold', color: '#201C0C' }}>
        <Picker.Item label="Loro Piana" value="Loro Piana" />
        <Picker.Item label="Cariaggi" value="Cariaggi" />
        <Picker.Item label="New Mill" value="New Mill" />
        <Picker.Item label="Linsieme" value="Linsieme" />
        <Picker.Item label="Botto Guzeppe" value="Botto Guzeppe" />
        <Picker.Item label="Botto Poalo" value="Botto Poalo" />
        <Picker.Item label="Biagole Modesto" value="Biagole Modesto" />
      
      </Picker>
      
  </View>
  <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
    <View style={{}}>
        <Checkbox
          style={{}}
          value={isWorsted}
          onValueChange={setWorsted}
          color={isWorsted ? '#4630EB' : undefined}
        />
        <Text style={{}}>Worsted</Text>
    </View>
    <View style={{}}>
        <Checkbox
          style={{}}
          value={isCarded}
          onValueChange={setCarded}
          color={isCarded ? '#4630EB' : undefined}
        />
        <Text style={{}}>Carded</Text>
    </View>
    <View style={{}}>
        <Checkbox
          style={{}}
          value={isAngled}
          onValueChange={setAngled}
          color={isAngled ? '#4630EB' : undefined}
        />
        <Text style={{}}>Angled</Text>
    </View>
  </View>
  <View style={{ flex: 1/8,  width: 300,  marginTop: 60,  alignSelf: 'center', justifyContent: 'space-between',  flexDirection: 'row'
}}>
   {/*  <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10}}>
      <TouchableOpacity
              style={{flexDirection: 'row', width: 100, height: 25,  backgroundColor: '#F1FFA2', borderRadius: 5, justifyContent: 'center',  alignItems: 'center', }}
              onPress={() => {}}
      >
          <Entypo name="plus" size={20} color="black" />
          <Text>Add Gauge </Text>
      </TouchableOpacity>
      <TouchableOpacity
              style={{flexDirection: 'row', width: 100, height: 25,  backgroundColor: '#F1FFA2', borderRadius: 5, justifyContent: 'center',  alignItems: 'center', }}
              onPress={() => {}}
      >
          <Entypo name="plus" size={20} color="black" />
          <Text>Add Ideas</Text>
      </TouchableOpacity>
    </View> */}
    <TouchableOpacity
          style={{ height: 45, backgroundColor: '#fdccA0', borderRadius: 5, justifyContent: 'center',  alignItems: 'center', paddingHorizontal: 20 }}
          onPress= {() => {
            setCone({id, image, selectedYarnType, isMix, mix, selectedYarnWeight, selectedYarnManufacturer, isWorsted, isAngled, isCarded })
          }}
    >
      <Text style={{fontSize: 16, color:  '#413918', fontWeight: 'bold'}}>Save Cone</Text>
    </TouchableOpacity>
    
      <TouchableOpacity
            style={{ height: 45,  backgroundColor: '#DCFC98',  borderRadius: 5, justifyContent: 'center',  alignItems: 'center', paddingHorizontal: 20 }}
            onPress={() =>
            {  setYarns(prevYarns => 
              [...prevYarns, cone])
              navigation.navigate('Cone Images')
              
              
            }}
      >
        <Text style={{fontSize: 16, color:  '#413918', fontWeight: 'bold'}}>Save Yarn</Text>
      </TouchableOpacity>

      
      
    </View>
    {/* <TouchableOpacity
            style={{width: 300, height: 45,  backgroundColor: '#DCFC98', borderRadius: 5,  justifyContent: 'center',  alignItems: 'center', alignSelf: 'center' }}
            onPress={() =>
            {  setYarns(prevYarns => 
              [...prevYarns, cone])
              navigation.navigate('Cone Images')
              
            }}
      >
        <Text style={{fontSize: 16,color:  '#413918', fontWeight: 'bold'}}>One More Cone</Text>
      </TouchableOpacity> */}
       
    </LinearGradient>  
  </>
  )
 
}

export default DetailsPicker