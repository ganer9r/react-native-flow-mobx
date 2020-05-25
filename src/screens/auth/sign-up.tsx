import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View,
} from 'react-native';

export const SignUpScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
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
