import React, { ReactElement } from 'react';
import {
  Text, StyleSheet,
} from 'react-native';

export const HomeScreen = (): ReactElement => {
  return (
    <Text style={styles.container}>Home Screen</Text>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
