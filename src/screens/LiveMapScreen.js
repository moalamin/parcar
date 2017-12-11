import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onRegionChange, setRegion } from "../actions/map.actions";

class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(postion => {
      let lat = postion.coords.latitude;
      let long = postion.coords.longitude;
      console.log('lat', lat, 'long', long)
      this.props.actions.setRegion({
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      });
    });
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
          onRegionChange={region => {
            this.props.actions.onRegionChange(region);
          }}
          region={
            this.props.map.region
              ? this.props.map.region
              : {
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }
          }
        />
        <View
          style={{
            width: "100%",
            height: "5%",
            backgroundColor: "coral",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableHighlight style={{ width: "80%" }}>
            <Text style={{ textAlign: "center" }}>Mark a Spot</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ onRegionChange, setRegion }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveMapScreen);
