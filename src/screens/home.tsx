import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../navigations/app-routes'

export const HomeScreen = (props): ReactElement => {
  const alertMe = () => {
    props.navigation.navigate(AppRoute.AUTH);
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={alertMe}
        title="move Auth"
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
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15   
  }
});
