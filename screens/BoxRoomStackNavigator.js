import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BoxRoom from './BoxRoom'
import ConePage from './ConePage'

const Stack = createNativeStackNavigator()

const BoxRoomStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'Yarns' component ={BoxRoom} options={{headerStyle:{backgroundColor: '#CBE9E7BF'}}} />
      <Stack.Screen name = 'ConePage' component ={ConePage}/>
    </Stack.Navigator>
  )
}

export default BoxRoomStackNavigator