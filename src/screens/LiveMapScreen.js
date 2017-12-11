import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  onRegionChange,
  setRegion,
  setInstructionMessage,
  checkDistanceAndMarkSpot,
  setMarker
} from "../actions/map.actions";
import { getUserLocation } from "../utils/location";

class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
    this.props.actions.setInstructionMessage(
      "Press and hold a location to mark a spot or select pins to dismiss. You must be within 200 feet of markers."
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
          style={{ width: "100%", height: "85%" }}
          onLongPress={e => {
            this.props.actions.setMarker(e.nativeEvent.coordinate);
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChange={region => {
            this.props.actions.onRegionChange(region);
          }}
          region={this.props.map.region}
        >
          {this.props.map.markers.map((marker, index) => (
            <MapView.Marker
              key={index}
              draggable
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
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
        setMarker
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveMapScreen);
