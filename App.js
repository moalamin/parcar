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
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>ParCar</Text>
        </View>
        <View>
          <LoginScreen />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DED7C7',
    alignItems: 'center',
  },
  titleWrapper: {
    marginTop: 30
  },
  titleText: {
    fontSize: 50,
  }
});
