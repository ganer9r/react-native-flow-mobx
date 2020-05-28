import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeMainScreen, HomeProfileScreen, HomeTab2Screen, HomeTab3Screen, HomeTab4Screen } from '../screens/home'
import { AppRoute } from './app-routes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export const HomeTabNavigation = (): React.ReactElement => (
<Tab.Navigator initialRouteName={AppRoute.HOME_TAB3}
 activeColor="#f0edf6" inactiveColor="#3e2465" barStyle={{ backgroundColor: '#694fad' }}
>
  <Tab.Screen 
    name='Home'
    component={HomeMainScreen}
    options={{
      title:'Home',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      )
    }}
  />
  <Tab.Screen 
    name={AppRoute.HOME_TAB2}
    component={HomeTab2Screen}
    options={{
      title:'Tab 2', 
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="map-marker" color={color} size={26} />
      )
    }}
  />
  <Tab.Screen 
    name={AppRoute.HOME_TAB3}
    component={HomeTab3Screen}
    options={{
      title:'Tab 3',
      tabBarIcon: 'ticket'
    }}
  />
  <Tab.Screen 
    name={AppRoute.HOME_TAB4}
    component={HomeTab4Screen}
    options={{
      title:'Tab 4',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="comment-text" color={color} size={26} />
      )
    }}
  />
  <Tab.Screen 
    name={AppRoute.HOME_PROFILE}
    component={HomeProfileScreen}
    options={{
      title:'Profile',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
      )
    }}
  />
</Tab.Navigator>
);