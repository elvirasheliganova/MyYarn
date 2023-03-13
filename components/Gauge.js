import { View, Text, TextInput, Pressable, ImageBackground, StyleSheet } from 'react-native'
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
  const [mmIsVisible, setMmIsVisible] = useState(false)

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
    { setGaugeImage(result.assets[0].uri) }
  };
  return (
    <>

      <View style={styles.gaugeImageData} >
        <View style={styles.gaugeTitle}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: '#504412' }}>
            {t('gauge')}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            pickImage3();
          }}
          style={styles.gaugeImageMask}
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
                  style={[styles.gaugeInputShort, { color: "#312d09" }]}
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
                <View style={[styles.gaugeInputShort, { flexDirection: 'row', justifyContent: 'center' }]}>
                  <TextInput
                    style={{ color: "#312d09", fontWeight: 'bold', }}
                    textAlign={"right"}
                    onChangeText={(value) => {
                      onChangeNeedles(value),
                        setMmIsVisible(true)
                    }}
                    value={needles}
                    placeholder={t("3mm")}
                    placeholderTextColor={"#867D59"}
                    keyboardType="numeric"
                  />
                  {mmIsVisible ? <Text style={{ fontWeight: 'bold', color: "#312d09", fontSize: 14 }}>{t('mm')}</Text> : null}
                </View>
              </View>
            </View>
          ) : (
            <View >
              <View style={[styles.gaugeLineShort, {}]}>
                <View style={{}}>
                  <Text style={[styles.gaugeLineText, {}]}>
                    {" "}{t('yarn gauge is')}{" "}
                  </Text>
                </View>
                <Text
                  style={[styles.gaugeInputShort, { textAlign: 'center', color: "#312d09" }]} >{t(`${yarn.gauge}`)}
                </Text>
              </View>
              <View style={styles.gaugeLineShort}>
                <View style={{}}>
                  <Text style={[styles.gaugeLineText, {}]}>
                    {" "}{t('on needles')}{" "}
                  </Text>
                </View>
                <Text
                  style={[styles.gaugeInputShort, { textAlign: 'center', color: "#312d09" }]} >{t(`${yarn.needles}`)}{t('mm')}
                </Text>
              </View>
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {isGauge === false ? (
            <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 5, alignItems: 'center', }}>
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
                style={[styles.gaugeInputShort, { textAlign: 'auto', flexWrap: 'wrap', flex: 1, color: "#312d09", paddingLeft: 15 }]} >{yarn.good}
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
            alert(
              t('add gauge data'),
              // t('add gauge data'),
              [{
                text: "OK",
              },]
            );
          }
        }}
      >
        <Text
          style={{ color: '#504412', fontSize: 18, fontWeight: "bold" }} >
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
    paddingVertical: 15,
    borderRadius: 10,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    alignItems: "flex-start",
    width: '100%'
  },
  gaugeTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#F6C1C9',
    width: '100%',
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
  },
  gaugeLineShort: {
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between",
    marginBottom: 5,
  },
  gaugeInputShort: {
    backgroundColor: "#C8CCB4",
    width: '40%',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 'auto',
    alignItems: 'center'
  },
  gaugeLineText: {
    paddingVertical: 5,
    color: "#312d09",
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  gaugeImageMask: {
    flex: 1,
    width: 220,
    aspectRatio: 1,
    backgroundColor: "#d4e3d9",
    borderColor: "silver",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25
  },
  gaugeImageContainer: {
    height: '100%',
    width: '100%',
  },
  gaugeImage: {
    flex: 1,
    height: '100%',
    width: '100%',
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
  },
  gaugeInputLong: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "#BFC3AE",
    borderRadius: 5,
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  saveGaugeButton: {
    backgroundColor: '#fec0a5',
    padding: 8,
    width: '43%',
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 25,
    alignSelf: "flex-end",
    alignItems: "center",
  }

})
export default Gauge