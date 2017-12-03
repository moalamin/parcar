import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { database, auth, googleAuthProvider } from './firebase';
import LoginScreen from './src/screens/LoginScreen';

export default class App extends React.Component {
  handlePress() {
    console.warn('you pressed the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <Text style={styles.titleText}>ParCar</Text>
        </View>
        <LoginScreen />
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
  formWrapper: {
    paddingTop: '35%'
  }
});
