import {ON_REGION_CHANGE, SET_REGION} from '../../actions/map.actions';

let initialState = {
  markers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_REGION_CHANGE: {
      let newState = Object.assign({}, state, {region: action.payload})
      return newState
    }
    case SET_REGION: {
      let newState = Object.assign({}, state, {region: action.payload})
      return newState;
    }
    default: {
      return state;
    }
  }
};
