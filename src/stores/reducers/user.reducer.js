import {SET_USER} from '../../actions/auth.actions'

const initialState = {
  user_data: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      console.log("setting user...")
      return state
    }
    default:
      return state;
  }
};
