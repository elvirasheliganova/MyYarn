import { View, Text } from 'react-native'

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BoxRoom from '../../screens/BoxRoom';
import NewConeStackNavigator from './NewConeStackNavigator';

import SearchStackNavigator from './SearchStackNavigator';
import BoxRoomStackNavigator from '../../screens/BoxRoomStackNavigator';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen name="New Cone" component={NewConeStackNavigator} />
      <Tab.Screen name="BoxRoom" component={BoxRoomStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      

       
    </Tab.Navigator>
  );
}



export default BottomTabNavigator