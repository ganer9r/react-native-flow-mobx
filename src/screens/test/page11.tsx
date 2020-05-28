import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../navigations/app-routes';

export const Page11Screen = (props): ReactElement => {
  const modal = () => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  }
  const pushPage = (name: string) => {
    props.navigation.navigate(name);
  }

  return (
    <View style={styles.container}>
      <Text>Page 11</Text>
      <Text>----------------------------</Text>
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
