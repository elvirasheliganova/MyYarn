import { StatusBar } from 'expo-status-bar';


import React from 'react';
import { YarnProvider } from './components/YarnContext';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './components/navigators/BottomTabNavigator';
import Main from './Main';
import ModalView from './screens/Modal';
import Home from './screens/Home';

const App = () => {

  return (
    //<Main screenProps={{ t, i18n }} />);

    <NavigationContainer>
      <YarnProvider>

        <BottomTabNavigator />
      </YarnProvider>
    </NavigationContainer>


  )
}

export default App  