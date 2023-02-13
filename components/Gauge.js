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
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
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
                    name="close-box-outline"
                    size={14}
                    color="#fdccA0"
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
        {isGauge === false ? (
          <View style={{}}>
            <View style={styles.gaugeLineShort} >
              <View>
                <Text style={styles.gaugeLineText}>
                  {" "}{t('yarn gauge is')}{" "}
                </Text>
              </View>
              <TextInput
                style={styles.gaugeInputShort}
                textAlign={"center"}
                onChangeText={(value) => onChangeGauge(value)}
                value={gauge}
                placeholder="32r x 20s"
                placeholderTextColor={"#867D59"}
                keyboardType="default"
              />
            </View>
            <View style={styles.gaugeLineShort}>
              <View style={{}}>
                <Text style={styles.gaugeLineText}>
                  {" "} {t('on needles')}{" "}
                </Text>
              </View>
              <TextInput
                style={styles.gaugeInputShort}
                textAlign={"center"}
                onChangeText={(value) => onChangeNeedles(value)}
                value={needles}
                placeholder="3mm"
                placeholderTextColor={"#867D59"}
                keyboardType="numeric"
              />
            </View>
          </View>
        ) : (
          <>
            <View style={{ marginTop: 10, }}>
              <Text style={[styles.gaugeLineText, { marginBottom: 5 }]}>
                {t('yarn gauge is')} {" "}{yarn.gauge}{" "}
              </Text>
              <Text style={styles.gaugeLineText}>
                {t('on needles')} {yarn.needles}
              </Text>
            </View>
          </>
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
          <View style={{ backgroundColor: 'pink', flexDirection: 'row', paddingHorizontal: 20 }}>
            <View>
              <Text style={styles.gaugeLineText}>
                {t('is good for')}{" "}
              </Text>
            </View>
            <TextInput
              style={styles.gaugeInputLong}
              textAlign={"center"}
              onChangeText={onChangeGood}
              value={good}
              placeholder="arans/stockinet/openwork "
              placeholderTextColor={"#867D59"}
              keyboardType="default"
            />
          </View>
        ) : (
          <View style={{ backgroundColor: 'pink', flexDirection: 'row', paddingHorizontal: 20 }}>
            <Text style={styles.gaugeLineText}>
              {t('is good for')}{" "}{yarn.good}
            </Text>
          </View>
        )}
      </View>
      <Pressable
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
          style={{ color: "#312d09", fontSize: 16, fontWeight: "bold" }}
        >
          {t('save')}
        </Text>
      </Pressable>
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
    shadowColor: "# 8C9284",
    shadowOffset: { width: -2, height: -4 },
    shadowOpacity: 0.1,
    //flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-start",
    width: '100%'
  },
  gaugeTitle: {
    // marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DCFC98",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 5

  },
  gaugeLineShort: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 25,
    marginBottom: 5,
  },
  gaugeInputShort: {
    backgroundColor: "#BFC3AE",
    width: 95,
    marginLeft: 5,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  gaugeLineText: {
    color: "#312d09",
    fontSize: 14,
    fontWeight: "bold",
  },
  gaugeImageMask: {
    flex: 1,
    width: '65%',
    aspectRatio: 1,
    shadowColor: "# 8C9284",
    shadowOffset: { width: -2, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
    shadowColor: "# 8C9284",
    shadowOffset: { width: -2, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

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
    width: 15,
    height: 15,
    backgroundColor: "#C7CAB6",
    borderRadius: 5,
    position: "absolute",
    left: 108,
    top: 3,
    justifyContent: "center",
    alignItems: "center",
  }
  , gaugeInputLong: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //height: 25,
    backgroundColor: "#BFC3AE",
    width: 230,
    borderRadius: 5,
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  saveGaugeButton: {
    backgroundColor: "#fdccA0",
    padding: 8,
    width: 130,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-end",
    alignItems: "center",

  }

})
export default Gauge