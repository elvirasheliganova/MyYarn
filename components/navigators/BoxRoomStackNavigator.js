import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

import BoxRoom from '../../screens/BoxRoom'
import ConePage from '../../screens/ConePage'

const Stack = createNativeStackNavigator()

const BoxRoomStackNavigator = () => {
  const { t } = useTranslation()
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#3F6B66',
      headerTitleStyle: {
        fontSize: 22, color: '#3F6B66', fontWeight: 'bold',
        // position: 'absolute', bottom: 0, left: -180, 
      },

      headerShadowVisible: false,
    }}>
      <Stack.Screen name={t('yarns')} component={BoxRoom} options={{ headerStyle: { backgroundColor: '#D2F0EE', }, }} />
      <Stack.Screen name='ConePage' component={ConePage}
        options={{
          headerStyle: { backgroundColor: '#CBE9E7BF' },
          headerTitle: '',
          headerBackTitle: '',
        }} />
    </Stack.Navigator>
  )
}

export default BoxRoomStackNavigator