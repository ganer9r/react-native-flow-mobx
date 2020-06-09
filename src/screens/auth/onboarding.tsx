import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../navigations/app-routes';

export const OnboardingScreen = (props): ReactElement => {
  const move = (page: string) => {
    props.navigation.navigate(page);
  }

  return (
    <View style={styles.container}>
      <Text>OnBoarding Screen</Text>
      <Text>----------------------------</Text>
      <Button
        onPress={() => move(AppRoute.SIGN_IN)}
        title="Sign In"
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
