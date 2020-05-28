import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../navigations/app-routes';

export const WelcomeScreen = (props): ReactElement => {
  const move = (page: string) => {
    props.navigation.navigate(page);
  }

  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Text>----------------------------</Text>
      <Button
        onPress={() => move(AppRoute.SIGN_IN)}
        title="Sign In"
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
