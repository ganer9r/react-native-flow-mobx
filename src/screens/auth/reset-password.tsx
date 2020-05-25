import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View,
} from 'react-native';

export const ResetPasswordScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Reset Password Screen</Text>
    </View>
    
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});