/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Button = require('./src/components/common/button');

export default class levelup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Level Up
        </Text>
        <Image
          style={{width: 200, height: 200}}
          source={require('./img/avatar.png')}
          />
          <Button text={'Log XP'} onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('levelup', () => levelup);
