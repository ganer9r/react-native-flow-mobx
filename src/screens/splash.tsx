import React, { ReactElement, useEffect } from 'react';
import {
  Text, StyleSheet, View, Button
} from 'react-native';
import { AppContext } from '../contexts/app';
import { observer } from "mobx-react";
import { AppRepositioy } from '../repositories/app';
import { AppService } from '../services/app';

interface Props {}

export const SplashScreen = observer(function(props: Props) {
  const appService = AppService.getInstance();
  const { appStore, userStore } = React.useContext(AppContext);

  useEffect(() => {
    (async function() {
      // const res = await AppRepositioy.fetchVersions();
      // appService?.setAppVersion(res)

      setTimeout(function(){
        appStore.onLoadComplate()
        userStore.setToken('')
      }, 3000);
    })();
  }, []);


  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>


      <Text>데이터를 로드 중 입니다...</Text>
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
