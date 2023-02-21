import { View, Text, TextInput, Pressable, ImageBackground, StyleSheet, Alert } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { YarnContext } from "../components/YarnContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from 'react-i18next';

const Gauge = ({ yarn }) => {
  const { t } = useTranslation()

  const [yarns, setYarns] = useContext(YarnContext);
  const [gauge, onChangeGauge] = useState(null);
  const [needles, onChangeNeedles] = useState(null);
  const [good, onChangeGood] = useState(null);
  const [isGauge, setIsGauge] = useState(false);
  const [gaugeImage, setGaugeImage] = useState();

  const saveData = async () => {
    await AsyncStorage.setItem("yarns", JSON.stringify(yarns));
  };
  useEffect(() => {
    if (yarn.gauge) setIsGauge(true);
    else setIsGauge(false);
  }, []);

  const pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    { setGaugeImage(result.uri) }
  };
  return (
    <>
      <View style={styles.gaugeTitle}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: '#424828' }}>
          {t('gauge')}
        </Text>
      </View>
      <View style={styles.gaugeImageData} >

        {/*     <View style={{ backgroundColor: 'green' }} >



        </View> */}

        <Pressable
          onPress={() => {
            pickImage3();
          }}
          style={[styles.gaugeImageMask, { borderWidth: gaugeImage ? 0 : 1 }]}
          disabled={!isGauge ? false : true}
        >
          {gaugeImage ? (
            <ImageBackground
              source={{ uri: gaugeImage }}
              style={styles.gaugeImageContainer}
              imageStyle={styles.gaugeImage}
            >
              {!isGauge ? (
                <Pressable
                  style={styles.gaugeImageDelete}
                  onPress={() => setGaugeImage()}
                >
                  <MaterialCommunityIcons
                    name="close-box" size={18} color='#D5DCDB'
                  />
                </Pressable>
              ) : null}
            </ImageBackground>
          )
            : isGauge ? (
              <ImageBackground
                source={{ uri: yarn.gaugeImage }}
                style={styles.gaugeImageContainer}
                imageStyle={styles.gaugeImage}
              />
            ) :
              (
                <MaterialCommunityIcons
                  name="file-image-plus-outline"
                  size={30}
                  color="grey"
                />
              )}
        </Pressable>
        <View>
          {isGauge === false ? (
            <View style={{}}>
              <View style={styles.gaugeLineShort} >
                <View style={{}}>
                  <Text style={styles.gaugeLineText}>
                    {" "}{t('yarn gauge is')}{" "}
                  </Text>
                </View>
                <TextInput
                  style={styles.gaugeInputShort}
                  textAlign={"center"}
                  onChangeText={(value) => onChangeGauge(value)}
                  value={gauge}
                  placeholder={t("32s x 20r")}
                  placeholderTextColor={"#867D59"}
                  keyboardType="default"
                />
              </View>
              <View style={styles.gaugeLineShort}>
                <View style={{}}>
                  <Text style={[styles.gaugeLineText, {}]}>
                    {" "}{t('on needles')}{" "}
                  </Text>
                </View>
                <TextInput
                  style={styles.gaugeInputShort}
                  textAlign={"center"}
                  onChangeText={(value) => onChangeNeedles(value)}
                  value={needles}
                  placeholder={t("3mm")}
                  placeholderTextColor={"#867D59"}
                  keyboardType="numeric"
                />
              </View>
            </View>
          ) : (
            <View >

              {/* <View style={styles.gaugeLineShort} >
                <View style={{ flexDirection: 'row', marginLeft: 'auto' }} >
                  <Text style={styles.gaugeLineText}>{" "}{t('yarn gauge is')}{" "}</Text>
                  <Text
                    style={[styles.gaugeInputShort, { textAlign: 'center' }]} >{t(`${yarn.gauge}`)}
                  </Text>

                </View>
                    <TextInput
                  style={styles.gaugeInputShort}
                  textAlign={"center"}
                  onChangeText={(value) => onChangeGauge(value)}
                  value={gauge}
                  placeholder={t('32s x 20r')}
                  placeholderTextColor={"#867D59"}
                  keyboardType="default"
                /> 
              </View> */}
              <View style={styles.gaugeLineShort}>
                <View style={{}}>
                  <Text style={[styles.gaugeLineText, {}]}>
                    {" "}{t('yarn gauge is')}{" "}
                  </Text>
                </View>
                <Text
                  style={[styles.gaugeInputShort, { textAlign: 'center' }]} >{t(`${yarn.gauge}`)}
                </Text>

              </View>
              <View style={styles.gaugeLineShort}>
                <View style={{}}>
                  <Text style={[styles.gaugeLineText, {}]}>
                    {" "}{t('on needles')}{" "}
                  </Text>
                </View>
                <Text
                  style={[styles.gaugeInputShort, { textAlign: 'center' }]} >{t(`${yarn.needles}`)}{t('mm')}
                </Text>

              </View>
            </View>
          )}
        </View>
        {/* <View
        style={{
          flexDirection: "row",
          marginLeft: 25,
          alignItems: "center",
          backgroundColor: 'red'
        }}
      >
        <View></View>
      </View> */}

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {isGauge === false ? (
            <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 5, alignItems: 'center' }}>
              <View style={{}}>
                <Text style={[styles.gaugeLineText, { justifyContent: 'center' }]}>
                  {t('notes')}{" "}
                </Text>
              </View>
              <TextInput
                style={[styles.gaugeInputLong, { flex: 1, flexWrap: 'wrap', marginLeft: 10 }]}
                textAlign={'auto'}
                onChangeText={onChangeGood}
                value={good}
                placeholder={t('notes content')}
                placeholderTextColor={"#867D59"}
                keyboardType="default"
              />
            </View>
          ) : (
            <View style={styles.gaugeLineShort}>
              <View style={{}}>
                <Text style={[styles.gaugeLineText, {}]}>
                  {" "}{t('notes')}{" "}
                </Text>
              </View>
              <Text
                style={[styles.gaugeInputShort, { textAlign: 'center', flexWrap: 'wrap', flex: 1 }]} >{yarn.good}
              </Text>

            </View>

          )}
        </View>
      </View>
      {!isGauge ? <Pressable
        style={styles.saveGaugeButton}
        onPress={() => {
          if (gauge && needles && good && gaugeImage) {
            yarn.gauge = gauge;
            yarn.needles = needles;
            yarn.good = good;
            yarn.gaugeImage = gaugeImage;
            setIsGauge(true);
            const cone = yarn
            setYarns(yarns);
            saveData(yarns);

          } else {
            Alert.alert(
              "No full gauge data",
              "Please enter gauge, needles, photo and what your yarn is good for",
              [{
                text: "OK",
              },]
            );
          }
        }}
      >
        <Text
          style={{

            color: '#504412',
            //'#424828', 
            fontSize: 18, fontWeight: "bold"
          }} >
          {t('save')}
        </Text>
      </Pressable> : null
      }
    </>
  )
}
const styles = StyleSheet.create({

  gaugeImageData: {
    flex: 1,

    paddingHorizontal: 20,
    paddingBottom: 15,
    //backgroundColor: "#D7DCCA80",
    //'#EFECE7'
    //borderRadius: 10,
    //shadowColor: "# 8C9284",
    //shadowOffset: { width: -2, height: -4 },
    //shadowOpacity: 0.1,
    //flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-start",
    width: '100%'
  },
  gaugeTitle: {
    // marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#d3e7b1',
    // "#DCFC98",
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 20,
    marginBottom: 5,


  },
  gaugeLineShort: {
    flexDirection: "row",

    //alignItems: "flex-end",
    justifyContent: "space-between",
    //height: 25,
    marginBottom: 5,
    //backgroundColor: 'red'
  },
  gaugeInputShort: {
    backgroundColor: "#BFC3AE",
    // "#BFC3AE",
    width: '50%',
    marginLeft: 5,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  gaugeLineText: {
    paddingVertical: 5
    , color: "#312d09",
    fontSize: 14,
    fontWeight: "bold",
    flex: 1

  },
  gaugeImageMask: {
    flex: 1,
    width: '65%',
    aspectRatio: 1,
    //shadowColor: "# 8C9284",
    //shadowOffset: { width: -2, height: -4 },
    //shadowOpacity: 0.1,
    // shadowRadius: 3,
    backgroundColor: "#d4e3d9",
    // marginLeft: 10,
    borderColor: "silver",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25
  },
  gaugeImageContainer: {
    //flex: 1,
    //alignSelf: "flex-end",
    height: '100%',
    width: '100%',
    //shadowColor: "# 8C9284",
    //shadowOffset: { width: -2, height: -4 },
    //shadowOpacity: 0.1,
    //shadowRadius: 3,

  },
  gaugeImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    //aspectRatio: 1,
    borderRadius: 10,
    resizeMode: "cover",
  },
  gaugeImageDelete: {
    width: 18,
    height: 18,
    backgroundColor: "#C7CAB6",
    borderRadius: 5,
    position: "absolute",
    left: '90%',
    top: 5,
    justifyContent: "center",
    alignItems: "center",
  }
  , gaugeInputLong: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //height: 25,

    backgroundColor: "#BFC3AE",
    // width: 230,
    borderRadius: 5,
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  saveGaugeButton: {
    backgroundColor:
      //'#fdccA0',
      '#fec0a5',
    //'#ffc3aa',
    // '#FBA47A',
    // "#fdccA0",
    padding: 8,
    width: '43%',
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 25,
    alignSelf: "flex-end",
    alignItems: "center",
    // shadowColor: "# 8C9284",
    //shadowOffset: { width: -2, height: -4 },
    //shadowOpacity: 0.1,

  }

})
export default Gauge