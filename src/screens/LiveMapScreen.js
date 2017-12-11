import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  onRegionChange,
  setRegion,
  setInstructionMessage,
  checkDistanceAndMarkSpot,
  setMarker,
  markMySpot,
  setUserMarker
} from "../actions/map.actions";
import { getUserLocation } from "../utils/location";

class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
    this.props.actions.setInstructionMessage(
      "Mark a spot, drop a pin at your location or dismiss markers."
    );
  }
  componentDidMount() {
    getUserLocation(location => {
      this.props.actions.setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.009
      });
      this.props.actions.setUserMarker({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            width: "100%",
            height: "12%",
            backgroundColor: "coral",
            justifyContent: "center"
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {this.props.map.instructionMessage}
          </Text>
        </View>
        <MapView
          style={{ width: "100%", height: "80%" }}
          onLongPress={e => {
            this.props.actions.checkDistanceAndMarkSpot(
              e.nativeEvent.coordinate
            );
          }}
          onRegionChange={region => {
            this.props.actions.onRegionChange(region);
          }}
          region={this.props.map.region}
        >
          {this.props.map.markers.map((marker, index) => (
            <MapView.Marker
              key={index}
              draggable
              pinColor="green"
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
          {this.props.map.userMarker.map((marker, index) => (
            <MapView.Marker
              coordinate={marker.latlng}
              key={marker.key}
              draggable
              pinColor="blue"
              coordinate={marker.latlng}
              title={marker.title}
            />
          ))}
        </MapView>
        <View
          style={{
            width: "100%",
            height: "5%",
            backgroundColor: "green",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            style={{ width: "100%", height: "100%", justifyContent: "center" }}
            onPress={this.props.actions.markMySpot}
          >
            <Text style={{ textAlign: "center" }}>
              Drop a pin at my location.
            </Text>
          </TouchableOpacity>
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
    actions: bindActionCreators(
      {
        onRegionChange,
        setRegion,
        setInstructionMessage,
        checkDistanceAndMarkSpot,
        setMarker,
        markMySpot,
        setUserMarker
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveMapScreen);
