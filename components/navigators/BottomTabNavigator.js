import { View, Text } from 'react-native'

import React, { useEffect, useContext} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { YarnContext } from '../YarnContext';

import BoxRoom from '../../screens/BoxRoom';
import NewConeStackNavigator from './NewConeStackNavigator';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SearchStackNavigator from './SearchStackNavigator';
import BoxRoomStackNavigator from '../../screens/BoxRoomStackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {

  const [yarns, setYarns] = useContext(YarnContext)
  const [cone, setCone] = useContext(YarnContext)

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
 /*  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

  clearAll()   */

  return (
    <Tab.Navigator 
    screenOptions={({route}) => ({
      tabBarActiveTintColor:'#07544b' ,
      //'#B1FB12',
      //'#07544b',
      
      tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold'},
      tabBarStyle: {backgroundColor: '#C7CAB6' , height: 100,  borderTopWidth: 0, paddingTop: 10},
      
     // tabBarIconStyle: {color: active ?'#3f6b66' : 'grey' },
    
    
     
    
   /*    tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'New Cones') {
          iconName = 'shopping-outline'
        } else if (route.name === 'BoxRoom') {
          iconName = 'library-shelves';
        } else if (route.name === 'Search') {
          iconName = 'card-search-outline';
        }

        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={30} color= {'grey'} />;
      }, */
      
      tabBarInactiveTintColor: 'grey',
      
      
      
    })}
    >
      
      <Tab.Screen 
      name="New Cones" 
      component={NewConeStackNavigator}
      options={{
        headerTitleStyle: {fontSize: 22, color: '#3F6B66', fontWeight: 'bold', position: 'absolute', bottom: 0, left: -180}, 
        headerStyle: {backgroundColor: '#B7FAF480'},
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="shopping-outline" size={24} color={color} />
        } } />
      <Tab.Screen name="BoxRoom" component={BoxRoomStackNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="library-shelves" size={24} color={color} />
         }} />
      <Tab.Screen name="Search" component={SearchStackNavigator} 
      options={{
        headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="search" size={24} color={color}  />
       }} />
      

       
    </Tab.Navigator>
  );
}



export default BottomTabNavigator