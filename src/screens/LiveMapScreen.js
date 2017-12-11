import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import MapView from "react-native-maps";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onRegionChange} from '../actions/map.actions'

class LiveMapScreen extends Component {
  constructor(props) {
    super(props);
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
          onRegionChange={(region)=>{this.props.actions.onRegionChange(region)}}
        >
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
            style={{ width: "80%" }}
          >
            <Text style={{ textAlign: "center" }}>Mark a Spot</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    map: state.map
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({onRegionChange}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveMapScreen);