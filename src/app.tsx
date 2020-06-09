/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './navigations/root'
import 'mobx-react/batchingForReactNative'

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
}