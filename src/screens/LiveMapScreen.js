import React, { Component } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0822,
      longitudeDelta: 0.0321
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
          latitudeDelta: 0.0822,
          longitudeDelta: 0.0321
        }
      });
    });
  }
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end'  }}>
        <View style={{width: '100%', height: '7%', backgroundColor: 'coral'}}>
          <Text style={{textAlign: 'center'}}>Information text here...</Text>
        </View>
        <MapView
          style={{ width: "100%", height: "90%"}}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChange={this.onRegionChange}
          region={this.state.region}
        />
      </View>
    );
  }
}
