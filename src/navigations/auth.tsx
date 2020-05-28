import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen, SignInScreen, SignUpScreen, ResetPasswordScreen } from '../screens/auth'
import { AppRoute } from './app-routes'

const Stack = createStackNavigator();

export const AuthNavigation = (): React.ReactElement => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name={AppRoute.WELCOME} component={WelcomeScreen}/>
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen}/>
    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen}/>
  </Stack.Navigator>
);