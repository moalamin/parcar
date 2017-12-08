import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { auth } from "../../firebase";
import { loginUser } from "../actions/auth.actions";

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmail(e) {
		this.setState({
			email: e
		});
	}

	handlePassword(e) {
		this.setState({
			password: e
		});
	}

	handleSubmit() {
		let email = this.state.email;
		let pass = this.state.password;
	}

	render() {
		return (
			<View style={{flex:1,justifyContent:'center'}}>
				<Text style={{textAlign:"center",fontSize:50}}>ParCar</Text>
				<View style={styles.formWrapper}>
					<TextInput
						style={styles.formInput}
						placeholder="Email"
						onChangeText={this.handleEmail}
					/>
					<TextInput
						style={styles.formInput}
						secureTextEntry
						placeholder="Password"
						onChangeText={this.handlePassword}
					/>
					<View style={{ marginTop: 20, alignItems: "center" }}>
						<TouchableOpacity
							onPress={this.handleSubmit}
							style={styles.submitButton}
						>
							<Text style={{ textAlign: "center", color: "#DED7C7" }}>
								Sign In
							</Text>
						</TouchableOpacity>
					</View>
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
		backgroundColor: "#2C592A",
		width: "70%",
		padding: 10,
		borderRadius: 10
	},
	formInput: {
		borderBottomWidth: 1,
		height: 40,
		borderBottomColor: "rgba(0,0,0,.3)"
	},
	formWrapper: {
		marginLeft: "5%",
		marginRight: "5%",
		borderWidth: 1,
		borderColor: "rgba(37, 38, 34, .5)",
		borderRadius: 10,
		padding: 10
	}
});

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(loginUser, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
