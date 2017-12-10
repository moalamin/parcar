import React, { Component } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
    let lat = null;
    let long = null;
    navigator.geolocation.getCurrentPosition((location)=>{
      console.log(location)
      lat=location.coords.latitude;
      long=location.coords.longitude;
    });
    this.state = {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView 
          style={{ width: "100%", height: "100%" }} 
          region={this.state.region}/>
      </View>
    );
  }
}
