import React, { ReactElement, useEffect } from 'react';
import {
  Text, StyleSheet, View, Button
} from 'react-native';
import { AppContext } from '../appContext';
import { observer } from "mobx-react";


interface Props {}

export const SplashScreen = observer(function(props: Props) {
  const { appStore } = React.useContext(AppContext);
  useEffect(() => {
    setTimeout(function(){
      appStore.onLoadComplate()
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>

      <Button
        onPress={appStore.onLoadComplate}
        title="load complate"
        color="#00f"
      />
    </View>
  );
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
