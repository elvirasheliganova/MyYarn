import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  Alert,
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
import Gauge from "../components/Gauge";


const ConePage = ({ route }) => {
  const [yarns, setYarns] = useContext(YarnContext);
  //const [cone, setCone] = useContext(YarnContext)
  const { coneId, cone } = route.params;

  //

  const yarn = yarns.find((yarn) => yarn.id === coneId);
  //console.log(yarn)

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

  const particularitiesList = useMemo(() => {
    return Object.keys(yarn.particularities).map((particularity) => {
      return (
        yarn.particularities[particularity] &&
        particularitiesLabels[particularity]
      );
    });
  }, [yarn.particularities]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#D2F0EE", "transparent"]}
        style={styles.linearGradientContainer}
      >
        <View style={{}}>
          <View style={styles.mainDataContainer}>
            <View style={styles.yarnTitle} >
              <View style={{}}>
                <Text style={styles.yarnTitleText}> {yarn.selectedYarnType}{" "}</Text>
              </View>
              <View style={{ alignContent: 'flex-end', width: '65%' }}>
                <ScrollView style={styles.yarnMixData} horizontal={true} showsHorizontalScrollIndicator={false}>
                  {yarn.mix && yarn.mix.selectedCashMix ? (
                    <View style={{}}>
                      <Text style={styles.yarnMixDataItem}> Cash {yarn.mix.selectedCashMix}</Text>
                    </View>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedMerinosMix ? (
                    <Text style={styles.yarnMixDataItem}>{" "}  Merinos {yarn.mix.selectedMerinosMix}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedSilkMix ? (
                    <Text style={styles.yarnMixDataItem}> {" "} Silk {yarn.mix.selectedSilkMix}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedCottonMix ? (
                    <Text style={styles.yarnMixDataItem}> {" "} Cotton {yarn.mix.selectedCottonMix}</Text>
                  ) : null}
                  {yarn.mix && yarn.mix.selectedViscoseMix ? (
                    <Text style={styles.yarnMixDataItem}> {" "} Viscose {yarn.mix.selectedViscoseMix}</Text>
                  ) : null}
                </ScrollView>
              </View>
            </View>
            <View
              style={styles.yarnDetails}
            >
              <Text style={styles.yarnDetailsTitle}>
                {yarn.selectedYarnWeight} mts/100 grams
              </Text>
              <Text style={{ fontSize: 14, color: "grey" }}>Weight </Text>
            </View>
            <View
              style={styles.yarnDetails}
            >
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                {yarn.selectedYarnManufacturer}{" "}
              </Text>
              <Text style={{ fontSize: 14, color: "grey" }}>
                Manufactured by{" "}
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
                        placeholderTextColor={"#867D59"}
                        keyboardType="numeric"
                      />
                      <View style={{ height: 25, justifyContent: "center" }}>
                        <Text>grams</Text>
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
                    <Text style={{ fontSize: 14, fontWeight: "600" }}>
                      {yarn.weight} grams{" "}
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
                <Text style={{ fontSize: 14, color: "grey" }}>
                  Cone weight{" "}
                </Text>
              </View>
            ) : null}

            <View style={styles.yarnDetails} >
              {particularitiesList.map((particularity) => (
                <Text style={{ fontSize: 14, fontWeight: "600" }}>
                  {particularity}
                </Text>
              ))}
              {particularitiesList.length && (
                <Text style={{ fontSize: 14, color: "grey", marginLeft: 100 }}>
                  Particularity
                </Text>
              )}
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

          <View
            style={styles.gaugeContainer}
          >
            {/*   <Gauge yarn={yarn} /> */}
            <>
              <View
                style={styles.gaugeImageData}
              >
                <View
                  style={{}}
                >
                  <View
                    style={styles.gaugeData}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                      Gauge
                    </Text>
                  </View>
                  {isGauge === false ? (
                    <View style={{}}>
                      <View style={styles.gaugeLineShort} >
                        <View>
                          <Text style={styles.gaugeLineText}>
                            {" "}Yarn gauge is{" "}
                          </Text>
                        </View>
                        <TextInput
                          style={styles.gaugeInputShort}
                          textAlign={"center"}
                          onChangeText={(value) => onChangeGauge(value)}
                          value={gauge}
                          placeholder="32r x 20s"
                          placeholderTextColor={"#867D59"}
                          keyboardType="numeric"
                        />
                      </View>
                      <View style={styles.gaugeLineShort}>
                        <View>
                          <Text style={styles.gaugeLineText}>
                            {" "}on needles{" "}
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
                      <View style={{ marginTop: 10 }}>
                        <Text style={[styles.gaugeLineText, { marginBottom: 5 }]}>
                          Yarn gauge is {yarn.gauge}{" "}
                        </Text>
                        <Text style={styles.gaugeLineText}>
                          on needles {yarn.needles}
                        </Text>
                      </View>
                    </>
                  )}
                </View>
                <Pressable
                  onPress={() => {
                    pickImage3();
                  }}
                  style={[styles.gaugeImageMask, { borderWidth: gaugeImage ? 0 : 1 }]}
                >
                  {gaugeImage ? (
                    <ImageBackground
                      source={{ uri: gaugeImage }}
                      style={styles.gaugeImageContainer}
                      imageStyle={styles.gaugeImage}
                    >
                      {yarn.gaugeImage ? (
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
                  ) : (
                    <MaterialCommunityIcons
                      name="file-image-plus-outline"
                      size={30}
                      color="grey"
                    />
                  )}
                </Pressable>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 25,
                  alignItems: "center",
                }}
              >
                <View></View>
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
                  <>
                    <View>
                      <Text style={styles.gaugeLineText}>
                        Is goog for{" "}
                      </Text>
                    </View>
                    <TextInput
                      style={styles.gaugeInputLong}
                      textAlign={"center"}
                      onChangeText={onChangeGood}
                      value={good}
                      placeholder="arans/stockinet/openwork "
                      placeholderTextColor={"#867D59"}
                      keyboardType="numeric"
                    />
                  </>
                ) : (
                  <View>
                    <Text style={styles.gaugeLineText}>
                      Is goog for {yarn.good}
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

                    var index = yarns.indexOf(yarn);
                    if (index !== -1) {
                      yarns[index] = yarn;
                    }
                    setYarns(yarns);
                    saveData();
                  } else {
                    Alert.alert(
                      "No full gauge data",
                      "Please enter gauge, needles, photo and what your yarn is good for",
                      [{
                        text: "OK",
                        //onPress: () => console.log("OK Pressed")
                      },]
                    );
                  }
                }}
              >
                <Text
                  style={{ color: "#312d09", fontSize: 16, fontWeight: "bold" }}
                >
                  Save Gauge
                </Text>
              </Pressable>
            </>
          </View>
        </View>
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
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: "#D7DCCA80",
    //'#EFECE7'
    borderRadius: 10,
    shadowColor: "# 8C9284",
    shadowOffset: { width: -2, height: -4 },
    shadowOpacity: 0.1,
  },
  yarnTitle: {
    flexDirection: "row",
    backgroundColor: "#DCFC98",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    marginVertical: 10
  },
  yarnTitleText: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 40
  },
  yarnMixData: {
    flexDirection: "row",
    //alignItems: "flex-end",
  },
  yarnMixDataItem: {
    fontSize: 14, fontWeight: "600",
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
    marginVertical: 13,
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

    backgroundColor: "#c4d2c9",
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,

  },
  gaugeImageData: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "#fdccA0",
    padding: 8,
    width: 130,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-end",
    alignItems: "center",

  }

})
export default ConePage;
