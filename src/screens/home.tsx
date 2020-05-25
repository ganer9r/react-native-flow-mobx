import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';
import { AppRoute } from '../navigations/app-routes'

export const HomeScreen = (props): ReactElement => {
  const move = (page: string) => {
    props.navigation.navigate(page);
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={()=>move(AppRoute.AUTH)}
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
  }
});
