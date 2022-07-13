import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { YarnContext } from './YarnContext';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'

export default function ImagePick2({navigation}) {

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [image, setImage] = useState([])
  //const [id, setId] = useState()
  const [yarns, setYarns] = useContext(YarnContext)
  
  //const [gallery, setGallery] = useState([])

  //const [selectedYarnType, setSelectedYarnType] = useState()
  //const [selectedYarnWeight, setSelectedYarnWeight] = useState()

 

  //const [cone, setCone] = useState()



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
    //setGallery([...gallery, result.uri])
    //console.log(gallery)
    //console.log(gallery[0].type)
   
    
    

    if (!result.cancelled){
      //setImage(result.uri)
     setImage(prevImage => [...prevImage, result.uri])
    
    }
  }
  if (hasGalleryPermission === false) {
    return <Text>No acceess to Internal Storage</Text>
  }

  {/*const saveCone = () =>  { 
    setCone([image, selectedYarnType, selectedYarnWeight])
    
    //console.log(cone)
  }*/}
  


  return (
    <View style={{flex: 1, justifyContent: 'center', }}>
      <Button title='Pick Image' onPress={() => pickImage()} style={{marginTop: 30 }} />
       
        {/*{image && <Image source={{uri: image}}  style={{flex: 1/2}} />}*/}
      
        <View style={{flex: 1,}}>
        <FlatList
          data={image}
          renderItem={({item}) => 
          (<View style={{  marginBottom: 10, alignItems: 'center'}} >
            {/*<Text style={{fontSize: 20}}>{item.type}</Text>*/}
             <Image source={{uri: item}} style={{height: 250, width: 250, resizeMode: 'cover'}} />
           </View>)
          }
          
           />
        </View>
       
        {/*<TouchableOpacity
          style={{width: 300, height: 20, backgroundColor: 'pink', justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}}
          onPress=
          {saveCone
            
          }
         >
          <Text>Save</Text>
        </TouchableOpacity>*/}
        <Button
        title="Go to Details"
        onPress={() => 
          {navigation.navigate('Cone Details', {image: image});
          setImage([])
      //console.log(image)
      //console.log(yarns)
    }}
      />
         
         
        
    </View>
  );
  
 
}


{/*<Image source = {{uri: image}}  style={{flex: 1/2}} />*/}
     