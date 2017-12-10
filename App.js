import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/stores/index';
import AppHomeScreen from './src/screens/AppHomeScreen';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppHomeScreen />
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
