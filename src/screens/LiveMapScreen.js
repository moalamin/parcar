import React, { Component } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 40.7128,
        longitude: -74.0060,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location, err) => {
      console.log(location);
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView 
          style={{ width: "100%", height: "100%" }} 
          initialRegion={this.state.region}/>
      </View>
    );
  }
}
