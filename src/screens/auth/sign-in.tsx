import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../../src/navigations/app-routes';

export const SignInScreen = (props): ReactElement => {
  const move = (page: string) => {
    props.navigation.navigate(page);
  }

  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
      <Text>----------------------------</Text>
      <Button
        onPress={() => move(AppRoute.HOME)}
        title="move Home"
        color="#00f"
      />
      <Button
        onPress={() => move(AppRoute.SIGN_UP)}
        title="SignUp"
        color="#0f0"
      />
      <Button
        onPress={() => move(AppRoute.RESET_PASSWORD)}
        title="Reset Password"
        color="#0f0"
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
