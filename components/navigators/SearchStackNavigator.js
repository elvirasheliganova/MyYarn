import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from '../Search';
import Cone from '../../screens/Cone';

const Stack = createNativeStackNavigator();

const SearchStackNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchCone" component={Search} />
      <Stack.Screen name="Cone" component={Cone} />
    </Stack.Navigator>

  )
}

export default SearchStackNavigator