import React, { ReactElement, useContext } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../../src/navigations/app-routes';
import { AuthContext, AppContext } from '../../contexts'

export const SignInScreen = (props): ReactElement => {
  const { userStore } = React.useContext(AppContext);

  const move = (page: string) => {
    props.navigation.navigate(page)
  }

  const signin = () => {
    userStore.setToken('11111')
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
      <Text>----------------------------</Text>
      <Button
        onPress={() => signin()}
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
