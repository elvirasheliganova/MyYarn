import {
  View, Text, FlatList, Image, TextInput, Pressable, StyleSheet, ScrollView
} from "react-native";
import React, { useState, useContext, useEffect, useMemo } from "react";
import { YarnContext } from "../components/YarnContext";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import Gauge from "../components/Gauge";


const ConePage = ({ route }) => {
  const { t } = useTranslation()
  const [yarns, setYarns] = useContext(YarnContext);
  const { coneId, cone } = route.params;
  const yarn = yarns.find((yarn) => yarn.id === coneId);
  const [newWeight, onChangeNewWeight] = useState(null);
  const [isGauge, setIsGauge] = useState(false);
  const [gaugeImage, setGaugeImage] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (yarn.gauge) setIsGauge(true);
    else setIsGauge(false);
  }, []);

  return (

    <ScrollView style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        colors={['#D2F0EE', "transparent"]}
        style={styles.linearGradientContainer}
      >
        <View style={{
          flex: 1, height: '100%', justifyContent: 'space-around',
        }}>
          <View style={styles.mainDataContainer}>
            <View style={styles.yarnTitle} >
              <View style={{}}>
                <Text style={styles.yarnTitleText}>{t(`${yarn.selectedYarnType}`)}{" "}</Text>
                <Text style={[styles.yarnTitleText, { color: '#6D645A', fontSize: yarn.article ? 18 : 14 }]}>{yarn.article ? yarn.article : t('noName')}{" "}</Text>
              </View>
              <View style={{ alignContent: 'flex-end', width: '65%' }}>
                <View style={styles.yarnMixData}
                >
                  {yarn.selectedCash ? (
                    <View style={{}}>
                      <Text style={styles.yarnMixDataItem}> {t('cashmere')} {yarn.selectedCash}%</Text>
                    </View>
                  ) : null}
                  {yarn.selectedAlpaca ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('alpaca')} {yarn.selectedAlpaca}%</Text>
                  ) : null}
                  {yarn.selectedAngora ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('angora')} {yarn.selectedAngora}%</Text>
                  ) : null}
                  {yarn.selectedCamel ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('camel')} {yarn.selectedCamel}%</Text>
                  ) : null}
                  {yarn.selectedWool ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('wool')} {yarn.selectedWool}%</Text>
                  ) : null}
                  {yarn.selectedMerino ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('merinos')} {yarn.selectedMerino}%</Text>
                  ) : null}
                  {yarn.selectedYak ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('yak')} {yarn.selectedYak}%</Text>
                  ) : null}
                  {yarn.selectedLamb ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('lamb')} {yarn.selectedLamb}%</Text>
                  ) : null}
                  {yarn.selectedSKid ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('superkid mohair')} {yarn.selectedSKid}%</Text>
                  ) : null}
                  {yarn.selectedKid ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('kid mohair')} {yarn.selectedKid}%</Text>
                  ) : null}
                  {yarn.selectedLinen ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('linen')} {yarn.selectedLinen}%</Text>
                  ) : null}
                  {yarn.selectedSilk ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('silk')} {yarn.selectedSilk}%</Text>
                  ) : null}
                  {yarn.selectedCotton ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('cotton')} {yarn.selectedCotton}%</Text>
                  ) : null}
                  {yarn.selectedViscose ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('viscose')} {yarn.selectedViscose}%</Text>
                  ) : null}
                  {yarn.selectedElastan ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('elastan')} {yarn.selectedElastan}%</Text>
                  ) : null}
                  {yarn.selectedPa ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('pa')} {yarn.selectedPa}%</Text>
                  ) : null}
                  {yarn.selectedOther ? (
                    <Text style={styles.yarnMixDataItem}>{" "}{t('other')} {yarn.selectedOther}%</Text>
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
                {t(`${yarn.selectedYarnManufacturer}`)}{" "}
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
      </LinearGradient>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  linearGradientContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#C7CAB6',

  },
  mainDataContainer: {
    flex: 1,
    width: '100%',
    paddingBottom: 15,
    borderRadius: 10,
  },
  yarnTitle: {
    flexDirection: "row",
    backgroundColor: '#DCFC98',
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 5,
    alignItems: 'flex-start',
    marginVertical: 10,

  },
  yarnTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#504412',
  },
  yarnMixData: {
    marginLeft: 'auto',
    marginHorizontal: 15,
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
    flex: 1,
    width: '100%',
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
  gaugeContainer: {}

})
export default ConePage;
