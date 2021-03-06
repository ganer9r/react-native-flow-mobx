import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../../src/navigations/app-routes';

export const ResetPasswordScreen = (props): ReactElement => {
  const move = () => {
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text>Reset Password Screen</Text>
      <Text>----------------------------</Text>
      <Button
        onPress={() => move()}
        title="Close"
        color="#00f"
      />
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
