import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../../src/navigations/app-routes';

export const HomeMainScreen = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Main Tab</Text>
      <Text>----------------------------</Text>
      {/* <Button
        onPress={() => move()}
        title="Close"
        color="#00f"
      /> */}

    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
