import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		console.warn(e)
	}

	render() {
		return (
			<View>
				<TextInput
					style={styles.formInput}
					placeholder="Email"
					onChangeText={this.handleChange}
				/>
				<TextInput 
						style={styles.formInput}
						secureTextEntry
						placeholder="Password"
						onChangeText={this.handleChange} />
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
	},
	formInput: { 
		borderBottomWidth: 1,
		height: 40,
		borderBottomColor: 'rgba(0,0,0,.3)'
	}
});
