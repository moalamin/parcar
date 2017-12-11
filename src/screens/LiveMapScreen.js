import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onRegionChange, setRegion } from "../actions/map.actions";
import { getUserLocation } from "../utils/location";

class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getUserLocation(location=>{
      this.props.actions.setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: .005,
        longitudeDelta: .009 
      })
    })
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
          region={this.props.map.region}
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
