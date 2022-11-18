import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, Pressable, Alert, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';


export default function ImagePickerScreen({ navigation }) {

  
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [image, setImage] = useState([])
  const [mainImage, setMainImage] = useState()
  const [coneImages, setConeImages] = useState([])
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === 'granted')
    })()
  }, [])

  const pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.cancelled) {
      setMainImage(result.uri)
    }
  }
  if (hasGalleryPermission === false) {

    return <Text>No acceess to Internal Storage</Text>
  }

  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.cancelled) {
      setImage(prevImage => [...prevImage, result.uri])
    }
  }
  if (hasGalleryPermission === false) {
    return <Text>No acceess to Internal Storage</Text>
  }

  const deleteImage = (item) => {
    const newImage = image.filter((i => i !== item))
    setImage(newImage)
  }
  
  
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <LinearGradient
        colors={['#D2F0EE', 'transparent']}
        style={styles.gradientContainer} >
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <View style={[styles.mainImageContainer, windowWidth > 830 ? styles.mICSizeLarge : styles.mICSizeNorm]}>
            <Pressable onPress={() => pickImage1()} 
            style={[styles.pickImage1Container, { borderWidth: mainImage ? 0 : 1 }, windowWidth > 830 ? styles.mICSizeLarge : styles.mICSizeNorm
               ]}>
              {mainImage ?
                <ImageBackground
                  source={{ uri: mainImage }}
                  style={{ flex: 1, alignSelf: ' center  ', }}
                  imageStyle={[ styles.image, windowWidth > 830 ? styles.mICSizeLarge : styles.mICSizeNorm]} >
                  <Pressable style={styles.mainImagePressable}
                    onPress={() => setMainImage()}>
                    <MaterialCommunityIcons name="close-box-outline" size={24} color='#fdccA0' />
                  </Pressable>
                </ImageBackground>
                : <MaterialCommunityIcons name="file-image-plus-outline" size={44} color="grey" />}
            </Pressable>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 50, marginLeft: 10 }}>
          </View>

          {/* No images */}
          {image.length === 0 ?
            <View style={styles.moreImagesContainer}>
              <Pressable onPress={() => {
                if (mainImage) { pickImage2() }
                else {
                  Alert.alert(
                    "No photo chosen",
                    "Please choose main cone photo from gallery",
                    [{
                      text: "OK",
                    }]
                  );
                }
              }}
                style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}>
                <MaterialCommunityIcons name="file-image-plus-outline" size={30} color="grey" />
              </Pressable>
              <View style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}></View>
              <View style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}></View>
            </View>

            : image.length === 1 ?
              <View style={styles.moreImagesContainer}>
                <View style={{ alignItems: 'center' }}>
                  <FlatList
                    data={image}
                    renderItem={({ item }) =>
                    (<View style={{ justifyContent: 'center', alignContent: 'center', }} >

                      <ImageBackground
                        source={{ uri: item }}
                        style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm, { marginRight: 20} ]}
                        imageStyle={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}>
                        <Pressable style={styles.smallDelete}
                          onPress={() => {
                            setImage('')
                          }}>
                          <MaterialCommunityIcons name="close-box-outline" size={18} color='#fdccA0' />
                        </Pressable>
                      </ImageBackground>
                    </View>)
                    }
                    horizontal
                  />
                </View>
                <Pressable onPress={() => pickImage2()}
                  style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}>
                  <MaterialCommunityIcons name="file-image-plus-outline" size={30} color="grey" />
                </Pressable>
                <View style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}></View>

              </View>

              : image.length === 2 ?
                <View style={styles.moreImagesContainer}>
                  <View style={{alignItems: 'center'}}>
                    <FlatList
                      data={image}
                      renderItem={({ item }) =>
                      (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <ImageBackground
                          source={{ uri: item }}
                          style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm, { marginRight: 20} ]}
                          imageStyle={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}>
                          <Pressable style={styles.smallDelete}
                            onPress={() => deleteImage(item)}>
                            <MaterialCommunityIcons name="close-box-outline" size={18} color='#fdccA0' />
                          </Pressable>
                        </ImageBackground>
                      </View>)
                      }
                      horizontal
                    />
                  </View>
                  <Pressable onPress={() => pickImage2()}
                    style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}>
                    <MaterialCommunityIcons name="file-image-plus-outline" size={30} color="grey" />
                  </Pressable>
                </View>

                : <View style={[styles.moreImagesContainer, { width: '110%' }]}>
                  <View style={{ width: '100%',  alignItems: 'center' }}>
                    <FlatList
                      data={image}
                      renderItem={({ item }) =>
                      (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} >
                        <ImageBackground
                          source={{ uri: item }}
                          style={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm, { marginRight: 20}]}
                          imageStyle={[styles.moreImage, windowWidth > 830 ? styles.mISizeLarge : styles.mISizeNorm]}>
                          <Pressable style={styles.smallDelete}
                            onPress={() => deleteImage(item)}>
                            <MaterialCommunityIcons name="close-box-outline" size={18} color='#fdccA0' />
                          </Pressable>
                        </ImageBackground>
                      </View>)
                      }
                      horizontal
                    />
                  </View>
                </View>}
        </View>

        <View style={{ width: '100%', 
        marginBottom: 50, marginTop: 20, 
        borderRadius: 5, 
        alignItems: 'flex-end' 
        }}>
          <Pressable
            style={styles.nextButton}
            onPress={() => {
              if (mainImage) {
                setConeImages(() => image.unshift(mainImage))
                navigation.navigate('Cone Details', { image: image });
                setImage([])
                setMainImage('')
              } else {
                Alert.alert(
                  "No photo chosen",
                  "Please choose main cone photo from gallery",
                  [{
                    text: "OK",
                  }]
                );
              }
            }}
          >
            <Text style={styles.nextButtonText}>Next</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#07544b" />
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#C7CAB6',
  },
  mainImageContainer: {
    flex: 1,
    marginTop: 30,
  },
  mICSizeLarge: {
    height:  400,
    width: 400
  },
  mICSizeNorm: {
    height: 200,
    width: 200
  },
  image:  {
    borderRadius: 15, 
    resizeMode: 'cover' 
  },
  pickImage1Container: {
    flex: 1,
    backgroundColor: '#ccd4c3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: 'silver',
  }, 

  mainImagePressable: {
    width: 30,
    height: 30,
    borderRadius: 5,
    position: 'absolute',
    left: 248,
    top: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  moreImagesContainer: {
    marginTop: 50,
    marginLeft: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  moreImage: {
    backgroundColor: '#cadcd7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  mISizeNorm: {
    height: 100,
    width: 100
  },
  mISizeLarge: {
    width: 200,
    height: 200
  },
  smallDelete: {
    width: 20,
    height: 20,
    borderRadius: 5,
    position: 'absolute',
    left: 78,
    top: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextButton: {
    flexDirection: 'row',
    width: '40%',
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdccA0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5
  },
  
  nextButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#07544b',
    marginRight: 10
  },
})

