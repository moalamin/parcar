import {SET_USER} from '../../actions/auth.actions'

const initialState = {
  user_data: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const newState = Object.assign({}, state, {user_data: action.payload})
      return newState;
    }
    default: {
      return state;
    }
  }
};
