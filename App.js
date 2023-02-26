import { StatusBar } from 'expo-status-bar';


import React from 'react';
import { YarnProvider } from './components/YarnContext';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './components/navigators/BottomTabNavigator';

const App = () => {

  return (


    <NavigationContainer>
      <YarnProvider>

        <BottomTabNavigator />
      </YarnProvider>
    </NavigationContainer>


  )
}

export default App  