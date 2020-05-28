import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeMainScreen, HomeProfileScreen, HomeTab2Screen, HomeTab3Screen, HomeTab4Screen } from '../screens/home'
import { AppRoute } from './app-routes'

const Tab = createMaterialBottomTabNavigator();

export const HomeTabNavigation = (): React.ReactElement => (
<Tab.Navigator initialRouteName={AppRoute.HOME_TAB3}
 activeColor="#f0edf6" inactiveColor="#3e2465" barStyle={{ backgroundColor: '#694fad' }}
>
  <Tab.Screen 
    name={AppRoute.HOME_MAIN}
    component={HomeMainScreen}
    options={{title:'Home'}}
  />
  <Tab.Screen 
    name={AppRoute.HOME_TAB2}
    component={HomeTab2Screen}
    options={{title:'Tab 2'}}
  />
  <Tab.Screen 
    name={AppRoute.HOME_TAB3}
    component={HomeTab3Screen}
    options={{title:'Tab 3'}}
  />
  <Tab.Screen 
    name={AppRoute.HOME_TAB4}
    component={HomeTab4Screen}
    options={{title:'Tab 4'}}
  />
  <Tab.Screen 
    name={AppRoute.HOME_PROFILE}
    component={HomeProfileScreen}
    options={{title:'Profile'}}
  />
</Tab.Navigator>
);