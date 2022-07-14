import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { YarnContext } from './YarnContext';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'

export default function ImagePick2({navigation}) {

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [image, setImage] = useState([])
  const [mainImage, setMainImage] = useState()
  const [coneImages, setConeImages] = useState([])
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

  const pickImage1 = async () => {
    
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
     setMainImage(result.uri)
    
    }
  }
  if (hasGalleryPermission === false) {
    return <Text>No acceess to Internal Storage</Text>
  }

  {/*const saveCone = () =>  { 
    setCone([image, selectedYarnType, selectedYarnWeight])
    
    //console.log(cone)
  }*/}

  const pickImage2 = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    })
    //setGallery([...gallery, result.uri])
    //console.log(image)
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
      

        <View style={{flex: 1}}>
        <Button title='Pick Main Image' onPress={() => pickImage1()} style={{marginTop: 30 }} />
        
          {/*{image && <Image source={{uri: image}}  style={{flex: 1/2}} />}*/}
        
          <View style={{flex: 1, height: 250,  backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={{uri: mainImage }}  style={{height: 250, width: 250, resizeMode: 'cover'}} />
            </View>
        </View>


        <View style={{flex: 1,}}>
        <Button title='Add More Images' onPress={() => pickImage2()} style={{marginTop: 30 }} />
        
          {/*{image && <Image source={{uri: image}}  style={{flex: 1/2}} />}*/}
        
          <View  style={{ width: '100%', }}>
          <FlatList
            data={image}
            numColumns={2}
            renderItem={({item}) => 
            (<View style={{  marginBottom: 10,  alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'lightpink'}} >
              {/*<Text style={{fontSize: 20}}>{item.type}</Text>*/}
              <Image source={{uri: item}} style={{height: 160, width: 160,marginLeft: 15, resizeMode: 'cover', }} />
             </View>)
            }
            
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}
            
            />
            </View>
        </View>
       
        <View style={{backgroundColor: 'lightgreen'}}>
        <Button
        title="Go to Details"
        onPress={() => 
          { setConeImages(() => image.unshift(mainImage))
            //console.log(coneImages)
            navigation.navigate('Cone Details', {image: image});
          
          setImage([])
         setMainImage('')
      //console.log(image)
      //console.log(yarns)
    }}
      />
      </View>
         
         
        
    </View>
  );
  
 
}


{/*<Image source = {{uri: image}}  style={{flex: 1/2}} />*/}
     