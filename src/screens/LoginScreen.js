import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>email:</Text>
				<TextInput placeholder='email' />
				<Text>password:</Text>
				<TextInput secureTextEntry placeholder='email' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	
})