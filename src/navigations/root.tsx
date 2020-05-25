import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home'
import { AuthNavigation } from './auth'
import { AppRoute } from './app-routes'

const Stack = createStackNavigator();

export const RootNavigation = (): React.ReactElement => (
  <Stack.Navigator mode="modal" headerMode='none'>
    <Stack.Screen name={AppRoute.HOME} component={HomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigation}/>
  </Stack.Navigator>
);