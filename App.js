import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Provider} from 'react-redux';
import { database } from './firebase';
import LoginScreen from './src/screens/LoginScreen';
import store from './src/stores/index';


export default class App extends React.Component {
  handlePress() {
    console.warn('you pressed the button!')
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LoginScreen />
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
