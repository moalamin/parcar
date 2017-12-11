import {
  ON_REGION_CHANGE,
  SET_REGION,
  SET_INSTRUCTION_MESSAGE,
  SET_MARKER,
  SET_USER_MARKER
} from "../../actions/map.actions";

let initialState = {
  markers: [],
  userMarker: [],
  instructionMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_REGION_CHANGE: {
      let newState = Object.assign({}, state, { region: action.payload });
      return newState;
    }
    case SET_REGION: {
      let newState = Object.assign({}, state, { region: action.payload });
      return newState;
    }
    case SET_INSTRUCTION_MESSAGE: {
      let newState = Object.assign({}, state, {
        instructionMessage: action.payload
      });
      return newState;
    }
    case SET_MARKER: {
      let newState = Object.assign({}, state, {
        markers: state.markers.concat({
          latlng: action.payload,
          title: 'Parking Spot'
        })
      });
      return newState;
    }
    case SET_USER_MARKER: {
      let newState = Object.assign({}, state, {
        userMarker: [{
          latlng: action.payload,
          key: 'user_marker_key',
          title: 'Your Location'
        }]
      })
      return newState
    }
    default: {
      return state;
    }
  }
};
