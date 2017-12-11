import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import MapView from "react-native-maps";

export default class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.markSpot = this.markSpot.bind(this);
  }
  componentDidMount() {
    let that = this;
    navigator.geolocation.getCurrentPosition(location => {
      that.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0091
        }
      });
    });
  }
  onRegionChange(region) {
    this.setState({ region });
  }
  markSpot(e) {
    console.log(e.nativeEvent.coordinate.latitude);
    let lat = e.nativeEvent.coordinate.latitude;
    let long = e.nativeEvent.coordinate.longitude;
    let that = this;
    that.setState(prevState => {
      let currentSpot = Object.assign({}, prevState, {
        markers: prevState.markers.concat({
          latlng: {
            latitude: lat,
            longitude: long
          }
        })
      });
      return currentSpot;
    });
    navigator.geolocation.getCurrentPosition(location => {});
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            width: "100%",
            height: "7%",
            backgroundColor: "coral",
            justifyContent: "center"
          }}
        >
          <Text style={{ textAlign: "center" }}>Information text here...</Text>
        </View>
        <MapView
          style={{ width: "100%", height: "85%" }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChange={this.onRegionChange}
          region={this.state.region}
          onLongPress={e => {
            this.markSpot(e);
          }}
        >
          {this.state.markers.map((marker, index) => (
            <MapView.Marker
              key={index}
              draggable
              coordinate={marker.latlng}
              title={"Current Postion"}
              description={"This is the users current position"}
            />
          ))}
        </MapView>
        <View
          style={{
            width: "100%",
            height: "5%",
            backgroundColor: "coral",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={{ backgroundColor: "rgba(0, 200, 100, .5)", width: "80%" }}
          >
            <Text style={{ textAlign: "center" }}>Mark a Spot</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
