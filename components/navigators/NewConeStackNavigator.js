// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePickerScreen from '../../screens/ImagePickerScreen';
import DetailsPicker from '../DetailsPicker';



const Stack = createNativeStackNavigator();

function NewConeStackNavigator() {
  return (
   
      <Stack.Navigator initialRouteName="Cone Images" screenOptions={{headerBackTitle: 'More One', headerStyle: {backgroundColor:'#CBE9E7BF' }, headerTintColor: '#FF4307', 
        }} >
        <Stack.Screen name="Cone Images" component={ImagePickerScreen} options={{headerShown: false} } />
        <Stack.Screen name="Cone Details" component={DetailsPicker} options={{headerShown: false}} />
      </Stack.Navigator>
    
  );
}

export default NewConeStackNavigator;