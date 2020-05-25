import React, { ReactElement } from 'react';
import {
  Text, StyleSheet,
} from 'react-native';

export const ResetPasswordScreen = (): ReactElement => {
  return (
    <Text style={styles.container}>Reset Password Screen</Text>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});