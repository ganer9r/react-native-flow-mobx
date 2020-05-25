import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home'
import { SignInScreen } from '../screens/auth'
import { AppRoute } from './app-routes'

const Stack = createStackNavigator();

export const AppNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.HOME} component={HomeScreen}/>
    <Stack.Screen name={AppRoute.AUTH} component={SignInScreen}/>
  </Stack.Navigator>
);