import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeTabNavigation } from './home-tab'
import { SplashScreen } from '../screens/splash'
import { AppRoute } from './app-routes'
import { WelcomeScreen, SignInScreen, SignUpScreen, ResetPasswordScreen } from '../screens/auth'

const Stack = createStackNavigator();

export const RootNavigation = (): React.ReactElement => (
  <Stack.Navigator headerMode='none' mode="modal">
    <Stack.Screen name={AppRoute.SPLASH} component={SplashScreen} options={{ animationEnabled: false }}/>
    <Stack.Screen name={AppRoute.WELCOME} component={WelcomeScreen} options={{ animationEnabled: false }}/>
    <Stack.Screen name={AppRoute.HOME} component={HomeTabNavigation}/>

    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen}/>
    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen}/>
  </Stack.Navigator>
);