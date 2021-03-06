import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../../src/navigations/app-routes';

export const HomeMainScreen = (props): ReactElement => {
  const modal = () => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  }
  const pushPage = () => {
    props.navigation.navigate(AppRoute.PAGE1);
  }

  return (
    <View style={styles.container}>
      <Text>Main Tab</Text>
      <Text>----------------------------</Text>
      <Button
        onPress={() => pushPage()}
        title="open Page 1"
        color="#00f"
      />

      <Button
        onPress={() => modal()}
        title="Sign Modal Page"
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
