
import React, {Component} from 'react';
import {View} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import LiveMapScreen from './LiveMapScreen';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Log In',
    }
  },
  Register: {
    screen: RegistrationScreen,
    navigationOptions: {
      headerTitle: 'Register',
    },
  },
});

const RootTabs = TabNavigator({
  LiveMap: {
    screen: LiveMapScreen,
  },
});

export default class AppHomeScreen extends Component {
  render() {
    return (
      <RootNavigator />
    )
  }
}