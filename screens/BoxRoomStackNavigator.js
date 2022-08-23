import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BoxRoom from './BoxRoom'
import ConePage from './ConePage'

const Stack = createNativeStackNavigator()

const BoxRoomStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#3F6B66',  
      headerTitleStyle: {fontSize: 22, color: '#3F6B66', fontWeight: 'bold', position: 'absolute', bottom: 0, left: -180, },
      headerShadowVisible: false,
      }}>
      <Stack.Screen name = 'Yarns' component ={BoxRoom} options={{headerStyle:{backgroundColor: '#D2F0EE',  }}} />
      <Stack.Screen name = 'ConePage' component ={ConePage} options={{headerStyle:{backgroundColor: '#CBE9E7BF'},  headerTitle: ''}}/>
    </Stack.Navigator>
  )
}

export default BoxRoomStackNavigator