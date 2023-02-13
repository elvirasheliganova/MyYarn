
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePickerScreen from '../../screens/ImagePickerScreen';
import DetailsPicker from '../../screens/DetailsPicker';
import { useTranslation } from 'react-i18next';

import 'react-native-gesture-handler';

import i18n from "../../i18n";
import Home from '../../screens/Home';

//const initI18n = i18n;


const Stack = createNativeStackNavigator();




function NewConeStackNavigator() {


  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Cone Images" screenOptions={{
      headerShown: false,
      headerBackTitle: '',
      headerStyle: { backgroundColor: '#CBE9E7BF' }, headerTintColor: '#FF4307',

    }}
      screenProps={{ t, i18n }} >
      <Stack.Screen name="Cone Images" component={ImagePickerScreen} options={{ headerTitle: t('choose pictures') }} />
      <Stack.Screen name="Cone Details" component={Home} options={{ headerTitle: t('more details') }} />
    </Stack.Navigator>

  );
}

export default NewConeStackNavigator;