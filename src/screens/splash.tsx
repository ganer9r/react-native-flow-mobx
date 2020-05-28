import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../navigations/app-routes'

export const SplashScreen = (props): ReactElement => {
  const move = (page: string) => {
    props.navigation.navigate(page);
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={()=>move(AppRoute.HOME)}
        title="Home"
        color="#00f"
      />

      <Button
        onPress={()=>move(AppRoute.SIGN_IN)}
        title="SIGN_IN"
        color="#00f"
      />

      <Button
        onPress={()=>move(AppRoute.WELCOME)}
        title="Welcome"
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
