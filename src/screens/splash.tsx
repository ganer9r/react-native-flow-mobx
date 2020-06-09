import React, { ReactElement, useEffect } from 'react';
import {
  Text, StyleSheet, View, Button
} from 'react-native';
import { AppContext } from '../appContext';
import { observer } from "mobx-react";
import { AppRepositioy } from '../repositories/app';
import { AppService } from '../services/app';

interface Props {}

export const SplashScreen = observer(function(props: Props) {
  const appService = AppService.getInstance();
  const { appStore } = React.useContext(AppContext);

  useEffect(() => {
    (async function() {
      const res = await AppRepositioy.fetchVersions();
      appService?.setAppVersion(res)
    })();
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
