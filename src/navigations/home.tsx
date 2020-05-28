import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { HomeTabNavigation } from './home-tab';
import { Page1Screen, Page11Screen, Page2Screen } from '../screens/test';

const Stack = createStackNavigator();

export const PagesNavigation = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name={AppRoute.HOME_TAB} component={HomeTabNavigation} options={{headerShown: false}}/>

    <Stack.Screen name={AppRoute.PAGE1} component={Page1Screen}/>
    <Stack.Screen name={AppRoute.PAGE11} component={Page11Screen}/>
    <Stack.Screen name={AppRoute.PAGE2} component={Page2Screen}/>
  </Stack.Navigator>
);