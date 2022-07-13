// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePick2 from '../ImagePick2';
import DetailsPicker from '../DetailsPicker';



const Stack = createNativeStackNavigator();

function NewConeStackNavigator() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Cone Images" component={ImagePick2} />
        <Stack.Screen name="Cone Details" component={DetailsPicker} />
      </Stack.Navigator>
    
  );
}

export default NewConeStackNavigator;