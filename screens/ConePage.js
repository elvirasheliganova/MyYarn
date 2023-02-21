import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView
} from "react-native";
import React, { useState, useContext, useEffect, useMemo } from "react";
import { YarnContext } from "../components/YarnContext";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { particularitiesLabels } from "./DetailsPicker";
import { useTranslation } from "react-i18next";
import Gauge from "../components/Gauge";


const ConePage = ({ route }) => {
  const { t } = useTranslation()
  const [yarns, setYarns] = useContext(YarnContext);
  const { coneId, cone } = route.params;
  const yarn = yarns.find((yarn) => yarn.id === coneId);
  const [gauge, onChangeGauge] = useState(null);
  const [needles, onChangeNeedles] = useState(null);
  const [good, onChangeGood] = useState(null);
  const [newWeight, onChangeNewWeight] = useState(null);
  const [isGauge, setIsGauge] = useState(false);
  const [gaugeImage, setGaugeImage] = useState();
  const [edit, setEdit] = useState(false);

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
    {
      setGaugeImage(result.uri);
    }
  };
  /*   const particularitiesList = useMemo(() => {
      return Object.keys(yarn.particularities).map((particularity) => {
        return (
          yarn.particularities[particularity] &&
          particularitiesLabels[particularity]
        );
      });
    }, [yarn.particularities]); */
  console.log(yarn.selectedYarnType)
  return (

    <ScrollView style={{ flex: 1, }}>
      {/*   <View style={{ flex: 1, backgroundColor: '#EDFDFA' }}> */}
      <LinearGradient
        colors={['#D2F0EE', "transparent"]}
        style={styles.linearGradientContainer}
      >
        <View style={{ flex: 1, height: '100%', justifyContent: 'space-around' }}>
          <View style={styles.mainDataContainer}>
            <View style={styles.yarnTitle} >
              <View style={{}}>
                <Text style={styles.yarnTitleText}>{t(`${yarn.selectedYarnType}`)}{" "}</Text>
              </View>
              <View style={{ alignContent: 'flex-end', width: '65%' }}>
                <View style={styles.yarnMixData}
                // horizontal={true} showsHorizontalScrollIndicator={false}
                >
                  {yarn.mix && yarn.mix.selectedCash ? (
                    <View style={{}}>
                      <Text style={styles.yarnMixDataItem}> {t('cashmere')} {yarn.mix.selectedCash}%</Text>
                    </View>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedAlpaca ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('alpaca')} {yarn.mix.selectedAlpaca}%</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedAngora ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('angora')} {yarn.mix.selectedAngora}%</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedCamel ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('camel')} {yarn.mix.selectedCamel}%</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedWool ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('wool')} {yarn.mix.selectedWool}%</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedMerino ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('merinos')} {yarn.mix.selectedMerino}%</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedYak ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('yak')} {yarn.mix.selectedYak}%</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedLamb ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('lamb')} {yarn.mix.selectedLamb}%</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedSKid ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('superkid mohair')} {yarn.mix.selectedSKid}%</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedKid ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('kid mohair')} {yarn.mix.selectedKid}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedLinen ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('linen')} {yarn.mix.selectedLinen}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedSilk ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('silk')} {yarn.mix.selectedSilk}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedCotton ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('cotton')} {yarn.mix.selectedCotton}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedViscose ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('viscose')} {yarn.mix.selectedViscose}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedElastan ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('elastan')} {yarn.mix.selectedElastan}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedPa ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('pa')} {yarn.mix.selectedPa}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedSintetyc ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('sintetic')} {yarn.mix.selectedSintetyc}</Text>
                  ) : null}
                </View>
              </View>
            </View>
            <View
              style={styles.yarnDetails}
            >
              <Text style={[styles.yarnDetailsTitle, { color: '#424828' }]}>
                {yarn.length} {t('mts')} {/* / 100 {t('grams')} */}
              </Text>
              <Text style={{ fontSize: 14, color: '#424828' }}>{t('weight')} </Text>
            </View>
            <View
              style={styles.yarnDetails}
            >
              <Text style={{ fontSize: 14, fontWeight: "600", color: '#424828' }}>
                {yarn.selectedYarnManufacturer}{" "}
              </Text>
              <Text style={{ fontSize: 14, color: '#424828' }}>
                {t('manufactured by')} {" "}
              </Text>
            </View>
            {yarn.weight ? (
              <View style={[styles.yarnDetails, { paddingTop: 0 }]}>
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                  {edit ? (
                    <>
                      <TextInput
                        style={styles.weightEditTextInput}
                        textAlign={"left"}
                        onChangeText={(value) => onChangeNewWeight(value)}
                        value={newWeight}
                        placeholder="500 "
                        placeholderTextColor={"#424828"}
                        keyboardType="numeric"
                      />
                      <View style={{ height: 25, justifyContent: "center" }}>
                        <Text>{t('grams')}</Text>
                      </View>
                      <Pressable
                        style={styles.checkIconContainer}
                        onPress={() => {
                          setEdit(false);
                          yarn.weight = newWeight;
                        }}
                      >
                        <Feather name="check" size={25} color="black" />
                      </Pressable>
                    </>
                  ) : (
                    <Text style={{ fontSize: 14, fontWeight: "600", color: '#424828' }}>
                      {yarn.weight} {t('grams')}{" "}
                    </Text>
                  )}
                  {!edit ? (
                    <Pressable
                      style={styles.editIconContainer}
                      onPress={() => setEdit(true)}
                    >
                      <Feather name="edit-3" size={20} color="black" />
                    </Pressable>
                  ) : null}
                </View>
                <Text style={{ fontSize: 14, color: "#424828" }}>
                  {t('quantity')}{" "}
                </Text>
              </View>
            ) : null}

            <View style={styles.yarnDetails} >
              {/*     {particularitiesList.map((particularity, index) => (
                <Text style={{ fontSize: 14, fontWeight: "600" }} key={index}>
                  {particularity}
                </Text>
              ))}
              {particularitiesList.length && (
                <Text style={{ fontSize: 14, color: "grey", marginLeft: 100 }}>
                  Particularity
                </Text>
              )} */}
            </View>
          </View>
          <View style={styles.imagesContainer}>
            <FlatList
              data={yarn.image}
              renderItem={({ item, index }) => (
                <View style={{ marginRight: 20 }}>
                  <Image
                    source={{ uri: item }}
                    style={styles.image}
                  />
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.gaugeContainer}>
            <Gauge yarn={yarn} />
          </View>

        </View>
        {/*  </View> */}
      </LinearGradient>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  linearGradientContainer: {
    flex: 1,

    backgroundColor: '#C7CAB6',

  },
  mainDataContainer: {
    flex: 1,

    paddingHorizontal: 20,
    paddingBottom: 15,
    //backgroundColor: "#D7DCCA80",
    //'#EFECE7'
    borderRadius: 10,
    //shadowColor: "# 8C9284",
    //shadowOffset: { width: -2, height: -4 },
    //shadowOpacity: 0.1,
  },
  yarnTitle: {
    flexDirection: "row",
    backgroundColor:
      "#E6F5C8",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    marginVertical: 10,

  },
  yarnTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#424828'

    // marginRight: 40
  },
  yarnMixData: {
    //backgroundColor: 'pink',
    marginLeft: 'auto',
    marginHorizontal: 15,
    //flexDirection: "row",
    //alignItems: "flex-end",
  },
  yarnMixDataItem: {
    fontSize: 14, fontWeight: "bold",
    paddingBottom: 5,
    color: '#424828'
  },
  yarnDetails: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  yarnDetailsTitle: {
    fontSize: 14, fontWeight: "600",
  },
  weightEditTextInput: {
    height: 25,
    backgroundColor: "#BFC3AE",
    width: 45,
    borderRadius: 5,
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  checkIconContainer: {
    width: 25,
    height: 25,
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: "#fdccA0",
    justifyContent: "center",
    alignItems: "center",
  },
  editIconContainer: {
    width: 25,
    height: 25,
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: "#DCFC98",
    justifyContent: "center",
    alignItems: "center",
  },
  imagesContainer: {
    marginHorizontal: 20,
    //marginVertical: 6,
    marginBottom: 25,
    shadowColor: "# 8C9284",
    shadowOffset: { width: -2, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    height: 220,
    width: 220,
    borderRadius: 10,
    resizeMode: "cover",
  },
  gaugeContainer: {

    // backgroundColor: "#c4d2c9",
    //marginHorizontal: 20,
    //padding: 10,
    // borderRadius: 10,
    // marginBottom: 50

  },
  gaugeImageData: {
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "flex-start",

  },
  gaugeTitle: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DCFC98",
    borderRadius: 10,
    padding: 5,

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
    height: 130,
    width: 130,
    shadowColor: "# 8C9284",
    shadowOffset: { width: -2, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: "#d4e3d9",
    marginLeft: 10,
    borderColor: "silver",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  gaugeImageContainer: {
    flex: 1,
    alignSelf: "flex-start",
    shadowColor: "# 8C9284",
    shadowOffset: { width: -2, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  gaugeImage: {
    height: 130,
    width: 130,
    borderRadius: 10,
    resizeMode: "cover",
  },
  gaugeImageDelete: {
    width: 15,
    height: 15,
    backgroundColor: "#C7CAB6",
    borderRadius: 5,
    position: "absolute",
    left: 110,
    top: 3,
    justifyContent: "center",
    alignItems: "center",
  }
  , gaugeInputLong: {
    height: 25,
    backgroundColor: "#BFC3AE",
    width: 230,
    borderRadius: 5,
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  saveGaugeButton: {
    backgroundColor: '#FE9868',
    // "#fdccA0",
    padding: 8,
    width: 130,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-end",
    alignItems: "center",

  }

})
export default ConePage;
