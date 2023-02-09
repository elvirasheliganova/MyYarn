
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePickerScreen from '../../screens/ImagePickerScreen';
import DetailsPicker from '../../screens/DetailsPicker';
import { useTranslation } from 'react-i18next';

import 'react-native-gesture-handler';

import i18n from "../../i18n";
import Home from '../../screens/Home';

const initI18n = i18n;


const Stack = createNativeStackNavigator();

function NewConeStackNavigator() {



  return (
    <Stack.Navigator initialRouteName="Cone Images" screenOptions={{
      headerBackTitle: 'More One', headerStyle: { backgroundColor: '#CBE9E7BF' }, headerTintColor: '#FF4307',
    }} >
      <Stack.Screen name="Cone Images" component={ImagePickerScreen} options={{ headerShown: false, }} />
      <Stack.Screen name="Cone Details" component={Home} options={{ headerShown: false, }} />
    </Stack.Navigator>

  );
}

export default NewConeStackNavigator;