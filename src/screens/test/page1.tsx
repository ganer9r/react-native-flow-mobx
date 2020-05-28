import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../../navigations/app-routes';

export const Page1Screen = (props): ReactElement => {
  const modal = () => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  }
  const pushPage = (name: string) => {
    props.navigation.navigate(name);
  }

  return (
    <View style={styles.container}>
      <Text>Page 1</Text>
      <Text>----------------------------</Text>
      <Button
        onPress={() => pushPage(AppRoute.PAGE11)}
        title="open Page 1-1"
        color="#00f"
      />
      <Button
        onPress={() => pushPage(AppRoute.PAGE2)}
        title="open Page 2"
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
