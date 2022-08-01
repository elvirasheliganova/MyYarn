import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { YarnContext } from '../components/YarnContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'
import { LinearGradient } from 'expo-linear-gradient';

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
  


  


  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#D2F0EE', 'transparent']}
        style={{flex: 1,
          
          paddingHorizontal: 25,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#C7CAB6'}}
          start={{ x: 0.5, y: 0.3 }}
          end={{ x: 1, y: 1}}
      >
        <View style={{flex: 1, flexDirection: 'row', marginRight: 20, }}>
          <View style={{  paddingTop: 50, marginRight: 10
        //backgroundColor: 'grey'
        }}>
          {/*<Button title='Pick Main Image' onPress={() => pickImage1()} style={{marginTop: 30 }} />*/}
        
            {/*{image && <Image source={{uri: image}}  style={{flex: 1/2}} />}*/}
        
            <Pressable onPress={() => pickImage1()} style={{flex: 1, height: 250, width: 250,   
              backgroundColor: '#C7CAB6',
          //'#cadcd7', 
             justifyContent: 'center',
              alignItems: 'center', 
          //alignSelf: 'center', 
              borderRadius: 15,
              borderWidth: 2,
              borderStyle: 'dashed',
              borderColor: 'grey'
              }}  
              >
              { mainImage ? <Image source={{uri: mainImage }}  style={{flex: 1, height: 250, width: 250, borderRadius: 15, resizeMode: 'cover', alignSelf: 'center'}} />
              : <MaterialCommunityIcons name="camera-plus-outline" size={44} color="grey" />}
          
           
            </Pressable>
            
          </View>
          <Pressable style={{width: 50, height: 50 , 
            //backgroundColor: 'green',  
            marginTop: 50,
            alignSelf: 'flex-start',
            justifyContent: 'flex-start'}}>
              <MaterialCommunityIcons name="delete" size={30} color="grey" />
          </Pressable>
        </View>


        

{/* More Images Area */}

        <View style={{flex: 1}}>
        <View style={{ 
          //backgroundColor: 'blue', 
          marginTop: 50, marginLeft: 10}}>
        <Text  style={{  fontSize: 20, fontWeight: '600' ,  color: '#1A2728'}}>Add More </Text>
          {/*{image && <Image source={{uri: image}}  style={{flex: 1/2}} />}*/}
        </View>

          { image.length === 0 ?

<View style={{flex: 1, flexDirection: 'row',marginLeft: 10, 
//backgroundColor: 'lightgreen',  
justifyContent:'space-between', alignItems: 'center'}}>
<Pressable  onPress={() => pickImage2()} 
   style={{ height: 100, width: 100, backgroundColor: '#cadcd7',  borderRadius: 10, borderWidth: 2,
   borderStyle: 'dashed', borderColor: 'grey', justifyContent: 'center', alignItems: 'center',  marginRight: 20}}>
       <MaterialCommunityIcons name="camera-plus-outline" size={44} color="grey" /> 
</Pressable> 
<View style={{ height: 100, width: 100, backgroundColor: '#cadcd7', borderWidth: 2,
          borderStyle: 'dashed',  borderColor: 'grey', borderRadius: 10, justifyContent: 'center', alignItems: 'center',  marginRight: 20 }}>

</View>
<View style={{ height: 100, width: 100, backgroundColor: '#cadcd7', borderWidth: 2,
          borderStyle: 'dashed',  borderColor: 'grey', borderRadius: 10, justifyContent: 'center', alignItems: 'center',  marginRight: 20 }}>

</View>
</View>
          
: image.length === 1 ?
<View style={{flex: 1,  
  //backgroundColor: 'grey',   
  justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row'}}>

    <Pressable  onPress={() => pickImage2()} 
   style={{ height: 100, width: 100, 
    backgroundColor: '#D9D4D0',
    borderWidth: 2, 
   borderStyle: 'dashed', 
   borderColor: 'grey', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 20, }}>
       <MaterialCommunityIcons name="camera-plus-outline" size={44} color="black" /> 
    </Pressable> 
    <View style={{}}>
      <FlatList
      data={image}
      
      renderItem={({item}) => 
     ( <View style={{ justifyContent: 'center', alignItems: 'center',  marginRight: 20,
     //backgroundColor: 'lightpink', 
     alignSelf: 'center'}} >
       
        <Image source={{uri: item}} style={{height: 100, width: 100,  borderRadius: 10,  marginHorizontal: 10,
     resizeMode: 'cover',  }} />
      </View>)
      }
      horizontal
     // columnWrapperStyle={{
      //  flex: 1,
       // justifyContent: 'flex-start',
      //}}
      />  
    </View>
    <View  
   style={{ 
    height: 100, 
    width: 100, 
    backgroundColor: '#D9D4D0', 
    borderRadius: 10, 
    borderWidth: 2, 
    borderStyle: 'dashed', 
    borderColor: 'grey',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 20, }}>
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

<Pressable  onPress={() => pickImage2()} 
style={{ height: 100, width: 100, backgroundColor: 'lightgrey',borderWidth: 2, 
borderStyle: 'dashed', 
borderColor: 'grey',  borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
   <MaterialCommunityIcons name="camera-plus-outline" size={44} color="black" /> 
</Pressable> 

<View style={{marginLeft: 10}}>
  <FlatList
  data={image}
  
  renderItem={({item}) => 
 ( <View style={{flex:1, justifyContent: 'center', alignItems: 'center', 
 //backgroundColor: 'lightpink' 
}} >
   
    <Image source={{uri: item}} style={{height: 100, width: 100,  borderRadius: 10, resizeMode: 'cover',  marginHorizontal: 10 }} />
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
   
    <Image source={{uri: item}} style={{height: 100, width: 100,  borderRadius: 10, resizeMode: 'cover', marginRight: 20 }} />
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
        style={{flexDirection: 'row', width: '50%', justifyContent: 'center',   backgroundColor: '#fdccA0', paddingVertical: 10, paddingHorizontal: 20, marginRight: 10, borderRadius: 5}}
        onPress={() => 
          { setConeImages(() => image.unshift(mainImage))
            //console.log(coneImages)
            navigation.navigate('Cone Details', {image: image});
          
          setImage([])
         setMainImage('')
      //console.log(image)
      //console.log(yarns)
    }}
      >
        <Text style={{fontSize: 20, fontWeight: '600', color: '#1A2728',  marginRight: 10}}>Next</Text>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#1A2728" />
      </Pressable>
      </View>
         
         
    </LinearGradient>    
    </View>
  );
  
 
}


{/*<Image source = {{uri: image}}  style={{flex: 1/2}} />*/}
     