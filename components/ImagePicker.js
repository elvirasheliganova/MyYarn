import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { YarnContext } from './YarnContext';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'

export default function ImagePicker1() {

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
    

    if (!result.cancelled){
      setImage(result.uri)
     
     
    }
  }
  if (hasGalleryPermission === false) {
    return <Text>No acceess to Internal Storage</Text>
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
        
        
       
       
         
        
    </View>
  );
  
 
}


{/*<Image source = {{uri: image}}  style={{flex: 1/2}} />*/}
     