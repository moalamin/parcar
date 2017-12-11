import {ON_REGION_CHANGE} from '../../actions/map.actions';

let initialState = {
  markers: [],
  region: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_REGION_CHANGE: {
      let newState = Object.assign({}, state, {region: action.payload})
      return newState
    }
    default: {
      return state;
    }
  }
};
