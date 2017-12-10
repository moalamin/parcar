import React, { Component } from "react";
import { View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
    console.log(this.props);
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

export default connect(mapStateToProps)(AppHomeScreen);
