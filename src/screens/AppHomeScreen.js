import React, { Component } from "react";
import { View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {checkStorageUser} from '../actions/auth.actions';
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import LiveMapScreen from "./LiveMapScreen";

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Log In"
    }
  },
  Register: {
    screen: RegistrationScreen,
    navigationOptions: {
      headerTitle: "Register"
    }
  }
});

const RootTabs = TabNavigator({
  LiveMap: {
    screen: LiveMapScreen
  }
});

class AppHomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.checkStorageUser();
  }
  render() {
    return (
      <View style={{flex: 1}}>{this.props.user.user_data ? <RootTabs /> : <RootNavigator />}</View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({checkStorageUser}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHomeScreen);
