import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { YarnContext } from './YarnContext';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'

export default function ImagePick() {

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [image, setImage] = useState(null)
  const [gallery, setGallery] = useState([])

  const [selectedYarnType, setSelectedYarnType] = useState()
  const [selectedYarnWeight, setSelectedYarnWeight] = useState()

  const [yarns, setYarns] = useContext(YarnContext)



  useEffect(() => {
    (async() => {
      const galleryStatus =await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, []) 

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    })
    setGallery([...gallery, result.uri])
    //console.log(gallery)
    //console.log(gallery[0].type)
   
    
    

    if (!result.cancelled){
      setImage(result.uri)
     
     
    }
  }
  if (hasGalleryPermission === false) {
    return <Text>No acceess to Internal Storage</Text>
  }


const saveYarns = () =>  { setYarns( prevYarns => [...prevYarns, {gallery: gallery, selectedYarnType: selectedYarnType, selectedYarnWeight: selectedYarnWeight}])
  
  console.log(yarns)
}

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title='Pick Image' onPress={() => pickImage()} style={{marginTop: 30 }} />
       <View style={{flex: 1/4, backgroundColor: 'grey'}}>
        <FlatList
          data={gallery}
          renderItem={({item}) => 
          (<View style={{backgroundColor: 'darkgrey',  height: 250}} >
            {/*<Text style={{fontSize: 20}}>{item.type}</Text>*/}
             <Image source={{uri: item}} style={{height: 200, width: 200, resizeMode: 'cover'}} />
           </View>)
          }
          horizontal />
        </View>
        <View style={{flex: 1/6, borderColor: 'pink', borderWidth: 2, }}>
          <View style= {{alignSelf: 'center'}}>
            <Text>Choose Yarn Type</Text>
          </View>
          <Picker
            selectedValue={selectedYarnType}
            style={{ height: 100, width: 300, alignSelf: 'center' }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedYarnType(itemValue)
            }
            itemStyle={{fontSize: 16, height: 120}}>
            <Picker.Item label="Cashmere" value="cash" />
            <Picker.Item label="Merinos" value="merino" />
            <Picker.Item label="Yack" value="yack" />
            <Picker.Item label="Mohair" value="mohair" />
          </Picker>
        </View>
        <View style={{flex: 1/6, borderColor: 'pink', borderWidth: 2 }}>
          <View style= {{alignSelf: 'center'}}>
            <Text>Choose Yarn Weight</Text>
          </View>
          <Picker
            selectedValue={selectedYarnWeight}
            style={{ height: 100, width: 300, alignSelf: 'center' }}
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
       
        <TouchableOpacity
          style={{width: 300, height: 100, backgroundColor: 'pink', justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}}
          onPress=
          {saveYarns
          }
         >
          <Text>Save</Text>
        </TouchableOpacity>
         
         
        
    </View>
  );
  
 
}


{/*<Image source = {{uri: image}}  style={{flex: 1/2}} />*/}
     