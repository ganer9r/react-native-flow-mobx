import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PagesNavigation } from './home'
import { SplashScreen } from '../screens/splash'
import { AppRoute } from './app-routes'
import { OnboardingScreen, SignInScreen, SignUpScreen, ResetPasswordScreen } from '../screens/auth'

import { Provider, observer } from "mobx-react";
import { AppStore } from '../stores/app';
import { AppContext } from '../appContext';

const Stack = createStackNavigator();
const appStore = new AppStore();

export const RootNavigation = observer((): React.ReactElement => {
  const { appStore } = React.useContext(AppContext);
  const isLoaded = false

  if (!appStore.isLoaded) {
    return (
      <Provider a={appStore}>
        <SplashScreen/>
      </Provider>
    );
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
});