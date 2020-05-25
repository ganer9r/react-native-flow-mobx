import React, { ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button, Alert,
} from 'react-native';

export const SignInScreen = (props): ReactElement => {
  const alertMe = () => {
    props.navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
      <Button
        onPress={alertMe}
        title="move Home"
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
