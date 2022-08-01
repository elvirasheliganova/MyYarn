import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import ImagePick from './components/ImagePicker';
import BoxRoom from './screens/BoxRoom';
import { YarnProvider } from './components/YarnContext';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './components/navigators/BottomTabNavigator';



export default function App() {

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [image, setImage] = useState(null)

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
   // console.log(result)

    if (!result.cancelled){
      setImage(result.uri)
    }
  }
  if (hasGalleryPermission === false) {
    return <Text>No acceess to Internal Storage</Text>
  }

  return (
    <NavigationContainer>
      
        <YarnProvider>
      
          <BottomTabNavigator />
        
        </YarnProvider>
     
    </NavigationContainer>
  );
}


