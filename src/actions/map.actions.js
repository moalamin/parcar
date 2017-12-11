import axios from "axios";
import config from "../../config";
import { getUserLocation } from "../utils/location";

export const ON_REGION_CHANGE = "ON_REGION_CHANGE";
export const onRegionChange = region => {
  return {
    type: ON_REGION_CHANGE,
    payload: region
  };
};

export const SET_REGION = "SET_REGION";
export const setRegion = region => {
  return {
    type: SET_REGION,
    payload: region
  };
};

export const SET_INSTRUCTION_MESSAGE = "SET_INSTRUCTION_MESSAGE";
export const setInstructionMessage = message => {
  return {
    type: SET_INSTRUCTION_MESSAGE,
    payload: message
  };
};

export const CHECK_DISTANCE_AND_MARK_SPOT = "CHECK_DISTANCE_AND_MARK_SPOT";
export const checkDistanceAndMarkSpot = coordinate => {
  const markerLat = coordinate.latitude;
  const markerLong = coordinate.longitude;
  return dispatch => {
    dispatch(setInstructionMessage("Validating..."));
    getUserLocation(location => {
      const userLat = location.coords.latitude;
      const userLong = location.coords.longitude;
      const requestEndpoint = `${config.gDistanceApiEndpoint}&origins=${
        userLat
      },${userLong}&destinations=${markerLat},${markerLong}&key=${
        config.gDistanceApiKey
      }`;
      console.log(requestEndpoint);
      axios
        .get(requestEndpoint)
        .then(response => {
          const distanceFromMarker =
            response.data.rows[0].elements[0].distance.value;
          if (distanceFromMarker <= 92) {
            dispatch(setMarker(coordinate));
            dispatch(setInstructionMessage("You marked a spot, thanks for helping your neighbors!"));
          } else {
            dispatch(setInstructionMessage("You must be within 300 feet the spot you are marking."));
          }
        })
        .catch(e => {
          console.log(e);
        });
    });
  };
};

export const SET_MARKER = "SET_MARKER";
export const setMarker = latlng => {
  return {
    type: SET_MARKER,
    payload: latlng
  };
};

export const MARK_MY_SPOT = 'MARK_MY_SPOT';
export const markMySpot = () => {
  return dispatch => {
    getUserLocation(location => {
      dispatch(setMarker({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }))
    })
  }
}

export const SET_USER_MARKER = 'SET_USER_MARKER';
export const setUserMarker = (location) => {
  return {
    type: SET_USER_MARKER,
    payload: location
  }
}
