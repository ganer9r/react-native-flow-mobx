import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PagesNavigation } from './home'
import { SplashScreen } from '../screens/splash'
import { AppRoute } from './app-routes'
import { OnboardingScreen, SignInScreen, SignUpScreen, ResetPasswordScreen } from '../screens/auth'

const Stack = createStackNavigator();

export const RootNavigation = (): React.ReactElement => {
  const isLoaded = false

  if (!isLoaded) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator headerMode='none' mode="modal">
      <Stack.Screen name={AppRoute.ONBOARDING} component={OnboardingScreen} options={{ animationEnabled: false }}/>
      <Stack.Screen name={AppRoute.HOME} component={PagesNavigation} />

      <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>
      <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen}/>
      <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen}/>
    </Stack.Navigator>
  )
};