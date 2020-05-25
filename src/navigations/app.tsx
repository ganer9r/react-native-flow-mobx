import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home'
import { SignInScreen } from '../screens/auth'

const Stack = createStackNavigator();

export const AppNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="SignIn" component={SignInScreen}/>
  </Stack.Navigator>
);