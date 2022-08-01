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
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: {backgroundColor: '#C7CAB6' },
      tabBarActiveTintColor: '#3F6B66',
    }}
    >
      
      <Tab.Screen 
      name="New Cones" 
      component={NewConeStackNavigator}
      options={{headerTitleStyle: {fontSize: 22, color: '#3F6B66', fontWeight: 'bold', position: 'absolute', bottom: 0, left: -180}, headerStyle: {backgroundColor: '#B7FAF480'},   } } />
      <Tab.Screen name="BoxRoom" component={BoxRoomStackNavigator}options={{headerShown: false}} />
      <Tab.Screen name="Search" component={SearchStackNavigator} options={{headerShown: false}} />
      

       
    </Tab.Navigator>
  );
}



export default BottomTabNavigator