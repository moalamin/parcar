import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { database } from './firebase';
import LoginScreen from './src/screens/LoginScreen';

export default class App extends React.Component {
  handlePress() {
    console.warn('you pressed the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginWrapper}>
          <Text style={styles.titleText}>ParCar</Text>
        </View>
        <View style={styles.formWrapper}>
          <LoginScreen />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 50,
    fontFamily: 'Damascus',
    textAlign: 'center'
  },
  loginWrapper: {
    marginTop: '45%'
  },
  formWrapper: {
    marginTop: 15,
    marginLeft: '5%',
    marginRight: '5%',
    borderWidth: 1,
    borderColor: 'rgba(37, 38, 34, .5)',
    borderRadius: 10,
    padding: 10
  }
});
