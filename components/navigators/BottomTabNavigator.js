import { View, Text } from 'react-native'

import React, { useEffect, useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { YarnContext } from '../YarnContext';
import NewConeStackNavigator from './NewConeStackNavigator';
import { Ionicons } from '@expo/vector-icons';
import Search from '../../screens/Search';
import BoxRoomStackNavigator from '../navigators/BoxRoomStackNavigator';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

import 'react-native-gesture-handler';

import i18n from "../../i18n";

const initI18n = i18n;

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  const { t, i18n } = useTranslation();
  const [yarns, setYarns] = useContext(YarnContext)
  const [cone, setCone] = useContext(YarnContext)
  const windowHeight = Dimensions.get('window').height


  //console.warn((i18n.t('Hey Yo Im at home')))
  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    saveData()
  }, [yarns])

  const saveData = async () => {
    await AsyncStorage.setItem('yarns', JSON.stringify(yarns))
  }

  const loadData = async () => {
    const loadedYarnsValue = await AsyncStorage.getItem('yarns')
    const loadedYarns = JSON.parse(loadedYarnsValue)
    if (loadedYarns) {
      setYarns(loadedYarns)
    }
  }
  /*   const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch (e) {
        // clear error
      }
  
      // console.log('Done.')
    }
  
    clearAll() */
  //sconsole.log(windowHeight)

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#07544b',
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', },
        tabBarStyle: [
          {
            backgroundColor: '#C7CAB6',
            borderTopWidth: 0
          },
          { height: windowHeight < 812 ? 60 : 100 },
          { paddingBottom: windowHeight < 812 ? 5 : 25 }],

        tabBarInactiveTintColor: 'grey',
      })}
      screenProps={{ t, i18n }}
    >
      <Tab.Screen

        name="New Yarn"
        component={NewConeStackNavigator}
        options={{
          headerTitleStyle: { fontSize: 22, color: '#3F6B66', fontWeight: 'bold', bottom: 0, },
          headerStyle: { backgroundColor: '#B7FAF480' }, unmountOnBlur: true,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shopping-outline" size={24} color={color} />
        }} />

      <Tab.Screen name="Yarn Box" component={BoxRoomStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="library-shelves" size={24} color={color} />
        }} />

      <Tab.Screen name="Search" component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />
        }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator