import React, { ReactElement } from 'react';
import {
  Text, StyleSheet,
} from 'react-native';

export const SignInScreen = (): ReactElement => {
  return (
    <Text style={styles.container}>SignIn Screen</Text>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
