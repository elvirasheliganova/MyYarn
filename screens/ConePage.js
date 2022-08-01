import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { YarnContext } from '../components/YarnContext'


const ConePage = ({ route}) => {

  const [yarns, setYarns] = useContext(YarnContext)
  const {coneId} = route.params
  

  //console.log(route.params)

  const yarn = yarns.find(yarn => yarn.id === coneId)
 

  return (
    <View>
      <Text>{yarn.selectedYarnType}</Text>
      {yarn.mix && 
      <View>
        { yarn.mix.selectedMerinosMix && <Text>Merino -{yarn.mix.selectedMerinosMix}%</Text>}
        {yarn.mix.selectedCashMix && <Text>Cash -{yarn.mix.selectedCashMix}%</Text>}
        {yarn.mix.selectedSilkMix && <Text>Silk -{yarn.mix.selectedSilkMix}%</Text>}
      </View>
       }
      
      <Text>{yarn.selectedYarnWeight}</Text>
      <Text>{yarn.selectedYarnManufacturer}</Text>
      { yarn.isWorsted && <Text>Worsted</Text>}
      { yarn.isAngled && <Text>Worsted</Text>}
      { yarn.isCarded && <Text>Carded</Text>}
    </View>
  )
}

export default ConePage