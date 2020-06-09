import React, { Component, ReactElement } from 'react';
import {
  Text, StyleSheet, View, Button
} from 'react-native';
import { AppRoute } from '../navigations/app-routes'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

@observer
export class SplashScreen extends Component {
  @observable fire = []
  @observable fireMessage = "testss"

  @computed get shotFire() {
    return this.fireMessage.substring(0, 2)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.shotFire}</Text>
        <Button
          onPress={()=> this.fireMessage = 'change' }
          title="Home"
          color="#00f"
        />

        <Test fireMessage={this.fireMessage}/>
      </View>
    
    );
  }
}

const Test = observer(({fireMessage}) => <Text>{fireMessage}</Text>)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
