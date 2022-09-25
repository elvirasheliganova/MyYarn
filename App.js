import React from 'react';
import { YarnProvider } from './components/YarnContext';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './components/navigators/BottomTabNavigator';

export default function App() {

  return (

    <NavigationContainer>
      <YarnProvider>
        <BottomTabNavigator />
      </YarnProvider>
    </NavigationContainer>

  );
}