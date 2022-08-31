import { View, Text, TouchableOpacity, Modal, Pressable, TextInput, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import {Picker} from '@react-native-picker/picker';
import Pick from './Pick';
import pickerData from '../assets/pickerData';
import { YarnContext } from './YarnContext';
//import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import ModalMix from './ModalMix';
//import PickMix from './PickMix';

const DetailsPicker = ({ route,navigation}) => {
  const {image} = route.params
  const [selectedYarnType, setSelectedYarnType] = useState()
  const [selectedYarnWeight, setSelectedYarnWeight] = useState()
  const [selectedYarnManufacturer, setSelectedYarnManufacturer] = useState()
  const [selectedYarnColor, setSelectedYarnColor] = useState()
  const [id, setId] = useState()
  const [cone, setCone] = useState()
  const [yarns, setYarns] = useContext(YarnContext)
  
  const [isCarded, setCarded] = useState(false)
  const [isWorsted, setWorsted] = useState(false)
  const [isAngled, setAngled] = useState(false)
 
  const [mix, setMix] = useState()
  const [isMix, setIsMix] = useState(false)
  //const [modalVisible, setModalVisible] = useState(true)
  //const [selectedMerinosMix, setSelectedMerinosMix] = useState();
  //const [selectedCashMix, setSelectedCashMix] = useState();
  //const [selectedSilkMix, setSelectedSilkMix] = useState();

  const [weight, onChangeWeight] = useState(null);

  

  //const dataColor = pickerData.color
  //const dataManufacturer = pickerData.manufacturer

  
  console.log(yarns)

 /*  const Pick = () => {
    return(
      <View style={{ justifyContent: 'center', backgroundColor: '#d5e9e3', marginBottom: 10 , marginHorizontal: 10,  borderRadius: 10,  padding: 20, 
     shadowColor: '# 8C9284',
     shadowOffset: {width: -2, height: -4},
     shadowOpacity: 0.1,
     shadowRadius: 3,  }}>
      <View style= {{alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#403818'}}>Manufacturer</Text>
      </View>
      <Picker
        selectedValue={selectedYarnManufacturer}
        style={{ height: 40, width: '110%', alignSelf: 'center' }}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedYarnManufacturer(itemValue)
        }
        itemStyle={{fontSize: 16, height: 50, fontWeight: 'bold', color: '#201C0C' }}>
        <Picker.Item label="Loro Piana" value="Loro Piana" />
        <Picker.Item label="Cariaggi" value="Cariaggi" />
        <Picker.Item label="New Mill" value="New Mill" />
        <Picker.Item label="Linsieme" value="Linsieme" />
        <Picker.Item label="Botto Guzeppe" value="Botto Guzeppe" />
        <Picker.Item label="Botto Poalo" value="Botto Poalo" />
        <Picker.Item label="Biagole Modesto" value="Biagole Modesto" />
      
      </Picker>
      
  </View>
    )
  } */
  
  //const saveCone = () => setCone({image, selectedYarnType, selectedYarnWeight })

   //console.log(image)
   //console.log(route.params)
   
   //console.log(dataColor)
   //.log(cone)


   //const saveYarns = () => setYarns(prevYarns => 
   
   // [...prevYarns, cone])

   
   

  return (
    
    <>
     <LinearGradient
        // Background Linear Gradient
        colors={['#D2F0EE', 'transparent']}
        style={{flex: 1,
          
          
          backgroundColor: '#C7CAB6'}}
          
      >
        <View style={{marginTop: 20 }}>
   {/*  <Pick 
    title = {'Yarn Type'} 
    data = {pickerData.yarnType}
    selectedValue={selectedYarnType} 
    onValueChange= {(itemValue, itemIndex) =>
{setSelectedYarnType(itemValue)


    setId(yarns.length + 1)
    //console.log(selectedYarnType, mix)
    if(selectedYarnType && itemValue === "Mix" ) {setIsMix(true)}}} />
   */}
   {/* <PickMix 

title = {'Yarn Type'} 
data = {pickerData.yarnType}
selectedValue={selectedYarnType} 
onValueChange= {(itemValue, itemIndex) =>
{setSelectedYarnType(itemValue)


    setId(yarns.length + 1)
    //console.log(selectedYarnType, mix)
    if(selectedYarnType && itemValue === "Mix" ) {setIsMix(true)}}}
   /> */}
  

     
      <Pick 
    title = {'Yarn Type'} 
    data = {pickerData.yarnType}
    selectedValue={selectedYarnType} 
    onValueChange= {(itemValue, itemIndex) =>
{setSelectedYarnType(itemValue)

      setId(Date.now())
   // setId(yarns.length + 1)
    //console.log(selectedYarnType, mix)
    if(selectedYarnType && itemValue === "Mix" ) {setIsMix(true)}}} />
      {isMix &&  (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      }}>
    
      <ModalMix changeMix={
        mix => setMix(mix)
        } />
      {console.log(mix)}
{/*   <Pressable style={ {borderRadius: 20,
                padding: 10,
                elevation: 2,  backgroundColor: '#F194FF',}} onPress={() => setModalVisible(true)}>
        <Text style={{ color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',}}>Show Modal</Text>
      </Pressable>    */} 
    </View>) }
      
  
    
    <Pick 
    title = {'Manufacturer'} 
    data = {pickerData.manufacturer}
    selectedValue={selectedYarnManufacturer} 
    onValueChange= {(itemValue, itemIndex) =>
    setSelectedYarnManufacturer(itemValue)} 
   />
    <Pick 
    title = {'Color'} 
    data = {pickerData.color}
    selectedValue={selectedYarnColor}
    onValueChange= {(itemValue, itemIndex) =>
      setSelectedYarnColor(itemValue)} 
      />
    <Pick 
    title = {'Weight'} 
    data = {pickerData.weight} 
    selectedValue={selectedYarnWeight}
    onValueChange= {(itemValue, itemIndex) =>
      setSelectedYarnWeight(itemValue)} 
     />




  
  </View>
  <View>
   <TextInput
        style={{  height: 40,
          backgroundColor: '#BFC3AE',
          margin: 10,
          borderRadius: 10,
          padding: 10,
          fontSize: 18,
        fontWeight: 'bold'}}
        onChangeText={onChangeWeight}
        value={weight}
        placeholder="Cone Weight"
        placeholderTextColor={'#867D59'}
        
        keyboardType="numeric"
      />
  </View>
  
  <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20,  
  //backgroundColor: 'green'
  }}>
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
  <View style={{   width: 300, 
  //backgroundColor: 'red',  
  marginTop: 30,  alignSelf: 'center', justifyContent: 'space-between',  flexDirection: 'row'
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
          style={{ height: 45, backgroundColor: '#DCFC98', borderRadius: 5, justifyContent: 'center',  alignItems: 'center', paddingHorizontal: 20 }}
          onPress= {() =>{ 
            if (selectedYarnType, selectedYarnWeight, selectedYarnColor, selectedYarnManufacturer)
            {
            setCone({id, image, selectedYarnType, isMix, mix, selectedYarnWeight, selectedYarnManufacturer, selectedYarnColor, isWorsted, isAngled, isCarded, weight })
          }
          else {
            Alert.alert(
              "No full yarn data",
              "Please choose  Yarn Type, Manufacturer, Color and Weight",
              [
                
                { text: "OK",
                 //onPress: () => console.log("OK Pressed") 
                }
              ]
            );
          }
        }
        }
    >
      
      <Text style={{fontSize: 16, color:  '#413918', fontWeight: 'bold'}}>Confirm</Text>
    </TouchableOpacity>
    
      <TouchableOpacity
            style={{ height: 45,  backgroundColor: '#fdccA0',  borderRadius: 5, justifyContent: 'center',  alignItems: 'center', paddingHorizontal: 20 }}
            onPress={() => {
              if (cone)
            {  setYarns(prevYarns => 
              [...prevYarns, cone])
              navigation.navigate('Cone Images')
             // console.log(yarns)
              
            }
            else {
              Alert.alert(
                "Please confirm ",
                "Please confirm cone data",
                [
                  
                  { text: "OK",
                   //onPress: () => console.log("OK Pressed") 
                  }
                ]
              );
            }
          }
          }
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