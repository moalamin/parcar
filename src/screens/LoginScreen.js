import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputBorderColorDefault: 'rgba(0,0,0,.1)'
		};
	}

	handleBlur() {}

	render() {
		return (
			<View>
				<TextInput
					style={{ 
						borderBottomColor: this.state.inputBorderColorDefault,
						borderBottomWidth: 1,
						height: 40 }}
					onFocus={() => null}
					placeholder="Email"
				/>
				<TextInput style={{ 
						borderBottomColor: this.state.inputBorderColorDefault,
						borderBottomWidth: 1,
						height: 40 }}
						secureTextEntry
						placeholder="Password" />
				<View style={{ marginTop: 20, alignItems: 'center' }}>
					<TouchableOpacity style={styles.submitButton}>
						<Text style={{ textAlign: 'center', color: '#DED7C7' }}>Sign In</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	formInput: {
		borderBottomWidth: 1,
		height: 40
	},
	submitButton: {
		backgroundColor: '#2C592A',
		width: '70%',
		padding: 10,
		borderRadius: 10
	}
});
