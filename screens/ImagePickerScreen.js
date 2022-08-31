import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, FlatList, TouchableOpacity, Pressable, Alert } from 'react-native';

import { YarnContext } from '../components/YarnContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

export default function ImagePickerScreen({navigation}) {

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

  //console.log(image)
  //console.log(yarns)

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
  
const deleteImage = (item) => {
  const newImage = image.filter((i => i !== item))
  setImage(newImage)
}

  


  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#D2F0EE', 'transparent']}
        style={{flex: 1,
        width: '100%', 
        paddingHorizontal: 20,
          
          
          backgroundColor: '#C7CAB6'}}
          
      >
        <View style={{flex: 1, flexDirection: 'row', 
        //marginRight: 20, 
        //alignSelf: 'flex-start'
        
        }}>
          <View style={{ flex: 1, 
          marginTop: 50, 
          height: 280, width: 280, 
          //marginRight: 10,   
        //backgroundColor: 'grey'
        }}>
          {/*<Button title='Pick Main Image' onPress={() => pickImage1()} style={{marginTop: 30 }} />*/}
        
            {/*{image && <Image source={{uri: image}}  style={{flex: 1/2}} />}*/}
        
            <Pressable onPress={() => pickImage1()} style={{flex: 1, height: 280, width: 280,  
              backgroundColor: '#ccd4c3',
              //'#cce2d0', 
             justifyContent: 'center',
             alignItems: 'center', 
          alignSelf: 'center', 
              borderRadius: 15,
              borderWidth: mainImage ? 0 : 1,
            
              borderColor: 'silver',
              }}  
              >
              { mainImage ? <ImageBackground source={{uri: mainImage }} style={{flex: 1, 
                alignSelf: ' center  ',
                }} imageStyle={{ height: 280, width: 280, borderRadius: 15, resizeMode: 'cover',  }} >
              <Pressable style={{width: 30, height: 30 , 
            //backgroundColor: '#C7CAB6', 
            borderRadius: 5,
            position: 'absolute',
            left: 218,
            top: 3,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress = {() => setMainImage()}>
             <MaterialCommunityIcons name="close-box-outline" size={24} color='#fdccA0' />
          </Pressable>
                </ImageBackground>
              : <MaterialCommunityIcons name="file-image-plus-outline" size={44} color="grey" />}
          
           
            </Pressable>
            
          </View>
          
          
        </View>


        

{/* More Images Area */}

        <View style={{flex: 1}}>
        <View style={{ 
          //backgroundColor: 'blue', 
          marginTop: 50, marginLeft: 10}}>
       {/*  <Text  style={{  fontSize: 20, fontWeight: '600' ,  color: '#66fc00',}}>Add More </Text> */}
          {/*{image && <Image source={{uri: image}}  style={{flex: 1/2}} />}*/}
        </View>

          {/* No images */}
          { image.length === 0 ?

<View style={{flex: 1, flexDirection: 'row',marginLeft: 10, 
//backgroundColor: 'lightgreen',  
justifyContent:'space-between', alignItems: 'center'}}>
<Pressable  onPress={() => {if (mainImage){pickImage2()}
else {
  Alert.alert(
    "No photo chosen",
    "Please choose main cone photo from gallery",
    [
      
      { text: "OK",
       //onPress: () => console.log("OK Pressed") 
      }
    ]
  );
}}} 
   style={{ height: 100, width: 100, backgroundColor: '#cadcd7',  borderRadius: 10, borderWidth: 1,
    borderColor: 'silver', justifyContent: 'center', alignItems: 'center',  marginRight: 20}}>
       <MaterialCommunityIcons name="file-image-plus-outline"  size={30} color="grey" /> 
</Pressable> 
<View style={{ height: 100, width: 100, backgroundColor: '#cadcd7', borderWidth: 1,
           borderColor: 'silver', borderRadius: 10, justifyContent: 'center', alignItems: 'center',  marginRight: 20 }}>

</View>
<View style={{ height: 100, width: 100, backgroundColor: '#cadcd7', borderWidth: 1,
           borderColor: 'silver', borderRadius: 10, justifyContent: 'center', alignItems: 'center',  marginRight: 20 }}>

</View>
</View>
           /* One image */

: image.length === 1 ?
<View style={{   flex: 1,
  //backgroundColor: 'grey',   
  justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>

<View style={{  alignItems: 'center'}}>
      <FlatList
      data={image}
      
      renderItem={({item}) => 
     ( <View style={{ justifyContent: 'center', alignContent: 'center', 
     //backgroundColor: 'lightpink', 
     }} >
       
        <ImageBackground source={{uri: item}} style={{height: 100, width: 100, marginRight: 20}} imageStyle={{ flex: 1,height: 100, width: 100,  borderRadius: 10, 
     resizeMode: 'cover',  }}>
      <Pressable style={{width: 20, height: 20 , 
            //backgroundColor: '#C7CAB6', 
            borderRadius: 5,
            position: 'absolute',
            left: 78,
            top: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress = {() => {
              
              setImage('')
              
              }}>
            <MaterialCommunityIcons name="close-box-outline" size={18} color='#fdccA0' />
          </Pressable>
     </ImageBackground>
      </View>)
      }
      horizontal
     // columnWrapperStyle={{
      //  flex: 1,
       // justifyContent: 'flex-start',
      //}}
      />  
    </View>

    <Pressable  onPress={() => pickImage2()} 
   style={{ height: 100, width: 100, 
    backgroundColor: '#D9D4D0',
    borderWidth: 1, 
     
   borderColor: 'silver', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 20, }}>
       <MaterialCommunityIcons name="file-image-plus-outline" size={30} color="grey" />
    </Pressable> 
    
    <View  
   style={{ 
    height: 100, 
    width: 100, 
    backgroundColor: '#D9D4D0', 
    borderRadius: 10, 
    borderWidth: 1, 
   
    borderColor: 'silver',
    justifyContent: 'center', 
    alignItems: 'center', 
     }}>
       {/*  <MaterialCommunityIcons name="camera-plus-outline" size={44} color="black" /> */}
    </View>  
    


    

    {/* <Pressable  onPress={() => pickImage2()} 
      style={{ height: 60, width: 160, backgroundColor: 'lightgrey', borderRadius: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}> 
          <Text> Add Next Image</Text>
       </Pressable>
       */}
     


     {/*<MaterialCommunityIcons name="camera-plus-outline" size={44} color="black" /> */}
     
    
        

</View> : 
image.length === 2 ? 
<View style={{flex: 1,  
//backgroundColor: 'grey',  
justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>

<View style={{}}>
  <FlatList
  data={image}
  
  renderItem={({item}) => 
 ( <View style={{flex:1, justifyContent: 'center', alignItems: 'center', 
 //backgroundColor: 'lightpink' 
}} >
   
   <ImageBackground source={{uri: item}} style={{height: 100, width: 100, marginRight: 20}} imageStyle={{ flex: 1,height: 100, width: 100,  borderRadius: 10, 
     resizeMode: 'cover',  }}>
     <Pressable style={{width: 20, height: 20 , 
            //backgroundColor: '#C7CAB6', 
            borderRadius: 5,
            position: 'absolute',
            left: 78,
            top: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress = {() => deleteImage(item)}>
            <MaterialCommunityIcons name="close-box-outline" size={18} color='#fdccA0' />
          </Pressable>
     </ImageBackground>
  </View>)
  }
  horizontal
 // columnWrapperStyle={{
  //  flex: 1,
   // justifyContent: 'flex-start',
  //}}
  />  
</View>

<Pressable  onPress={() => pickImage2()} 
style={{ height: 100, width: 100, backgroundColor: 'lightgrey',borderWidth: 1, 

borderColor: 'silver',  borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
   <MaterialCommunityIcons name="file-image-plus-outline" size={30} color="grey" />
</Pressable> 


 





{/* <Pressable  onPress={() => pickImage2()} 
  style={{ height: 60, width: 160, backgroundColor: 'lightgrey', borderRadius: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}> 
      <Text> Add Next Image</Text>
   </Pressable>
   */}
 


 {/*<MaterialCommunityIcons name="camera-plus-outline" size={44} color="black" /> */}
 

    

</View> : 
<View style={{flex: 1,  
  //backgroundColor: 'grey',   
  justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>


<View style={{width: '100%', }}>
  <FlatList
  data={image}
  
  renderItem={({item}) => 
 ( <View style={{ justifyContent: 'center', alignItems: 'center', 
 //backgroundColor: 'lightpink'
 }} >
   
   <ImageBackground source={{uri: item}} style={{height: 100, width: 100, marginRight: 20}} imageStyle={{ flex: 1,height: 100, width: 100,  borderRadius: 10, 
     resizeMode: 'cover',  }}>
      <Pressable style={{width: 20, height: 20 , 
            //backgroundColor: '#C7CAB6', 
            borderRadius: 5,
            position: 'absolute',
            left: 78,
            top: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress = {() => setMainImage()}>
            <MaterialCommunityIcons name="close-box-outline" size={18} color='#fdccA0' />
          </Pressable>
     </ImageBackground>
  </View>)
  }
  horizontal
 // columnWrapperStyle={{
  //  flex: 1,
   // justifyContent: 'flex-start',
  //}}
  />  
</View>
 





{/* <Pressable  onPress={() => pickImage2()} 
  style={{ height: 60, width: 160, backgroundColor: 'lightgrey', borderRadius: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}> 
      <Text> Add Next Image</Text>
   </Pressable>
   */}
 


 {/*<MaterialCommunityIcons name="camera-plus-outline" size={44} color="black" /> */}
 

    

</View>}
              
                
        </View>      
            
           
            
           
            
       
        
        <View style={{ width: '100%', marginBottom: 50, marginTop: 20, borderRadius: 5,  alignItems: 'flex-end'  }}>
        <Pressable
        style={{flexDirection: 'row', width: '50%', justifyContent: 'center',   
        backgroundColor:'#fdccA0', 
        paddingVertical: 10, paddingHorizontal: 20, marginRight: 10, borderRadius: 5}}
        onPress={() => {
          if( mainImage)
       
          { setConeImages(() => image.unshift(mainImage))
            //console.log(coneImages)
            navigation.navigate('Cone Details', {image: image});
          
          setImage([])
         setMainImage('')
      //console.log(image)
      //console.log(yarns)
    } else {
      Alert.alert(
        "No photo chosen",
        "Please choose main cone photo from gallery",
        [
          
          { text: "OK",
           //onPress: () => console.log("OK Pressed") 
          }
        ]
      );
    }
  }}
      >
        <Text style={{fontSize: 20, fontWeight: '600', color: '#07544b',  marginRight: 10}}>Next</Text>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#07544b" />
      </Pressable>
      </View>
         
         
    </LinearGradient>    
    </View>
  );
  
 
}


{/*<Image source = {{uri: image}}  style={{flex: 1/2}} />*/}
     