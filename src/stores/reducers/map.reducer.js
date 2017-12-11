import {ON_REGION_CHANGE, SET_REGION} from '../../actions/map.actions';

let initialState = {
  markers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_REGION_CHANGE: {
      let newState = Object.assign({}, state, {region: action.payload})
      console.log('region change', newState)
      return newState
    }
    case SET_REGION: {
      console.log('region set paylaod', action.payload)
      let newState = Object.assign({}, state, {region: action.payload})
      console.log('region set', newState)
      return newState;
    }
    default: {
      return state;
    }
  }
};
