import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Provider} from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { database } from './firebase';
import store from './src/stores/index';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LiveMapScreen from './src/screens/LiveMapScreen';

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
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
