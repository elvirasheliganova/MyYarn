import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { YarnContext } from '../components/YarnContext';

const Details = (props) => {
  const { t } = useTranslation();
  const [length, onChangeLength] = useState()
  const [lengthIsVisible, setLengthIsVisible] = useState(false)
  const [quantityIsVisible, setQuantityIsVisible] = useState(false)
  const [articleIsVisible, setArticleIsVisible] = useState(false)
  const [weight, onChangeWeight] = useState();
  const [article, onChangeArticle] = useState()



  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <View style={styles.detailsView}>

          <TextInput
            style={styles.textInput}
            onChangeText={(value) => { props.chooseLength(value), setLengthIsVisible(true) }}
            value={length}
            placeholder={t('weight')}
            placeholderTextColor={'#746B45'}
            keyboardType="numeric"
          />
          {lengthIsVisible ?
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.detailsText}>{t('m / 100 gr')}</Text>
            </View> : null}
        </View>
        <View style={styles.detailsView}>

          <TextInput
            style={styles.textInput}
            onChangeText={(value) => { props.chooseWeight(value), setQuantityIsVisible(true) }}
            value={weight}
            placeholder={t('quantity')}
            placeholderTextColor={'#746B45'}
            keyboardType="numeric"
          />
          {quantityIsVisible ?
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.detailsText}>{t('gr')}</Text>
            </View>
            : null}
        </View>

        <View style={styles.detailsView}>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={(value) => { props.chooseArticle(value), setArticleIsVisible(true) }}
            value={article}
            placeholder={t('article')}
            placeholderTextColor={'#746B45'}
            keyboardType="default"
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C7CAB6'
  },
  textInput: {
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#504412'
  },
  detailsView: {
    paddingVertical: 5,
    backgroundColor: 'pink',
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailsText: {
    flex: 1,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#504412'
  }

})
export default Details