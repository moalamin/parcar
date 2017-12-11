import axios from 'axios';
import {gDistanceApiKey, gDistanceApiEndpoint} from '../../config';
import {getUserLocation} from '../utils/location';

export const ON_REGION_CHANGE = 'ON_REGION_CHANGE';
export const onRegionChange = (region) => {
  return {
    type: ON_REGION_CHANGE,
    payload: region
  }
}

export const SET_REGION = 'SET_REGION';
export const setRegion = (region) => {
  return {
    type: SET_REGION,
    payload: region
  }
}

export const SET_INSTRUCTION_MESSAGE = 'SET_INSTRUCTION_MESSAGE';
export const setInstructionMessage = (message) => {
  return {
    type: SET_INSTRUCTION_MESSAGE,
    payload: message
  }
}

export const CHECK_DISTANCE_AND_MARK_SPOT = 'CHECK_DISTANCE_AND_MARK_SPOT';
export const checkDistanceAndMarkSpot = (coordinate) => {
  return (dispatch) => {
    dispatch(setInstructionMessage('Validating...'));
    getUserLocation(location=>{
      axios.get()
    })
  }
}

export const SET_MARKER = 'SET_MARKER';
export const setMarker = (latlng) => {
  return {
    type: SET_MARKER,
    payload: latlng
  }
}