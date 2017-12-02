import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { database, auth } from './firebase';

export default class App extends React.Component {
  handlePress() {
    console.warn('you pressed the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello There!</Text>
        <Button onPress={ () => this.handlePress() } styles={styles.button} title="Sing In" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: .5,
    borderColor: 'black'
  }
});
