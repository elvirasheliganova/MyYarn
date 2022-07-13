import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { YarnContext } from '../components/YarnContext'


const ConePage = ({ route}) => {

  const [yarns, setYarns] = useContext(YarnContext)
  const {coneId} = route.params

  console.log(route.params)

  const yarn = yarns.find(yarn => yarn.id === coneId)

  return (
    <View>
      <Text>{yarn.selectedYarnType}</Text>
      <Text>{yarn.selectedYarnWeight}</Text>
    </View>
  )
}

export default ConePage