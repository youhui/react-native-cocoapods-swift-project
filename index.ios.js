import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, 
  View,
  Image,
  Button,
  Alert
} from 'react-native';

export default class MyApp extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <Text style={{fontSize:20, marginTop:200}}>Hello React-Native!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
