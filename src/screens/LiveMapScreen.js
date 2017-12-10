import React, { Component } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }
  componentDidMount(){
    let that = this;
    navigator.geolocation.getCurrentPosition(location => {
      console.log(location)
      that.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      });
    });
  }
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center'  }}>
        <MapView
          style={{ width: "100%", height: "80%"}}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChange={this.onRegionChange}
          region={this.state.region}
        />
      </View>
    );
  }
}
